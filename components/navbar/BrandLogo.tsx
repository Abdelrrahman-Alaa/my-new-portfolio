"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DeveloperProfile } from "@/types/portfolio";

interface BrandLogoProps {
  profile: DeveloperProfile;
  onClick?: () => void;
}

export function BrandLogo({ profile, onClick }: BrandLogoProps) {
  const { locale, t } = useLanguage();

  return (
    <a
      href="#"
      className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-lg"
      aria-label="Home"
      onClick={onClick}
    >
      <div className="w-9 h-9 rounded-xl bg-terracotta text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
        {locale === "ar" ? "ع" : "A"}
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-lg text-primary-text leading-tight">
          {t(profile.name)}
          <span className="text-terracotta">.</span>
        </span>
        <span className="text-xs text-secondary-text hidden sm:inline-block font-medium">
          {locale === "ar" ? "مهندس برمجيات" : "Software Engineer"}
        </span>
      </div>
    </a>
  );
}
