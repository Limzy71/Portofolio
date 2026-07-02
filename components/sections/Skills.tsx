"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { staggerContainer } from "@/lib/animations";
import { skills } from "@/data/skills";

export function Skills() {
  const categories = [
    { key: "frontend" as const, label: "Frontend" },
    { key: "backend" as const, label: "Backend" },
    { key: "tools" as const, label: "Tools" },
    { key: "design" as const, label: "Design" },
  ];

  return (
    <Section id="skills" title="Skill" subtitle="Teknologi yang saya kuasai.">
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
