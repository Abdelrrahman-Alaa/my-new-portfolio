import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: {
      ar: "عبدالرحمن",
      en: "Abdelrahman",
    },
    title: {
      ar: "مهندس برمجيات ومطور واجهات وتطبيقات ويب سريعة",
      en: "Full-Stack Software Engineer & High-Performance Web Developer",
    },
    avatar: "/images/avatar.jpg",
    workspaceImage: "/images/workspace.jpg",
    heroBadge: {
      ar: "متاح للعمل على مشاريع جديدة وفورية",
      en: "Available for new projects & partnerships",
    },
    heroHeading: {
      ar: "نبني مواقع فائقة السرعة والأناقة تحول زوارك إلى",
      en: "We craft fast, elegant web experiences that turn visitors into",
    },
    heroHighlight: {
      ar: "عملاء فعليين.",
      en: "loyal customers.",
    },
    heroSubheading: {
      ar: "مطور برمجيات متكامل أساعد الشركات الناشئة وأصحاب الأنشطة التجارية في تصميم وتطوير مواقع وتطبيقات عصرية، تجمع بين الأداء الخارق (100/100) وتجربة المستخدم السلسة وسهولة الإدارة.",
      en: "Full-stack engineer partnering with founders and business owners to design and build modern, scalable web applications that blend sub-second performance (100/100) with intuitive design.",
    },
    aboutTitle: {
      ar: "شريكك التقني لتحويل الأفكار إلى منتجات رقمية ناجحة",
      en: "Your technical partner for transforming ideas into successful digital products",
    },
    aboutBio: {
      ar: [
        "أمتلك خبرة عملية تمتد لأكثر من 5 سنوات في هندسة وتطوير تطبيقات الويب، تخصصت خلالها في بناء أنظمة سريعة التجاوب تركز في المقام الأول على خدمة أهداف البيزنس وزيادة المبيعات.",
        "أؤمن بأن الموقع الجيد ليس مجرد مظهر جمالي جذاب، بل هو أداة استثمارية متكاملة تتطلب بنية برمجية صلبة، وتصميماً مريحاً يقلل من خطوات إتمام الطلب، وتوافقاً تاماً مع مختلف الشاشات والأجهزة.",
        "أعتمد في عملي على أحدث معايير الويب الحديثة (Next.js, TypeScript, Tailwind CSS) مع التزام صارم بمواعيد التسليم ودقة التفاصيل، وتقديم كود نظيف وقابل للتوسع المستقبلي بكل سلاسة.",
      ],
      en: [
        "With over 5 years of hands-on experience in web software engineering, I specialize in building high-conversion, responsive digital platforms centered around tangible business outcomes.",
        "I believe a great website isn't merely pretty visuals; it is an active investment engine requiring solid architecture, frictionless user journeys, and flawless mobile responsiveness.",
        "I leverage the modern web stack (Next.js, TypeScript, Tailwind CSS) with uncompromising commitment to deadlines, clean maintainable code, and exceptional performance.",
      ],
    },
    stats: {
      yearsExperience: "+5",
      completedProjects: "+35",
      clientSatisfaction: "100%",
    },
    contact: {
      whatsappNumber: "+201033485442", // International format without spaces
      whatsappFormatted: "+20 103 348 5442",
      whatsappMessage: {
        ar: "مرحباً عبدالرحمن، اطلعت على أعمالك في البورتفوليو وأرغب في مناقشة مشروع جديد معك.",
        en: "Hello Abdelrahman, I checked your portfolio and would like to discuss an upcoming project with you.",
      },
      email: "abdelrrahman.alaa.work@gmail.com",
      githubUrl: "https://github.com/Abdelrrahman-Alaa",
      linkedinUrl: "https://www.linkedin.com/in/abdelrrahman-alaa/",
      location: {
        ar: "الشرق الأوسط (متاح للعمل عن بُعد حول العالم)",
        en: "Middle East (Available for remote work worldwide)",
      },
    },
    availability: {
      isAvailable: true,
      label: {
        ar: "متاح لاستقبال مشاريع جديدة",
        en: "Available for new projects",
      },
    },
    trustMetrics: [
      {
        id: "speed",
        value: "100/100",
        label: {
          ar: "سرعة قياسية على Lighthouse",
          en: "Lighthouse Performance Score",
        },
        sublabel: {
          ar: "تحميل فوري وأقل من ثانية واحدة",
          en: "Sub-second instant load times",
        },
      },
      {
        id: "responsive",
        value: "100%",
        label: {
          ar: "توافق كامل مع الموبايل",
          en: "Mobile-First Responsiveness",
        },
        sublabel: {
          ar: "تجربة تصفح متناسقة لكافة الشاشات",
          en: "Flawless UI on every viewport",
        },
      },
      {
        id: "delivery",
        value: "0 تأخير",
        label: {
          ar: "التزام بالمواعيد المحددة",
          en: "On-Time Milestone Delivery",
        },
        sublabel: {
          ar: "تسليم احترافي وخطط عمل موثقة",
          en: "Predictable, verified roadmaps",
        },
      },
    ],
  },

  navigation: [
    {
      id: "projects",
      label: {
        ar: "المشاريع",
        en: "Projects",
      },
      href: "#projects",
    },
    {
      id: "services",
      label: {
        ar: "الخدمات",
        en: "Services",
      },
      href: "#services",
    },
    {
      id: "about",
      label: {
        ar: "عنّي والمهارات",
        en: "About & Skills",
      },
      href: "#about",
    },
    {
      id: "contact",
      label: {
        ar: "تواصل معي",
        en: "Contact",
      },
      href: "#contact",
    },
  ],

  categories: [
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
  ],

  projects: [
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
      image: "/images/project-rawasi.jpg",
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
      image: "/images/project-binaa.jpg",
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
      image: "/images/project-shifa.jpg",
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
      image: "/images/project-jazl.jpg",
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
  ],

  services: [
    {
      id: "landing-corporate",
      iconName: "Globe",
      badge: {
        ar: "الأكثر طلباً للشركات",
        en: "Most Popular for Businesses",
      },
      title: {
        ar: "تطوير المواقع التعريفية للشركات والأنشطة التجارية",
        en: "High-Impact Corporate & Landing Websites",
      },
      description: {
        ar: "تصميم وتطوير مواقع احترافية تبرز هوية شركتك وتبني الثقة مع عملائك وشركائك، مهيأة بأعلى معايير محركات البحث (SEO) وسرعة تصفح قياسية 100/100.",
        en: "Custom corporate websites that establish instant trust, elevate brand authority, and maximize qualified leads with 100/100 Lighthouse speed and robust SEO foundations.",
      },
      features: {
        ar: [
          "تصميم إنساني فريد متناسق مع هوية العلامة التجارية",
          "دعم ثنائي اللغة (عربي / إنجليزي) مع توافق كامل للـ RTL",
          "تهيئة كاملة لمحركات البحث لضمان تصدر الكلمات المستهدفة",
          "استضافة سريعة وآمنة ومحمية بشهادات SSL مشفرة",
        ],
        en: [
          "Bespoke visual identity aligned with your brand aesthetics",
          "Flawless bilingual architecture (Arabic RTL / English LTR)",
          "Structured schema metadata optimized for Google ranking",
          "Blazing fast static deployment with zero downtime",
        ],
      },
    },
    {
      id: "ecommerce-whatsapp",
      iconName: "ShoppingBag",
      badge: {
        ar: "الأعلى في معدل التحويل",
        en: "Highest Conversion Rate",
      },
      title: {
        ar: "المتاجر الإلكترونية وحلول الطلب عبر واتساب",
        en: "Modern E-Commerce & WhatsApp Ordering Systems",
      },
      description: {
        ar: "متاجر عصرية مخصصة لزيادة المبيعات، تمكن عملاءك من اختيار المنتجات وإرسال الطلب المباشر إلى واتساب بضغطة زر واحدة دون تعقيدات تسجيل الحساب أو بوابات الدفع.",
        en: "Turn casual browsers into immediate buyers with frictionless WhatsApp checkouts, instant cart compilation, and streamlined mobile purchasing flows.",
      },
      features: {
        ar: [
          "سلة تسوق خفيفة وذكية ترسل تفاصيل الطلب للواتساب فوراً",
          "لوحة تحكم مرنة وسهلة لإضافة وتعديل المنتجات والأسعار",
          "سرعة تحميل خارقة على باقات الجوال ومختلف الهواتف",
          "مؤشرات تفاعلية للخصومات وحث العميل على الشراء",
        ],
        en: [
          "Smart one-click WhatsApp order generation with full cart summary",
          "Lightweight catalog management with instant price updates",
          "Ultra-optimized images loading smoothly even on 3G connections",
          "Trust badges and micro-interactions driving higher checkout rates",
        ],
      },
    },
    {
      id: "speed-modernization",
      iconName: "Zap",
      badge: {
        ar: "تحسين جذري للأداء",
        en: "Performance Overhaul",
      },
      title: {
        ar: "تسريع وصيانة وتطوير المواقع القائمة",
        en: "Speed Optimization & Modernization",
      },
      description: {
        ar: "تحويل المواقع البطيئة إلى منصات حديثة وفائقة السرعة عبر إعادة هيكلة الكود وضغط الوسائط وضمان استقرار الموقع بنسبة 100% دون انقطاع.",
        en: "Transform sluggish, bloated legacy websites into lightning-fast modern platforms with surgical code optimization, asset compression, and reliability engineering.",
      },
      features: {
        ar: [
          "رفع تقييم Google Core Web Vitals إلى النطاق الأخضر 90-100",
          "ضغط وتحويل الصور والوسائط إلى صيغ الجيل القادم WebP",
          "فحص وتأمين الثغرات البرمجية وحماية الموقع من الاختراق",
          "متابعة دورية ودعم فني مستمر لضمان عمل الموقع بكفاءة",
        ],
        en: [
          "Propel Google Core Web Vitals into the green 90-100 bracket",
          "Compress and convert heavy assets into next-gen WebP/AVIF formats",
          "Audit security headers and harden vulnerabilities against exploits",
          "Continuous uptime monitoring and dedicated technical maintenance",
        ],
      },
    },
  ],

  skillCategories: [
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
  ],
};
