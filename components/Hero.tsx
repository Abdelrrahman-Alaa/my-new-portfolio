"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { getWhatsAppUrl } from "@/lib/utils";
import { createContainerVariants, createItemVariants } from "@/lib/motion";
import { HeroIntro } from "@/components/hero/HeroIntro";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { TrustMetricsBar } from "@/components/hero/TrustMetricsBar";

export function Hero() {
  const { locale, t } = useLanguage();
  const { profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const whatsappUrl = getWhatsAppUrl(
    profile.contact.whatsappNumber,
    t(profile.contact.whatsappMessage)
  );

  const containerVariants = createContainerVariants(0.1, 0.05, shouldReduceMotion ?? false);
  const itemVariants = createItemVariants(16, 0.45, shouldReduceMotion ?? false);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-4.25rem)] lg:h-[calc(100svh-4.25rem)] flex flex-col justify-between pt-1 pb-6 sm:pb-8 lg:pb-10"
      aria-label={locale === "ar" ? "الواجهة الرئيسية" : "Hero Introduction"}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex-1 flex flex-col justify-between gap-3 lg:gap-4 my-auto"
      >
        {/* Main Hero Split Layout on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center flex-1">
          <HeroIntro
            profile={profile}
            whatsappUrl={whatsappUrl}
            itemVariants={itemVariants}
          />
          <HeroVisual
            itemVariants={itemVariants}
            shouldReduceMotion={shouldReduceMotion}
          />
        </div>

        {/* Trust Metrics Bar */}
        <TrustMetricsBar
          metrics={profile.trustMetrics}
          itemVariants={itemVariants}
        />
      </motion.div>
    </section>
  );
}
