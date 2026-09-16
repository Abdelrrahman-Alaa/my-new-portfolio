"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { NavigationItem } from "@/types/portfolio";

interface FooterNavProps {
  items: NavigationItem[];
}

export function FooterNav({ items }: FooterNavProps) {
  const { locale, t } = useLanguage();

  return (
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
        {items.map((item) => (
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
  );
}
