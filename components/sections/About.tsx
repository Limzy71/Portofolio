"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeInUp } from "@/lib/animations";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" title={t.about.title} subtitle={t.about.subtitle} className="bg-gradient-to-b from-indigo-50/20 via-transparent to-transparent dark:from-indigo-950/10 dark:via-transparent dark:to-transparent">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-3xl space-y-4 text-center text-gray-600 dark:text-gray-400"
      >
        <div className="mx-auto mb-8 h-px w-28 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
        <div className="space-y-4">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </motion.div>
    </Section>
  );
}
