"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";
import { ServiceCard } from "@/components/services/ServiceCard";
import { createContainerVariants, createItemVariants } from "@/lib/motion";

export function Services() {
  const { locale } = useLanguage();
  const { services, profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = createContainerVariants(0.12, 0, shouldReduceMotion ?? false);
  const itemVariants = createItemVariants(20, 0.5, shouldReduceMotion ?? false);

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
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            whatsappNumber={profile.contact.whatsappNumber}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </section>
  );
}
