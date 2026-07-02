"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl sm:h-80 sm:w-80">
            <Image
              src="/images/profile.png"
              alt="Profile photo"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, 320px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
