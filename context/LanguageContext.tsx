"use client";

import React, { createContext, useContext, useEffect, useMemo, useSyncExternalStore, useCallback } from "react";
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

function subscribeLocale(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-locale-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio-locale-change", callback);
  };
}

function getLocaleSnapshot(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") return stored;
  } catch {}
  return "ar";
}

function getLocaleServerSnapshot(): Locale {
  return "ar";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, getLocaleSnapshot, getLocaleServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      window.dispatchEvent(new Event("portfolio-locale-change"));
    } catch {}
  }, []);

  const toggleLanguage = useCallback(() => {
    setLocale(locale === "ar" ? "en" : "ar");
  }, [locale, setLocale]);

  const t = useCallback((localized: LocalizedString): string => {
    return localized[locale] || localized.ar || localized.en || "";
  }, [locale]);

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
  }, [locale, setLocale, toggleLanguage, t]);

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
