"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { DeveloperProfile } from "@/types/portfolio";
import { Mail, Copy, Check, Globe2 } from "lucide-react";

interface EmailCardProps {
  profile: DeveloperProfile;
  copied: boolean;
  onCopy: () => void;
  variants?: Variants;
}

export function EmailCard({ profile, copied, onCopy, variants }: EmailCardProps) {
  const { locale, t } = useLanguage();

  return (
    <motion.div
      variants={variants}
      className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-surface border border-border-subtle shadow-xs space-y-6"
    >
      <div className="space-y-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta-dark dark:text-terracotta">
          <Mail className="w-4 h-4" />
          <span>{locale === "ar" ? "المراسلة الرسمية" : "Official Correspondence"}</span>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-primary-text">
            {locale === "ar" ? "نسخ البريد بنقرة واحدة" : "One-Click Email Copy"}
          </h3>
          <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
            {locale === "ar"
              ? "لتفاصيل العقود، إرسال كراسات الشروط، أو مراسلات الشركات والمؤسسات."
              : "Ideal for sending formal RFP documents, project briefs, or corporate scopes."}
          </p>
        </div>

        {/* Email Address Display Box with Copy Action */}
        <div className="p-3.5 rounded-2xl bg-canvas border border-border-subtle space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span
              className="font-mono text-xs sm:text-sm font-semibold text-primary-text truncate"
              dir="ltr"
            >
              {profile.contact.email}
            </span>

            <button
              onClick={onCopy}
              id="copy-email-btn"
              className="shrink-0 w-11 h-11 min-w-11 min-h-11 flex items-center justify-center rounded-xl bg-surface hover:bg-surface-hover text-secondary-text hover:text-terracotta border border-border-subtle transition-colors cursor-pointer"
              title={locale === "ar" ? "نسخ البريد" : "Copy email address"}
              aria-label="Copy email"
            >
              {copied ? (
                <Check className="w-4 h-4 text-whatsapp" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          <button
            onClick={onCopy}
            className="w-full py-2.5 px-3 rounded-xl bg-surface-hover hover:bg-border-subtle text-primary-text text-xs font-bold transition-colors cursor-pointer border border-border-subtle flex items-center justify-center gap-2 min-h-11"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-whatsapp" />
                <span>{locale === "ar" ? "تم النسخ بنجاح!" : "Copied Successfully!"}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-terracotta" />
                <span>{locale === "ar" ? "نسخ عنوان البريد الإلكتروني" : "Copy Email Address"}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Location & Remote Availability Badge */}
      <div className="pt-4 border-t border-border-subtle space-y-2 text-xs text-secondary-text">
        <div className="flex items-center gap-2 text-primary-text font-bold">
          <Globe2 className="w-4 h-4 text-terracotta" />
          <span>{t(profile.contact.location)}</span>
        </div>
        <p className="text-xs leading-relaxed">
          {locale === "ar"
            ? "خبرة في تنفيذ وإدارة المشاريع الرقمية عن بُعد مع مختلف الدول العربية والخليجية."
            : "Seasoned remote engineering partner serving clients across the Middle East & globally."}
        </p>
      </div>
    </motion.div>
  );
}
