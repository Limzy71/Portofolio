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
      <Section id="projects">
        <div className="mx-auto max-w-5xl text-center mb-12">
          <p className="font-mono text-base font-semibold tracking-wide text-violet-400 sm:text-xl">
            {t.projects.kicker}
          </p>
          <h2 className="mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tighter text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
            {t.projects.headingPrefix}
            <span className="block">{t.projects.headingHighlight}</span>
          </h2>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
            {t.projects.subtitle}
          </p>
        </div>
        <p className="text-center text-gray-500">{t.projects.empty}</p>
      </Section>
    );
  }

  return (
    <Section
      id="projects"
      className="bg-gradient-to-b from-gray-50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-950/30"
    >
      <div className="mx-auto max-w-5xl text-center mb-12">
        <p className="font-mono text-base font-semibold tracking-wide text-violet-400 sm:text-xl">
          {t.projects.kicker}
        </p>
        <h2 className="mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tighter text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
          {t.projects.headingPrefix}
          <span className="block">{t.projects.headingHighlight}</span>
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
          {t.projects.subtitle}
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
