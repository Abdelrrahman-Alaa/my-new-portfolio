"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Award } from "lucide-react";
import { createContainerVariants, createItemVariants } from "@/lib/motion";
import { AboutBioCard } from "@/components/about/AboutBioCard";
import { AboutStatsCard } from "@/components/about/AboutStatsCard";
import { SkillsMatrix } from "@/components/about/SkillsMatrix";

export function About() {
  const { locale, t } = useLanguage();
  const { profile, skillCategories } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = createContainerVariants(0.1, 0, shouldReduceMotion ?? false);
  const itemVariants = createItemVariants(16, 0.45, shouldReduceMotion ?? false);

  return (
    <section
      id="about"
      className="space-y-12 scroll-mt-28"
      aria-label={locale === "ar" ? "عنّي والمهارات التقنية" : "About & Technical Skills"}
    >
      {/* Section Header */}
      <div className="space-y-3 max-w-2xl border-b border-border-subtle pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta/10 text-terracotta-dark dark:text-terracotta text-xs font-bold">
          <Award className="w-3.5 h-3.5" />
          <span>{locale === "ar" ? "الشراكة والخبرة التقنية" : "Partnership & Technical Mastery"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-text tracking-tight">
          {t(profile.aboutTitle)}
        </h2>
        <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
          {locale === "ar"
            ? "فلسفة عمل تركز على القيمة، مدعومة بخبرة عملية مثبتة وترسانة برمجية حديثة."
            : "A value-first engineering philosophy backed by proven delivery metrics and modern tooling."}
        </p>
      </div>

      {/* Part 1: Symmetrical Two-Column Card Layout (Story + Track Record) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
      >
        <AboutBioCard profile={profile} variants={itemVariants} />
        <AboutStatsCard profile={profile} variants={itemVariants} />
      </motion.div>

      {/* Part 2: Categorized Technical Skills */}
      <SkillsMatrix
        skillCategories={skillCategories}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
    </section>
  );
}
