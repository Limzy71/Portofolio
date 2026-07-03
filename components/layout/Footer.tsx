"use client";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SocialLink } from "@/components/ui/SocialLink";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-gray-50/50 to-transparent dark:border-gray-800 dark:from-gray-900/30 dark:to-transparent">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row">
        <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-left">
          &copy; {year} {siteConfig.name}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <SocialLink href={siteConfig.social.github} label="GitHub">
            <GithubIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
            <LinkedinIcon className="h-5 w-5" />
          </SocialLink>
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500 sm:text-right">
          {t.footer.builtWith}
        </p>
      </Container>
    </footer>
  );
}
