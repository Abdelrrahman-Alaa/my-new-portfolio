import { Project, ProjectCategory } from "@/types/portfolio";

export interface CategoryOption {
  id: ProjectCategory;
  label: {
    ar: string;
    en: string;
  };
}

export const projectCategoriesData: CategoryOption[] = [
  {
    id: "all",
    label: {
      ar: "جميع الأعمال",
      en: "All Projects",
    },
  },
  {
    id: "ecommerce",
    label: {
      ar: "متاجر إلكترونية",
      en: "E-Commerce",
    },
  },
  {
    id: "corporate",
    label: {
      ar: "شركات وخدمات",
      en: "Corporate & Services",
    },
  },
  {
    id: "apps",
    label: {
      ar: "منصات وتطبيقات",
      en: "Web Platforms & Apps",
    },
  },
];

export const projectsData: Project[] = [
  {
    id: "rawasi-store",
    title: {
      ar: "متجر رواسي للعطور والعود الفاخر",
      en: "Rawasi Luxury Fragrances E-Commerce",
    },
    tagline: {
      ar: "متجر إلكتروني فاخر مع ربط مباشر للطلب عبر واتساب",
      en: "High-conversion luxury store with instant WhatsApp ordering",
    },
    description: {
      ar: "تصميم وتطوير متجر عطور فاخر يعتمد على تجربة شراء فورية ومباشرة بدون تعقيدات الدفع الإلكتروني التقليدية، مع سلة تسوق ذكية ترسل تفاصيل الطلب والعنوان بنقرة واحدة إلى محادثة واتساب الإدارة.",
      en: "Designed and developed a luxury fragrance shop delivering a frictionless shopping experience. Features an intelligent cart that compiles order details and addresses into an instant WhatsApp message.",
    },
    category: "ecommerce",
    image: "/images/project-rawasi.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "WhatsApp API",
      "Framer Motion",
    ],
    metrics: [
      {
        value: "+48%",
        label: {
          ar: "زيادة في إتمام عمليات الشراء",
          en: "Increase in completed checkouts",
        },
      },
      {
        value: "0.8s",
        label: {
          ar: "زمن تحميل الصفحة على الموبايل",
          en: "Mobile initial load time",
        },
      },
      {
        value: "100/100",
        label: {
          ar: "درجة الأداء وسرعة التصفح",
          en: "Google Lighthouse Performance",
        },
      },
    ],
    liveUrl: "https://rawasi-store-demo.example.com",
    githubUrl: "https://github.com/example/rawasi-store",
    featured: true,
  },
  {
    id: "binaa-engineering",
    title: {
      ar: "بوابة شركة بناء للاستشارات الهندسية",
      en: "Binaa Engineering Consultants Portal",
    },
    tagline: {
      ar: "موقع تعريفي استراتيجي يعكس الهيبة المهنية ويستقطب المشاريع الكبرى",
      en: "Strategic corporate website elevating brand trust and corporate leads",
    },
    description: {
      ar: "تطوير موقع مؤسسي شامل لشركة استشارات معمارية وهندسية، يتضمن معرضاً تفاعلياً للمشاريع المنفذة مع تصفية حسب القطاعات، ونموذج حجز استشارات مسبق يقلل وقت المتابعة ويؤهل العملاء.",
      en: "Engineered a corporate portal for an architecture & engineering firm, featuring a filterable interactive portfolio of completed megaprojects and a pre-qualification consultation scheduler.",
    },
    category: "corporate",
    image: "/images/project-binaa.webp",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "SEO Optimization"],
    metrics: [
      {
        value: "3.2x",
        label: {
          ar: "مضاعفة طلبات الاستشارات الهندسية",
          en: "Multiplier on consultation inquiries",
        },
      },
      {
        value: "99.9%",
        label: {
          ar: "جاهزية واستقرار الموقع السنوي",
          en: "Annual uptime & reliability",
        },
      },
      {
        value: "#1",
        label: {
          ar: "تصدر نتائج البحث المحلية في المجال",
          en: "Top rank in local SEO search",
        },
      },
    ],
    liveUrl: "https://binaa-consulting-demo.example.com",
    githubUrl: "https://github.com/example/binaa-portal",
    featured: true,
  },
  {
    id: "shifa-clinic-system",
    title: {
      ar: "منصة شفاء لإدارة حجوزات العيادات الطبية",
      en: "Shifa Medical Booking & Patient Dashboard",
    },
    tagline: {
      ar: "تطبيق ويب تفاعلي لتنظيم المواعيد وسجلات المرضى آلياً",
      en: "Interactive web platform automating clinic appointments and client records",
    },
    description: {
      ar: "لوحة تحكم وتطبيق ويب متكامل يتيح للمرضى حجز مواعيدهم الطبية في ثوانٍ مع تذكير آلي عبر واتساب، ويوفر للأطباء جدولاً ذكياً لإدارة العيادة بدون أي تداخل في المواعيد أو انتظار طويل.",
      en: "Full-fledged clinic management application enabling patients to book visits in seconds with automated WhatsApp confirmations, while providing practitioners with conflict-free schedules.",
    },
    category: "apps",
    image: "/images/project-shifa.webp",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      {
        value: "-70%",
        label: {
          ar: "انخفاض نسبة التخلف عن المواعيد",
          en: "Reduction in missed appointments",
        },
      },
      {
        value: "1.1s",
        label: {
          ar: "سرعة استجابة العمليات والبحث",
          en: "Search & booking query latency",
        },
      },
      {
        value: "+12k",
        label: {
          ar: "حجز مكتمل بنجاح شهرياً",
          en: "Monthly processed appointments",
        },
      },
    ],
    liveUrl: "https://shifa-booking-demo.example.com",
    githubUrl: "https://github.com/example/shifa-system",
    featured: true,
  },
  {
    id: "jazl-b2b",
    title: {
      ar: "كتالوج ومنصة جزل للتوريد والتجارة B2B",
      en: "Jazl B2B Wholesale Supply Engine",
    },
    tagline: {
      ar: "منصة طلبات جملة سريعة لربط الموردين بتجار التجزئة",
      en: "High-speed wholesale ordering platform connecting suppliers with retailers",
    },
    description: {
      ar: "منصة توريد وتوزيع جملة تتيح لتجار التجزئة تصفح قوائم الأسعار حسب الكميات، وتقديم طلبات الشراء الضخمة بسهولة فائقة مع تصدير فوري لفواتير وعروض الأسعار بصيغة PDF.",
      en: "B2B wholesale portal enabling retailers to explore volume-tiered pricing, assemble bulk orders seamlessly, and auto-generate branded quotation PDFs with real-time stock sync.",
    },
    category: "ecommerce",
    image: "/images/project-jazl.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "PDF Engine",
    ],
    metrics: [
      {
        value: "65%",
        label: {
          ar: "توفير في وقت معالجة طلبات الجملة",
          en: "Time saved processing bulk orders",
        },
      },
      {
        value: "100%",
        label: {
          ar: "دقة مطابقة المخزون والتسعير",
          en: "Inventory pricing consistency",
        },
      },
    ],
    liveUrl: "https://jazl-b2b-demo.example.com",
    featured: false,
  },
];
