"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { DeveloperProfile } from "@/types/portfolio";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface AboutBioCardProps {
  profile: DeveloperProfile;
  variants?: Variants;
}

export function AboutBioCard({ profile, variants }: AboutBioCardProps) {
  const { locale } = useLanguage();

  return (
    <motion.div
      variants={variants}
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

      {/* Workspace Visual */}
      <div className="relative aspect-21/9 sm:aspect-24/9 w-full rounded-2xl overflow-hidden bg-canvas border border-border-subtle group">
        <Image
          src={profile.workspaceImage || "/images/workspace.webp"}
          alt="Engineering Workspace Setup"
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
          sizes="(max-width: 768px) 100vw, 50vw"
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
  );
}
