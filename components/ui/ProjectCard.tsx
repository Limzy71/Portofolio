"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types/project";
import { fadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/Card";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="group overflow-hidden p-0">
        <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="space-y-3 p-6">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-900 underline-offset-2 hover:underline dark:text-white"
              >
                Live Demo →
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-500 underline-offset-2 hover:underline dark:text-gray-400"
              >
                Source Code →
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
