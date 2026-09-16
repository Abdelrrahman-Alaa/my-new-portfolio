"use client";

import React, { RefObject } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Languages, Menu, X, MessageSquare } from "lucide-react";

interface NavbarControlsProps {
  whatsappLink: string;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  toggleButtonRef: RefObject<HTMLButtonElement | null>;
}

export function NavbarControls({
  whatsappLink,
  mobileMenuOpen,
  onToggleMobileMenu,
  toggleButtonRef,
}: NavbarControlsProps) {
  const { locale, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        id="navbar-lang-toggle"
        className="h-10 px-3.5 flex items-center gap-1.5 rounded-xl text-xs font-bold bg-surface border border-border-subtle text-primary-text hover:bg-surface-hover transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
        aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
        title={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      >
        <Languages className="w-3.5 h-3.5 text-terracotta" />
        <span className="uppercase">{locale === "ar" ? "EN" : "عربي"}</span>
      </button>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        id="navbar-theme-toggle"
        className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-border-subtle text-primary-text hover:bg-surface-hover transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
        aria-label={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
        title={
          isDark
            ? locale === "ar"
              ? "الوضع النهاري"
              : "Light Mode"
            : locale === "ar"
            ? "الوضع الليلي"
            : "Dark Mode"
        }
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-terracotta" />
        )}
      </button>

      {/* WhatsApp Quick CTA (Desktop) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold transition-all shadow-xs hover:shadow-sm"
      >
        <MessageSquare className="w-3.5 h-3.5 fill-white" />
        <span>{locale === "ar" ? "واتساب مباشر" : "WhatsApp"}</span>
      </a>

      {/* Mobile Menu Toggle Button */}
      <button
        ref={toggleButtonRef}
        onClick={onToggleMobileMenu}
        id="navbar-mobile-toggle"
        className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-surface border border-border-subtle text-primary-text hover:bg-surface-hover transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
        aria-expanded={mobileMenuOpen}
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 text-terracotta" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
