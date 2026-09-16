"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { DeveloperProfile } from "@/types/portfolio";
import { ShieldCheck, Calendar, FolderCheck, HeartHandshake, Sparkles } from "lucide-react";

interface AboutStatsCardProps {
  profile: DeveloperProfile;
  variants?: Variants;
}

export function AboutStatsCard({ profile, variants }: AboutStatsCardProps) {
  const { locale } = useLanguage();

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
    <motion.div
      variants={variants}
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
                  <div className="p-2 rounded-xl bg-terracotta/10 border border-terracotta/20 text-terracotta hidden sm:flex">
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
  );
}
