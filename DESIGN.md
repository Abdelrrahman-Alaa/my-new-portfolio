---
name: "Dev Portfolio"
description: "High-performance bilingual software engineer portfolio engineered for business conversion"
colors:
  terracotta-rust: "#C26D53"
  terracotta-hover: "#AB5A42"
  terracotta-light: "#F8EBE7"
  signal-whatsapp: "#22C55E"
  signal-whatsapp-hover: "#16A34A"
  warm-sand-canvas: "#F7F5F0"
  warm-sand-surface: "#FFFFFF"
  warm-sand-border: "#E8E4DC"
  obsidian-canvas: "#111318"
  obsidian-surface: "#181B22"
  obsidian-border: "#262A35"
  espresso-text: "#1A1A1A"
  muted-slate: "#4A4A4A"
  subtle-slate: "#737373"
typography:
  display:
    fontFamily: "Cairo, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 2.65rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: "Cairo, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3.5vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Cairo, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "normal"
  body:
    fontFamily: "Cairo, Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Plus Jakarta Sans, Cairo, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.signal-whatsapp}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-whatsapp-hover}"
  button-secondary:
    backgroundColor: "{colors.warm-sand-surface}"
    textColor: "{colors.espresso-text}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.warm-sand-canvas}"
  chip:
    backgroundColor: "{colors.warm-sand-surface}"
    textColor: "{colors.muted-slate}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  chip-active:
    backgroundColor: "{colors.terracotta-rust}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  card:
    backgroundColor: "{colors.warm-sand-surface}"
    rounded: "{rounded.xl}"
    padding: "24px 32px"
---

# Design System: Dev Portfolio

## Overview

**Creative North Star: "The Warm Editorial Artisan"**

The visual language of this portfolio balances deep engineering rigor with the warm, human sensibility of a bespoke editorial publication. Rather than retreating into sterile developer aesthetics or generic software clichés (purple neon glows, floating 3D spheres, and noisy particle grids), the system establishes an atmosphere of calm authority, intentional craftsmanship, and uncompromising clarity.

Every surface is built around warm textural contrast: an organic Warm Sand canvas (`#F7F5F0`) paired with crisp white containers in light mode, and a rich, grounded Obsidian Charcoal (`#111318`) with midnight slate surfaces in dark mode. Terracotta Rust (`#C26D53`) provides a distinct tactile accent that guides the visitor's focus toward proven results, while Signal WhatsApp Green (`#22C55E`) acts as a dedicated conversion beacon.

**Key Characteristics:**
- **Warm Architectural Clarity:** Clean 1px structural boundaries replace heavy shadows, creating an open, scannable layout.
- **Bilingual Symmetry:** Tailored typography stacks (Cairo for Arabic, Plus Jakarta Sans for English) engineered for seamless visual balance in RTL and LTR.
- **High-Trust Restraint:** Purposeful micro-interactions and smooth spring transitions that feel snappy, respectful, and free of gratuitous motion.

## Colors

The palette combines earthy warmth and deep obsidian tones with intentional, high-contrast action highlights.

### Primary
- **Terracotta Rust** (`#C26D53`): The foundational brand accent. Used selectively on hero highlights, active filter badges, icon highlights, and focus indicators. Hover state deepens to `#AB5A42`, with a gentle tint (`#F8EBE7`) used for pill backgrounds.

### Secondary
- **Signal WhatsApp Green** (`#22C55E`): Dedicated conversion signal. Exclusively reserved for direct WhatsApp chat CTAs, verified trust checkmarks, and the live availability radar beacon. Deepens to `#16A34A` on hover.

