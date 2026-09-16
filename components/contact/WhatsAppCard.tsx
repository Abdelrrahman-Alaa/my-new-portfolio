"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { DeveloperProfile } from "@/types/portfolio";
import { MessageSquare, Clock, ArrowUpRight } from "lucide-react";

interface WhatsAppCardProps {
  profile: DeveloperProfile;
  whatsappUrl: string;
  variants?: Variants;
}

export function WhatsAppCard({ profile, whatsappUrl, variants }: WhatsAppCardProps) {
  const { locale, t } = useLanguage();

  return (
    <motion.div
      variants={variants}
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
            <span>
              {locale === "ar" ? "متوسط الرد: أقل من ساعة" : "Avg. Response: Under 1h"}
            </span>
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
          <span
            className="font-bold text-whatsapp font-jakarta tracking-wider"
            dir="ltr"
          >
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
            {locale === "ar"
              ? "فتح المحادثة عبر واتساب الآن"
              : "Start WhatsApp Conversation"}
          </span>
          <ArrowUpRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
