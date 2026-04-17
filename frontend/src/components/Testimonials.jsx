import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    quote:
      "Tried three ateliers across the Gulf. SheStylish was the only one that delivered an abaya that actually fit like couture. Worth every rial.",
    name: "Aisha Al-Harthi",
    location: "Muscat, Oman",
  },
  {
    quote:
      "Booked through WhatsApp on a Tuesday, wore it to a family wedding in Abu Dhabi on Saturday. The gold embroidery is breathtaking in person.",
    name: "Mariam Al-Maktoum",
    location: "Dubai, UAE",
  },
  {
    quote:
      "Elegant, discreet, and deeply thoughtful. The owner understood exactly what I wanted from a single voice note. Rare in this industry.",
    name: "Noura Al-Sabah",
    location: "Kuwait City, Kuwait",
  },
  {
    quote:
      "The Midnight Bloom is a piece of art. I've already ordered my second. Packaging arrived like a luxury house from Paris.",
    name: "Fatima Al-Khalifa",
    location: "Manama, Bahrain",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="reviews"
      className="relative py-24 md:py-36 overflow-hidden"
      data-testid="testimonials-section"
    >
      {/* Subtle gold glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(212,175,55,0.05)" }}
      />

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="overline mb-5">— Voices from the GCC</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-white">
            Worn by women <br className="hidden md:block" />
            who <span className="italic text-[#D4AF37]">choose quietly.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 md:p-10 border border-white/5 bg-[#121110] hover:border-[#D4AF37]/30 transition-colors duration-500"
              data-testid={`review-${i}`}
            >
              <span
                aria-hidden
                className="absolute -top-4 left-8 font-display text-7xl leading-none text-[#D4AF37]/60 select-none"
              >
                "
              </span>

              <p className="relative font-display italic text-xl md:text-2xl font-light text-white/90 leading-[1.45] mb-10">
                {r.quote}
              </p>

              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-[#D4AF37]/60" />
                <div>
                  <p className="font-body text-sm tracking-wide text-white">{r.name}</p>
                  <p className="mt-1 text-[0.65rem] tracking-[0.3em] uppercase text-white/40">
                    {r.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
