"use client";

import React, { useState } from "react";
import { ChevronRight, Home, BookOpen, User, BookMarked, Search, Layers, Compass, ExternalLink } from "lucide-react";
import { MainNavbar } from "@/components/navigation/main-navbar";
import { MobileNavbar } from "@/components/navigation/mobile-navbar";
import { BottomNavigation } from "@/components/navigation/bottom-navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "../component-preview";

export const NavigationSection: React.FC = () => {
  const [navbarVariant, setNavbarVariant] = useState<"solid" | "transparent" | "centered">("solid");
  const [activeBottomTab, setActiveBottomTab] = useState<string>("buku-saya");
  const [activeSegmentedTab, setActiveSegmentedTab] = useState<string>("kidstory");

  const desktopNavbarCode = `<MainNavbar variant="${navbarVariant}" activeRoute="beranda" />`;

  const mobileNavbarCode = `<MobileNavbar />
{/* Dilengkapi drawer accordion K4Book, Lini Bisnis, Bantuan, dan tagline resmi */}`;

  const bottomNavCode = `<BottomNavigation
  activeTab="${activeBottomTab}"
  onTabChange={(tab) => console.log(tab)}
/>`;

  const breadcrumbCode = `<nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#12303C]/70">
  <span className="hover:text-[#087FA0] cursor-pointer">Beranda</span>
  <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40" />
  <span className="hover:text-[#087FA0] cursor-pointer">K4Book</span>
  <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40" />
  <span className="hover:text-[#087FA0] cursor-pointer">Kidstory</span>
  <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40" />
  <span className="font-semibold text-[#12303C]">Detail Buku (Demo)</span>
</nav>`;

  return (
    <div className="space-y-12">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Wayfinding Architecture
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          K4Family Navigation System
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Komponen navigasi komprehensif: Desktop Main Navbar, Mobile Header dengan slide-in Drawer, Bottom Navigation untuk Library, Breadcrumbs, dan Segmented Tabs.
        </p>
      </div>

      {/* 1. Desktop Main Website Navbar */}
      <ComponentPreview
        title="A. Main Website Navbar — Desktop (1440px / 1280px)"
        description="Navbar utama K4Family dengan Official Logo Placeholder, dropdown K4Book, direktori Lini Bisnis, RANI, Bantuan, Akun, dan CTA Jelajahi K4Book."
        code={desktopNavbarCode}
        controls={
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#12303C]">Navbar Variant:</span>
            {(["solid", "transparent", "centered"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setNavbarVariant(v)}
                className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                  navbarVariant === v
                    ? "bg-[#12303C] text-white"
                    : "bg-[#FBF8F0] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        }
      >
        <div className="w-full rounded-xl overflow-hidden border border-[#EAE5DC] shadow-sm">
          <MainNavbar variant={navbarVariant} activeRoute="beranda" />
        </div>
      </ComponentPreview>

      {/* 2. Mobile Navbar & Drawer */}
      <ComponentPreview
        title="B. Mobile Navbar & Slide-in Drawer (320px – 767px)"
        description="Dirancang khusus untuk layar smartphone dengan tombol hamburger, search, user, dan drawer accordion interaktif."
        code={mobileNavbarCode}
      >
        <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-[#EAE5DC] shadow-md bg-[#FBF8F0]">
          <div className="p-2 bg-[#12303C] text-white text-[11px] font-mono text-center">
            Mobile Screen Viewport (Simulasi 390px)
          </div>
          <MobileNavbar />
          <div className="p-8 text-center text-xs text-[#12303C]/60">
            Tekan icon hamburger di kanan atas untuk membuka slide-in drawer dengan accordion K4Book, Lini Bisnis, dan Bantuan.
          </div>
        </div>
      </ComponentPreview>

      {/* 3. Mobile Bottom Navigation */}
      <ComponentPreview
        title="C. Mobile Bottom Navigation (Library & Authenticated Experience)"
        description="Navigasi bawah khusus untuk pengalaman Library dengan touch target minimal 44px dan indikator aktif."
        code={bottomNavCode}
      >
        <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-[#EAE5DC] shadow-md bg-[#FBF8F0] relative pb-16">
          <div className="p-6 text-center text-xs text-[#12303C]/70">
            <span className="font-bold block text-sm text-[#12303C] mb-1">Area Konten Library</span>
            Tab aktif saat ini: <code className="font-mono text-[#087FA0] font-bold">{activeBottomTab}</code>
          </div>
          <BottomNavigation
            activeTab={activeBottomTab as any}
            onTabChange={(t) => setActiveBottomTab(t)}
            className="absolute bottom-0 left-0 right-0"
          />
        </div>
      </ComponentPreview>

      {/* 4. Breadcrumbs & Segmented Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ComponentPreview
          title="Breadcrumbs Navigation"
          description="Navigasi hierarkis sesuai brief: Beranda → K4Book → Kidstory → Detail Buku."
          code={breadcrumbCode}
        >
          <div className="w-full p-4 bg-white rounded-xl border border-[#EAE5DC]">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#12303C]/70 flex-wrap">
              <span className="hover:text-[#087FA0] cursor-pointer">Beranda</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40 shrink-0" />
              <span className="hover:text-[#087FA0] cursor-pointer">K4Book</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40 shrink-0" />
              <span className="hover:text-[#087FA0] cursor-pointer">Kidstory</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40 shrink-0" />
              <span className="font-semibold text-[#12303C]">Detail Buku (Demo)</span>
            </nav>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Segmented Filter Tabs"
          description="Pengalih kategori buku dan usia pembaca."
          code={`<div className="flex bg-[#FBF8F0] p-1 rounded-full border border-[#EAE5DC]">...</div>`}
        >
          <div className="flex bg-[#FBF8F0] p-1.5 rounded-full border border-[#EAE5DC] gap-1">
            {[
              { id: "kidstory", label: "Kidstory" },
              { id: "humor", label: "HumOR" },
              { id: "novel", label: "Novel" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveSegmentedTab(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeSegmentedTab === tab.id
                    ? "bg-[#12303C] text-white shadow-xs"
                    : "text-[#12303C]/70 hover:text-[#12303C]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
};
