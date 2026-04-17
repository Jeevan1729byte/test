import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { WHATSAPP_NUMBER } from "../lib/brand";

const CartContext = createContext(null);

const STORAGE_KEY = "shestylish_cart_v1";

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const addItem = (product, { size, fabric } = {}) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.size === (size || "Custom") && i.fabric === (fabric || "House Silk")
      );
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: size || "Custom",
          fabric: fabric || "House Silk",
          qty: 1,
        },
      ];
    });
    setIsOpen(true);
  };

  const updateQty = (lineId, qty) => {
    setItems((prev) =>
      prev
        .map((i) =>
          lineKey(i) === lineId ? { ...i, qty: Math.max(0, qty) } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (lineId) => {
    setItems((prev) => prev.filter((i) => lineKey(i) !== lineId));
  };

  const clear = () => setItems([]);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const count = useMemo(
    () => items.reduce((s, i) => s + i.qty, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((s, i) => s + i.qty * i.price, 0),
    [items]
  );

  // Build a beautifully formatted WhatsApp order message
  const buildOrderMessage = () => {
    if (items.length === 0) return "Hello She Stylish 🌟 I would like to book an abaya please";
    const lines = [];
    lines.push("Hello She Stylish 🌟");
    lines.push("");
    lines.push("I would like to place the following order:");
    lines.push("");
    items.forEach((i, idx) => {
      lines.push(
        `${idx + 1}. ${i.name} × ${i.qty} — OMR ${i.price * i.qty}`
      );
      lines.push(`   Size: ${i.size} · Fabric: ${i.fabric}`);
    });
    lines.push("");
    lines.push(`Subtotal: OMR ${subtotal}`);
    lines.push("");
    lines.push("Please confirm availability, final price & delivery date. Thank you 🤍");
    return lines.join("\n");
  };

  const checkoutUrl = useMemo(() => {
    const msg = buildOrderMessage();
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, subtotal]);

  const value = {
    items,
    isOpen,
    open,
    close,
    setIsOpen,
    addItem,
    updateQty,
    removeItem,
    clear,
    count,
    subtotal,
    checkoutUrl,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const lineKey = (i) => `${i.id}__${i.size}__${i.fabric}`;
