"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DeveloperProfile } from "@/types/portfolio";
import { Zap } from "lucide-react";

interface FooterBrandProps {
  profile: DeveloperProfile;
}

export function FooterBrand({ profile }: FooterBrandProps) {
  const { locale, t } = useLanguage();

  return (
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
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas border border-border-subtle text-xs font-mono text-secondary-text">
        <Zap className="w-3 h-3 text-whatsapp" />
        <span>Static Export • 100/100 Lighthouse Speed</span>
      </div>
    </div>
  );
}
