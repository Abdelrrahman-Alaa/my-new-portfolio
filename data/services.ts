import { Service } from "@/types/portfolio";

export const servicesData: Service[] = [
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
];