### Neutral
- **Warm Sand Canvas** (`#F7F5F0`): The light mode background canvas; delivers a tactile paper-like warmth that prevents clinical eye fatigue.
- **Pure White Surface** (`#FFFFFF`): Elevated card and container background in light mode.
- **Sand Border** (`#E8E4DC`): 1px structural framing for cards, dividers, and pill wrappers in light mode.
- **Obsidian Charcoal Canvas** (`#111318`): Deep charcoal background canvas for dark mode; provides rich contrast without harsh true-black clipping.
- **Obsidian Surface** (`#181B22`): Elevated card background in dark mode.
- **Slate Border** (`#262A35`): Crisp 1px structural framing in dark mode.
- **Espresso Text** (`#1A1A1A`): Primary reading text in light mode, softening pure black while guaranteeing high WCAG AA contrast.
- **Muted Slate** (`#4A4A4A`): Secondary descriptive text and supporting labels in light mode (`#A3A8B5` in dark mode).
- **Subtle Slate** (`#737373`): Tertiary metadata, timestamps, and border hover accents.

### Named Rules
**The 10% Accent Rule.** Terracotta Rust is an intentional editorial highlighter, never a background wash. It must occupy ≤10% of any viewport to preserve its visual punch.
**The Signal Exclusivity Rule.** Signal WhatsApp Green is strictly reserved for contact/conversion actions and the live availability pulse. Never use it for decorative badges or generic icons.

## Typography

**Display Font:** Cairo for Arabic (with system-ui fallback) / Plus Jakarta Sans for English
**Body Font:** Cairo for Arabic / Plus Jakarta Sans for English
**Label/Mono Font:** Cairo / Plus Jakarta Sans font-mono

**Character:** Balanced editorial authority. Cairo delivers strong, readable Arabic letterforms with modern geometric proportions; Plus Jakarta Sans provides clean, contemporary Latin rhythm with crisp character distinction.

### Hierarchy
- **Display** (800 ExtraBold, `clamp(2rem, 5vw, 2.65rem)`, line-height 1.2): Hero statements and high-impact introductory headlines.
- **Headline** (800 ExtraBold, `clamp(1.875rem, 3.5vw, 2.25rem)`, line-height 1.25): Major section titles (Projects, Services, About, Contact).
- **Title** (700 Bold, `1.25rem` [20px], line-height 1.35): Card titles, service names, and modal headers.
- **Body** (400 Regular / 500 Medium, `0.9375rem` [15px], line-height 1.65): Explanatory copy and case study descriptions; max line length constrained to 65–75ch.
- **Label** (700 Bold, `0.75rem` [12px], letter-spacing 0.05em, uppercase in English): Badges, category pills, and technical skill tags.

### Named Rules
**The Symmetric Hierarchy Rule.** Arabic (RTL) and English (LTR) headings must maintain identical optical weight and vertical spacing. Never allow Arabic typography to look condensed, truncated, or like a secondary localization layer.

## Layout

The layout uses a centered responsive shell with a maximum container width of `max-w-7xl` (`1280px`), inset with responsive gutter padding (`px-4 sm:px-6 lg:px-8 xl:px-12`).

- **Grid Systems:** 12-column responsive layout on desktop (6/6 column split in the Hero; 2-column grid for Projects; 3-column grid for Services and Trust Metrics).
- **Spacing Scale:** Built on a strict 4px / 8px incremental scale (xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px).
- **Vertical Rhythm:** Major sections separated by consistent `space-y-12` or `space-y-10` with clean `border-b border-border-subtle` section headers.

## Elevation & Depth

Surfaces rely on tonal layering and crisp 1px borders rather than heavy, blurry drop shadows. Depth is established through subtle background contrast and ambient micro-elevation.

### Shadow Vocabulary
- **Rest State** (`box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04)`): Baseline elevation for cards and navigation bar.
- **Hover Elevation** (`box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.08)`): Subtle lift on interactive cards and buttons.
- **Terracotta Ambient Glow** (`box-shadow: 0 8px 30px -4px rgba(194, 109, 83, 0.18)`): Dynamic ambient radiance on hovered featured projects and primary buttons.

### Named Rules
**The Rest-Flat Rule.** All cards and containers rest flat at rest with crisp 1px borders. Elevation appears only as a responsive reaction to user focus or hover.

