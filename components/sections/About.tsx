"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from "@/lib/animations";

const stats = [
  { value: "2+", labelKey: "years" },
  { value: "5+", labelKey: "projects" },
  { value: "10+", labelKey: "technologies" },
] as const;

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
          className="flex flex-col items-center gap-8 md:items-start"
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl ring-2 ring-gray-200/50 dark:ring-gray-800/50 sm:h-80 sm:w-80">
            <Image
              src="/images/profile.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, 320px"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 text-gray-600 dark:text-gray-400"
        >
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-200 pt-12 dark:border-gray-800"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.labelKey}
            variants={fadeInUp}
            className="text-center"
          >
            <div className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {stat.labelKey === "years"
                ? t.about.statsYears
                : stat.labelKey === "projects"
                  ? t.about.statsProjects
                  : t.about.statsTech}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
