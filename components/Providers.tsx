"use client";

import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemePaletteSwitcher } from "@/components/ThemePaletteSwitcher";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
        <ThemePaletteSwitcher />
      </LanguageProvider>
    </ThemeProvider>
  );
}
