"use client";

import React, { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { DeveloperProfile, NavigationItem } from "@/types/portfolio";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { MessageSquare, ArrowUpRight } from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: DeveloperProfile;
  navigation: NavigationItem[];
  whatsappLink: string;
}

export function MobileDrawer({
  isOpen,
  onClose,
  profile,
  navigation,
  whatsappLink,
}: MobileDrawerProps) {
  const { locale, t } = useLanguage();
  const { theme } = useTheme();
  const mobileDrawerRef = useRef<HTMLDivElement>(null);

  useBodyScrollLock(isOpen);
  useFocusTrap(mobileDrawerRef, {
    isOpen,
    onClose,
  });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={mobileDrawerRef}
        className="absolute top-18 inset-x-4 p-6 rounded-3xl bg-surface border border-border-subtle shadow-xl space-y-6 animate-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={locale === "ar" ? "قائمة التنقل للهواتف" : "Mobile navigation drawer"}
      >
        {/* Mobile Status Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
          <div className="flex items-center gap-2 text-xs font-bold text-primary-text">
            <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
            <span>{t(profile.availability.label)}</span>
          </div>
          <span className="text-xs text-secondary-text font-mono">
            {locale.toUpperCase()} • {theme.toUpperCase()}
          </span>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col gap-2">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between p-3.5 rounded-xl text-base font-bold text-primary-text hover:bg-surface-hover hover:text-terracotta transition-colors"
            >
              <span>{t(item.label)}</span>
              <ArrowUpRight className="w-4 h-4 text-secondary-text" />
            </a>
          ))}
        </nav>

        {/* Mobile Quick Action Buttons */}
        <div className="pt-2 border-t border-border-subtle space-y-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>
              {locale === "ar" ? "محادثة سريعة عبر واتساب" : "Direct WhatsApp Chat"}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
