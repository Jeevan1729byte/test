import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_LINK } from "../lib/brand";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 group"
      data-testid="floating-whatsapp-btn"
    >
      {/* Pulsing ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#D4AF37]/40 pulse-ring"
      />
      <span
        aria-hidden
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#D4AF37] text-[#0A0908] shadow-[0_10px_40px_rgba(212,175,55,0.4)] group-hover:bg-white transition-colors duration-500"
      >
        <FaWhatsapp className="text-2xl md:text-3xl" />
      </span>
      {/* Label */}
      <span className="absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 hidden md:flex items-center px-4 py-2 bg-[#0A0908] border border-[#D4AF37]/30 text-[0.65rem] tracking-[0.3em] uppercase text-[#D4AF37] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        Book Now
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
