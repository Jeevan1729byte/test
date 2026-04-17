import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Ruler, ArrowUpRight } from "lucide-react";
import { COLLECTIONS } from "../lib/productImages";
import { useCart } from "../context/CartContext";
import SizeGuideModal from "./SizeGuideModal";

const SIZES = ["XS", "S", "M", "L", "XL", "Custom"];

const Card = ({ item, index, onSizeGuide }) => {
  const { addItem } = useCart();
  const [size, setSize] = useState("M");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${item.span} col-span-12`}
      data-testid={`collection-card-${item.id}`}
    >
      <div
        className={`relative ${item.height} overflow-hidden bg-[#121110] border border-[#D4AF37]/10 transition-colors duration-700 group-hover:border-[#D4AF37]/40`}
      >
        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
          data-testid={`collection-img-${item.id}`}
        />

        {/* Dark gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        {/* Corner ticks */}
        <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]/70 z-10" />
        <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#D4AF37]/70 z-10" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#D4AF37]/70 z-10" />
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D4AF37]/70 z-10" />

        {/* Index */}
        <span className="absolute top-5 left-5 z-10 text-[0.65rem] tracking-[0.35em] uppercase text-white/60">
          №&nbsp;0{index + 1}
        </span>

        {/* Tagline */}
        <span className="absolute top-5 right-5 z-10 overline">{item.tagline}</span>

        {/* Bottom content */}
        <div className="absolute left-0 right-0 bottom-0 z-10 p-6 md:p-8">
          <div className="flex items-end justify-between gap-6 mb-5">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-light text-white tracking-tight">
                {item.name}
              </h3>
              <p className="mt-2 max-w-sm text-sm text-white/70 leading-relaxed hidden md:block">
                {item.description}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="overline mb-1">From</p>
              <p className="font-display text-2xl md:text-3xl text-[#D4AF37]" data-testid={`collection-price-${item.id}`}>
                OMR {item.price}
              </p>
            </div>
          </div>

          {/* Size pills */}
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/40 mr-1">Size</span>
            {SIZES.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`text-[0.65rem] tracking-[0.2em] uppercase px-3 py-1.5 border transition-all duration-300 ${
                  size === s
                    ? "border-[#D4AF37] bg-[#D4AF37] text-[#0A0908]"
                    : "border-white/15 text-white/70 hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
                }`}
                data-testid={`size-${s.toLowerCase()}-${item.id}`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 border-t border-white/10 pt-5">
            <button
              onClick={() => addItem(item, { size })}
              className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#D4AF37] text-[#0A0908] text-[0.7rem] tracking-[0.3em] uppercase hover:bg-white transition-all duration-500"
              data-testid={`add-to-cart-${item.id}`}
            >
              <ShoppingBag size={14} strokeWidth={1.6} />
              Add to Cart
              <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => onSizeGuide(item)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/20 text-white/80 text-[0.7rem] tracking-[0.3em] uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500"
              data-testid={`size-guide-${item.id}`}
            >
              <Ruler size={13} strokeWidth={1.4} />
              Size Guide
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export const Collections = () => {
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

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
          <div className="flex items-start gap-4">
            <p className="max-w-md text-white/60 text-base leading-relaxed">
              Every piece is made to order in our Muscat atelier. Fabrics sourced from Dubai, Istanbul &amp; Paris — finished by hand in Oman.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {COLLECTIONS.map((c, i) => (
            <Card key={c.id} item={c} index={i} onSizeGuide={() => setSizeGuideOpen(true)} />
          ))}
        </div>
      </div>

      <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </section>
  );
};

export default Collections;
