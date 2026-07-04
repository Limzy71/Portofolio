"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useSplashScreen } from "@/hooks/useSplashScreen";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function SplashScreen() {
  const { isVisible, skipSplash } = useSplashScreen();
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] overflow-hidden transform-gpu"
        >
          {/* Background Ambient Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-[#030712] to-[#030712]" />

          {/* Fluid Glowing Light Orb */}
          <motion.div
            className="absolute h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none transform-gpu"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.9, 1.15, 0.9],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative text-center px-4 max-w-full">
            {/* Smooth Word Animation with Responsive Font Size so Mbala stays on 1 line or fits nicely */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:gap-x-3"
            >
              {siteConfig.name.split(" ").map((word, wordIdx) => (
                <motion.span
                  key={wordIdx}
                  variants={wordVariants}
                  className="inline-block text-[21px] min-[380px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white transform-gpu"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Smooth Subtitle Role */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              }}
              className="mt-4 text-[11px] min-[380px]:text-xs sm:text-base md:text-lg font-medium tracking-widest text-indigo-200/70 uppercase transform-gpu"
            >
              {siteConfig.role}
            </motion.p>
          </div>

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.85, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
            whileTap={{ scale: 0.95 }}
            onClick={skipSplash}
            className="group absolute bottom-10 flex cursor-pointer items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-300 uppercase shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-indigo-400/60 hover:bg-indigo-500/20 hover:text-white transform-gpu"
          >
            <span>{t.splash.skip}</span>
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
