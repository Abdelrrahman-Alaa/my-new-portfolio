"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Palette, Check, ChevronDown, ChevronUp } from "lucide-react";

interface PaletteOption {
  id: string;
  nameAr: string;
  nameEn: string;
  badge: string;
  swatchPrimary: string;
  swatchSecondary: string;
}

const PALETTES: PaletteOption[] = [
  {
    id: "slate",
    nameAr: "Slate Tech",
    nameEn: "Slate Tech",
    badge: "GitHub / Stripe",
    swatchPrimary: "#2563EB",
    swatchSecondary: "#0D1117",
  },
  {
    id: "minimal",
    nameAr: "Minimal Mono",
    nameEn: "Minimal Mono",
    badge: "Apple / Swiss",
    swatchPrimary: "#09090B",
    swatchSecondary: "#FAFAFA",
  },
  {
    id: "sage",
    nameAr: "Nordic Sage",
    nameEn: "Nordic Sage",
    badge: "Natural Calm",
    swatchPrimary: "#2D5A43",
    swatchSecondary: "#FAF9F6",
  },
  {
    id: "original",
    nameAr: "Terracotta",
    nameEn: "Terracotta",
    badge: "Original",
    swatchPrimary: "#C26D53",
    swatchSecondary: "#F7F5F0",
  },
];

const STORAGE_PALETTE_KEY = "portfolio-palette";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio-palette-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio-palette-change", callback);
  };
}

function getSnapshot(): string {
  try {
    return localStorage.getItem(STORAGE_PALETTE_KEY) || "slate";
  } catch {
    return "slate";
  }
}

function getServerSnapshot(): string {
  return "slate";
}

export function ThemePaletteSwitcher() {
  const { isDark, toggleTheme } = useTheme();
  const [minimized, setMinimized] = useState<boolean>(false);
  const activePalette = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Effect solely synchronizes with the external DOM (no setState calls)
  useEffect(() => {
    if (activePalette === "original") {
      document.documentElement.removeAttribute("data-palette");
    } else {
      document.documentElement.setAttribute("data-palette", activePalette);
    }
  }, [activePalette]);

  const applyPalette = (paletteId: string) => {
    try {
      localStorage.setItem(STORAGE_PALETTE_KEY, paletteId);
      window.dispatchEvent(new Event("portfolio-palette-change"));
    } catch {}
  };

  return (
    <aside
      aria-label="Color Palette Switcher"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] sm:max-w-2xl transition-all duration-300 select-none"
    >
      <div className="rounded-2xl bg-surface/95 backdrop-blur-md border border-border-subtle shadow-2xl p-2.5 sm:p-3 text-primary-text ring-1 ring-black/5 dark:ring-white/10">
        <div className="flex items-center justify-between gap-3 pb-2 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-surface-hover flex items-center justify-center text-primary-text">
              <Palette className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold tracking-tight text-primary-text">
              معاينة أنظمة الألوان الحية (بدون نيون)
            </span>
            <span className="hidden sm:inline-block text-[10px] font-medium px-2 py-0.5 rounded-full bg-surface-hover text-secondary-text border border-border-subtle">
              Live Preview
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Direct Quick Dark/Light Toggle */}
            <button
              onClick={toggleTheme}
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-hover hover:bg-border-subtle text-primary-text text-xs font-semibold transition-colors cursor-pointer border border-border-subtle"
              title={isDark ? "التبديل إلى الوضع الفاتح" : "التبديل إلى الوضع الليلي"}
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px]">نهاري (Light)</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="text-[11px]">ليلي (Dark)</span>
                </>
              )}
            </button>

            {/* Minimize Toggle */}
            <button
              onClick={() => setMinimized(!minimized)}
              type="button"
              className="p-1 rounded-lg hover:bg-surface-hover text-secondary-text transition-colors cursor-pointer"
              title={minimized ? "توسيع" : "تصغير"}
            >
              {minimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Palettes Grid */}
        {!minimized && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2.5">
            {PALETTES.map((p) => {
              const isActive = activePalette === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => applyPalette(p.id)}
                  type="button"
                  className={`group relative flex flex-col items-start gap-1 p-2 sm:p-2.5 rounded-xl border text-right transition-all cursor-pointer ${
                    isActive
                      ? "bg-surface-hover border-primary-text/40 shadow-sm ring-1 ring-primary-text/20"
                      : "bg-surface hover:bg-surface-hover border-border-subtle hover:border-border-hover"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    {/* Swatch indicators */}
                    <div className="flex items-center -space-x-1.5 rtl:space-x-reverse">
                      <span
                        className="w-4 h-4 rounded-full border border-white/40 shadow-xs inline-block"
                        style={{ backgroundColor: p.swatchPrimary }}
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-black/20 shadow-xs inline-block"
                        style={{ backgroundColor: p.swatchSecondary }}
                      />
                    </div>

                    {isActive && (
                      <span className="w-4 h-4 rounded-full bg-primary-text text-canvas flex items-center justify-center text-[10px]">
                        <Check className="w-2.5 h-2.5 stroke-3" />
                      </span>
                    )}
                  </div>

                  <div className="mt-0.5">
                    <p className="text-xs font-bold leading-tight text-primary-text">
                      {p.nameAr}
                    </p>
                    <p className="text-[10px] text-secondary-text mt-0.5">
                      {p.badge}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
