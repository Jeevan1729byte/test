import React from "react";
import Marquee from "react-fast-marquee";

export const GoldMarquee = () => {
  const countries = [
    "Oman",
    "United Arab Emirates",
    "Saudi Arabia",
    "Kuwait",
    "Qatar",
    "Bahrain",
  ];

  return (
    <section
      className="relative py-8 md:py-10 border-y border-white/5 bg-[#0A0908] overflow-hidden marquee-fade"
      data-testid="gold-marquee"
    >
      <Marquee gradient={false} speed={45} pauseOnHover={false} autoFill>
        {countries.map((c, i) => (
          <div key={`${c}-${i}`} className="flex items-center mx-8 md:mx-12">
            <span className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-[#D4AF37] tracking-tight">
              {i % 2 === 0 ? (
                <span className="italic">{c}</span>
              ) : (
                <span>{c}</span>
              )}
            </span>
            <span className="mx-6 md:mx-10 text-[#D4AF37]/50 text-2xl md:text-3xl">✦</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default GoldMarquee;
