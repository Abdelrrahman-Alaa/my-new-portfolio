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

export const metadata: Metadata = {
  title: "عبدالرحمن | مهندس برمجيات ومطور Full-stack",
  description:
    "بورتفوليو احترافي لمطور ويب Full-stack متخصص في بناء واجهات وتطبيقات رقمية سريعة وعالية التحويل لأصحاب الأعمال والشركات.",
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
      </head>
      <body className="min-h-full flex flex-col font-cairo bg-canvas text-primary-text selection:bg-terracotta/20 selection:text-terracotta">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