## Shapes

The form language features soft, modern geometric silhouettes with consistent corner radii hierarchy:
- **Pill Radius** (`rounded-full`, 9999px): Navigation bar container, status badges, and availability indicators.
- **Card Radius** (`rounded-3xl`, 24px): Primary project cards, service containers, and contact cards.
- **Interactive Element Radius** (`rounded-xl`, 12px): Primary CTA buttons, filter tabs, and skill badges.
- **Micro Radius** (`rounded-lg` / `rounded-md`, 6px - 8px): Tech stack chips, toast notifications, and metric pills.

## Components

### Buttons
- **Shape:** Rounded rectangle (`rounded-xl`, 12px radius).
- **Primary WhatsApp CTA:** Signal Green (`#22C55E`), white text, bold weight (`font-bold`), padding `12px 24px` (`py-3 px-6`). On hover: background shifts to `#16A34A` with subtle scale (`scale-[1.01]`) and shadow lift.
- **Secondary Case Studies Button:** Surface background (`#FFFFFF` / `#181B22`), border `1px solid var(--border-subtle)`, text `var(--text-primary)`, padding `12px 24px`. On hover: border tints to `rgba(194, 109, 83, 0.4)` with downward icon translation.

### Chips
- **Style:** Compact pill (`rounded-xl`, 12px radius) with surface background, 1px border, and count indicator.
- **State:** Active tab receives Terracotta Rust (`#C26D53`) with white text and spring-animated background badge; inactive tabs hover with subtle surface highlight.

### Cards / Containers
- **Corner Style:** Large soft corners (`rounded-3xl`, 24px radius).
- **Background:** Surface color (`#FFFFFF` in light mode, `#181B22` in dark mode).
- **Border:** 1px solid `var(--border-subtle)` (`#E8E4DC` / `#262A35`).
- **Internal Padding:** Generous responsive padding (`p-6 sm:p-8`).

### Inputs / Fields
- **Email Copy Card:** Interactive card with direct one-click clipboard copy action, accompanied by an animated fixed toast notification with green confirmation icon.

### Navigation
- **Style:** Centered floating pill with `backdrop-blur-md` and `bg-surface/80`.
- **States:** Dynamic scroll transition that tightens vertical padding and activates bottom border and subtle shadow on scroll.
- **Mobile Treatment:** Dedicated mobile drawer with backdrop overlay, scroll lock, and instant RTL/LTR layout mirroring.

### Signature Component
- **Bespoke Project Case Study Modal:** Full-screen dialog with `backdrop-blur-md` overlay, keyboard accessibility (Esc-to-close), body scroll lock, verified business metric cards, technical tag clusters, and a prefilled direct WhatsApp inquiry CTA.

## Do's and Don'ts

### Do:
- **Do** use Terracotta Rust (`#C26D53`) sparingly to draw the eye toward proof metrics, active navigation, and key headings.
- **Do** maintain exact visual parity and optical balance between Arabic (RTL) and English (LTR).
- **Do** use crisp 1px borders (`#E8E4DC` / `#262A35`) to define structural boundaries instead of dark blurry shadows.
- **Do** wrap animations with `useReducedMotion()` fallbacks to respect user accessibility preferences.
- **Do** reserve Signal Green (`#22C55E`) exclusively for WhatsApp conversion CTAs and the live availability indicator.

### Don't:
- **Don't** introduce generic floating 3D balls, purple/cyan neon blobs, or visual clichés that erode professional credibility.
- **Don't** use pure black (`#000000`) for text or canvas; use Warm Sand (`#F7F5F0`) and Espresso (`#1A1A1A`) in light mode, and Obsidian (`#111318`) in dark mode.
- **Don't** create layout shifts or text overflow when switching between Arabic and English or Light and Dark modes.
- **Don't** use decorative animations with durations exceeding 0.45s or springs that wobble excessively.
