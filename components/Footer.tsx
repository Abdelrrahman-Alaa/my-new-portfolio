"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { FooterBrand } from "@/components/footer/FooterBrand";
import { FooterNav } from "@/components/footer/FooterNav";
import { FooterSocial } from "@/components/footer/FooterSocial";
import { BackToTopButton } from "@/components/footer/BackToTopButton";

export function Footer() {
  const { locale, t } = useLanguage();
  const { profile, navigation } = portfolioData;

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border-subtle bg-surface/60 backdrop-blur-xs pt-16 pb-12 transition-colors"
      aria-label={locale === "ar" ? "تذييل الموقع" : "Footer"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-12">
        {/* Top Footer Row: Identity vs Navigation vs Social */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          <FooterBrand profile={profile} />
          <FooterNav items={navigation} />
          <FooterSocial profile={profile} />
        </div>

        {/* Bottom Footer Row: Copyright vs Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-subtle text-xs text-secondary-text">
          <p>
            © {currentYear} {t(profile.name)}.{" "}
            {locale === "ar"
              ? "جميع الحقوق محفوظة."
              : "All rights reserved."}
          </p>

          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
