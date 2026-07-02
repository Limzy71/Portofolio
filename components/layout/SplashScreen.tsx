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
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-950"
        >
          <div className="text-center">
            <motion.div
              variants={staggerText}
              initial="hidden"
              animate="visible"
              className="overflow-hidden"
            >
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
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
                transition: { delay: 0.8, duration: 0.6 },
              }}
              className="mt-4 text-lg text-gray-500 dark:text-gray-400 sm:text-xl"
            >
              {siteConfig.role}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.5, duration: 0.5 },
              }}
              className="mt-12"
            >
              <div className="mx-auto h-1 w-12 animate-pulse rounded-full bg-gray-300 dark:bg-gray-700" />
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.8, duration: 0.5 },
            }}
            onClick={skipSplash}
            className="absolute bottom-12 text-sm text-gray-400 underline-offset-2 hover:underline dark:text-gray-500"
          >
            Skip →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
