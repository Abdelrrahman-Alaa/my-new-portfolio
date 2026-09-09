"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-primary-text transition-colors duration-200">
      {/* Fixed Responsive Navbar */}
      <Navbar />

      {/* Main Content Area - Expansive Modern Width (max-w-7xl: 1280px) */}
      <main className="flex-1 pt-18 sm:pt-20 pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto w-full space-y-24 sm:space-y-32">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Projects Showcase */}
        <Projects />

        {/* Section 3: Business Services */}
        <Services />

        {/* Section 4: About & Technical Skills */}
        <About />

        {/* Section 5: High-Converting Contact */}
        <Contact />
      </main>

      {/* Section 6: Footer */}
      <Footer />
    </div>
  );
}
