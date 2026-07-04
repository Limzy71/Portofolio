"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/60 via-transparent to-transparent dark:from-indigo-950/10" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] text-gray-900 dark:opacity-[0.06] dark:text-white"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

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

      <Container className="max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-6xl text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-violet-300 uppercase backdrop-blur-md sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            <span>{t.hero.greeting}</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="whitespace-nowrap">La Ode Muh.</span>{" "}
            <span className="whitespace-nowrap">Ikhsan Mbala</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-8 max-w-2xl px-4 text-sm sm:text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-violet-500/60 bg-violet-600 px-8 py-4 text-xs font-bold tracking-widest text-white uppercase shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] sm:w-auto"
            >
              {t.hero.viewProjects}
            </button>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-8 py-4 text-xs font-bold tracking-widest text-emerald-300 uppercase shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] sm:w-auto"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{t.hero.downloadCV}</span>
            </a>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-8 py-4 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.1] hover:shadow-lg sm:w-auto"
            >
              {t.hero.contactMe}
            </button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.button
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to about"
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
      </motion.button>
    </section>
  );
}
