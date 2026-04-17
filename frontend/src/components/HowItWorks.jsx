import React from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, MessageCircle, Truck } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Browse the Collection",
    desc: "Discover our four signature silhouettes — from the classic Royal Noir to the couture Midnight Bloom.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Select Your Style",
    desc: "Pick your favourite piece. Share measurements, fabric preference, and any personalisation.",
  },
  {
    n: "03",
    icon: MessageCircle,
    title: "Book on WhatsApp",
    desc: "One message is all it takes. We confirm your order, price and delivery date within the hour.",
  },
  {
    n: "04",
    icon: Truck,
    title: "Delivered Across GCC",
    desc: "Hand-crafted in Muscat. Delivered to Oman, UAE, Saudi, Kuwait, Qatar & Bahrain — discreetly.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how"
      className="relative py-24 md:py-36 bg-[#0d0c0b]"
      data-testid="how-it-works-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="overline mb-5">— The Process</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-white">
            Booking your abaya, <br className="hidden md:block" />
            in <span className="italic text-[#D4AF37]">four quiet steps.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
                data-testid={`step-${s.n}`}
              >
                {/* Huge transparent number behind */}
                <span
                  aria-hidden
                  className="absolute -top-6 -left-2 font-display text-[7rem] md:text-[8rem] leading-none font-light text-white/[0.04] select-none pointer-events-none"
                >
                  {s.n}
                </span>

                <div className="relative pt-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-11 h-11 flex items-center justify-center border border-[#D4AF37]/40 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-all duration-500">
                      <Icon className="text-[#D4AF37]" size={18} strokeWidth={1.4} />
                    </div>
                    <span className="text-[0.65rem] tracking-[0.4em] uppercase text-[#D4AF37]">
                      Step {s.n}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-light text-white leading-tight mb-4">
                    {s.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                    {s.desc}
                  </p>

                  {/* Connector line (except last) */}
                  {i < steps.length - 1 && (
                    <span className="hidden lg:block absolute top-[2.1rem] left-[calc(100%-1rem)] w-[calc(100%-3rem)] h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
