# 🚀 Project Handoff: Developer Portfolio

> **For Antigravity IDE / Agents:**  
> Read this file first. This project is in active development following a strict step-by-step verified execution plan.

---

## 1. Project Location & Context
- **Workspace Directory:** `C:\Users\Abdelrahman\.gemini\antigravity\scratch\dev-portfolio`
- **Package Manager:** `pnpm` (strictly `pnpm v11+`, do NOT use `npm`)
- **Dev Server:** Currently running on `http://localhost:3000`
- **Specification:** `docs/superpowers/specs/2026-09-09-developer-portfolio-design.md`
- **Implementation Plan:** `docs/superpowers/plans/2026-09-09-developer-portfolio.md`

---

## 2. Completed Status
- [x] **Task 1: Project Scaffolding & Setup (DONE & COMMITTED)**
  - Initialized Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.
  - Configured `next.config.ts` for Static Export (`output: 'export'`, `images: { unoptimized: true }`).
  - Installed dependencies via `pnpm`: `lucide-react`, `framer-motion`, `clsx`, `tailwind-merge`.
  - Verified static production build `pnpm run build` succeeds and produces `/out`.
- [x] **Task 2: Design System, Typography & Theme Tokens (DONE & COMMITTED - commit d07396f)**
  - Configured Google Fonts in `app/layout.tsx`: `Cairo` (400, 500, 600, 700, 800) and `Plus_Jakarta_Sans` (400, 500, 600, 700, 800).
  - Configured color tokens in `app/globals.css` (Tailwind v4 `@theme`):
    - Light canvas: `#F7F5F0` (Warm Sand).
    - Dark canvas: `#111318` (Obsidian Charcoal).
    - Primary Accent: `#C26D53` (Terracotta Rust) & hover `#AB5A42`.
    - Signal WhatsApp Accent: `#22C55E` & hover `#16A34A`.
    - Text: `#1A1A1A` (Espresso) / `#4A4A4A` (Muted Slate).
  - Verified via `pnpm run build` and browser testing on `http://localhost:3000`.

---

## 3. Immediate Next Task
- [ ] **Task 3: Data Layer & Types (READY TO START PENDING USER CONFIRMATION)**
  - Create TypeScript interfaces in `types/portfolio.ts` (Projects, Services, Skills, Profile, Testimonials).
  - Create centralized data layer in `data/portfolio.ts` with comprehensive Arabic and English content.
  - Type-check with `pnpm run build` / `tsc --noEmit`.
  - Commit and request user review before proceeding to Task 4.

---

## 4. Strict Behavioral Rules & User Constraints
1. **Always consult user first:** Test and review each task completely, then present verification results to the user and wait for confirmation before moving to the next task.
2. **Zero AI-slop:** No generic floating 3D spheres, no cliché purple/blue glowing blobs. Intentional bespoke editorial craft.
3. **Approved stack & libraries:**
   - Icons: `lucide-react`
   - Animation: `framer-motion` (tasteful, subtle micro-interactions only, don't overload)
   - i18n: Custom React Context (single URL, instant `dir="rtl"` / `dir="ltr"` toggle)
   - Mode: Both Dark and Light mode
   - Contact: WhatsApp direct chat + One-click copy email
