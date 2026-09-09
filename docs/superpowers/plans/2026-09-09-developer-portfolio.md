# خطة تنفيذ وتطوير البورتفوليو (Developer Portfolio Implementation Plan)

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** بناء بورتفوليو مطور ويب Full-stack فائق السرعة والأناقة، ثنائي اللغة (عربي/إنجليزي) مع دعم كامل للـ RTL، باستخدام Next.js 14/15، Tailwind CSS، TypeScript، خطوط Cairo و Plus Jakarta Sans، أيقونات Lucide React، ولمسات Framer Motion الهادئة، مع تصدير ثابت (Static Export) لتحقيق أعلى درجات الأداء 100/100.

**Architecture:** مشروع Next.js بتوجيه App Router ومُهيأ بالكامل للـ Static Export (`output: 'export'`) بدون أي استهلاك لسيرفرات مدفوعة. طبقة بيانات مركزية في ملف TypeScript `data/portfolio.ts` تغذي مكونات الصفحة، مع React Context محلي خفيف للتحكم اللحظي في تبديل اللغات (عربي/إنجليزي) وعكس اتجاه الواجهة (`dir="rtl"`) والوضع الليلي/النهاري بسلاسة فائقة.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Lucide React, Framer Motion, Google Fonts (Cairo + Plus Jakarta Sans).

**Spec:** `docs/superpowers/specs/2026-09-09-developer-portfolio-design.md`

---

## Global Constraints

- **Node.js / Next.js:** Next.js 14+ مع App Router و TypeScript و Tailwind CSS.
- **Build Mode:** Static Export (`output: 'export'`, `images: { unoptimized: true }`).
- **Typography:** الخط العربي حصراً `Cairo`، والخط الإنجليزي حصراً `Plus Jakarta Sans`.
- **Icons:** `lucide-react`.
- **Animations:** `framer-motion` (حركات ناعمة وخفيفة جداً، مع مراعاة تفضيل المستخدم لتقليل الحركة).
- **Zero AI-slop:** ممنوع أي كروت عشوائية أو تدرجات بنفسجية/فسفورية مكررة، الاعتماد على ألوان الكتان والحجر الدافئ `#F7F5F0` والرمادي الفاحم `#111318` ولمسات الطمي `#C26D53`.
- **Approval Gate:** يتم أخذ رأي المستخدم في كل خطوة ومكون قبل اعتماده.

---

## Proposed Changes & Tasks

### Task 1: تهيئة المشروع وتثبيت المكتبات المعتمدة (Scaffolding & Setup)

**Files:**
- Create/Initialize: `package.json`, `next.config.js`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`
- Test: تشغيل أمر البناء والتحقق من سلامة البيئة

- [ ] **Step 1: تهيئة مشروع Next.js مع TypeScript و Tailwind داخل مجلد المشروع**
```bash
cd C:\Users\Abdelrahman\.gemini\antigravity\scratch\dev-portfolio
npx --yes create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```
- [ ] **Step 2: تثبيت المكتبات المعتمدة (Lucide React و Framer Motion و clsx و tailwind-merge)**
```bash
npm install lucide-react framer-motion clsx tailwind-merge
```
- [ ] **Step 3: ضبط إعدادات التصدير الثابت في `next.config.js`**
ضبط `output: 'export'` و `images: { unoptimized: true }` لضمان تصدير ملفات HTML ثابتة فائقة السرعة.
- [ ] **Step 4: التحقق من نجاح البناء الأولي**
تشغيل `npm run build` والتأكد من عدم وجود أي أخطاء، وتوليد مجلد `out`.
- [ ] **Step 5: عمل Commit لتهيئة المشروع**
```bash
git add . && git commit -m "chore: scaffold Next.js project with Tailwind, TS, Lucide, and Framer Motion"
```

---

### Task 2: ضبط نظام التصميم والخطوط والثيم (Design System & Typography)

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: `tailwind.config.js`

- [x] **Step 1: استدعاء خطوط `Cairo` و `Plus Jakarta Sans` باستخدام `next/font/google`**
تضمين الخطين في `app/layout.tsx` وتعيين متغيرات CSS (`--font-cairo` و `--font-jakarta`).
- [x] **Step 2: إعداد توكنز الألوان في `tailwind.config.js` / `app/globals.css`**
إضافة ألوان الكتان والحجر الرملي الدافئ (`warm-sand: #F7F5F0`)، والرمادي الفاحم (`dark-obsidian: #111318`)، ولمسة الطمي الترابي (`terracotta: #C26D53`)، وزر الواتساب (`whatsapp: #22C55E`).
- [x] **Step 3: تهيئة الأنماط العامة في `app/globals.css`**
ضبط دعم الانتقال السلس للوضع الليلي، وتنسيق شريط التمرير، وسلاسة قراءة الخط العربي.
- [x] **Step 4: اختبار صحة الخطوط والألوان في المتصفح**
- [x] **Step 5: Commit لتجهيز الخطوط والأنماط**
```bash
git add . && git commit -m "style: configure Cairo and Plus Jakarta Sans fonts and warm humanist theme tokens"
```

