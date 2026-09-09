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
  ShieldCheck,
  Terminal,
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
        {/* Narrative Card (7 cols) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-surface border border-border-subtle shadow-xs space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-terracotta-dark dark:text-terracotta">
              <Sparkles className="w-4 h-4" />
              <span>{locale === "ar" ? "فلسفة العمل والمنهجية" : "Engineering Philosophy"}</span>
            </div>

            <div className="space-y-3.5 text-secondary-text text-sm sm:text-base leading-relaxed">
              {(profile.aboutBio[locale] || profile.aboutBio.ar).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Workspace & Engineering Rig Visual */}
          <div className="relative aspect-21/9 sm:aspect-24/9 w-full rounded-2xl overflow-hidden bg-canvas border border-border-subtle group">
            <img
              src="/images/workspace.webp"
              alt="Engineering Workspace Setup"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-2.5 inset-x-3.5 flex items-center justify-between text-white text-xs font-semibold">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                {locale === "ar"
                  ? "بيئة عمل وتطوير مكرسة للإتقان والسرعة"
                  : "Dedicated setup built for high focus & velocity"}
              </span>
              <span className="text-xs font-mono text-white/90 bg-black/50 px-2 py-0.5 rounded-md border border-white/20">
                Setup & Rig
              </span>
            </div>
          </div>

          {/* Commitments Bar */}
          <div className="pt-4 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { ar: "كود نظيف وقابل للتوسع المستقبلي", en: "Clean, Scalable Architecture" },
              { ar: "سرعة تحميل خارقة 100/100", en: "Sub-second 100/100 Speed" },
              { ar: "توافق كامل مع مختلف الشاشات", en: "Flawless Multi-Device UI" },
              { ar: "التزام صارم بمواعيد التسليم", en: "Strict Milestone Punctuality" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-bold text-primary-text">
                <CheckCircle2 className="w-3.5 h-3.5 text-whatsapp shrink-0" />
                <span>{item[locale] || item.ar}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Track Record & Trust Stats Card (5 cols) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-surface border border-border-subtle shadow-xs space-y-6"
        >
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta-dark dark:text-terracotta">
              <ShieldCheck className="w-4 h-4" />
              <span>{locale === "ar" ? "أرقام وإحصائيات الثقة" : "Track Record & Trust"}</span>
            </div>

            {/* Vertically Stacked Stat Blocks */}
            <div className="space-y-4">
              {stats.map((stat) => {
                const IconComponent = stat.icon;

                return (
                  <div
                    key={stat.id}
                    className="p-4 rounded-2xl bg-canvas border border-border-subtle flex items-center justify-between gap-4 hover:border-terracotta/30 transition-colors"
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs sm:text-sm font-bold text-primary-text">
                        {stat.label[locale] || stat.label.ar}
                      </div>
                      <div className="text-xs text-secondary-text">
                        {stat.sublabel[locale] || stat.sublabel.ar}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-3xl font-extrabold text-terracotta font-jakarta tracking-tight">
                        {stat.value}
                      </span>
                      <div className="p-2 rounded-xl bg-surface border border-border-subtle text-secondary-text hidden sm:flex">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Partnership Assurance Footer */}
          <div className="p-3.5 rounded-2xl bg-terracotta/10 border border-terracotta/20 text-xs font-medium text-primary-text flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-terracotta shrink-0" />
            <span>
              {locale === "ar"
                ? "شراكة برمجية مستمرة تبدأ من الفكرة وحتى الإطلاق وما بعده."
                : "Continuous engineering partnership from initial brief through post-launch."}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Part 2: Categorized Technical Skills (Symmetrical Full-Width 3-Column Grid) */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between border-b border-border-subtle pb-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-text">
            <Terminal className="w-4 h-4 text-terracotta" />
            <span>{locale === "ar" ? "الترسانة والمهارات البرمجية المعتمدة" : "Battle-Tested Tech Stack"}</span>
          </div>
          <span className="text-xs text-secondary-text font-mono">
            {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} {locale === "ar" ? "تقنية وأداة" : "Technologies"}
          </span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {skillCategories.map((category) => {
            const IconComponent =
              categoryIcons[category.id as keyof typeof categoryIcons] || Code2;

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-surface border border-border-subtle shadow-xs hover:border-terracotta/30 transition-all space-y-6"
              >
                {/* Category Header */}
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-surface-hover flex items-center justify-center text-terracotta shadow-2xs border border-border-subtle">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-primary-text">
                      {t(category.title)}
                    </h3>
                    <p className="text-xs text-secondary-text mt-1 leading-relaxed">
                      {t(category.description)}
                    </p>
                  </div>
                </div>

                {/* Skills Chips Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border-subtle">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-canvas border border-border-subtle hover:border-terracotta/40 transition-colors flex flex-col justify-between gap-1 group"
                    >
                      <span className="font-bold text-xs text-primary-text group-hover:text-terracotta transition-colors truncate">
                        {skill.name}
                      </span>
                      <div className="flex items-center justify-between text-xs text-secondary-text font-mono">
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
