import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete && onComplete();
    }, 2600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[100] bg-[#0A0908] flex items-center justify-center overflow-hidden grain"
          data-testid="brand-loader"
        >
          {/* Gold sweep behind the name */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(100deg, transparent 40%, rgba(212,175,55,0.08) 50%, transparent 60%)",
            }}
          />

          <div className="relative text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="overline mb-6"
            >
              — Muscat · Est. for GCC —
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, letterSpacing: "0.02em" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-8xl font-light"
            >
              <span className="gold-shimmer italic">She</span>
              <span className="text-white">Stylish</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
              className="mt-8 h-[1px] w-48 md:w-64 mx-auto bg-[#D4AF37]/60 origin-left"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-6 text-[0.7rem] tracking-[0.3em] uppercase text-white/50"
            >
              The Art of the Abaya
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
