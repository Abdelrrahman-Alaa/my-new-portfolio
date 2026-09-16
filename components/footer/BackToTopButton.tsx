"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  const { locale } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      id="footer-back-to-top"
      className="inline-flex items-center gap-2 text-xs font-semibold text-secondary-text hover:text-primary-text transition-colors cursor-pointer py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-md"
    >
      <span>{locale === "ar" ? "العودة للأعلى" : "Back to top"}</span>
      <ArrowUp className="w-3.5 h-3.5" />
    </button>
  );
}
