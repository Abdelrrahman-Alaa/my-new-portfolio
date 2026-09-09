"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { portfolioData } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { ArrowRight, ArrowLeft, CheckCircle2, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Home() {
  const { locale, dir, isRTL, t } = useLanguage();
  const { theme } = useTheme();
  const { profile, projects, services } = portfolioData;

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary-text transition-colors duration-200">
      {/* Universal Fixed Responsive Navbar */}
      <Navbar />

      {/* Main Content with top padding for fixed navbar */}
      <main className="flex-1 pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-16">
        {/* Hero Preview Section */}
        <section className="p-8 md:p-12 rounded-3xl bg-surface border border-border-subtle shadow-xs space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-terracotta" />
            {t(profile.heroBadge)}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-text tracking-tight leading-tight">
            {t(profile.heroHeading)}{" "}
            <span className="text-terracotta underline decoration-terracotta/30 underline-offset-8">
              {t(profile.heroHighlight)}
            </span>
          </h1>

          <p className="text-secondary-text text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
            {t(profile.heroSubheading)}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={getWhatsAppUrl(profile.contact.whatsappNumber, t(profile.contact.whatsappMessage))}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>{locale === "ar" ? "محادثة فورية عبر واتساب" : "Direct WhatsApp Chat"}</span>
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-surface-hover hover:bg-border-subtle text-primary-text border border-border-subtle font-semibold text-sm transition-all cursor-pointer"
            >
              <span>{locale === "ar" ? "استعراض المشاريع" : "View Projects"}</span>
              <ArrowIcon className="w-4 h-4 text-terracotta" />
            </a>
          </div>

          {/* Trust Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border-subtle">
            {profile.trustMetrics.map((metric) => (
              <div key={metric.id} className="p-4 rounded-xl bg-canvas border border-border-subtle space-y-1">
                <div className="text-2xl font-extrabold text-terracotta font-jakarta">
                  {metric.value}
                </div>
                <div className="font-bold text-primary-text text-sm">
                  {t(metric.label)}
                </div>
                <div className="text-xs text-secondary-text">
                  {t(metric.sublabel)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="space-y-6" id="projects">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-text">
              {locale === "ar" ? "نماذج من المشاريع المعتمدة" : "Featured Case Studies"}
            </h2>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-border-subtle text-secondary-text">
              {projects.length} {locale === "ar" ? "مشاريع" : "Projects"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl bg-surface border border-border-subtle shadow-xs space-y-4 hover:border-terracotta/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-terracotta px-2 py-0.5 rounded bg-terracotta/10">
                    {project.category}
                  </span>
                  <span className="text-xs text-secondary-text font-mono">
                    {project.metrics[0].value} {t(project.metrics[0].label)}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-text">
                    {t(project.title)}
                  </h3>
                  <p className="text-sm text-secondary-text mt-1">
                    {t(project.tagline)}
                  </p>
                </div>

                <p className="text-sm text-secondary-text leading-relaxed">
                  {t(project.description)}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-canvas border border-border-subtle text-secondary-text font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
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
                  {t(service.badge)}
                </div>
                <h3 className="text-lg font-bold text-primary-text">
                  {t(service.title)}
                </h3>
                <p className="text-sm text-secondary-text leading-relaxed">
                  {t(service.description)}
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

        {/* Footer info & active status */}
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
            Navbar & Header Active
          </div>
        </footer>
      </main>
    </div>
  );
}
