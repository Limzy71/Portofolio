"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { EmailIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Translation } from "@/lib/locales";
import type { ComponentType } from "react";

const contactLinks = [
  {
    labelKey: "github",
    href: siteConfig.social.github,
    icon: GithubIcon,
  },
  {
    labelKey: "linkedin",
    href: siteConfig.social.linkedin,
    icon: LinkedinIcon,
  },
  {
    labelKey: "instagram",
    href: siteConfig.social.instagram,
    icon: InstagramIcon,
  },
  {
    labelKey: "email",
    href: siteConfig.social.email,
    icon: EmailIcon,
  },
] as const satisfies ReadonlyArray<{
  labelKey: keyof Translation["contact"]["links"];
  href: string;
  icon: ComponentType<{ className?: string }>;
}>;

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="scroll-mt-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100/50 py-20 dark:from-purple-950/15 dark:via-transparent dark:to-transparent md:py-28"
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
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <p className="font-mono text-base font-semibold tracking-wide text-violet-400 sm:text-xl">
            {t.contact.kicker}
          </p>

          <h2 className="mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tighter text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
            {t.contact.headingPrefix}
            <span className="block">{t.contact.headingHighlight}</span>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
            {t.contact.body}
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            {contactLinks.map(({ labelKey, href, icon: Icon }) => (
              <motion.a
                key={labelKey}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-gray-200/80 bg-white/80 px-8 py-4 text-sm font-bold uppercase tracking-wide text-gray-900 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-violet-600 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:border-violet-400/60 dark:hover:bg-violet-400/10 dark:hover:text-violet-300 sm:w-auto"
              >
                <Icon className="h-5 w-5 text-gray-500 transition-colors group-hover:text-violet-600 dark:text-gray-300 dark:group-hover:text-violet-300" />
                {t.contact.links[labelKey]}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}






