"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { getWhatsAppUrl } from "@/lib/utils";
import {
  MessageSquare,
  ArrowDown,
  Gauge,
  Smartphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function Hero() {
  const { locale, t } = useLanguage();
  const { profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const whatsappUrl = getWhatsAppUrl(
    profile.contact.whatsappNumber,
    t(profile.contact.whatsappMessage),
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: "easeOut",
      },
    },
  };

  const metricIcons = {
    speed: Gauge,
    responsive: Smartphone,
    delivery: ShieldCheck,
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-4.25rem)] lg:h-[calc(100svh-4.25rem)] flex flex-col justify-between pt-1 pb-6 sm:pb-8 lg:pb-10 overflow-hidden"
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
          {/* Left Column: Copy & Actions (6 cols) */}
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-3 lg:space-y-3.5">
            {/* Personal Intro & Availability Header */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 sm:gap-3"
            >
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
                  <span className="font-bold text-primary-text">
                    {t(profile.name)}
                  </span>
                  <span className="text-secondary-text/60">•</span>
                  <span className="text-terracotta font-medium font-mono text-[11px]">
                    {locale === "ar" ? "مطور ويب" : "Web Developer"}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface border border-border-subtle text-[11px] sm:text-xs font-semibold text-primary-text shadow-2xs">
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
              <h1 className="text-2xl sm:text-3xl lg:text-[2.35rem] xl:text-[2.65rem] font-extrabold text-primary-text tracking-tight leading-normal ">
                {t(profile.heroHeading)}{" "}
                <span className="relative inline-block text-terracotta">
                  <span className="relative z-10">
                    {t(profile.heroHighlight)}
                  </span>
                  <span
                    className="absolute bottom-1 sm:bottom-1.5 inset-x-0 h-2.5 sm:h-3 bg-terracotta/15 -rotate-1 rounded-sm z-0"
                    aria-hidden="true"
                  />
                </span>
              </h1>

              <p className="text-secondary-text text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-normal max-w-xl">
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
                className="group flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white group-hover:rotate-6 transition-transform" />
                <span>
                  {locale === "ar"
                    ? "محادثة فورية عبر واتساب"
                    : "Direct WhatsApp Chat"}
                </span>
              </a>

              {/* Explore Projects Smooth Scroll CTA */}
              <a
                href="#projects"
                id="hero-projects-cta"
                className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-surface hover:bg-surface-hover text-primary-text border border-border-subtle font-bold text-xs sm:text-sm transition-all hover:border-terracotta/40 cursor-pointer shadow-2xs"
              >
                <span>
                  {locale === "ar"
                    ? "استعراض الأعمال والنتائج"
                    : "Explore Case Studies"}
                </span>
                <ArrowDown className="w-3.5 h-3.5 text-terracotta group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Vector Illustration (6 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 relative flex items-center justify-center w-full"
          >
            {/* Ambient Radial Color Atmosphere */}
            <div
              className="absolute w-[110%] h-[110%] bg-radial from-terracotta/15 via-terracotta/5 to-transparent blur-3xl -z-10 pointer-events-none"
              aria-hidden="true"
            />

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -6, 0],
                      transition: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg flex items-center justify-center"
            >
              <img
                src="/images/hero.webp"
                alt={
                  locale === "ar"
                    ? "رسم توضيحي لمطور برمجيات متكامل"
                    : "Full-Stack Software Engineer Illustration"
                }
                className="w-full max-h-60 sm:max-h-67.5 lg:max-h-75 object-contain select-none drop-shadow-sm transition-transform duration-500 hover:scale-[1.02]"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Metrics Bar */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-border-subtle"
        >
          {profile.trustMetrics.map((metric) => {
            const IconComponent =
              metricIcons[metric.id as keyof typeof metricIcons] || Gauge;

            const displayValue =
              typeof metric.value === "string" ? metric.value : t(metric.value);

            return (
              <div
                key={metric.id}
                className="p-3 sm:p-3.5 rounded-2xl bg-surface border border-border-subtle shadow-xs hover:border-terracotta/30 transition-colors space-y-1 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold text-terracotta font-jakarta tracking-tight">
                    {displayValue}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-canvas flex items-center justify-center text-secondary-text group-hover:text-terracotta transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h2 className="font-bold text-primary-text text-xs sm:text-sm leading-snug">
                    {t(metric.label)}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-secondary-text mt-0.5">
                    {t(metric.sublabel)}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
