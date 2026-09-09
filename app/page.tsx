"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  const { locale, dir } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary-text transition-colors duration-200">
      {/* Fixed Responsive Navbar */}
      <Navbar />

      {/* Main Content Area - Expansive Modern Width (max-w-7xl: 1280px) */}
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto w-full space-y-20 sm:space-y-28">
        {/* Dedicated Hero Section Component */}
        <Hero />

        {/* Dedicated Filterable Projects Showcase with Bespoke Modal */}
        <Projects />

        {/* Dedicated Outcome-Focused Business Services Component */}
        <Services />

        {/* Footer info & status */}
        <footer
          id="contact"
          className="p-4 rounded-xl bg-surface border border-border-subtle text-xs text-secondary-text flex flex-wrap items-center justify-between gap-2"
        >
          <div>
            <span>Locale: </span>
            <strong className="text-primary-text uppercase">
              {locale}
            </strong> | <span>Direction: </span>
            <strong className="text-primary-text uppercase">
              {dir}
            </strong> | <span>Theme: </span>
            <strong className="text-primary-text capitalize">{theme}</strong>
          </div>
          <div className="font-mono text-terracotta">
            Services Section Active
          </div>
        </footer>
      </main>
    </div>
  );
}
