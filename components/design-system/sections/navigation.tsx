"use client";

import React, { useState } from "react";
import { ChevronRight, Home, BookOpen, User, BookMarked, Search, Layers, Compass, ExternalLink, Smartphone } from "lucide-react";
import { MainNavbar } from "@/components/navigation/main-navbar";
import { MobileNavbar } from "@/components/navigation/mobile-navbar";
import { MobileDrawer } from "@/components/navigation/mobile-drawer";
import { BottomNavigation } from "@/components/navigation/bottom-navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "../component-preview";

export const NavigationSection: React.FC = () => {
  const [navbarVariant, setNavbarVariant] = useState<"solid" | "transparent" | "centered">("solid");
  const [activeBottomTab, setActiveBottomTab] = useState<string>("buku-saya");
  const [activeSegmentedTab, setActiveSegmentedTab] = useState<string>("kidstory");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

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
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FA0]/10 text-[#087FA0] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>Navigation Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#12303C] tracking-tight font-montserrat">
          K4Family Navigation System
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl leading-relaxed">
          Sistem navigasi komprehensif: Desktop Main Website Navbar, Mobile Header dengan slide-in Drawer, Bottom Navigation untuk Library, Breadcrumbs bertingkat, dan Segmented Tabs.
        </p>
      </div>

      {/* 1. Desktop Main Website Navbar framed in Mock Browser */}
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
                className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  navbarVariant === v
                    ? "bg-[#12303C] text-white shadow-xs"
                    : "bg-[#FBF8F0] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        }
      >
        <div className="w-full rounded-2xl border border-[#EAE5DC] bg-white shadow-lg overflow-hidden">
          {/* Browser Top Window Chrome */}
          <div className="h-9 bg-[#F4F6F5] border-b border-[#EAE5DC] px-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="px-4 py-0.5 rounded-full bg-white border border-[#EAE5DC] text-[11px] font-mono text-[#12303C]/60 flex items-center gap-2">
              <span className="text-emerald-600 font-bold">https://</span>
              <span>k4family.id</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Actual Navbar Render */}
          <MainNavbar variant={navbarVariant} activeRoute="beranda" />
        </div>
      </ComponentPreview>

      {/* 2. Mobile Navbar & Drawer in Smartphone Mockup */}
      <ComponentPreview
        title="B. Mobile Navbar & Slide-in Drawer (320px – 767px)"
        description="Dirancang khusus untuk layar smartphone dengan tombol hamburger, search, user, dan drawer accordion interaktif."
        code={mobileNavbarCode}
      >
        <div className="w-full max-w-[360px] mx-auto rounded-[40px] border-8 border-[#12303C]/20 bg-white shadow-2xl overflow-hidden relative">
          {/* Phone Speaker Notch */}
          <div className="h-7 bg-[#12303C] px-6 flex items-center justify-between text-white text-[11px] font-mono">
            <span>09:41</span>
            <div className="w-20 h-4 rounded-b-xl bg-black/60 flex items-center justify-center">
              <div className="w-8 h-1 rounded-full bg-white/30" />
            </div>
            <span>5G</span>
          </div>

          {/* Header */}
          <MobileNavbar />

          {/* Simulated Mobile Content */}
          <div className="p-6 bg-[#FBF8F0] min-h-[300px] flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#087FA0]/10 flex items-center justify-center text-[#087FA0]">
              <Smartphone className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-[#12303C]">Layar Smartphone 360px</h4>
            <p className="text-xs text-[#12303C]/70 leading-relaxed">
              Sentuh icon menu hamburger di kanan atas navbar untuk membuka slide-in drawer dengan accordion K4Book, Lini Bisnis, dan Bantuan.
            </p>
          </div>

          {/* Phone Bottom Home Bar */}
          <div className="h-5 bg-white flex items-center justify-center">
            <div className="w-28 h-1 rounded-full bg-black/20" />
          </div>
        </div>
      </ComponentPreview>

      {/* 3. Mobile Bottom Navigation */}
      <ComponentPreview
        title="C. Mobile Bottom Navigation (Library Experience)"
        description="Navigasi bawah khusus untuk pengalaman Library dengan touch target minimal 44px dan indikator aktif."
        code={bottomNavCode}
      >
        <div className="w-full max-w-[360px] mx-auto rounded-[36px] border-8 border-[#12303C]/20 bg-[#FBF8F0] shadow-2xl overflow-hidden relative pb-16">
          <div className="h-7 bg-[#12303C] px-6 flex items-center justify-between text-white text-[11px] font-mono">
            <span>09:41</span>
            <span>Library</span>
          </div>

          <div className="p-8 text-center space-y-2">
            <Badge variant="teal" dot>Pengalaman Library</Badge>
            <h4 className="text-base font-bold text-[#12303C]">Buku Saya & Koleksi Bacaan</h4>
            <p className="text-xs text-[#12303C]/70">
              Navigasi bawah memudahkan akses satu tangan ke rak buku digital.
            </p>
          </div>

          <BottomNavigation
            activeTab={activeBottomTab as any}
            onTabChange={(t) => setActiveBottomTab(t)}
            className="absolute bottom-0 left-0 right-0 border-t border-[#EAE5DC]"
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
