"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const doc = document.documentElement;
    const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 2;
    progress.set(atBottom ? 1 : latest);
  });

  useEffect(() => {
    const syncBottomProgress = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        progress.set(1);
        return;
      }

      const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 2;
      if (atBottom) progress.set(1);
    };

    syncBottomProgress();
    window.addEventListener("resize", syncBottomProgress);
    return () => window.removeEventListener("resize", syncBottomProgress);
  }, [progress]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[60] h-[3px] w-screen origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      style={{ scaleX: progress }}
    />
  );
}
