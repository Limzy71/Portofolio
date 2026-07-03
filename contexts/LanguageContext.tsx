"use client";

import {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
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

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "id";

  const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (saved === "id" || saved === "en") return saved;

  return detectBrowserLocale();
}

function subscribeLocale(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("portfolio-locale-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("portfolio-locale-change", onStoreChange);
  };
}

function emitLocaleChange() {
  window.dispatchEvent(new Event("portfolio-locale-change"));
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore<Locale>(subscribeLocale, getStoredLocale, () => "id");

  const setLocale = useCallback((newLocale: Locale) => {
    localStorage.setItem(STORAGE_KEY, newLocale);
    emitLocaleChange();
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "id" ? "en" : "id");
  }, [locale, setLocale]);

  const t: Translation = locales[locale];

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

