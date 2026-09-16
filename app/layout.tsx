import type { Metadata } from "next";
import { Cairo, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abdelrahman-alaa.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "عبدالرحمن | مهندس برمجيات ومطور Full-stack",
    template: "%s | عبدالرحمن",
  },
  description:
    "بورتفوليو احترافي لمطور ويب Full-stack متخصص في بناء واجهات وتطبيقات رقمية سريعة وعالية التحويل لأصحاب الأعمال والشركات.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "مطور ويب",
    "مهندس برمجيات",
    "تطوير مواقع",
    "متاجر إلكترونية",
    "Tailwind CSS",
  ],
  authors: [{ name: "Abdelrahman Alaa", url: "https://github.com/Abdelrrahman-Alaa" }],
  creator: "Abdelrahman Alaa",
  openGraph: {
    type: "website",
    locale: "ar",
    alternateLocale: "en",
    url: siteUrl,
    title: "عبدالرحمن | مهندس برمجيات ومطور Full-stack",
    description:
      "بورتفوليو احترافي لمطور ويب Full-stack متخصص في بناء واجهات وتطبيقات رقمية سريعة وعالية التحويل لأصحاب الأعمال والشركات.",
    siteName: "Abdelrahman Portfolio",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "عبدالرحمن - مهندس برمجيات ومطور واجهات ويب",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "عبدالرحمن | مهندس برمجيات ومطور Full-stack",
    description:
      "بورتفوليو احترافي لمطور ويب Full-stack متخصص في بناء واجهات وتطبيقات رقمية سريعة وعالية التحويل لأصحاب الأعمال والشركات.",
    images: ["/images/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdelrahman Alaa",
  alternateName: "عبدالرحمن",
  url: siteUrl,
  image: `${siteUrl}/images/avatar.webp`,
  jobTitle: "Full-Stack Software Engineer",
  sameAs: [
    "https://github.com/Abdelrrahman-Alaa",
    "https://www.linkedin.com/in/abdelrrahman-alaa/",
  ],
  knowsAbout: [
    "React 19",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Web Performance Optimization",
  ],
};

const antiFOUCScript = `
  (function() {
    try {
      var theme = localStorage.getItem('portfolio-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (theme === 'dark' || (!theme && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      var lang = localStorage.getItem('portfolio-locale');
      if (lang === 'en') {
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
      } else {
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.setAttribute('dir', 'rtl');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          id="anti-fouc"
          dangerouslySetInnerHTML={{ __html: antiFOUCScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-cairo bg-canvas text-primary-text selection:bg-terracotta/20 selection:text-terracotta">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
