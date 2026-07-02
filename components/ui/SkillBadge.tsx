"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/types/skill";
import { scaleIn } from "@/lib/animations";

interface SkillBadgeProps {
  skill: Skill;
}

const categoryColors: Record<Skill["category"], string> = {
  frontend:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  backend:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  tools:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  design:
    "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
};

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.span
      variants={scaleIn}
      className={`inline-block rounded-full px-4 py-2 text-sm font-medium ${categoryColors[skill.category]}`}
    >
      {skill.name}
    </motion.span>
  );
}
