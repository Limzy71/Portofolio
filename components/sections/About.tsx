"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" title={t.about.title} subtitle={t.about.subtitle}>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 text-gray-600 dark:text-gray-400"
        >
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 sm:h-80 sm:w-80">
            <div className="flex h-full items-center justify-center text-gray-400 dark:text-gray-500">
              <svg className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
