"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { staggerContainer } from "@/lib/animations";
import { projects } from "@/data/projects";

export function Projects() {
  const { t } = useLanguage();

  if (projects.length === 0) {
    return (
      <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
        <p className="text-center text-gray-500">{t.projects.empty}</p>
      </Section>
    );
  }

  return (
    <Section
      id="projects"
      title={t.projects.title}
      subtitle={t.projects.subtitle}
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
