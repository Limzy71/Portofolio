"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSplashScreen } from "@/hooks/useSplashScreen";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";
import { staggerText, letterFadeUp } from "@/lib/animations";

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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950"
          style={{ backgroundColor: "#030712" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-gray-950 to-black" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(600px circle at 20% 30%, rgba(99,102,241,0.15), transparent 70%)",
                "radial-gradient(600px circle at 80% 70%, rgba(99,102,241,0.15), transparent 70%)",
                "radial-gradient(600px circle at 40% 50%, rgba(99,102,241,0.15), transparent 70%)",
                "radial-gradient(600px circle at 20% 30%, rgba(99,102,241,0.15), transparent 70%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1Ii8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2YpIiBvcGFjaXR5PSIwLjA0Ii8+PC9zdmc+')] opacity-50" />

          <div className="relative text-center">
            <motion.div
              variants={staggerText}
              initial="hidden"
              animate="visible"
              className="overflow-hidden"
            >
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                {siteConfig.name.split(" ").map((word, wordIdx) => (
                  <span key={wordIdx} className="inline-block mr-4 last:mr-0">
                    {word.split("").map((letter, letterIdx) => (
                      <motion.span
                        key={`${wordIdx}-${letterIdx}`}
                        variants={letterFadeUp}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              }}
              className="mt-4 text-lg text-gray-400 sm:text-xl"
            >
              {siteConfig.role}
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.2, duration: 0.4 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={skipSplash}
            className="group absolute bottom-12 flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-6 py-2.5 text-xs font-semibold tracking-widest text-gray-300 uppercase backdrop-blur-md transition-all hover:border-violet-500/60 hover:bg-violet-500/15 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
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
