"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { useLanguage } from "@/contexts/LanguageContext";
import { staggerContainer } from "@/lib/animations";
import { skills } from "@/data/skills";

export function Skills() {
  const { t } = useLanguage();

  const categories = [
    { key: "frontend" as const, label: t.skills.frontend },
    { key: "backend" as const, label: t.skills.backend },
    { key: "tools" as const, label: t.skills.tools },
    { key: "design" as const, label: t.skills.design },
  ];

  return (
    <Section id="skills" title={t.skills.title} subtitle={t.skills.subtitle}>
      <div className="space-y-10">
        {categories.map(({ key, label }) => {
          const filtered = skills.filter((s) => s.category === key);
          if (filtered.length === 0) return null;

          return (
            <div key={key}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {label}
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {filtered.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
