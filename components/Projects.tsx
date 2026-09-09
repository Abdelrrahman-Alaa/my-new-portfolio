"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Project, ProjectCategory } from "@/types/portfolio";
import { getWhatsAppUrl } from "@/lib/utils";
import {
  ExternalLink,
  Eye,
  X,
  MessageSquare,
  TrendingUp,
  Globe,
  Layers,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function Projects() {
  const { locale, t } = useLanguage();
  const { projects, categories, profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on activeCategory
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="space-y-10 scroll-mt-28" aria-label={locale === "ar" ? "معرض المشاريع" : "Projects Showcase"}>
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border-subtle pb-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "أعمال واقعية ونتائج موثقة" : "Proven Results & Case Studies"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-text tracking-tight">
            {locale === "ar" ? "معرض المشاريع المعتمدة" : "Featured Case Studies"}
          </h2>
          <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
            {locale === "ar"
              ? "حلول رقمية تم تصميمها وهندستها لتحقيق نمو ملموس في مبيعات وطلبات العملاء."
              : "Bespoke digital platforms engineered to maximize client inquiries, sales, and speed."}
          </p>
        </div>

        {/* Total Count Badge */}
        <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-surface border border-border-subtle text-secondary-text self-start sm:self-auto">
          {filteredProjects.length} {locale === "ar" ? "مشاريع معروضة" : "Projects shown"}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-surface border border-border-subtle w-fit">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count =
            cat.id === "all"
              ? projects.length
              : projects.filter((p) => p.category === cat.id).length;

          return (
            <button
              key={cat.id}
              id={`filter-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center gap-2 ${
                isActive
                  ? "text-white"
                  : "text-secondary-text hover:text-primary-text hover:bg-surface-hover"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId={shouldReduceMotion ? undefined : "activeFilterBadge"}
                  className="absolute inset-0 rounded-xl bg-terracotta shadow-xs"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10">{t(cat.label)}</span>
              <span
                className={`relative z-10 px-1.5 py-0.2 rounded-md text-[10px] font-mono ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-canvas text-secondary-text border border-border-subtle"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const primaryMetric = project.metrics[0];

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col justify-between rounded-3xl bg-surface border border-border-subtle shadow-xs hover:border-terracotta/40 hover:shadow-md transition-all overflow-hidden"
              >
                {/* Project Header Image & Preview Frame */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-16/10 w-full overflow-hidden bg-canvas border-b border-border-subtle cursor-pointer group/img"
                >
                  <img
                    src={project.image}
                    alt={t(project.title)}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Category & Featured Badge overlay */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2 z-10">
                    <span className="text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 shadow-xs">
                      {project.category}
                    </span>

                    {/* Primary Highlight Metric Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 shadow-xs text-xs font-extrabold text-white font-jakarta">
                      <TrendingUp className="w-3.5 h-3.5 text-whatsapp" />
                      <span>{primaryMetric.value}</span>
                      <span className="text-[11px] text-white/80 font-normal">
                        {t(primaryMetric.label)}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Quick View Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-obsidian text-xs font-bold shadow-lg backdrop-blur-xs transform translate-y-1 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-terracotta" />
                      {locale === "ar" ? "استعراض دراسة الحالة" : "Explore Case Study"}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="p-6 border-b border-border-subtle space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-primary-text group-hover:text-terracotta transition-colors">
                    {t(project.title)}
                  </h3>
                  <p className="text-sm font-medium text-secondary-text">
                    {t(project.tagline)}
                  </p>
                </div>

                {/* Project Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-sm text-secondary-text leading-relaxed line-clamp-3">
                    {t(project.description)}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg bg-canvas border border-border-subtle text-secondary-text font-mono font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-border-subtle">
                    {/* View Details / Case Study Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="project-details-btn flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-hover hover:bg-border-subtle text-primary-text font-bold text-xs transition-colors cursor-pointer border border-border-subtle"
                    >
                      <Eye className="w-3.5 h-3.5 text-terracotta" />
                      <span>{locale === "ar" ? "تفاصيل المشروع" : "Case Study"}</span>
                    </button>

                    {/* Live Demo Link */}
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-canvas border border-border-subtle text-secondary-text hover:text-primary-text hover:bg-surface-hover transition-colors"
                          aria-label="GitHub Repository"
                          title="View Source Code"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-hover text-white font-bold text-xs transition-colors shadow-xs"
                      >
                        <span>{locale === "ar" ? "معاينة حية" : "Live Demo"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Bespoke Project Modal (Option 1) */}
      <AnimatePresence>
        {selectedProject && (
          <div
            id="project-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
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
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-terracotta px-2.5 py-1 rounded-md bg-terracotta/10 border border-terracotta/20">
                    {selectedProject.category}
                  </span>
                  <h3
                    id="modal-project-title"
                    className="text-2xl sm:text-3xl font-extrabold text-primary-text leading-tight"
                  >
                    {t(selectedProject.title)}
                  </h3>
                  <p className="text-sm sm:text-base text-secondary-text font-medium">
                    {t(selectedProject.tagline)}
                  </p>
                </div>

                {/* Close Button - Cleanly separated in flex layout */}
                <button
                  id="close-modal-btn"
                  onClick={() => setSelectedProject(null)}
                  className="shrink-0 p-2.5 rounded-xl bg-surface-hover hover:bg-border-subtle text-secondary-text hover:text-primary-text transition-colors cursor-pointer border border-border-subtle"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Project Visual Mockup Banner */}
              <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-canvas border border-border-subtle shadow-inner">
                <img
                  src={selectedProject.image}
                  alt={t(selectedProject.title)}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Business Impact Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-canvas border border-border-subtle">
                {selectedProject.metrics.map((m, idx) => (
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
                  {t(selectedProject.description)}
                </p>
              </div>

              {/* Tech Stack in Modal */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-secondary-text uppercase tracking-wider">
                  {locale === "ar" ? "التقنيات المستخدمة في المشروع" : "Technologies Used"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
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
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-terracotta hover:bg-terracotta-hover text-white font-bold text-sm transition-colors shadow-sm cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                  <span>{locale === "ar" ? "فتح المعاينة الحية" : "Open Live Preview"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getWhatsAppUrl(
                    profile.contact.whatsappNumber,
                    `${t(profile.contact.whatsappMessage)} (${t(selectedProject.title)})`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm transition-colors shadow-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>{locale === "ar" ? "ناقش مشروعاً مشابهاً" : "Discuss Similar Project"}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
