"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <motion.section
      id={id}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={cn("scroll-mt-20 relative overflow-hidden py-20 md:py-28", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] text-gray-900 dark:opacity-[0.06] dark:text-white"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />
      <Container>
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            {subtitle && (
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </motion.section>
  );
}
