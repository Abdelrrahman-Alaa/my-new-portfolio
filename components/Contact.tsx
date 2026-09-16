"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { getWhatsAppUrl } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { createContainerVariants, createItemVariants } from "@/lib/motion";
import { Send } from "lucide-react";
import { WhatsAppCard } from "@/components/contact/WhatsAppCard";
import { EmailCard } from "@/components/contact/EmailCard";
import { CopyToast } from "@/components/contact/CopyToast";

export function Contact() {
  const { locale, t } = useLanguage();
  const { profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const { copied, copy } = useCopyToClipboard(2500);

  const whatsappUrl = getWhatsAppUrl(
    profile.contact.whatsappNumber,
    t(profile.contact.whatsappMessage)
  );

  const containerVariants = createContainerVariants(0.1, 0, shouldReduceMotion ?? false);
  const itemVariants = createItemVariants(16, 0.45, shouldReduceMotion ?? false);

  return (
    <section
      id="contact"
      className="space-y-12 scroll-mt-28 relative"
      aria-label={locale === "ar" ? "قسم التواصل" : "Contact Section"}
    >
      {/* Toast Notification for Copied Email */}
      <CopyToast show={copied} />

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
        <WhatsAppCard
          profile={profile}
          whatsappUrl={whatsappUrl}
          variants={itemVariants}
        />
        <EmailCard
          profile={profile}
          copied={copied}
          onCopy={() => copy(profile.contact.email)}
          variants={itemVariants}
        />
      </motion.div>
    </section>
  );
}