---

### Task 3: هيكل البيانات المركزي والأنواع (Data Layer & Types)

**Files:**
- Create: `types/portfolio.ts`
- Create: `data/portfolio.ts`

- [x] **Step 1: كتابة واجهات TypeScript الصارمة في `types/portfolio.ts`**
تعريف أنواع: `Project`, `Service`, `Skill`, `DeveloperProfile`, `Testimonial`, `NavigationItem`.
- [x] **Step 2: كتابة ملف البيانات المركزي `data/portfolio.ts`**
تضمين بيانات عربية وإنجليزية للمشاريع الحقيقية، الخدمات الموجهة لأصحاب البيزنس، المهارات المصنفة، وبيانات الاتصال.
- [x] **Step 3: التحقق البرمجي من صحة البيانات (Typecheck)**
تشغيل `npx tsc --noEmit` أو `pnpm run build` للتأكد من عدم وجود أي نقص أو خطأ في الأنواع.
- [x] **Step 4: Commit لطبقة البيانات**
```bash
git add types/ data/ && git commit -m "feat: add typed centralized portfolio data layer"
```

---

### Task 4: معمارية تبديل اللغات والوضع الليلي (i18n & Theme Providers)

**Files:**
- Create: `context/LanguageContext.tsx`
- Create: `context/ThemeContext.tsx`
- Create: `components/Providers.tsx`
- Modify: `app/layout.tsx`

- [x] **Step 1: إنشاء `LanguageContext` لإدارة اللغتين (عربي / إنجليزي)**
توفير حالة `locale` و `dir` ودالة `toggleLanguage()` وتحديث خاصية `dir="rtl"` أو `dir="ltr"` في جذر الصفحة فورياً بدون reload.
- [x] **Step 2: إنشاء `ThemeContext` لإدارة الوضع الليلي والنهاري**
توفير حالة `theme` ('light' | 'dark') وإضافة كلاس `dark` للـ `document.documentElement` مع حفظ التفضيل في `localStorage`.
- [x] **Step 3: دمج الـ Providers في `app/layout.tsx`**
- [x] **Step 4: التحقق من التبديل السلس بدون وميض (FOUC)**
- [x] **Step 5: Commit للـ Providers**
```bash
git add context/ components/Providers.tsx app/layout.tsx && git commit -m "feat: implement instant i18n and theme context providers"
```

---

### Task 5: الشريط العلوي وأزرار التحكم (Navbar & Header)

**Files:**
- Create: `components/Navbar.tsx`
- Modify: `app/page.tsx`

- [x] **Step 1: بناء شريط التنقل المتجاوب (Desktop + Mobile Drawer)**
عرض اللوجو الشخصي، روابط الأقسام السريعة، زر تبديل اللغة (عربي / EN)، وزر الثيم (Dark/Light).
- [x] **Step 2: إضافة تأثير زجاجي ناعم (Backdrop Blur) مع سكرول الصفحة**
- [x] **Step 3: التحقق من عمل القائمة على شاشات الموبايل والديسكتوب وعكس اتجاهها مع الـ RTL**
- [x] **Step 4: Commit لمكون الـ Navbar**
```bash
git add components/Navbar.tsx && git commit -m "feat: build responsive bilingual navbar with theme and language toggles"
```

---

### Task 6: الواجهة الرئيسية الجذابة (Hero Section)

**Files:**
- Create: `components/Hero.tsx`

- [x] **Step 1: بناء المحتوى الترحيبي الإنساني الخالي من التعقيد**
العنوان البسيط القوي + النبذة الموجهة لأصحاب الأنشطة والشركات.
- [x] **Step 2: إضافة زري الدعوة للإجراء (Primary Dual CTAs)**
زر "استعرض أعمالي" (ينزل بسلاسة للمشاريع) + زر "محادثة سريعة عبر واتساب" مع لمسة تفاعلية ناعمة.
- [x] **Step 3: شريط مؤشرات الثقة والأداء (Trust Metrics: سرعة 100/100، توافق موبايل، التزام كامل)**
- [x] **Step 4: إضافة حركات ظهور متدرجة خفيفة عبر `framer-motion`**
- [x] **Step 5: Commit لمكون الـ Hero**
```bash
git add components/Hero.tsx && git commit -m "feat: implement hero section with client-focused copy and dual CTAs"
```

