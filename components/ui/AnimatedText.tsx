"use client";

import { motion } from "framer-motion";
import { staggerText, letterFadeUp } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedText({ text, className, as: Tag = "h1" }: AnimatedTextProps) {
  const letters = text.split("");

  return (
    <motion.div
      variants={staggerText}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      <Tag className={className} aria-label={text}>
        {letters.map((letter, index) => (
          <motion.span key={`${letter}-${index}`} variants={letterFadeUp} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
