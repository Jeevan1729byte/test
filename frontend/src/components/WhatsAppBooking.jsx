import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from "../lib/brand";

const gccCountries = [
  { name: "Oman", flag: "🇴🇲" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Kuwait", flag: "🇰🇼" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Bahrain", flag: "🇧🇭" },
];

export const WhatsAppBooking = () => {
  return (
    <section
      id="booking"
      className="relative py-24 md:py-36 bg-[#0d0c0b]"
      data-testid="booking-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative border border-[#D4AF37]/20 bg-gradient-to-br from-[#121110] via-[#0f0e0c] to-[#0A0908] overflow-hidden"
        >
          {/* Corner marks */}
          <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#D4AF37]/70" />
          <span className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#D4AF37]/70" />
          <span className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#D4AF37]/70" />
          <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#D4AF37]/70" />

          {/* Soft gold glow */}
          <div
            aria-hidden
            className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: "rgba(212,175,55,0.08)" }}
          />

          <div className="relative p-8 md:p-14 lg:p-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-7">
              <p className="overline mb-5">— Private Booking</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-white">
                Book your abaya <br />
                in a single <span className="italic text-[#D4AF37]">message.</span>
              </h2>

              <p className="mt-8 max-w-lg text-white/60 text-base leading-relaxed">
                No forms. No accounts. Just a WhatsApp message. We reply within
                the hour — in English or Arabic — and guide you through sizing,
                fabric, and delivery across the GCC.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#D4AF37] text-[#0A0908] text-xs tracking-[0.3em] uppercase hover:bg-white transition-all duration-500"
                  data-testid="booking-whatsapp-primary"
                >
                  <FaWhatsapp className="text-lg" />
                  Book on WhatsApp
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-5 border border-white/20 text-xs tracking-[0.3em] uppercase text-white/80 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500"
                  data-testid="booking-call-cta"
                >
                  +968 9123 4567
                </a>
              </div>

              <p className="mt-6 text-[0.7rem] tracking-[0.3em] uppercase text-white/40">
                Reply time · typically within 1 hour
              </p>
            </div>

            {/* Right: GCC flags grid */}
            <div className="lg:col-span-5">
              <p className="overline mb-8">— Delivering Across the GCC</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {gccCountries.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 px-4 py-4 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/[0.02] transition-all duration-500"
                    data-testid={`gcc-${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="text-2xl leading-none" aria-hidden>
                      {c.flag}
                    </span>
                    <span className="text-xs tracking-[0.15em] text-white/80 uppercase">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
                <span className="h-px flex-1 bg-white/10" />
                <span className="text-[0.65rem] tracking-[0.4em] uppercase text-white/40">
                  Discreet Delivery
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppBooking;
