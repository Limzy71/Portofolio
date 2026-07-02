"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Locale, Translation } from "@/lib/locales";
import { locales } from "@/lib/locales";

interface LanguageContextType {
  locale: Locale;
  t: Translation;
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-locale";

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "id";
  const lang = navigator.language;
  if (lang.startsWith("id")) return "id";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "id" || saved === "en") {
      setLocaleState(saved);
    } else {
      const detected = detectBrowserLocale();
      setLocaleState(detected);
      localStorage.setItem(STORAGE_KEY, detected);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "id" ? "en" : "id";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const t = locales[locale] as Translation;

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
