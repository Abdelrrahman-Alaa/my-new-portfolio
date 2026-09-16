"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Project, DeveloperProfile } from "@/types/portfolio";
import { getWhatsAppUrl } from "@/lib/utils";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { X, Globe, ExternalLink, MessageSquare } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  profile: DeveloperProfile;
  onClose: () => void;
}

export function ProjectModal({ project, profile, onClose }: ProjectModalProps) {
  const { locale, t } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);

  const isOpen = Boolean(project);

  useBodyScrollLock(isOpen);
  useFocusTrap(modalRef, {
    isOpen,
    onClose,
    initialFocusSelector: "#close-modal-btn",
  });

  if (!project) return null;

  const whatsappInquiryUrl = getWhatsAppUrl(
    profile.contact.whatsappNumber,
    `${t(profile.contact.whatsappMessage)} (${t(project.title)})`
  );

  return (
    <AnimatePresence>
      <div
        id="project-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-surface border border-border-subtle shadow-2xl p-6 sm:p-8 space-y-6 my-auto"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Modal Top Bar with Category, Title and Separated Close Button */}
          <div className="flex items-start justify-between gap-4 pb-2 border-b border-border-subtle">
            <div className="space-y-2 flex-1">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-terracotta-dark dark:text-terracotta px-2.5 py-1 rounded-md bg-terracotta/10 border border-terracotta/20">
                {project.category}
              </span>
              <h3
                id="modal-project-title"
                className="text-2xl sm:text-3xl font-extrabold text-primary-text leading-tight"
              >
                {t(project.title)}
              </h3>
              <p className="text-sm sm:text-base text-secondary-text font-medium">
                {t(project.tagline)}
              </p>
            </div>

            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="shrink-0 p-2.5 rounded-xl bg-surface-hover hover:bg-border-subtle text-secondary-text hover:text-primary-text transition-colors cursor-pointer border border-border-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Visual Mockup Banner */}
          <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-canvas border border-border-subtle shadow-inner">
            <img
              src={project.image}
              alt={t(project.title)}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Business Impact Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-canvas border border-border-subtle">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl font-extrabold text-terracotta font-jakarta">
                  {m.value}
                </div>
                <div className="text-xs font-medium text-secondary-text">
                  {t(m.label)}
                </div>
              </div>
            ))}
          </div>

          {/* Full Case Study Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-primary-text uppercase tracking-wider">
              {locale === "ar" ? "نظرة عامة والحل المنفذ" : "Overview & Technical Solution"}
            </h4>
            <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
              {t(project.description)}
            </p>
          </div>

          {/* Tech Stack in Modal */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-secondary-text uppercase tracking-wider">
              {locale === "ar" ? "التقنيات المستخدمة في المشروع" : "Technologies Used"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-lg bg-canvas border border-border-subtle text-primary-text font-mono font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-border-subtle">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-terracotta hover:bg-terracotta-hover text-white font-bold text-sm transition-colors shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
            >
              <Globe className="w-4 h-4" />
              <span>{locale === "ar" ? "فتح المعاينة الحية" : "Open Live Preview"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm transition-colors shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>{locale === "ar" ? "ناقش مشروعاً مشابهاً" : "Discuss Similar Project"}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
