import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import AbayaSilhouette from "./AbayaSilhouette";
import { INSTAGRAM_LINK } from "../lib/brand";

// 9 placeholder Instagram tiles — each built from an abaya SVG + subtle texture
// bg so we don't rely on unrelated stock imagery. Editorial, high-contrast.

const tiles = [
  { variant: "classic", tint: "from-[#0e0d0c] to-[#1a1814]", label: "Royal Noir" },
  { variant: "flared", tint: "from-[#141210] to-[#0e0c0a]", label: "Desert Gold" },
  { variant: "kaftan", tint: "from-[#0a0908] to-[#15120f]", label: "Pearl Mirage" },
  { variant: "structured", tint: "from-[#121010] to-[#0a0908]", label: "Midnight Bloom" },
  { variant: "editorial", tint: "from-[#15130f] to-[#0a0908]", label: "Atelier" },
  { variant: "classic", tint: "from-[#0a0908] to-[#18140e]", label: "Behind the Seams" },
  { variant: "kaftan", tint: "from-[#0e0c0a] to-[#0a0908]", label: "Muscat Studio" },
  { variant: "flared", tint: "from-[#0a0908] to-[#141210]", label: "Embroidery Detail" },
  { variant: "structured", tint: "from-[#121010] to-[#18150f]", label: "Fitting Room" },
];

export const InstagramGrid = () => {
  return (
    <section
      className="relative py-24 md:py-36"
      data-testid="instagram-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="overline mb-5">— Follow the Atelier</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-white">
              @shestylish<span className="italic text-[#D4AF37]">_designer</span>
            </h2>
          </div>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-white/15 text-[0.7rem] tracking-[0.3em] uppercase text-white/80 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500 self-start md:self-auto"
            data-testid="instagram-follow-cta"
          >
            <FaInstagram /> Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-[2px] md:gap-[3px]">
          {tiles.map((t, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`group relative aspect-square overflow-hidden bg-gradient-to-br ${t.tint}`}
              data-testid={`ig-tile-${i}`}
            >
              {/* Silhouette */}
              <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8 transition-transform duration-[1200ms] ease-out group-hover:scale-110">
                <AbayaSilhouette variant={t.variant} className="w-full h-full opacity-70" stroke="#D4AF37" />
              </div>

              {/* Grain / overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-500" />

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-center">
                <FaInstagram className="text-[#D4AF37] text-2xl mb-3" />
                <p className="font-display text-lg md:text-xl text-white italic">{t.label}</p>
                <span className="mt-2 text-[0.6rem] tracking-[0.3em] uppercase text-white/50">
                  View on Instagram
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
