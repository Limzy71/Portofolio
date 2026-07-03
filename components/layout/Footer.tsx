"use client";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SocialLink } from "@/components/ui/SocialLink";
import { GithubIcon, LinkedinIcon, InstagramIcon, EmailIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-gray-50/50 to-transparent dark:border-gray-800 dark:from-gray-900/30 dark:to-transparent">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {year} {siteConfig.name}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <SocialLink href={siteConfig.social.github} label="GitHub">
            <GithubIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
            <LinkedinIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href={siteConfig.social.instagram} label="Instagram">
            <InstagramIcon className="h-5 w-5" />
          </SocialLink>
          <SocialLink href={siteConfig.social.email} label="Email">
            <EmailIcon className="h-5 w-5" />
          </SocialLink>
        </div>
      </Container>
    </footer>
  );
}
