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
        className="mx-auto max-w-xl space-y-6 text-center"
      >
        <motion.p variants={fadeInUp} className="text-gray-600 dark:text-gray-400">
          {t.contact.description}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-6">
          {socialItems.map(({ key, href, label, Icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-gray-900 hover:text-gray-900 dark:border-gray-600 dark:text-gray-400 dark:hover:border-white dark:hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
