"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { portfolioData } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  const { locale, dir } = useLanguage();
  const { theme } = useTheme();
  const { services } = portfolioData;

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary-text transition-colors duration-200">
      {/* Fixed Responsive Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-20 sm:space-y-28">
        {/* Dedicated Hero Section Component */}
        <Hero />

        {/* Dedicated Filterable Projects Showcase with Bespoke Modal */}
        <Projects />

        {/* Services Section Preview (Will be replaced in Task 8) */}
        <section className="space-y-6" id="services">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-text">
            {locale === "ar" ? "خدمات البيزنس المباشرة" : "Business-Focused Services"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-surface border border-border-subtle shadow-xs space-y-4"
              >
                <div className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-terracotta/15 text-terracotta">
                  {service.badge[locale] || service.badge.ar}
                </div>
                <h3 className="text-lg font-bold text-primary-text">
                  {service.title[locale] || service.title.ar}
                </h3>
                <p className="text-sm text-secondary-text leading-relaxed">
                  {service.description[locale] || service.description.ar}
                </p>
                <ul className="space-y-2 pt-2 border-t border-border-subtle">
                  {(service.features[locale] || service.features.ar).slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-secondary-text">
                      <CheckCircle2 className="w-3.5 h-3.5 text-whatsapp shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer info & status */}
        <footer id="contact" className="p-4 rounded-xl bg-surface border border-border-subtle text-xs text-secondary-text flex flex-wrap items-center justify-between gap-2">
          <div>
            <span>Locale: </span>
            <strong className="text-primary-text uppercase">{locale}</strong> |{" "}
            <span>Direction: </span>
            <strong className="text-primary-text uppercase">{dir}</strong> |{" "}
            <span>Theme: </span>
            <strong className="text-primary-text capitalize">{theme}</strong>
          </div>
          <div className="font-mono text-terracotta">
            Projects Showcase Active
          </div>
        </footer>
      </main>
    </div>
  );
}
