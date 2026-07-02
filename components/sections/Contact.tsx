"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { GithubIcon, LinkedinIcon, EmailIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const socialItems = [
  { key: "github", href: siteConfig.social.github, label: "GitHub", Icon: GithubIcon },
  { key: "linkedin", href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { key: "email", href: siteConfig.social.email, label: "Email", Icon: EmailIcon },
] as const;

export function Contact() {
  const { t } = useLanguage();

  return (
    <Section
      id="contact"
      title={t.contact.title}
      subtitle={t.contact.subtitle}
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-xl"
      >
        <motion.div
          variants={fadeInUp}
          className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:p-12"
        >
          <p className="text-gray-600 dark:text-gray-400">
            {t.contact.description}
          </p>

          <div className="mt-8 flex items-center justify-center gap-6">
            {socialItems.map(({ key, href, label, Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-all hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-gray-600 dark:text-gray-400 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
