"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Project, ProjectCategory } from "@/types/portfolio";
import { CategoryOption } from "@/data/projects";

interface ProjectFilterTabsProps {
  categories: CategoryOption[];
  projects: Project[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  shouldReduceMotion?: boolean | null;
}

export function ProjectFilterTabs({
  categories,
  projects,
  activeCategory,
  onSelectCategory,
  shouldReduceMotion,
}: ProjectFilterTabsProps) {
  const { t } = useLanguage();

  return (
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
            onClick={() => onSelectCategory(cat.id)}
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
              className={`relative z-10 px-1.5 py-0.5 rounded-md text-xs font-mono ${
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
  );
}
