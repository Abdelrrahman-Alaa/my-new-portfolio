"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Service } from "@/types/portfolio";
import { getWhatsAppUrl } from "@/lib/utils";
import {
  Globe,
  ShoppingBag,
  Zap,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ServiceCardProps {
  service: Service;
  whatsappNumber: string;
  variants?: Variants;
}

const iconMap = {
  Globe,
  ShoppingBag,
  Zap,
};

export function ServiceCard({ service, whatsappNumber, variants }: ServiceCardProps) {
  const { locale, isRTL, t } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const IconComponent = iconMap[service.iconName] || Globe;
  const isFeatured = service.id === "ecommerce-whatsapp";

  const inquiryUrl = getWhatsAppUrl(
    whatsappNumber,
    locale === "ar"
      ? `مرحباً عبدالرحمن، أود الاستفسار والبدء في خدمة: "${t(service.title)}"`
      : `Hello Abdelrahman, I would like to inquire about your service: "${t(service.title)}"`
  );

  return (
    <motion.div
      variants={variants}
      className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 bg-surface border transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 ${
        isFeatured
          ? "border-terracotta/50 ring-1 ring-terracotta/20"
          : "border-border-subtle hover:border-terracotta/30"
      }`}
    >
      {/* Highlight Badge for Featured Service */}
      {isFeatured && (
        <div className="absolute -top-3.5 right-6 rtl:right-auto rtl:left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta text-white text-xs font-bold shadow-xs">
          <Sparkles className="w-3 h-3" />
          <span>{t(service.badge)}</span>
        </div>
      )}

      {/* Service Header */}
      <div className="space-y-5">
        {/* Service Icon */}
        <div className="flex items-center justify-between">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
              isFeatured
                ? "bg-terracotta/15 text-terracotta"
                : "bg-surface-hover text-terracotta"
            }`}
          >
            <IconComponent className="w-7 h-7" />
          </div>

          {!isFeatured && (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-surface-hover text-secondary-text border border-border-subtle">
              {t(service.badge)}
            </span>
          )}
        </div>

        {/* Service Title & Description */}
        <div className="space-y-2.5">
          <h3 className="text-xl sm:text-2xl font-extrabold text-primary-text leading-snug">
            {t(service.title)}
          </h3>
          <p className="text-sm text-secondary-text leading-relaxed">
            {t(service.description)}
          </p>
        </div>

        {/* Deliverables Checklist */}
        <div className="pt-2 border-t border-border-subtle/60 space-y-2.5">
          <span className="text-xs font-bold text-primary-text uppercase tracking-wider block">
            {locale === "ar" ? "ما يتضمنه العمل بالتحديد:" : "What's included:"}
          </span>
          <ul className="space-y-2">
            {(service.features[locale] || service.features.ar).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary-text"
              >
                <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Direct WhatsApp Service Action */}
      <div className="pt-6 mt-6 border-t border-border-subtle">
        <a
          href={inquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full group flex items-center justify-between px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
            isFeatured
              ? "bg-terracotta text-white hover:bg-terracotta-dark shadow-xs"
              : "bg-surface-hover hover:bg-terracotta/10 text-primary-text hover:text-terracotta border border-border-subtle"
          }`}
        >
          <span>
            {locale === "ar" ? "طلب الخدمة ومناقشة التفاصيل" : "Inquire via WhatsApp"}
          </span>
          <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