---

### Task 7: معرض المشاريع والنتائج (Projects Showcase)

**Files:**
- Create: `components/Projects.tsx`
- Checkpoint: **استعراض أسلوب عرض التفاصيل (Modal vs Direct details) مع المستخدم لاختيار الأنسب له**

- [x] **Step 1: بناء شريط فلاتر الأنشطة (الكل، متاجر إلكترونية، شركات وخدمات، منصات وتطبيقات)**
- [x] **Step 2: بناء كروت المشاريع الاحترافية بمؤشرات الأداء، الأرقام المحققة، والتقنيات**
- [x] **Step 3: ربط أزرار المعاينة الحية والكود المصدري وفتح المودال**
- [x] **Step 4: التحقق من سلاسة الفلترة وتناسق الصور والـ Responsive Grid**
- [x] **Step 5: Commit لمعرض المشاريع**
```bash
git add components/Projects.tsx && git commit -m "feat: build responsive filterable projects showcase with metrics"
```

---

### Task 8: خدمات البيزنس الموجهة للعملاء (Services Section)

**Files:**
- Create: `components/Services.tsx`

- [ ] **Step 1: بناء كروت الخدمات الثلاثة المعتمدة بلغة واضحة وودودة**
(بناء المواقع التعريفية، المتاجر الإلكترونية وحلول واتساب، تسريع وصيانة المواقع).
- [ ] **Step 2: إضافة أيقونات Lucide React المناسبة لكل خدمة مع لمسات هوفر ناعمة**
- [ ] **Step 3: Commit لقسم الخدمات**
```bash
git add components/Services.tsx && git commit -m "feat: create outcome-focused business services section"
```

---

### Task 9: نبذة عني والمهارات التقنية (About Me & Skills)

**Files:**
- Create: `components/About.tsx`

- [ ] **Step 1: بناء قسم النبذة الشخصية بأسلوب سردي يعزز الشراكة والثقة**
- [ ] **Step 2: بناء شبكة المهارات التقنية المصنفة بشارات أنيقة (Frontend, Backend, Tools)**
- [ ] **Step 3: عرض أرقام الإنجاز وسنوات الخبرة ومعدل رضا العملاء**
- [ ] **Step 4: Commit لقسم عني والمهارات**
```bash
git add components/About.tsx && git commit -m "feat: implement about me and categorized tech skills section"
```

---

### Task 10: قسم التواصل المباشر والخاتمة (Contact & Footer)

**Files:**
- Create: `components/Contact.tsx`
- Create: `components/Footer.tsx`

- [ ] **Step 1: تصميم كارت الواتساب البارز مع مؤشر التواجد المباشر (Active Status Dot)**
- [ ] **Step 2: إضافة زر نسخ الإيميل بنقرة واحدة مع إشعار Toast منبثق لطيف**
- [ ] **Step 3: بناء الفوتر مع الروابط المهنية (LinkedIn, GitHub) وحقوق الموقع**
- [ ] **Step 4: Commit لقسم التواصل والفوتر**
```bash
git add components/Contact.tsx components/Footer.tsx && git commit -m "feat: build high-converting contact section and footer"
```

---

### Task 11: التجميع الكامل وفحص الأداء والسرعة (Final Integration & Verification)

**Files:**
- Modify: `app/page.tsx`
- Audit: أداء Lighthouse وفحص الـ Static Export

- [ ] **Step 1: تجميع كافة المكونات داخل `app/page.tsx`**
- [ ] **Step 2: تنفيذ أمر البناء الثابت والتأكد من توليد ملفات الـ Static Export بنجاح**
```bash
npm run build
```
- [ ] **Step 3: فحص الموقع على أبعاد الشاشات المختلفة (Mobile 375px, Tablet 768px, Desktop 1280px)**
- [ ] **Step 4: فحص درجات Google Lighthouse والتأكد من تحقيق سرعة فائقة 98-100/100**
- [ ] **Step 5: تسليم التقرير النهائي واستعراض النتيجة مع المستخدم**

---

## خيارات التنفيذ (Execution Options)

الخطة مكتملة بالكامل وموثقة. أمامنا خياران لطريقة التنفيذ:

1. **Subagent-Driven Execution (الموصى به):**
   تنفيذ المهام عبر Subagents مستقلة ومتخصصة لكل مهمة مع مراجعة واختبار الكود والتحقق من سلامته بين كل مهمة وأخرى.
2. **Inline Execution:**
   تنفيذ المهام تباعاً مباشرة في هذه الجلسة مع نقاط توقف للمراجعة بين المجموعات.
