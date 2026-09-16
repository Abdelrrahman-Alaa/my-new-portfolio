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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abdelrahman-alaa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdelrahman Alaa | Web Developer",
    template: "%s | Abdelrahman Alaa",
  },
  description:
    "Portfolio of Abdelrahman Alaa - Web Developer specializing in crafting fast, responsive, and modern web applications with React, Next.js, and TypeScript.",
  keywords: [
    "Abdelrahman Alaa",
    "Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Abdelrahman Alaa", url: "https://github.com/Abdelrrahman-Alaa" }],
  creator: "Abdelrahman Alaa",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar"],
    url: siteUrl,
    title: "Abdelrahman Alaa | Web Developer",
    description:
      "Portfolio of Abdelrahman Alaa - Web Developer specializing in crafting fast, responsive, and modern web applications with React, Next.js, and TypeScript.",
    siteName: "Abdelrahman Alaa Portfolio",
    images: [
      {
        url: "/images/avatar.webp",
        width: 800,
        height: 800,
        alt: "Abdelrahman Alaa - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Alaa | Web Developer",
    description:
      "Portfolio of Abdelrahman Alaa - Web Developer specializing in crafting fast, responsive, and modern web applications with React, Next.js, and TypeScript.",
    images: ["/images/avatar.webp"],
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
  jobTitle: "Web Developer",
  sameAs: [
    "https://github.com/Abdelrrahman-Alaa",
    "https://www.linkedin.com/in/abdelrrahman-alaa/",
  ],
  knowsAbout: [
    "React 19",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Modern Web Development",
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
