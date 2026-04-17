import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import AbayaSilhouette from "./AbayaSilhouette";
import { buildWaLink } from "../lib/brand";

const collections = [
  {
    name: "Royal Noir",
    tagline: "Signature Classic",
    description: "Deep black silk with hand-applied gold thread at the cuffs. The house's signature silhouette.",
    price: "OMR 120",
    variant: "classic",
    span: "lg:col-span-7",
    height: "h-[560px] md:h-[640px]",
  },
  {
    name: "Desert Gold",
    tagline: "Limited Edition",
    description: "A warm sand-washed crêpe with subtle gold embroidery along the bodice.",
    price: "OMR 165",
    variant: "flared",
    span: "lg:col-span-5",
    height: "h-[560px] md:h-[640px]",
  },
  {
    name: "Pearl Mirage",
    tagline: "Evening Edit",
    description: "Pearl-beaded sleeves, fluid chiffon overlay. Designed for majlis and celebrations.",
    price: "OMR 195",
    variant: "kaftan",
    span: "lg:col-span-5",
    height: "h-[520px] md:h-[600px]",
  },
  {
    name: "Midnight Bloom",
    tagline: "Couture Occasion",
    description: "Architectural cut with a sculpted waist. Embroidered florals in antique gold.",
    price: "OMR 240",
    variant: "structured",
    span: "lg:col-span-7",
    height: "h-[520px] md:h-[600px]",
  },
];

const Card = ({ item, index }) => {
  return (
    <motion.a
      href={buildWaLink(`Hello She Stylish 🌟 I would like to book the ${item.name} abaya please`)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${item.span} col-span-12`}
      data-testid={`collection-card-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className={`relative ${item.height} overflow-hidden bg-[#121110] border border-[#D4AF37]/10 transition-colors duration-700 group-hover:border-[#D4AF37]/40`}>
        {/* Corner tick */}
        <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]/70 z-10" />
        <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#D4AF37]/70 z-10" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#D4AF37]/70 z-10" />
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D4AF37]/70 z-10" />

        {/* Silhouette */}
        <div className="absolute inset-0 flex items-center justify-center p-10 transition-transform duration-1000 ease-out group-hover:scale-[1.04]">
          <AbayaSilhouette variant={item.variant} className="w-full h-full max-w-[300px]" stroke="#D4AF37" />
        </div>

        {/* Gradient vignette on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Index number top-left */}
        <span className="absolute top-5 left-5 z-10 text-[0.65rem] tracking-[0.35em] uppercase text-white/40">
          №&nbsp;0{index + 1}
        </span>

        {/* Tagline */}
        <span className="absolute top-5 right-5 z-10 overline">{item.tagline}</span>

        {/* Bottom info */}
        <div className="absolute left-0 right-0 bottom-0 z-10 p-6 md:p-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-light text-white tracking-tight">
                {item.name}
              </h3>
              <p className="mt-2 max-w-sm text-sm text-white/60 leading-relaxed hidden md:block">
                {item.description}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="overline mb-1">From</p>
              <p className="font-display text-2xl md:text-3xl text-[#D4AF37]">{item.price}</p>
            </div>
          </div>

          {/* CTA reveal */}
          <div className="mt-5 md:mt-7 flex items-center justify-between border-t border-white/10 pt-4 md:pt-5 translate-y-2 opacity-70 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.3em] uppercase text-[#D4AF37]">
              <FaWhatsapp /> Enquire on WhatsApp
            </span>
            <ArrowUpRight className="text-[#D4AF37]" size={18} />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export const Collections = () => {
  return (
    <section
      id="collections"
      className="relative py-24 md:py-36"
      data-testid="collections-section"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="overline mb-5">— The Collections</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-white max-w-2xl">
              Four silhouettes. <span className="italic text-[#D4AF37]">Infinite</span> devotion.
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-base leading-relaxed">
            Every piece is made to order in our Muscat atelier. Fabrics sourced
            from Dubai, Istanbul & Paris — finished by hand in Oman.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {collections.map((c, i) => (
            <Card key={c.name} item={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
