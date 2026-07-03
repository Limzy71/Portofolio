"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/types/project";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeInUp } from "@/lib/animations";
import { Card } from "@/components/ui/Card";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale } = useLanguage();
  const [isActive, setIsActive] = useState(false);
  const description =
    locale === "en" && project.descriptionEn
      ? project.descriptionEn
      : project.description;

  return (
    <motion.div
      variants={fadeInUp}
      onClick={() => setIsActive(!isActive)}
      className="group relative [[-webkit-tap-highlight-color:transparent]] cursor-pointer"
    >
      <Card className="overflow-hidden p-0 border-zinc-200 dark:border-zinc-800">
        <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {project.status && (
            <div
              className={`absolute top-3 right-3 z-20 rounded-full border border-white/20 bg-black/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase transition-opacity duration-75 md:duration-300 ease-out ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {project.status}
            </div>
          )}
          
          {/* Details Overlay (instant full snap on tap/hover) */}
          <div
            className={`absolute inset-0 z-10 flex flex-col justify-end bg-neutral-950/90 p-6 text-white transition-opacity duration-75 md:duration-300 ease-out ${
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <div
              className={`flex flex-col gap-3 transition-transform duration-75 md:duration-300 ease-out ${
                isActive
                  ? "translate-y-0"
                  : "translate-y-0 md:translate-y-2 group-hover:translate-y-0"
              }`}
            >
              <h3 className="text-xl font-bold uppercase tracking-tight text-white leading-tight">
                {project.title}
              </h3>
              
              <p className="text-xs text-zinc-300 line-clamp-4 leading-relaxed">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-indigo-950/50 border border-indigo-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded border border-zinc-700 px-3 py-1.5 text-xs font-semibold text-white transition-all hover:bg-white hover:text-black hover:border-white"
                  >
                    <FiArrowUpRight className="h-3.5 w-3.5" />
                    {project.liveUrl.includes("play.google.com")
                      ? "PLAY STORE"
                      : "LIVE"}
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded border border-zinc-700 px-3 py-1.5 text-xs font-semibold text-white transition-all hover:bg-white hover:text-black hover:border-white"
                  >
                    <FiGithub className="h-3.5 w-3.5" />
                    CODE
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
