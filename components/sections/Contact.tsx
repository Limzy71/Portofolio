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
      className="relative overflow-hidden bg-gray-950 py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <p className="text-xs font-black uppercase tracking-[0.35em] text-violet-500 dark:text-violet-400">
            {t.contact.kicker}
          </p>

          <h2 className="mt-6 text-5xl font-black uppercase leading-[0.95] tracking-tighter text-white sm:text-6xl md:text-7xl">
            {t.contact.headingPrefix}
            <span className="block">{t.contact.headingHighlight}</span>
          </h2>

          <p className="mt-10 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
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
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-violet-400/60 hover:bg-violet-400/10 sm:w-auto"
              >
                <Icon className="h-5 w-5 text-gray-300 transition-colors group-hover:text-violet-300" />
                {t.contact.links[labelKey]}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}






