import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X, Minus, Plus, Trash2, ArrowUpRight, ShoppingBag } from "lucide-react";
import { useCart, lineKey } from "../context/CartContext";

export const Cart = () => {
  const { isOpen, close, items, updateQty, removeItem, clear, subtotal, checkoutUrl, captureOrder } = useCart();

  const handleBookClick = (e) => {
    // Fire-and-forget order capture — does not block navigation.
    // The anchor still opens WhatsApp in a new tab.
    try { captureOrder("booked"); } catch (_) { /* noop */ }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
            data-testid="cart-overlay"
          />

          {/* Drawer */}
          <motion.aside
            key="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.77, 0, 0.175, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[95] w-full sm:w-[440px] md:w-[500px] bg-[#0A0908] border-l border-[#D4AF37]/20 flex flex-col"
            data-testid="cart-drawer"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-white/5">
              <div>
                <p className="overline mb-1">— Your Selection</p>
                <h3 className="font-display text-2xl md:text-3xl font-light">
                  The <span className="italic text-[#D4AF37]">Atelier</span> Cart
                </h3>
              </div>
              <button
                onClick={close}
                className="p-2 text-white/70 hover:text-[#D4AF37] transition-colors"
                aria-label="Close cart"
                data-testid="cart-close"
              >
                <X size={22} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                    <ShoppingBag className="text-[#D4AF37]/70" size={22} strokeWidth={1.2} />
                  </div>
                  <p className="font-display italic text-2xl text-white/80 mb-3">Your cart is quiet.</p>
                  <p className="text-sm text-white/50 max-w-xs">
                    Add a piece from our collections and we'll prepare your WhatsApp order.
                  </p>
                  <button
                    onClick={close}
                    className="mt-8 text-[0.7rem] tracking-[0.3em] uppercase px-6 py-3 border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0908] transition-all duration-500"
                    data-testid="cart-browse-cta"
                  >
                    Browse Collections
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => {
                    const key = lineKey(item);
                    return (
                      <li
                        key={key}
                        className="flex gap-4 pb-6 border-b border-white/5 last:border-0"
                        data-testid={`cart-item-${item.id}`}
                      >
                        {/* Image */}
                        <div className="w-20 h-28 md:w-24 md:h-32 shrink-0 overflow-hidden bg-[#121110] border border-[#D4AF37]/15">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h4 className="font-display text-xl text-white leading-tight">{item.name}</h4>
                              <p className="mt-1 text-[0.65rem] tracking-[0.25em] uppercase text-white/40">
                                {item.size} · {item.fabric}
                              </p>
                            </div>
                            <button
                              onClick={() => removeItem(key)}
                              className="text-white/40 hover:text-[#D4AF37] p-1 transition-colors"
                              aria-label="Remove item"
                              data-testid={`cart-remove-${item.id}`}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>

                          <div className="mt-auto pt-3 flex items-center justify-between gap-3">
                            {/* Qty */}
                            <div className="flex items-center border border-white/10">
                              <button
                                onClick={() => updateQty(key, item.qty - 1)}
                                className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                                aria-label="Decrease"
                                data-testid={`cart-qty-dec-${item.id}`}
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-8 text-center text-sm tabular-nums">{item.qty}</span>
                              <button
                                onClick={() => updateQty(key, item.qty + 1)}
                                className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:bg-white/5 transition-all"
                                aria-label="Increase"
                                data-testid={`cart-qty-inc-${item.id}`}
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            {/* Price */}
                            <p className="font-display text-lg text-[#D4AF37]" data-testid={`cart-line-total-${item.id}`}>
                              OMR {item.price * item.qty}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-white/5 px-6 md:px-8 py-6 space-y-5 bg-[#0d0c0b]">
                <div className="flex items-center justify-between">
                  <span className="overline">Subtotal</span>
                  <span className="font-display text-2xl text-white" data-testid="cart-subtotal">
                    OMR {subtotal}
                  </span>
                </div>
                <p className="text-[0.65rem] leading-relaxed text-white/40">
                  Final pricing, tailoring cost and GCC delivery confirmed on WhatsApp. No payment taken on this site.
                </p>
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleBookClick}
                  className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4AF37] text-[#0A0908] text-xs tracking-[0.3em] uppercase hover:bg-white transition-all duration-500"
                  data-testid="cart-book-whatsapp"
                >
                  <FaWhatsapp className="text-base" />
                  Book Order on WhatsApp
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <button
                  onClick={clear}
                  className="w-full text-center text-[0.65rem] tracking-[0.3em] uppercase text-white/40 hover:text-white/70 py-2 transition-colors"
                  data-testid="cart-clear"
                >
                  Clear Selection
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
