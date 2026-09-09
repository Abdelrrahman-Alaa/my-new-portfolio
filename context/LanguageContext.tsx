"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Locale, LocalizedString } from "@/types/portfolio";

interface LanguageContextType {
  locale: Locale;
  dir: "rtl" | "ltr";
  isRTL: boolean;
  setLocale: (locale: Locale) => void;
  toggleLanguage: () => void;
  t: (localized: LocalizedString) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "en" || stored === "ar") {
        setLocaleState(stored);
        document.documentElement.lang = stored;
        document.documentElement.dir = stored === "ar" ? "rtl" : "ltr";
      } else {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
      }
    } catch {
      // Ignore localStorage errors in private browsing
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // Ignore
    }
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
  };

  const toggleLanguage = () => {
    setLocale(locale === "ar" ? "en" : "ar");
  };

  const t = (localized: LocalizedString): string => {
    return localized[locale] || localized.ar || localized.en || "";
  };

  const value = useMemo<LanguageContextType>(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    return {
      locale,
      dir,
      isRTL: locale === "ar",
      setLocale,
      toggleLanguage,
      t,
    };
  }, [locale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
