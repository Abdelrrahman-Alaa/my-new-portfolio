"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { getWhatsAppUrl } from "@/lib/utils";
import {
  ArrowUp,
  MessageSquare,
  Mail,
  Zap,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const { locale, t } = useLanguage();
  const { profile, navigation } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = getWhatsAppUrl(
    profile.contact.whatsappNumber,
    t(profile.contact.whatsappMessage)
  );

  return (
    <footer
      className="border-t border-border-subtle bg-surface/60 backdrop-blur-xs pt-16 pb-12 transition-colors"
      aria-label={locale === "ar" ? "تذييل الموقع" : "Footer"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-12">
        {/* Top Footer Row: Identity vs Navigation vs Social */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Brand Identity & Summary (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-terracotta text-white flex items-center justify-center font-bold text-lg shadow-sm">
                {locale === "ar" ? "ع" : "A"}
              </div>
              <span className="font-extrabold text-xl text-primary-text leading-tight">
                {t(profile.name)}
                <span className="text-terracotta">.</span>
              </span>
            </div>

            <p className="text-sm text-secondary-text leading-relaxed max-w-sm">
              {t(profile.title)}
            </p>

            {/* Performance Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas border border-border-subtle text-[11px] font-mono text-secondary-text">
              <Zap className="w-3 h-3 text-whatsapp" />
              <span>Static Export • 100/100 Lighthouse Speed</span>
            </div>
          </div>

          {/* Quick Section Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary-text">
              {locale === "ar" ? "أقسام الموقع" : "Navigation"}
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#"
                  className="text-secondary-text hover:text-terracotta transition-colors"
                >
                  {locale === "ar" ? "الرئيسية" : "Home"}
                </a>
              </li>
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-secondary-text hover:text-terracotta transition-colors"
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary-text">
              {locale === "ar" ? "قنوات التواصل المباشر" : "Direct Channels"}
            </h3>

            <div className="flex items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-canvas border border-border-subtle text-secondary-text hover:text-whatsapp hover:border-whatsapp/40 transition-colors shadow-2xs"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.contact.email}`}
                className="p-2.5 rounded-xl bg-canvas border border-border-subtle text-secondary-text hover:text-terracotta hover:border-terracotta/40 transition-colors shadow-2xs"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={profile.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-canvas border border-border-subtle text-secondary-text hover:text-primary-text hover:border-border-hover transition-colors shadow-2xs"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profile.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-canvas border border-border-subtle text-secondary-text hover:text-blue-500 hover:border-blue-500/40 transition-colors shadow-2xs"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              {/* Scroll to top button */}
              <button
                onClick={scrollToTop}
                id="back-to-top-btn"
                className="p-2.5 rounded-xl bg-surface-hover hover:bg-border-subtle text-primary-text border border-border-subtle transition-colors cursor-pointer mr-auto rtl:mr-0 rtl:ml-auto"
                title={locale === "ar" ? "العودة للأعلى" : "Back to top"}
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-text">
          <p>
            © {new Date().getFullYear()} {t(profile.name)}.{" "}
            {locale === "ar"
              ? "جميع الحقوق محفوظة. صُمم وهُندس بكل إتقان."
              : "All rights reserved. Crafted with precision & care."}
          </p>

          <p className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Next.js 16</span> • <span>Tailwind v4</span> • <span>Cairo & Plus Jakarta</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
