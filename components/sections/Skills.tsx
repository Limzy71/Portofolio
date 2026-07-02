"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/contexts/LanguageContext";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { skills } from "@/data/skills";

const skillLevels: Record<string, number> = {
  "Next.js": 90,
  React: 85,
  TypeScript: 80,
  "Tailwind CSS": 90,
  JavaScript: 85,
  "Node.js": 75,
  PostgreSQL: 65,
  Git: 80,
  Figma: 60,
};

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" title={t.skills.title} subtitle={t.skills.subtitle}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {skills.map((skill) => {
            const level = skillLevels[skill.name] ?? 70;
            return (
              <motion.div key={skill.name} variants={fadeInUp}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-xs text-gray-400">{level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
