"use client";

import { motion } from "framer-motion";

import {
  SiNextdotjs,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiFlutter,
  SiTailwindcss,
  SiSupabase,
  SiGit,
  SiFigma,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import {
  FiUsers,
  FiMessageSquare,
  FiInfo,
  FiRefreshCw,
  FiLayout,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { Locale, Translation } from "@/lib/locales";
import type { ComponentType } from "react";

interface SkillTag {
  name: string;
  icon?: ComponentType<{ className?: string }>;
}

interface SkillCard {
  titleKey: keyof Translation["skills"]["cards"];
  icon: ComponentType<{ className?: string }>;
  tags: SkillTag[];
}

function getSkillCards(locale: Locale): SkillCard[] {
  return [
    {
      titleKey: "softwareMobile",
      icon: FaCode,
      tags: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Laravel", icon: SiLaravel },
        { name: "PHP", icon: SiPhp },
        { name: "Flutter", icon: SiFlutter },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      titleKey: "tools",
      icon: SiGit,
      tags: [
        { name: "MySQL", icon: SiMysql },
        { name: "Supabase", icon: SiSupabase },
        { name: "Git", icon: SiGit },
      ],
    },
    {
      titleKey: "uiux",
      icon: FiLayout,
      tags: [
        { name: "Figma", icon: SiFigma },
        { name: "Canva" },
        { name: "Stitch AI", icon: HiOutlineSparkles },
      ],
    },
    {
      titleKey: "softSkills",
      icon: FiUsers,
      tags: [
        { name: locale === "id" ? "Kerja Sama Tim" : "Teamwork", icon: FiUsers },
        { name: locale === "id" ? "Komunikasi" : "Communication", icon: FiMessageSquare },
        { name: locale === "id" ? "Pemecahan Masalah" : "Problem Solving", icon: FiInfo },
        { name: locale === "id" ? "Adaptabilitas" : "Adaptability", icon: FiRefreshCw },
      ],
    },
  ];
}

export function Skills() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="skills"
      className="scroll-mt-20 relative overflow-hidden bg-gradient-to-b from-purple-50/20 via-transparent to-transparent py-20 dark:from-purple-950/10 dark:via-transparent dark:to-transparent md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] text-gray-900 dark:opacity-[0.06] dark:text-white"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="font-mono text-base font-semibold tracking-wide text-violet-400 sm:text-xl">
            {t.skills.kicker}
          </p>
          <h2 className="mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tighter text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
            {t.skills.headingPrefix}
            <span className="block">{t.skills.headingHighlight}</span>
          </h2>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {getSkillCards(locale).map((card) => {
            const CardIcon = card.icon;

            return (
              <div
                key={card.titleKey}
                className="group rounded-xl border border-emerald-500/20 bg-white/70 p-8 shadow-[0_0_12px_rgba(16,185,129,0.08)] backdrop-blur-sm dark:border-emerald-500/20 dark:bg-gray-900/70"
              >
                <div className="mb-7 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                    <CardIcon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="text-sm font-black uppercase tracking-tight text-gray-900 dark:text-white sm:text-base">
                    {t.skills.cards[card.titleKey]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {card.tags.map((tag) => {
                    const TagIcon = tag.icon;

                    return (
                      <motion.span
                        key={tag.name}
                        className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-600 shadow-[0_0_10px_rgba(16,185,129,0.1)] transition-colors dark:border-emerald-500/30 dark:bg-gray-800/60 dark:text-gray-300"
                        whileHover={{
                          scale: 1.04,
                          borderColor: "rgba(16,185,129,0.8)",
                          boxShadow: "0 0 18px rgba(16,185,129,0.35)",
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {TagIcon ? <TagIcon className="h-4 w-4 text-emerald-400" /> : null}
                        {tag.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}









