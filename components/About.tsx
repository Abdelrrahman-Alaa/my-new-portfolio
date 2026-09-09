"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import {
  Code2,
  Server,
  Wrench,
  Award,
  Sparkles,
  CheckCircle2,
  Calendar,
  FolderCheck,
  HeartHandshake,
} from "lucide-react";

export function About() {
  const { locale, t } = useLanguage();
  const { profile, skillCategories } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const categoryIcons = {
    frontend: Code2,
    backend: Server,
    tools: Wrench,
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
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

  const stats = [
    {
      id: "years",
      value: profile.stats.yearsExperience,
      label: {
        ar: "سنوات خبرة عملية في تطوير الويب",
        en: "Years of Engineering Experience",
      },
      sublabel: {
        ar: "تطوير مستمر ومواكبة لأحدث المعايير",
        en: "Hands-on full-stack development",
      },
      icon: Calendar,
    },
    {
      id: "projects",
      value: profile.stats.completedProjects,
      label: {
        ar: "مشروع ومنصة رقمية منجزة",
        en: "Delivered Web Projects & Apps",
      },
      sublabel: {
        ar: "متاجر، منصات سحابية، ومواقع شركات",
        en: "E-commerce, SaaS & Corporate Portals",
      },
      icon: FolderCheck,
    },
    {
      id: "satisfaction",
      value: profile.stats.clientSatisfaction,
      label: {
        ar: "معدل رضا العملاء والالتزام",
        en: "Client Satisfaction & Retention",
      },
      sublabel: {
        ar: "شراكات مستمرة ونتائج قابلة للقياس",
        en: "Transparent communication & delivery",
      },
      icon: HeartHandshake,
    },
  ];

  return (
    <section
      id="about"
      className="space-y-12 scroll-mt-28"
      aria-label={locale === "ar" ? "عنّي والمهارات التقنية" : "About & Technical Skills"}
    >
      {/* Section Header */}
      <div className="space-y-3 max-w-2xl border-b border-border-subtle pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-bold">
          <Award className="w-3.5 h-3.5" />
          <span>{locale === "ar" ? "الشراكة والخبرة التقنية" : "Partnership & Technical Mastery"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-text tracking-tight">
          {t(profile.aboutTitle)}
        </h2>
        <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
          {locale === "ar"
            ? "تعرف على فلسفة العمل، معايير الجودة، والتقنيات البرمجية التي أعتمد عليها في بناء مشاريعك."
            : "Explore the development philosophy, quality benchmarks, and battle-tested technologies powering your projects."}
        </p>
      </div>

      {/* Main Content Grid: Narrative Story vs Categorized Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Narrative Bio & Trust Stats (7 cols) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="lg:col-span-6 space-y-8"
        >
          {/* Narrative Card */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-8 rounded-3xl bg-surface border border-border-subtle shadow-xs space-y-5"
          >
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-terracotta">
              <Sparkles className="w-4 h-4" />
              <span>{locale === "ar" ? "فلسفة العمل والمنهجية" : "Engineering Philosophy"}</span>
            </div>

            <div className="space-y-4 text-secondary-text text-sm sm:text-base leading-relaxed">
              {(profile.aboutBio[locale] || profile.aboutBio.ar).map((paragraph, idx) => (
                <p key={idx} className="relative">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Commitments Checklist */}
            <div className="pt-4 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { ar: "كود نظيف وقابل للتوسع", en: "Clean, Scalable Architecture" },
                { ar: "سرعة تحميل خارقة 100/100", en: "Sub-second 100/100 Speed" },
                { ar: "توافق مثالي مع كل الشاشات", en: "Flawless Multi-Device UI" },
                { ar: "التزام كامل بمواعيد التسليم", en: "Strict Milestone Punctuality" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-primary-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-whatsapp shrink-0" />
                  <span>{item[locale] || item.ar}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Cards Row */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => {
              const IconComponent = stat.icon;

              return (
                <div
                  key={stat.id}
                  className="p-5 rounded-2xl bg-surface border border-border-subtle shadow-xs space-y-2 hover:border-terracotta/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold text-terracotta font-jakarta tracking-tight">
                      {stat.value}
                    </span>
                    <div className="p-2 rounded-xl bg-canvas text-secondary-text">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-primary-text leading-snug">
                      {stat.label[locale] || stat.label.ar}
                    </h3>
                    <p className="text-[11px] text-secondary-text mt-0.5">
                      {stat.sublabel[locale] || stat.sublabel.ar}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column: Categorized Technical Skills (5 cols) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="lg:col-span-6 space-y-6"
        >
          {skillCategories.map((category) => {
            const IconComponent =
              categoryIcons[category.id as keyof typeof categoryIcons] || Code2;

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="p-6 sm:p-7 rounded-3xl bg-surface border border-border-subtle shadow-xs hover:border-terracotta/30 transition-all space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-hover flex items-center justify-center text-terracotta shadow-2xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-primary-text">
                      {t(category.title)}
                    </h3>
                    <p className="text-xs text-secondary-text">
                      {t(category.description)}
                    </p>
                  </div>
                </div>

                {/* Skills Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-canvas border border-border-subtle hover:border-terracotta/40 transition-colors flex flex-col justify-between gap-1 group"
                    >
                      <span className="font-bold text-xs sm:text-sm text-primary-text group-hover:text-terracotta transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center justify-between text-[10px] text-secondary-text font-mono">
                        <span>{skill.tag || "Tool"}</span>
                        <span className="text-terracotta/80 font-sans">{skill.level.split("•")[0]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
