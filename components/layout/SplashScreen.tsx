"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useSplashScreen } from "@/hooks/useSplashScreen";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";

const wordContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const wordFadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 transform-gpu"
          style={{ backgroundColor: "#030712" }}
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/70 via-gray-950 to-black" />

          {/* GPU-Accelerated Subtle Light Blob */}
          <motion.div
            className="absolute h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl transform-gpu pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative text-center px-4">
            <motion.div
              variants={wordContainerVariants}
              initial="hidden"
              animate="visible"
              className="overflow-hidden"
            >
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                {siteConfig.name.split(" ").map((word, wordIdx) => (
                  <motion.span
                    key={wordIdx}
                    variants={wordFadeUpVariants}
                    className="inline-block mr-3 last:mr-0 transform-gpu"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              }}
              className="mt-4 px-2 text-xs sm:text-lg md:text-xl font-medium text-gray-400 tracking-wide transform-gpu"
            >
              {siteConfig.role}
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            }}
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            onClick={skipSplash}
            className="group absolute bottom-10 flex cursor-pointer items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-6 py-2.5 text-xs font-bold tracking-[0.2em] text-gray-200 uppercase shadow-xl backdrop-blur-md transition-colors duration-300 hover:border-violet-400/80 hover:bg-violet-500/25 hover:text-white transform-gpu"
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
