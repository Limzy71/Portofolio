"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      setTimeout(() => {
        elem.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.tentang, href: "#about" },
    { label: t.nav.proyek, href: "#projects" },
    { label: t.nav.skill, href: "#skills" },
    { label: t.nav.kontak, href: "#contact" },
  ];

  return (
    <header
      suppressHydrationWarning
      className={cn(
        "fixed top-0 right-0 left-0 z-40 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-black/60 shadow-lg backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-0.5 text-2xl font-black tracking-tighter transition-transform hover:scale-105"
          >
            <span
              className="bg-cover bg-center bg-no-repeat bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(139,92,246,0.35)]"
              style={{
                backgroundImage: `url('/images/kain%20tenun%20bg.png')`,
              }}
            >
              {siteConfig.initials}
            </span>
            <span className="text-violet-500 transition-colors group-hover:text-violet-400">
              .
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-0.5 overflow-hidden rounded-md border border-gray-300 dark:border-gray-600">
              <button
                onClick={() => setLocale("id")}
                className={`px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
                  locale === "id"
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
                  locale === "en"
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                }`}
              >
                EN
              </button>
            </li>
          </ul>

          <div className="flex items-center gap-2 md:hidden">
            <div className="flex gap-0.5 overflow-hidden rounded-md border border-gray-300 dark:border-gray-600">
              <button
                onClick={() => setLocale("id")}
                className={`px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
                  locale === "id"
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
                  locale === "en"
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                }`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-gray-900 transition-transform dark:bg-white",
                    isMobileOpen && "translate-y-2 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-gray-900 transition-opacity dark:bg-white",
                    isMobileOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-gray-900 transition-transform dark:bg-white",
                    isMobileOpen && "-translate-y-2 -rotate-45",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-2 text-sm font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
