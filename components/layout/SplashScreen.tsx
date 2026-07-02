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
          transition={{ duration: 0.8, ease: "easeInOut" }}
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
                transition: { delay: 2, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              }}
              className="mt-4 text-lg text-gray-400 sm:text-xl"
            >
              {siteConfig.role}
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.5, duration: 0.5 },
            }}
            whileHover={{ opacity: 0.6 }}
            onClick={skipSplash}
            className="absolute bottom-12 text-sm text-gray-400 transition-opacity dark:text-gray-500"
          >
            {t.splash.skip}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
