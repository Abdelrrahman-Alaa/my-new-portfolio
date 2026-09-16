"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TrustMetric } from "@/types/portfolio";
import { Gauge, Smartphone, ShieldCheck } from "lucide-react";

interface TrustMetricsBarProps {
  metrics: TrustMetric[];
  itemVariants?: Variants;
}

const metricIcons = {
  speed: Gauge,
  responsive: Smartphone,
  delivery: ShieldCheck,
};

export function TrustMetricsBar({ metrics, itemVariants }: TrustMetricsBarProps) {
  const { locale, t } = useLanguage();

  return (
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-border-subtle"
    >
      {metrics.map((metric) => {
        const IconComponent =
          metricIcons[metric.id as keyof typeof metricIcons] || Gauge;

        const displayValue =
          typeof metric.value === "string" ? metric.value : t(metric.value);

        return (
          <div
            key={metric.id}
            className="p-3 sm:p-3.5 rounded-2xl bg-surface border border-border-subtle shadow-xs hover:border-terracotta/30 transition-colors space-y-1 group"
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-2xl sm:text-3xl font-extrabold text-terracotta ${
                  locale === "ar" ? "font-cairo" : "font-jakarta tracking-tight"
                }`}
              >
                {displayValue}
              </span>
              <div className="w-8 h-8 rounded-xl bg-canvas flex items-center justify-center text-secondary-text group-hover:text-terracotta transition-colors">
                <IconComponent className="w-4 h-4" />
              </div>
            </div>

            <div>
              <h2 className="font-bold text-primary-text text-xs sm:text-sm leading-snug">
                {t(metric.label)}
              </h2>
              <p className="text-xs text-secondary-text mt-0.5">
                {t(metric.sublabel)}
              </p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
