import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_LINK } from "../lib/brand";
import { IMG } from "../lib/productImages";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 md:pt-32 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Soft gold glows */}
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 w-[560px] h-[560px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(212,175,55,0.08)" }}
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 w-[320px] h-[320px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(212,175,55,0.05)" }}
      />

      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-16 lg:pb-24">
        {/* Left: Typographic statement */}
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="overline mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#D4AF37]/60 inline-block" />
            Oman · Serving the GCC
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.95] tracking-tight font-light text-white"
          >
            Editorial
            <br />
            <span className="italic font-light text-[#D4AF37]">elegance,</span>
            <br />
            draped in <span className="italic">noir.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3, duration: 0.9 }}
            className="mt-8 max-w-xl font-body text-base md:text-lg text-white/60 leading-relaxed"
          >
            Hand-finished abayas for the modern woman of the Gulf. Made with
            devotion in Muscat, delivered across the GCC — booked quietly through
            a single message on WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <a
              href="#collections"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#D4AF37] text-[#D4AF37] text-xs tracking-[0.3em] uppercase hover:bg-[#D4AF37] hover:text-[#0A0908] transition-all duration-500"
              data-testid="hero-view-collections"
            >
              Shop Collections
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-4 text-xs tracking-[0.3em] uppercase text-white/70 hover:text-[#D4AF37] transition-colors"
              data-testid="hero-whatsapp-cta"
            >
              <FaWhatsapp className="text-base" />
              Enquire on WhatsApp
            </a>
          </motion.div>

          {/* Meta line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 1 }}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.7rem] tracking-[0.25em] uppercase text-white/40"
          >
            <span>Made to Order</span>
            <span className="h-[3px] w-[3px] rounded-full bg-[#D4AF37]/70" />
            <span>GCC Delivery</span>
            <span className="h-[3px] w-[3px] rounded-full bg-[#D4AF37]/70" />
            <span>Cash / Bank Transfer</span>
          </motion.div>
        </div>

        {/* Right: Hero image */}
        <div className="lg:col-span-5 relative h-[520px] md:h-[620px] lg:h-[760px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.0, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full h-full border border-[#D4AF37]/15 overflow-hidden bg-[#121110]">
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#D4AF37]/70 z-20" />
              <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#D4AF37]/70 z-20" />
              <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#D4AF37]/70 z-20" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#D4AF37]/70 z-20" />

              {/* Image */}
              <img
                src={IMG.hero}
                alt="SheStylish luxury abaya"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="hero-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/70 via-transparent to-[#0A0908]/20" />

              {/* Vertical overline */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center z-10">
                <span className="text-[0.65rem] tracking-[0.4em] uppercase text-white/70 whitespace-nowrap drop-shadow-md">
                  Signature Silhouette — 2025
                </span>
              </div>

              {/* Price tag */}
              <div className="absolute bottom-6 right-6 text-right z-10">
                <p className="overline mb-1">From</p>
                <p className="font-display text-3xl text-white drop-shadow-lg">OMR 120</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-white/40"
      >
        <span className="text-[0.65rem] tracking-[0.4em] uppercase">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
