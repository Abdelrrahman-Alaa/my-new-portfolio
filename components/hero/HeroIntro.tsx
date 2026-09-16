"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { DeveloperProfile } from "@/types/portfolio";
import { MessageSquare, ArrowDown, Sparkles } from "lucide-react";

interface HeroIntroProps {
  profile: DeveloperProfile;
  whatsappUrl: string;
  itemVariants?: Variants;
}

export function HeroIntro({ profile, whatsappUrl, itemVariants }: HeroIntroProps) {
  const { locale, t } = useLanguage();

  return (
    <div className="lg:col-span-6 space-y-2.5 sm:space-y-3 lg:space-y-3.5">
      {/* Personal Intro & Availability Header */}
      <motion.div variants={itemVariants} className="flex items-center gap-2.5 sm:gap-3">
        <div className="relative shrink-0">
          <img
            src={profile.avatar || "/images/avatar.webp"}
            alt={t(profile.name)}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-terracotta/30 shadow-xs"
          />
        </div>

        <div className="space-y-0.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-secondary-text">
            <span>{locale === "ar" ? "مرحباً، أنا" : "Hello, I'm"}</span>
            <span className="font-bold text-primary-text">{t(profile.name)}</span>
            <span className="text-secondary-text/60">•</span>
            <span className="text-terracotta font-medium font-mono text-xs">
              {locale === "ar" ? "مطور ويب" : "Web Developer"}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface border border-border-subtle text-xs font-semibold text-primary-text shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-whatsapp" />
            </span>
            <span>{t(profile.heroBadge)}</span>
            <Sparkles className="w-3 h-3 text-terracotta ml-0.5" />
          </div>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-primary-text tracking-tight leading-normal">
          {t(profile.heroHeading)}{" "}
          <span className="relative inline-block text-terracotta">
            <span className="relative z-10">{t(profile.heroHighlight)}</span>
            <span
              className="absolute bottom-1 sm:bottom-1.5 inset-x-0 h-2.5 sm:h-3 bg-terracotta/15 -rotate-1 rounded-sm z-0"
              aria-hidden="true"
            />
          </span>
        </h1>

        <p className="text-secondary-text text-xs sm:text-sm lg:text-base leading-relaxed font-normal max-w-xl">
          {t(profile.heroSubheading)}
        </p>
      </motion.div>

      {/* Primary Dual CTAs */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap lg:flex-nowrap items-center gap-3 pt-0.5"
      >
        {/* WhatsApp Direct CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="hero-whatsapp-cta"
          className="group flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <MessageSquare className="w-4 h-4 fill-white group-hover:rotate-6 transition-transform" />
          <span>
            {locale === "ar" ? "محادثة فورية عبر واتساب" : "Direct WhatsApp Chat"}
          </span>
        </a>

        {/* Explore Projects Smooth Scroll CTA */}
        <a
          href="#projects"
          id="hero-projects-cta"
          className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-surface hover:bg-surface-hover text-primary-text border border-border-subtle font-bold text-xs sm:text-sm transition-all hover:border-terracotta/40 cursor-pointer shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <span>
            {locale === "ar" ? "استعراض الأعمال والنتائج" : "Explore Case Studies"}
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-terracotta group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  );
}
