import { SkillCategory } from "@/types/portfolio";

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "frontend",
    title: {
      ar: "تطوير الواجهات وتجربة المستخدم (Frontend)",
      en: "Frontend & UI Engineering",
    },
    description: {
      ar: "بناء واجهات متجاوبة، سريعة، وسلسة تعتمد على أحدث تقنيات الويب الحديثة.",
      en: "Building accessible, performant, and fluid web interfaces with modern frameworks.",
    },
    skills: [
      { name: "React 19", level: "خبير • Expert", tag: "Core" },
      {
        name: "Next.js (App Router)",
        level: "خبير • Expert",
        tag: "Framework",
      },
      { name: "TypeScript", level: "متقدم • Advanced", tag: "Language" },
      { name: "Tailwind CSS v4", level: "خبير • Expert", tag: "Styling" },
      { name: "Framer Motion", level: "متقدم • Advanced", tag: "Animation" },
      {
        name: "HTML5 / Semantic SEO",
        level: "خبير • Expert",
        tag: "Standards",
      },
    ],
  },
  {
    id: "backend",
    title: {
      ar: "البنية الخلفية وقواعد البيانات (Backend & APIs)",
      en: "Backend Architecture & APIs",
    },
    description: {
      ar: "تصميم واجهات برمجية آمنة وقواعد بيانات مستقرة تتحمل أعباء الاستخدام المكثف.",
      en: "Architecting resilient APIs and data layers built for speed and security.",
    },
    skills: [
      { name: "Node.js", level: "متقدم • Advanced", tag: "Runtime" },
      { name: "RESTful APIs", level: "خبير • Expert", tag: "Architecture" },
      { name: "PostgreSQL", level: "متقدم • Advanced", tag: "Database" },
      { name: "Supabase", level: "متقدم • Advanced", tag: "BaaS" },
      {
        name: "Redis Caching",
        level: "متوسط • Intermediate",
        tag: "Performance",
      },
      {
        name: "Authentication & JWT",
        level: "متقدم • Advanced",
        tag: "Security",
      },
    ],
  },
  {
    id: "tools",
    title: {
      ar: "الأدوات والتكامل والأداء (Tools & DevOps)",
      en: "Tools, Workflow & DevOps",
    },
    description: {
      ar: "أدوات التطوير السريع والنشر المستمر وضمان الجودة الصارمة.",
      en: "Streamlined deployment pipelines, performance testing, and version control.",
    },
    skills: [
      { name: "Git & GitHub", level: "خبير • Expert", tag: "VCS" },
      {
        name: "pnpm / modern monorepos",
        level: "خبير • Expert",
        tag: "Tooling",
      },
      { name: "Vercel / Cloudflare", level: "خبير • Expert", tag: "Cloud" },
      {
        name: "Lighthouse Optimization",
        level: "خبير • Expert",
        tag: "Speed",
      },
      { name: "Docker basics", level: "متوسط • Intermediate", tag: "DevOps" },
      {
        name: "Postman / API Testing",
        level: "متقدم • Advanced",
        tag: "Testing",
      },
    ],
  },
];
