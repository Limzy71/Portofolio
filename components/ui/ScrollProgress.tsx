"use client";

import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export function ScrollProgress() {
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const documentElement = document.documentElement;
      const scrollTop = window.scrollY || documentElement.scrollTop;
      const scrollableHeight = documentElement.scrollHeight - window.innerHeight;

      scrollProgress.set(
        scrollableHeight <= 0 ? 1 : Math.min(scrollTop / scrollableHeight, 1),
      );
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [scrollProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      style={{ scaleX: scrollProgress }}
    />
  );
}
