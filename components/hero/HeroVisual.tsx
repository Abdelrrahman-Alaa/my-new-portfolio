"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface HeroVisualProps {
  itemVariants?: Variants;
  shouldReduceMotion?: boolean | null;
}

export function HeroVisual({ itemVariants, shouldReduceMotion }: HeroVisualProps) {
  const { locale } = useLanguage();

  return (
    <motion.div
      variants={itemVariants}
      className="lg:col-span-6 relative flex items-center justify-center w-full"
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -6, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
        className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg flex items-center justify-center"
      >
        <img
          src="/images/hero.webp"
          alt={
            locale === "ar"
              ? "رسم توضيحي لمطور برمجيات متكامل"
              : "Full-Stack Software Engineer Illustration"
          }
          className="w-full max-h-60 sm:max-h-67.5 lg:max-h-75 object-contain select-none drop-shadow-sm transition-transform duration-500 hover:scale-[1.02]"
          loading="eager"
        />
      </motion.div>
    </motion.div>
  );
}
