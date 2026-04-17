import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Menu, X, ShoppingBag } from "lucide-react";
import { INSTAGRAM_LINK } from "../lib/brand";
import { useCart } from "../context/CartContext";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, open: openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Collections", href: "#collections" },
    { label: "How It Works", href: "#how" },
    { label: "Reviews", href: "#reviews" },
    { label: "Booking", href: "#booking" },
  ];

  const CartButton = ({ className = "", testId = "nav-cart-btn" }) => (
    <button
      onClick={openCart}
      className={`relative inline-flex items-center gap-2 text-white/80 hover:text-[#D4AF37] transition-colors ${className}`}
      aria-label="Open cart"
      data-testid={testId}
    >
      <ShoppingBag size={20} strokeWidth={1.3} />
      {count > 0 && (
        <span
          className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-[#D4AF37] text-[#0A0908] text-[0.6rem] tracking-tight font-medium"
          data-testid="nav-cart-count"
        >
          {count}
        </span>
      )}
    </button>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0A0908]/75 border-b border-white/5"
          : "backdrop-blur-sm bg-transparent"
      }`}
      data-testid="site-nav"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 h-[72px] md:h-[84px] flex items-center justify-between gap-6">
        {/* Left: Logo + Instagram */}
        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="#top"
            className="font-display text-2xl md:text-3xl font-light tracking-wide shrink-0"
            data-testid="nav-logo"
          >
            <span className="italic gold-shimmer">She</span>
            <span className="text-white">Stylish</span>
          </a>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors group pl-6 border-l border-white/10"
            data-testid="nav-instagram-link"
          >
            <FaInstagram className="text-base group-hover:scale-110 transition-transform" />
            <span className="text-[0.65rem] tracking-[0.25em] uppercase">@shestylish_designer</span>
          </a>
        </div>

        {/* Right: Desktop links */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="link-underline text-[0.7rem] tracking-[0.3em] uppercase text-white/70 hover:text-white transition-colors"
              data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="xl:hidden text-white/70 hover:text-[#D4AF37] transition-colors"
            data-testid="nav-instagram-link-lg"
          >
            <FaInstagram className="text-lg" />
          </a>
          <CartButton className="ml-1" />
        </nav>

        {/* Mobile: IG + Cart + Hamburger */}
        <div className="flex lg:hidden items-center gap-5">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[#D4AF37] transition-colors"
            data-testid="nav-instagram-link-mobile"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl" />
          </a>
          <CartButton testId="nav-cart-btn-mobile" />
          <button
            onClick={() => setOpen(!open)}
            className="text-white/80 p-2"
            aria-label="Menu"
            data-testid="nav-menu-toggle"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 border-t border-white/5 bg-[#0A0908]/95 backdrop-blur-xl ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
        data-testid="nav-mobile-drawer"
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.25em] uppercase text-white/80 hover:text-[#D4AF37] transition-colors"
              data-testid={`nav-mobile-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); openCart(); }}
            className="mt-2 inline-flex items-center justify-center gap-2 text-xs tracking-[0.3em] uppercase px-5 py-3 border border-[#D4AF37]/60 text-[#D4AF37]"
            data-testid="nav-mobile-cart-cta"
          >
            <ShoppingBag size={14} />
            View Cart {count > 0 && `(${count})`}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
