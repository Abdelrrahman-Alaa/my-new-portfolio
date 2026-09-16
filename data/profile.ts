import { DeveloperProfile } from "@/types/portfolio";

export const profileData: DeveloperProfile = {
  name: {
    ar: "عبدالرحمن",
    en: "Abdelrahman",
  },
  title: {
    ar: "مهندس برمجيات ومطور واجهات وتطبيقات ويب سريعة",
    en: "Full-Stack Software Engineer & High-Performance Web Developer",
  },
  avatar: "/images/avatar.webp",
  workspaceImage: "/images/workspace.webp",
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
      value: {
        ar: "0 تأخير",
        en: "Zero Delays",
      },
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
};
