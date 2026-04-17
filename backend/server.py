from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Literal
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ---------------------------------------------------------------------------
# Status Check (existing)
# ---------------------------------------------------------------------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


# ---------------------------------------------------------------------------
# Orders  (SheStylish WhatsApp booking capture)
# ---------------------------------------------------------------------------
class OrderItem(BaseModel):
    id: str
    name: str
    price: float
    size: str = "Custom"
    fabric: str = "House Silk"
    qty: int = Field(ge=1, default=1)


class OrderCreate(BaseModel):
    items: List[OrderItem]
    subtotal: float
    status: Literal["booked", "abandoned"] = "booked"
    source: str = "website"
    customer_name: Optional[str] = None
    customer_phone: Optional[str] = None
    customer_country: Optional[str] = None
    note: Optional[str] = None


class Order(OrderCreate):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.post("/orders", response_model=Order)
async def create_order(payload: OrderCreate):
    if not payload.items:
        raise HTTPException(status_code=400, detail="Order must contain at least one item.")

    order = Order(**payload.model_dump())
    doc = order.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.orders.insert_one(doc)
    logger.info(
        "Order %s captured: %d items · OMR %s · status=%s",
        order.id, len(order.items), order.subtotal, order.status,
    )
    return order


@api_router.get("/orders", response_model=List[Order])
async def list_orders(limit: int = 100, status: Optional[str] = None):
    query = {"status": status} if status else {}
    orders = await db.orders.find(query, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for o in orders:
        if isinstance(o.get('created_at'), str):
            o['created_at'] = datetime.fromisoformat(o['created_at'])
    return orders


@api_router.get("/orders/summary")
async def orders_summary():
    total = await db.orders.count_documents({})
    booked = await db.orders.count_documents({"status": "booked"})
    abandoned = await db.orders.count_documents({"status": "abandoned"})
    pipeline = [
        {"$match": {"status": "booked"}},
        {"$group": {"_id": None, "revenue": {"$sum": "$subtotal"}}},
    ]
    agg = await db.orders.aggregate(pipeline).to_list(1)
    revenue = agg[0]["revenue"] if agg else 0
    return {
        "total": total,
        "booked": booked,
        "abandoned": abandoned,
        "revenue_omr": revenue,
    }


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
