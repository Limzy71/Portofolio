"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 sm:text-xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Lihat Proyek
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hubungi Saya
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
