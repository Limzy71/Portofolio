"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeInUp } from "@/lib/animations";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" className="bg-gradient-to-b from-indigo-950/10 via-transparent to-transparent">
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <p className="font-mono text-base font-semibold tracking-wide text-violet-400 sm:text-xl">
          {t.about.kicker}
        </p>
        <h2 className="mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-7xl">
          {t.about.headingPrefix}
          <span className="block">{t.about.headingHighlight}</span>
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          {t.about.subtitle}
        </p>
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-3xl space-y-4 text-center text-gray-300 sm:text-lg sm:leading-8"
      >
        <div className="mx-auto mb-8 h-px w-28 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
        <div className="space-y-6">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </motion.div>
    </Section>
  );
}
