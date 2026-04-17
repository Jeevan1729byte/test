import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Ruler } from "lucide-react";

const rows = [
  { size: "XS", bust: "80 – 84", waist: "62 – 66", hip: "88 – 92",  length: "135" },
  { size: "S",  bust: "85 – 89", waist: "67 – 71", hip: "93 – 97",  length: "138" },
  { size: "M",  bust: "90 – 94", waist: "72 – 76", hip: "98 – 102", length: "141" },
  { size: "L",  bust: "95 – 99", waist: "77 – 81", hip: "103 – 107",length: "144" },
  { size: "XL", bust: "100 – 104",waist: "82 – 86",hip: "108 – 112",length: "147" },
  { size: "Custom", bust: "Your measurements", waist: "on WhatsApp", hip: "—", length: "—" },
];

export const SizeGuideModal = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="sg-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[95] bg-black/75 backdrop-blur-md"
            data-testid="sizeguide-overlay"
          />

          <motion.div
            key="sg-modal"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[96] flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d0c0b] border border-[#D4AF37]/30 pointer-events-auto"
              data-testid="sizeguide-modal"
            >
              {/* Corner marks */}
              <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#D4AF37]/70 pointer-events-none" />
              <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#D4AF37]/70 pointer-events-none" />
              <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#D4AF37]/70 pointer-events-none" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#D4AF37]/70 pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4 px-6 md:px-10 pt-8 md:pt-10 pb-6">
                <div>
                  <p className="overline mb-3 flex items-center gap-2">
                    <Ruler size={12} /> Made-to-Measure Guide
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl font-light leading-tight">
                    Find your <span className="italic text-[#D4AF37]">silhouette.</span>
                  </h3>
                  <p className="mt-3 text-sm text-white/60 max-w-md leading-relaxed">
                    All measurements in centimetres. Not sure? Share a single measurement and we will guide the rest on WhatsApp.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-[#D4AF37] transition-colors p-1"
                  aria-label="Close"
                  data-testid="sizeguide-close"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Table */}
              <div className="px-6 md:px-10 pb-8 md:pb-10">
                <div className="border border-white/10 overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/10 bg-[#121110]">
                        <th className="py-3 px-3 md:px-4 text-[0.65rem] tracking-[0.25em] uppercase text-[#D4AF37] font-normal">Size</th>
                        <th className="py-3 px-3 md:px-4 text-[0.65rem] tracking-[0.25em] uppercase text-[#D4AF37] font-normal">Bust</th>
                        <th className="py-3 px-3 md:px-4 text-[0.65rem] tracking-[0.25em] uppercase text-[#D4AF37] font-normal">Waist</th>
                        <th className="py-3 px-3 md:px-4 text-[0.65rem] tracking-[0.25em] uppercase text-[#D4AF37] font-normal hidden sm:table-cell">Hip</th>
                        <th className="py-3 px-3 md:px-4 text-[0.65rem] tracking-[0.25em] uppercase text-[#D4AF37] font-normal">Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((r, i) => (
                        <tr
                          key={r.size}
                          className={`${i !== rows.length - 1 ? "border-b border-white/5" : ""} hover:bg-white/[0.02] transition-colors`}
                          data-testid={`sg-row-${r.size.toLowerCase()}`}
                        >
                          <td className="py-3 px-3 md:px-4 font-display text-lg text-white">{r.size}</td>
                          <td className="py-3 px-3 md:px-4 text-white/70 tabular-nums">{r.bust}</td>
                          <td className="py-3 px-3 md:px-4 text-white/70 tabular-nums">{r.waist}</td>
                          <td className="py-3 px-3 md:px-4 text-white/70 tabular-nums hidden sm:table-cell">{r.hip}</td>
                          <td className="py-3 px-3 md:px-4 text-white/70 tabular-nums">{r.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Tips */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/55">
                  <div className="border border-white/5 p-3">
                    <p className="overline mb-1.5">Bust</p>
                    Measure around the fullest part, keeping the tape level.
                  </div>
                  <div className="border border-white/5 p-3">
                    <p className="overline mb-1.5">Waist</p>
                    Measure around the narrowest part, above the navel.
                  </div>
                  <div className="border border-white/5 p-3">
                    <p className="overline mb-1.5">Length</p>
                    From the shoulder seam down to your preferred hem.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SizeGuideModal;
