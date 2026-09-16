"use client";

import React, { useState, useRef } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Project, ProjectCategory } from "@/types/portfolio";
import { Layers } from "lucide-react";
import { ProjectFilterTabs } from "@/components/projects/ProjectFilterTabs";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";

export function Projects() {
  const { locale } = useLanguage();
  const { projects, categories, profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Filter projects based on activeCategory
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleOpenModal = (project: Project, e?: React.MouseEvent) => {
    if (e) {
      triggerRef.current = e.currentTarget as HTMLElement;
    }
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    triggerRef.current?.focus();
  };

  return (
    <section
      id="projects"
      className="space-y-10 scroll-mt-28"
      aria-label={locale === "ar" ? "معرض المشاريع" : "Projects Showcase"}
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border-subtle pb-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-terracotta/10 text-terracotta-dark dark:text-terracotta text-xs font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>
              {locale === "ar"
                ? "أعمال واقعية ونتائج موثقة"
                : "Proven Results & Case Studies"}
            </span>
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
          {filteredProjects.length}{" "}
          {locale === "ar" ? "مشاريع معروضة" : "Projects shown"}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <ProjectFilterTabs
        categories={categories}
        projects={projects}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        shouldReduceMotion={shouldReduceMotion}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={handleOpenModal}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        profile={profile}
        onClose={handleCloseModal}
      />
    </section>
  );
}
