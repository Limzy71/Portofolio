"use client";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {year} {siteConfig.name}. {t.footer.rights}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          {t.footer.builtWith}
        </p>
      </Container>
    </footer>
  );
}
