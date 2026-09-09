"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { getWhatsAppUrl } from "@/lib/utils";
import {
  Globe,
  ShoppingBag,
  Zap,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Sparkles,
} from "lucide-react";

export function Services() {
  const { locale, isRTL, t } = useLanguage();
  const { services, profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const iconMap = {
    Globe,
    ShoppingBag,
    Zap,
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="space-y-10 scroll-mt-28"
      aria-label={locale === "ar" ? "خدمات البيزنس" : "Business Services"}
    >
      {/* Section Header */}
      <div className="space-y-3 max-w-2xl border-b border-border-subtle pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta/10 text-terracotta-dark dark:text-terracotta text-xs font-bold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{locale === "ar" ? "خدمات مخصصة لنمو البيزنس" : "Tailored Business Services"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-text tracking-tight">
          {locale === "ar" ? "حلول برمجية متكاملة تصنع الفارق" : "Engineered Solutions That Drive Growth"}
        </h2>
        <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
          {locale === "ar"
            ? "خدمات واضحة وعملية تركز على تحقيق نتائج استثمارية حقيقية، بدون تعقيدات أو مصطلحات تقنية مبهمة."
            : "Transparent, outcome-driven engineering services designed to generate tangible ROI for your business."}
        </p>
      </div>

      {/* Services Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {services.map((service, index) => {
          const IconComponent = iconMap[service.iconName] || Globe;
          const isFeatured = service.id === "ecommerce-whatsapp";

          const inquiryUrl = getWhatsAppUrl(
            profile.contact.whatsappNumber,
            locale === "ar"
              ? `مرحباً عبدالرحمن، أود الاستفسار والبدء في خدمة: "${t(service.title)}"`
              : `Hello Abdelrahman, I would like to inquire about your service: "${t(service.title)}"`
          );

          return (
            <motion.div
              key={service.id}
              variants={itemVariants}
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

                {/* Service Features Checklist */}
                <div className="space-y-3 pt-4 border-t border-border-subtle">
                  <span className="text-xs font-bold text-primary-text uppercase tracking-wider block">
                    {locale === "ar" ? "ما ستحصل عليه:" : "What's Included:"}
                  </span>
                  <ul className="space-y-2.5">
                    {(service.features[locale] || service.features.ar).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-secondary-text">
                        <CheckCircle2 className="w-4 h-4 text-whatsapp shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="pt-8">
                <a
                  href={inquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                    isFeatured
                      ? "bg-terracotta hover:bg-terracotta-hover text-white shadow-xs hover:shadow-sm"
                      : "bg-surface-hover hover:bg-border-subtle text-primary-text border border-border-subtle"
                  }`}
                >
                  <span>{locale === "ar" ? "طلب الخدمة ومناقشة التفاصيل" : "Inquire About This Service"}</span>
                  <ArrowIcon className="w-4 h-4 text-inherit group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
