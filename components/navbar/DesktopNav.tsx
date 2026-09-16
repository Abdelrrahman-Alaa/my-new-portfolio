"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { NavigationItem } from "@/types/portfolio";

interface DesktopNavProps {
  items: NavigationItem[];
}

export function DesktopNav({ items }: DesktopNavProps) {
  const { t } = useLanguage();

  return (
    <nav
      className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-surface/80 backdrop-blur-sm border border-border-subtle shadow-2xs"
      aria-label="Main Navigation"
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-secondary-text hover:text-primary-text hover:bg-surface-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
        >
          {t(item.label)}
        </a>
      ))}
    </nav>
  );
}
