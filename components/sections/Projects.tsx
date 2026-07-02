"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { staggerContainer } from "@/lib/animations";
import { projects } from "@/data/projects";

export function Projects() {
  if (projects.length === 0) {
    return (
      <Section id="projects" title="Proyek" subtitle="Beberapa proyek yang pernah saya kerjakan.">
        <p className="text-center text-gray-500">Belum ada proyek ditambahkan.</p>
      </Section>
    );
  }

  return (
    <Section
      id="projects"
      title="Proyek"
      subtitle="Beberapa proyek yang pernah saya kerjakan."
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </Section>
  );
}
