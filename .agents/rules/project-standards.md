# Project Standards: Portfolio (Next.js 16 + React 19 + Tailwind v4)

This rulebook is the localized engineering standard for this portfolio project. All agent interactions and code generation must strictly follow these rules.

---

## 1. Architecture & Organization
- **Pattern:** Section-Based Component Architecture (Orchestrator + Sub-components).
- **Component File Structure:**
  - `components/<section>/`: Contains focused sub-components and cards (each under 100-150 lines).
  - `components/<Section>.tsx`: Thin orchestrator coordinating layout, motion, and data.
  - `components/index.ts`: Barrel export for clean external imports.
- **Data Layer:**
  - Domain-divided under `data/` (`profile.ts`, `projects.ts`, `services.ts`, `skills.ts`, `navigation.ts`).
  - Unified aggregate exported via `data/index.ts` and `data/portfolio.ts`.
- **Logic & Hooks:**
  - Non-rendering behavior (focus trapping, scroll listeners, clipboard) lives in `hooks/`.

---

## 2. Styling & Tailwind CSS v4 Standards
- **Version:** Tailwind CSS v4.
- **Strict Rule on Arbitrary Values:**
  - NEVER use arbitrary pixel values like `min-h-[44px]` or `min-w-[44px]` when standard scale utilities exist (`min-h-11`, `min-w-11`).
  - Use standard spacing and scale numbers (1 = 4px, 2 = 8px, 4 = 16px, 11 = 44px, etc.).
- **Tailwind v4 Specific Syntax:**
  - Use `bg-linear-to-*` instead of deprecated v3 `bg-gradient-to-*`.
  - Use `stroke-3` instead of `stroke-[3]`.
  - Semantic variables are defined via `@theme` in `app/globals.css`. Never hardcode colors when a theme token exists (`var(--color-terracotta)`, `bg-surface`, `text-primary-text`).

---

## 3. Library & Dependency Rules
- **No Unapproved Installs:** Do NOT install any third-party library or npm package without proposing it, explaining why, and getting explicit user approval.
- **Zero-Dependency First:** Prefer native Web APIs or small internal utilities before reaching for an external package.

---

## 4. Code Quality & Verification
- Prior to completing any change or refactor:
  - Run `npm run build` to verify type safety and compilation.
  - Run `npm run lint` to verify code quality.
  - Zero tolerance for broken build or unresolved lint errors.
  - Never declare done or make assertions without command output evidence.

---

## 5. TypeScript Strictness: Zero `any` Policy
- Strictly forbidden to use `any` or `as unknown as Type`.
- Model domain structures explicitly using strict interfaces and types.
- Use runtime type guards or Zod schemas for dynamic external inputs.

---

## 6. Conventional Commits Standard
- All Git commits must follow the Conventional Commits format (`feat:`, `fix:`, `refactor:`, `docs:`, `perf:`, `test:`, `chore:`).
- Clear, descriptive subject line and itemized body.

---

## 7. Security & Secrets
- Never commit credentials, sensitive numbers, or API keys directly in code.
- Place local variables in `.env.local` and verify `.gitignore` excludes them.

---

## 8. Image & Asset Optimization (Web Vitals)
- Use Next.js `<Image />` for all raster assets instead of plain `<img>`.
- Add `priority` to above-the-fold Hero visuals for fast LCP.
- Use explicit `width`/`height` or `fill` with parent aspect ratio.

---

## 9. Pragmatic Simplicity (YAGNI & KISS)
- Do not build speculative abstractions or premature generalizations.
- Code should be clean, readable, and direct.

---

## 10. Interactive States & Accessibility (a11y)
- All interactive controls must support `:hover`, `:active`, and visible `:focus-visible`.
- Touch targets must adhere to min 44x44px (`min-h-11 min-w-11`).
- Respect `useReducedMotion` preferences.


