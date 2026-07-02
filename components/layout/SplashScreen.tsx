"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useSplashScreen } from "@/hooks/useSplashScreen";
import { siteConfig } from "@/config/site";
import { staggerText, letterFadeUp } from "@/lib/animations";

export function SplashScreen() {
  const { isVisible, skipSplash } = useSplashScreen();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundColor: "#ffffff" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center dark:bg-gray-950"
        >
          <div className="text-center">
            <motion.div
              variants={staggerText}
              initial="hidden"
              animate="visible"
              className="overflow-hidden"
            >
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
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
              className="mt-4 text-lg text-gray-500 dark:text-gray-400 sm:text-xl"
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
            Skip →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
