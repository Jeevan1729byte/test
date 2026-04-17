import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { INSTAGRAM_LINK, WHATSAPP_LINK } from "../lib/brand";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] tracking-[0.3em] uppercase px-5 py-2.5 border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0908] transition-all duration-500"
            data-testid="nav-book-cta"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile: hamburger + IG */}
        <div className="flex lg:hidden items-center gap-4">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80"
            data-testid="nav-instagram-link-mobile"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl" />
          </a>
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
          open ? "max-h-[420px]" : "max-h-0"
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
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block text-center text-xs tracking-[0.3em] uppercase px-5 py-3 border border-[#D4AF37]/60 text-[#D4AF37]"
            data-testid="nav-mobile-book-cta"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
