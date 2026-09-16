"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SkillCategory } from "@/types/portfolio";
import { Code2, Server, Wrench, Terminal } from "lucide-react";

interface SkillsMatrixProps {
  skillCategories: SkillCategory[];
  containerVariants?: Variants;
  itemVariants?: Variants;
}

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  tools: Wrench,
};

export function SkillsMatrix({
  skillCategories,
  containerVariants,
  itemVariants,
}: SkillsMatrixProps) {
  const { locale, t } = useLanguage();

  const totalSkills = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <div className="space-y-6 pt-4">
      <div className="flex items-center justify-between border-b border-border-subtle pb-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-text">
          <Terminal className="w-4 h-4 text-terracotta" />
          <span>
            {locale === "ar"
              ? "الترسانة والمهارات البرمجية المعتمدة"
              : "Battle-Tested Tech Stack"}
          </span>
        </div>
        <span className="text-xs text-secondary-text font-mono">
          {totalSkills} {locale === "ar" ? "تقنية وأداة" : "Technologies"}
        </span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
      >
        {skillCategories.map((category) => {
          const IconComponent =
            categoryIcons[category.id as keyof typeof categoryIcons] || Code2;

          return (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-surface border border-border-subtle shadow-xs hover:border-terracotta/30 transition-all space-y-6"
            >
              {/* Category Header */}
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-surface-hover flex items-center justify-center text-terracotta shadow-2xs border border-border-subtle">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-primary-text">
                    {t(category.title)}
                  </h3>
                  <p className="text-xs text-secondary-text mt-1 leading-relaxed">
                    {t(category.description)}
                  </p>
                </div>
              </div>

              {/* Skills Chips Grid */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border-subtle">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-canvas border border-border-subtle hover:border-terracotta/40 transition-colors flex flex-col justify-between gap-1 group"
                  >
                    <span className="font-bold text-xs text-primary-text group-hover:text-terracotta transition-colors truncate">
                      {skill.name}
                    </span>
                    <div className="flex items-center justify-between text-xs text-secondary-text font-mono">
                      <span>{skill.tag || "Tool"}</span>
                      <span className="text-terracotta/80 font-sans">
                        {skill.level.split("•")[0]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
