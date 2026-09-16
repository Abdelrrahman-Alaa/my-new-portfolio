"use client";

import React, { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { getWhatsAppUrl } from "@/lib/utils";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import { BrandLogo } from "@/components/navbar/BrandLogo";
import { DesktopNav } from "@/components/navbar/DesktopNav";
import { NavbarControls } from "@/components/navbar/NavbarControls";
import { MobileDrawer } from "@/components/navbar/MobileDrawer";

export function Navbar() {
  const { t } = useLanguage();
  const { profile, navigation } = portfolioData;

  const isScrolled = useScrollThreshold(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    toggleButtonRef.current?.focus();
  };

  const whatsappLink = getWhatsAppUrl(
    profile.contact.whatsappNumber,
    t(profile.contact.whatsappMessage)
  );

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-surface/85 backdrop-blur-md border-b border-border-subtle shadow-xs"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <BrandLogo profile={profile} onClick={closeMobileMenu} />

          {/* Desktop Navigation Links */}
          <DesktopNav items={navigation} />

          {/* Controls & Quick Actions */}
          <NavbarControls
            whatsappLink={whatsappLink}
            mobileMenuOpen={mobileMenuOpen}
            onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
            toggleButtonRef={toggleButtonRef}
          />
        </div>
      </header>

      {/* Mobile Drawer Overlay & Menu */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        profile={profile}
        navigation={navigation}
        whatsappLink={whatsappLink}
      />
    </>
  );
}
