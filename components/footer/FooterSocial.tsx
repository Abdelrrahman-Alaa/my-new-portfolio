"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DeveloperProfile } from "@/types/portfolio";
import { getWhatsAppUrl } from "@/lib/utils";
import { MessageSquare, Mail } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons/GithubIcon";
import { LinkedinIcon } from "@/components/ui/icons/LinkedinIcon";

interface FooterSocialProps {
  profile: DeveloperProfile;
}

export function FooterSocial({ profile }: FooterSocialProps) {
  const { locale, t } = useLanguage();

  const whatsappUrl = getWhatsAppUrl(
    profile.contact.whatsappNumber,
    t(profile.contact.whatsappMessage)
  );

  return (
    <div className="md:col-span-3 space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-wider text-primary-text">
        {locale === "ar" ? "قنوات التواصل المباشر" : "Direct Channels"}
      </h3>

      <div className="flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-canvas border border-border-subtle text-secondary-text hover:text-whatsapp hover:border-whatsapp/40 transition-colors shadow-2xs"
          title="WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        {profile.contact.githubUrl && (
          <a
            href={profile.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-canvas border border-border-subtle text-secondary-text hover:text-primary-text hover:border-border transition-colors shadow-2xs"
            title="GitHub"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}

        {profile.contact.linkedinUrl && (
          <a
            href={profile.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-canvas border border-border-subtle text-secondary-text hover:text-primary-text hover:border-border transition-colors shadow-2xs"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        )}

        <a
          href={`mailto:${profile.contact.email}`}
          className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-canvas border border-border-subtle text-secondary-text hover:text-terracotta hover:border-terracotta/40 transition-colors shadow-2xs"
          title={profile.contact.email}
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
