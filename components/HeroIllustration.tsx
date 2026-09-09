"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare, Zap, TrendingUp, CheckCircle2, Globe2 } from "lucide-react";

export function HeroIllustration() {
  const { locale } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  // Floating animation helpers for natural organic bobbing
  const floatAnim1 = shouldReduceMotion
    ? {}
    : {
        y: [0, -10, 0],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
      };

  const floatAnim2 = shouldReduceMotion
    ? {}
    : {
        y: [0, 10, 0],
        transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 },
      };

  const floatAnim3 = shouldReduceMotion
    ? {}
    : {
        y: [0, -8, 0],
        transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay: 1.5 },
      };

  return (
    <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center justify-center select-none overflow-visible">
      {/* Ambient Radial Color Atmosphere */}
      <div
        className="absolute w-[120%] h-[120%] bg-radial from-terracotta/15 via-terracotta/5 to-transparent blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center">
        {/* ========================================================================= */}
        {/* Central Monumental Wireframe Globe (Ada-Style Minimalist Vector Sphere)   */}
        {/* ========================================================================= */}
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Globe Sphere Gradient Fill */}
            <radialGradient id="globe-sphere" cx="45%" cy="40%" r="60%">
              <stop offset="0%" stopColor="var(--color-surface-hover)" stopOpacity="0.8" />
              <stop offset="60%" stopColor="var(--color-surface)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-canvas)" stopOpacity="0.1" />
            </radialGradient>

            {/* Glowing Accent Gradient */}
            <linearGradient id="globe-glow-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C26D53" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#E08B73" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.7" />
            </linearGradient>

            <filter id="vector-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Globe Outer Atmosphere Aura */}
          <circle
            cx="250"
            cy="250"
            r="190"
            className="stroke-border-subtle"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.6"
          />

          {/* Globe Base Solid Sphere */}
          <circle
            cx="250"
            cy="250"
            r="170"
            fill="url(#globe-sphere)"
            className="stroke-border-subtle"
            strokeWidth="1.5"
          />

          {/* Latitude Arcs (Bold Ada-Style Graphic Grid) */}
          <ellipse cx="250" cy="250" rx="170" ry="45" className="stroke-border-subtle" strokeWidth="1.2" />
          <ellipse cx="250" cy="250" rx="170" ry="105" className="stroke-border-subtle" strokeWidth="1.2" />
          <line x1="80" y1="250" x2="420" y2="250" className="stroke-border-subtle" strokeWidth="1.2" />

          {/* Longitude Ellipses */}
          <ellipse cx="250" cy="250" rx="60" ry="170" className="stroke-border-subtle" strokeWidth="1.2" />
          <ellipse cx="250" cy="250" rx="125" ry="170" className="stroke-border-subtle" strokeWidth="1.2" />
          <line x1="250" y1="80" x2="250" y2="420" className="stroke-border-subtle" strokeWidth="1.2" />

          {/* Bold Graphic Network Flow Arcs (Ada Signature Style) */}
          <path
            d="M 130 200 Q 230 110 370 170"
            stroke="url(#globe-glow-line)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 160 320 Q 270 380 360 290"
            stroke="url(#globe-glow-line)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 170 160 Q 260 260 350 340"
            stroke="#C26D53"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeOpacity="0.7"
            fill="none"
          />

          {/* Glowing Network Hub Points on Globe */}
          {/* Node 1 */}
          <circle cx="130" cy="200" r="4.5" fill="#C26D53" />
          <circle cx="130" cy="200" r="9" stroke="#C26D53" strokeWidth="1" opacity="0.5" />

          {/* Node 2 */}
          <circle cx="370" cy="170" r="5" fill="#22C55E" />
          <circle cx="370" cy="170" r="11" stroke="#22C55E" strokeWidth="1.2" opacity="0.6">
            {!shouldReduceMotion && (
              <animate attributeName="r" values="6;14;6" dur="2.5s" repeatCount="indefinite" />
            )}
          </circle>

          {/* Node 3 */}
          <circle cx="250" cy="250" r="6" fill="#C26D53" />
          <circle cx="250" cy="250" r="12" stroke="#C26D53" strokeWidth="1.5" opacity="0.4" />

          {/* Node 4 */}
          <circle cx="360" cy="290" r="4.5" fill="#22C55E" />
          <circle cx="360" cy="290" r="8" stroke="#22C55E" strokeWidth="1" opacity="0.4" />

          {/* Node 5 */}
          <circle cx="160" cy="320" r="4" fill="#C26D53" opacity="0.8" />
        </svg>

        {/* ========================================================================= */}
        {/* Floating Product Interaction Cards (Ada + Chatbase Style)                 */}
        {/* ========================================================================= */}

        {/* 1. Top-Left Floating Card: WhatsApp Instant Conversion Bubble */}
        <motion.div
          animate={floatAnim1}
          className="absolute -top-3 -left-4 sm:-left-8 z-20"
        >
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-surface/95 backdrop-blur-md border border-border-subtle shadow-xl hover:border-whatsapp/50 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-whatsapp flex items-center justify-center text-white shrink-0 shadow-xs">
              <MessageSquare className="w-5 h-5 fill-white" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary-text font-jakarta">
                  {locale === "ar" ? "طلب جديد عبر واتساب" : "New WhatsApp Order"}
                </span>
                <span className="w-2 h-2 rounded-full bg-whatsapp animate-ping" />
              </div>
              <p className="text-[11px] text-secondary-text font-medium">
                {locale === "ar"
                  ? "متجر رواسي • تم التأكيد في 0.8s"
                  : "Rawasi Store • Confirmed in 0.8s"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2. Right-Center Floating Card: High Performance & AI Engine (Chatbase Style) */}
        <motion.div
          animate={floatAnim2}
          className="absolute top-1/3 -right-4 sm:-right-8 z-20"
        >
          <div className="w-60 sm:w-64 p-4 rounded-3xl bg-surface/95 backdrop-blur-md border border-border-subtle shadow-2xl hover:border-terracotta/40 transition-colors space-y-3">
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-terracotta/15 flex items-center justify-center text-terracotta">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-primary-text">
                  {locale === "ar" ? "محرك السرعة الفائقة" : "High-Velocity Stack"}
                </span>
              </div>
              {/* Active Switch Toggle (Chatbase Style) */}
              <div className="w-9 h-5 rounded-full bg-whatsapp p-0.5 flex items-center justify-end shadow-inner">
                <div className="w-4 h-4 rounded-full bg-white shadow-xs" />
              </div>
            </div>

            {/* Performance Metric Bar */}
            <div className="p-2.5 rounded-2xl bg-canvas border border-border-subtle flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-[10px] font-semibold text-secondary-text uppercase tracking-wider">
                  Lighthouse Score
                </div>
                <div className="text-xs font-bold text-primary-text">
                  {locale === "ar" ? "أداء قياسي 100/100" : "100/100 Mobile Speed"}
                </div>
              </div>
              <div className="flex items-center gap-1 font-mono font-bold text-whatsapp text-sm bg-whatsapp/10 px-2 py-1 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100</span>
              </div>
            </div>

            {/* Architecture Stack Chips */}
            <div className="flex items-center justify-between text-[10px] text-secondary-text font-mono pt-0.5">
              <span>Next.js 16</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Tailwind v4</span>
            </div>
          </div>
        </motion.div>

        {/* 3. Bottom-Left Floating Card: Edge Conversion & Analytics */}
        <motion.div
          animate={floatAnim3}
          className="absolute -bottom-4 left-2 sm:left-4 z-20"
        >
          <div className="flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-surface/95 backdrop-blur-md border border-border-subtle shadow-xl hover:border-terracotta/40 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-terracotta/10 flex items-center justify-center text-terracotta shrink-0">
              <TrendingUp className="w-4.5 h-4.5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-jakarta">
                <span className="text-base font-extrabold text-terracotta">+48%</span>
                <span className="text-xs font-bold text-primary-text">
                  {locale === "ar" ? "معدل تحويل الطلبات" : "Checkout Conversion"}
                </span>
              </div>
              <div className="text-[10px] text-secondary-text flex items-center gap-1 mt-0.5">
                <Globe2 className="w-3 h-3 text-secondary-text/80" />
                <span>
                  {locale === "ar" ? "زمن استجابة 24ms حول العالم" : "24ms Global Edge Latency"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
