"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";

interface CopyToastProps {
  show: boolean;
}

export function CopyToast({ show }: CopyToastProps) {
  const { locale } = useLanguage();

  return (
    <AnimatePresence>
      {show && (
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
  );
}
