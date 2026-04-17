"""Backend tests for SheStylish /api/orders endpoints - Iteration 3"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

VALID_ITEMS = [
    {
        "id": "royal-noir",
        "name": "Royal Noir",
        "price": 120,
        "size": "M",
        "fabric": "House Silk",
        "qty": 2
    }
]


class TestOrdersCreate:
    """POST /api/orders tests"""

    def test_create_order_valid(self):
        payload = {"items": VALID_ITEMS, "subtotal": 240, "status": "booked"}
        r = requests.post(f"{BASE_URL}/api/orders", json=payload)
        assert r.status_code == 200, f"Expected 200, got {r.status_code}: {r.text}"
        data = r.json()
        assert "id" in data
        assert "created_at" in data
        assert data["status"] == "booked"
        assert data["source"] == "website"
        assert data["subtotal"] == 240
        assert len(data["items"]) == 1
        assert data["items"][0]["size"] == "M"

    def test_create_order_no_raw_id(self):
        payload = {"items": VALID_ITEMS, "subtotal": 120, "status": "booked"}
        r = requests.post(f"{BASE_URL}/api/orders", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert "_id" not in data, "_id (MongoDB raw field) should not be in response"

    def test_create_order_empty_items_returns_400(self):
        payload = {"items": [], "subtotal": 0, "status": "booked"}
        r = requests.post(f"{BASE_URL}/api/orders", json=payload)
        assert r.status_code == 400, f"Expected 400, got {r.status_code}"

    def test_create_order_abandoned_status(self):
        payload = {"items": VALID_ITEMS, "subtotal": 120, "status": "abandoned"}
        r = requests.post(f"{BASE_URL}/api/orders", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["status"] == "abandoned"

    def test_create_order_created_at_is_iso_string(self):
        payload = {"items": VALID_ITEMS, "subtotal": 120, "status": "booked"}
        r = requests.post(f"{BASE_URL}/api/orders", json=payload)
        assert r.status_code == 200
        # created_at should be serializable as a string in response
        data = r.json()
        assert isinstance(data["created_at"], str)


class TestOrdersList:
    """GET /api/orders tests"""

    def test_list_orders_returns_list(self):
        r = requests.get(f"{BASE_URL}/api/orders")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)

    def test_list_orders_limit(self):
        r = requests.get(f"{BASE_URL}/api/orders?limit=2")
        assert r.status_code == 200
        data = r.json()
        assert len(data) <= 2

    def test_list_orders_status_filter(self):
        # Create a booked order to ensure at least one exists
        requests.post(f"{BASE_URL}/api/orders", json={"items": VALID_ITEMS, "subtotal": 120, "status": "booked"})
        r = requests.get(f"{BASE_URL}/api/orders?status=booked")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        for o in data:
            assert o["status"] == "booked"

    def test_list_orders_most_recent_first(self):
        r = requests.get(f"{BASE_URL}/api/orders")
        assert r.status_code == 200
        data = r.json()
        if len(data) >= 2:
            # created_at should be descending
            assert data[0]["created_at"] >= data[1]["created_at"]

    def test_list_orders_no_raw_id(self):
        r = requests.get(f"{BASE_URL}/api/orders")
        assert r.status_code == 200
        data = r.json()
        for o in data:
            assert "_id" not in o


class TestOrdersSummary:
    """GET /api/orders/summary tests"""

    def test_summary_structure(self):
        r = requests.get(f"{BASE_URL}/api/orders/summary")
        assert r.status_code == 200
        data = r.json()
        assert "total" in data
        assert "booked" in data
        assert "abandoned" in data
        assert "revenue_omr" in data

    def test_summary_revenue_only_booked(self):
        # Get summary before
        r_before = requests.get(f"{BASE_URL}/api/orders/summary")
        before = r_before.json()
        
        # Create a booked order
        requests.post(f"{BASE_URL}/api/orders", json={"items": VALID_ITEMS, "subtotal": 999, "status": "booked"})
        
        # Get summary after
        r_after = requests.get(f"{BASE_URL}/api/orders/summary")
        after = r_after.json()
        
        assert after["booked"] == before["booked"] + 1
        assert abs(after["revenue_omr"] - (before["revenue_omr"] + 999)) < 0.01

    def test_summary_abandoned_does_not_increase_revenue(self):
        r_before = requests.get(f"{BASE_URL}/api/orders/summary")
        before = r_before.json()
        
        requests.post(f"{BASE_URL}/api/orders", json={"items": VALID_ITEMS, "subtotal": 555, "status": "abandoned"})
        
        r_after = requests.get(f"{BASE_URL}/api/orders/summary")
        after = r_after.json()
        
        assert after["abandoned"] == before["abandoned"] + 1
        # revenue should NOT increase
        assert abs(after["revenue_omr"] - before["revenue_omr"]) < 0.01
