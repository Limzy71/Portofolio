import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          Built with Next.js & Framer Motion
        </p>
      </Container>
    </footer>
  );
}
