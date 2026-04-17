import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { INSTAGRAM_LINK, WHATSAPP_LINK, WHATSAPP_NUMBER } from "../lib/brand";

export const Footer = () => {
  return (
    <footer className="relative pt-24 md:pt-32 pb-10 bg-[#0A0908] border-t border-white/5" data-testid="site-footer">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand blurb */}
          <div className="md:col-span-5">
            <p className="overline mb-6">— The House</p>
            <p className="text-white/60 text-base leading-relaxed max-w-sm">
              SheStylish is a luxury abaya atelier based in Muscat, Oman —
              crafting made-to-order pieces for women across the Gulf since our
              quiet beginning.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <p className="overline mb-6">— Explore</p>
            <ul className="space-y-4">
              {["Collections", "How It Works", "Reviews", "Booking"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-sm text-white/70 hover:text-[#D4AF37] transition-colors"
                    data-testid={`footer-link-${l.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="overline mb-6">— Speak to Us</p>
            <div className="space-y-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-[#D4AF37] transition-colors"
                data-testid="footer-whatsapp"
              >
                <FaWhatsapp /> <span className="text-sm tracking-wide">+968 9123 4567</span>
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-[#D4AF37] transition-colors"
                data-testid="footer-instagram"
              >
                <FaInstagram /> <span className="text-sm tracking-wide">@shestylish_designer</span>
              </a>
              <p className="text-sm text-white/50 pt-2">
                Muscat, Sultanate of Oman <br />
                Serving Oman · UAE · Saudi · Kuwait · Qatar · Bahrain
              </p>
            </div>
          </div>
        </div>

        {/* Massive brand name */}
        <div className="mt-20 md:mt-28 pb-4 overflow-hidden">
          <p
            aria-hidden
            className="font-display italic text-[17vw] md:text-[15vw] leading-[0.8] tracking-tighter text-white/[0.06] whitespace-nowrap select-none"
          >
            SheStylish · SheStylish
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[0.65rem] tracking-[0.3em] uppercase text-white/35">
          <p>© {new Date().getFullYear()} SheStylish · Muscat · All Rights Reserved</p>
          <p className="flex items-center gap-3">
            <span>Designed in Noir &amp; Gold</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/70" />
            <span>Made in Oman</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
