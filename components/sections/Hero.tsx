"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const shapes = [
  { size: 300, x: "10%", y: "15%", delay: 0 },
  { size: 200, x: "80%", y: "20%", delay: 2 },
  { size: 150, x: "70%", y: "70%", delay: 4 },
  { size: 250, x: "15%", y: "75%", delay: 1 },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent dark:from-indigo-950/20" />

      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.3), transparent 70%)",
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            scale: [1, 1.1, 1, 0.9, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="mt-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:via-gray-300 dark:to-white sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              className="rounded-full px-8 shadow-lg shadow-indigo-500/20 transition-shadow hover:shadow-xl hover:shadow-indigo-500/30"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.hero.viewProjects}
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.hero.contactMe}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
