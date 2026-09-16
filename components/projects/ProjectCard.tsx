"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/types/portfolio";
import { ExternalLink, Eye, TrendingUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons/GithubIcon";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project, e?: React.MouseEvent) => void;
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const { locale, t } = useLanguage();
  const primaryMetric = project.metrics[0];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col justify-between rounded-3xl bg-surface border border-border-subtle shadow-xs hover:border-terracotta/40 hover:shadow-md transition-all overflow-hidden"
    >
      {/* Project Header Image & Preview Frame */}
      <div
        onClick={(e) => onOpenModal(project, e)}
        className="relative aspect-16/10 w-full overflow-hidden bg-canvas border-b border-border-subtle cursor-pointer group/img"
      >
        <Image
          src={project.image}
          alt={t(project.title)}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

        {/* Category & Featured Badge overlay */}
        <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2 z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 shadow-xs">
            {project.category}
          </span>

          {/* Primary Highlight Metric Pill */}
          {primaryMetric && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 shadow-xs text-xs font-extrabold text-white font-jakarta">
              <TrendingUp className="w-3.5 h-3.5 text-terracotta" />
              <span>{primaryMetric.value}</span>
              <span className="text-xs text-white/80 font-normal">
                {t(primaryMetric.label)}
              </span>
            </div>
          )}
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
            onClick={(e) => onOpenModal(project, e)}
            className="project-details-btn flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-hover hover:bg-border-subtle text-primary-text font-bold text-xs transition-colors cursor-pointer border border-border-subtle"
          >
            <Eye className="w-3.5 h-3.5 text-terracotta" />
            <span>{locale === "ar" ? "تفاصيل المشروع" : "Case Study"}</span>
          </button>

          {/* Live Demo Link & Repo */}
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
}
