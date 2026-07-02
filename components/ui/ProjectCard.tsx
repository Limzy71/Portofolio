"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types/project";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/Card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div variants={fadeInUp} className="group relative">
      <Card className="overflow-hidden p-0">
        <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-3 left-3 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm transition-colors hover:bg-white"
              >
                {t.projects.liveDemo}
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm transition-colors hover:bg-white"
              >
                {t.projects.sourceCode}
              </a>
            )}
          </div>
        </div>
        <div className="space-y-2 p-5">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
