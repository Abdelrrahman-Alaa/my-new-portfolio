"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { getWhatsAppUrl } from "@/lib/utils";
import {
  MessageSquare,
  Mail,
  Copy,
  Check,
  Clock,
  Globe2,
  Send,
  ArrowUpRight,
} from "lucide-react";

export function Contact() {
  const { locale, t } = useLanguage();
  const { profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const [copied, setCopied] = useState(false);

  const whatsappUrl = getWhatsAppUrl(
    profile.contact.whatsappNumber,
    t(profile.contact.whatsappMessage)
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
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

  return (
    <section
      id="contact"
      className="space-y-12 scroll-mt-28 relative"
      aria-label={locale === "ar" ? "قسم التواصل" : "Contact Section"}
    >
      {/* Toast Notification for Copied Email */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-dark-obsidian text-warm-sand border border-dark-border shadow-2xl flex items-center gap-3 font-semibold text-xs sm:text-sm"
            role="alert"
          >
            <div className="w-5 h-5 rounded-full bg-whatsapp flex items-center justify-center text-white">
              <Check className="w-3 h-3 stroke-3" />
            </div>
            <span>
              {locale === "ar"
                ? "تم نسخ البريد الإلكتروني بنجاح إلى الحافظة!"
                : "Email copied to clipboard successfully!"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Header */}
      <div className="space-y-3 max-w-2xl border-b border-border-subtle pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta/10 text-terracotta-dark dark:text-terracotta text-xs font-bold">
          <Send className="w-3.5 h-3.5" />
          <span>{locale === "ar" ? "تواصل مباشر وبدء العمل" : "Direct Contact & Project Inquiries"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-text tracking-tight">
          {locale === "ar"
            ? "هل لديك فكرة مشروع أو ترغب في تطوير موقعك؟"
            : "Have an upcoming project or looking to scale your platform?"}
        </h2>
        <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
          {locale === "ar"
            ? "أنا متاح دائماً لمناقشة أفكارك وتقديم استشارة تقنية سريعة وتحديد خطة العمل والجدول الزمني المناسب."
            : "I am actively available for consultations, new builds, and technical partnerships. Reach out directly."}
        </p>
      </div>

      {/* Contact Cards Grid: Prominent WhatsApp vs One-Click Email */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
      >
        {/* Prominent WhatsApp Card (7 cols) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-surface border border-whatsapp/40 ring-1 ring-whatsapp/15 shadow-xs space-y-6 relative overflow-hidden"
        >
          <div className="space-y-5 relative z-10">
            {/* Live Active Status Dot */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-whatsapp/10 border border-whatsapp/25 text-whatsapp text-xs font-bold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-whatsapp" />
                </span>
                <span>{t(profile.availability.label)}</span>
              </div>

              {/* Response Time Guarantee */}
              <div className="flex items-center gap-1.5 text-xs text-secondary-text font-medium">
                <Clock className="w-3.5 h-3.5 text-terracotta" />
                <span>{locale === "ar" ? "متوسط الرد: أقل من ساعة" : "Avg. Response: Under 1h"}</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary-text leading-tight">
                {locale === "ar"
                  ? "محادثة فورية ومباشرة عبر واتساب"
                  : "Instant Chat on WhatsApp"}
              </h3>
              <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
                {locale === "ar"
                  ? "الطريقة الأسرع لمناقشة المتطلبات، الأسعار، والمواعيد بدون أي تعقيدات أو انتظار طويل."
                  : "The fastest channel to discuss requirements, project estimates, and start timelines directly."}
              </p>
            </div>

            {/* Verified Direct Number Display */}
            <div className="p-3.5 rounded-2xl bg-canvas border border-border-subtle flex items-center justify-between gap-4 font-mono text-xs sm:text-sm text-primary-text">
              <span className="text-secondary-text font-sans text-xs">
                {locale === "ar" ? "الرقم المعتمد:" : "Direct Line:"}
              </span>
              <span className="font-bold text-whatsapp font-jakarta tracking-wider" dir="ltr">
                {profile.contact.whatsappFormatted}
              </span>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2 relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="group flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              <MessageSquare className="w-5 h-5 fill-white group-hover:rotate-6 transition-transform" />
              <span>
                {locale === "ar" ? "فتح المحادثة عبر واتساب الآن" : "Start WhatsApp Conversation"}
              </span>
              <ArrowUpRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Email & Location Card (5 cols) */}
        <motion.div
          variants={itemVariants}
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
                <span className="font-mono text-xs sm:text-sm font-semibold text-primary-text truncate" dir="ltr">
                  {profile.contact.email}
                </span>

                <button
                  onClick={copyEmail}
                  id="copy-email-btn"
                  className="shrink-0 w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-surface hover:bg-surface-hover text-secondary-text hover:text-terracotta border border-border-subtle transition-colors cursor-pointer"
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
                onClick={copyEmail}
                className="w-full py-2.5 px-3 rounded-xl bg-surface-hover hover:bg-border-subtle text-primary-text text-xs font-bold transition-colors cursor-pointer border border-border-subtle flex items-center justify-center gap-2 min-h-[44px]"
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
      </motion.div>
    </section>
  );
}
