"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Hubungi Saya"
      subtitle="Ada proyek atau ingin ngobrol? Langsung aja!"
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-xl space-y-6 text-center"
      >
        <motion.p variants={fadeInUp} className="text-gray-600 dark:text-gray-400">
          Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk
          menghubungi saya.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-lg font-medium text-gray-900 underline-offset-4 hover:underline dark:text-white"
          >
            {siteConfig.email}
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex justify-center gap-4 pt-4">
          {siteConfig.social.github && (
            <Button
              variant="outline"
              onClick={() => window.open(siteConfig.social.github, "_blank")}
            >
              GitHub
            </Button>
          )}
          {siteConfig.social.linkedin && (
            <Button
              variant="outline"
              onClick={() => window.open(siteConfig.social.linkedin, "_blank")}
            >
              LinkedIn
            </Button>
          )}
        </motion.div>
      </motion.div>
    </Section>
  );
}
