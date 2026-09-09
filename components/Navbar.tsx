"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { portfolioData } from "@/data/portfolio";
import { Sun, Moon, Languages, Menu, X, MessageSquare, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function Navbar() {
  const { locale, isRTL, toggleLanguage, t } = useLanguage();
  const { theme, isDark, toggleTheme } = useTheme();
  const { profile, navigation } = portfolioData;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Optimized scroll listener using passive event listener and threshold check
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldScroll = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const whatsappLink = getWhatsAppUrl(
    profile.contact.whatsappNumber,
    t(profile.contact.whatsappMessage)
  );

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-surface/85 backdrop-blur-md border-b border-border-subtle shadow-xs"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-lg"
            aria-label="Home"
            onClick={closeMobileMenu}
          >
            <div className="w-9 h-9 rounded-xl bg-terracotta text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              {locale === "ar" ? "ع" : "A"}
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-primary-text leading-tight">
                {t(profile.name)}
                <span className="text-terracotta">.</span>
              </span>
              <span className="text-[11px] text-secondary-text hidden sm:inline-block font-medium">
                {locale === "ar" ? "مهندس برمجيات" : "Software Engineer"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-surface/80 backdrop-blur-sm border border-border-subtle shadow-2xs"
            aria-label="Main Navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-secondary-text hover:text-primary-text hover:bg-surface-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              >
                {t(item.label)}
              </a>
            ))}
          </nav>

          {/* Controls & Quick Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              id="navbar-lang-toggle"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-surface border border-border-subtle text-primary-text hover:bg-surface-hover transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
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
              className="p-2 rounded-xl bg-surface border border-border-subtle text-primary-text hover:bg-surface-hover transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              aria-label={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
              title={isDark ? (locale === "ar" ? "الوضع النهاري" : "Light Mode") : (locale === "ar" ? "الوضع الليلي" : "Dark Mode")}
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
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold transition-all shadow-xs hover:shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>{locale === "ar" ? "واتساب مباشر" : "WhatsApp"}</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              id="navbar-mobile-toggle"
              className="md:hidden p-2 rounded-xl bg-surface border border-border-subtle text-primary-text hover:bg-surface-hover transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
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
        </div>
      </header>

      {/* Mobile Drawer Overlay & Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden animate-in fade-in duration-200"
          onClick={closeMobileMenu}
        >
          <div
            className="absolute top-18 inset-x-4 p-6 rounded-3xl bg-surface border border-border-subtle shadow-xl space-y-6 animate-in slide-in-from-top-4 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Status Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
              <div className="flex items-center gap-2 text-xs font-bold text-primary-text">
                <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
                <span>{t(profile.availability.label)}</span>
              </div>
              <span className="text-[11px] text-secondary-text font-mono">
                {locale.toUpperCase()} • {theme.toUpperCase()}
              </span>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between p-3 rounded-xl text-base font-bold text-primary-text hover:bg-surface-hover hover:text-terracotta transition-colors"
                >
                  <span>{t(item.label)}</span>
                  <ArrowUpRight className="w-4 h-4 text-secondary-text" />
                </a>
              ))}
            </nav>

            {/* Mobile Quick Action Buttons */}
            <div className="pt-2 border-t border-border-subtle space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>{locale === "ar" ? "محادثة سريعة عبر واتساب" : "Direct WhatsApp Chat"}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
