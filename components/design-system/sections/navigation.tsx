"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { MainNavbar } from "@/components/navigation/main-navbar";
import { MobileNavbar } from "@/components/navigation/mobile-navbar";
import { MobileDrawer } from "@/components/navigation/mobile-drawer";
import { BottomNavigation } from "@/components/navigation/bottom-navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "../component-preview";

export const NavigationSection: React.FC = () => {
  const [navbarVariant, setNavbarVariant] = useState<"solid" | "transparent" | "centered">("solid");
  const [activeBottomTab, setActiveBottomTab] = useState<"beranda" | "buku-saya" | "cari" | "akun">("buku-saya");
  const [activeSegmentedTab, setActiveSegmentedTab] = useState<string>("kidstory");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const desktopNavbarCode = `<MainNavbar variant="${navbarVariant}" activeRoute="beranda" />`;

  const mobileNavbarCode = `<MobileNavbar />
{/* Includes slide-in accordion drawer: K4Book, Lini Bisnis, Bantuan, official tagline */}`;

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
          Sistem navigasi komprehensif: Desktop Main Navbar dengan dropdown, Mobile Header dengan slide-in Drawer, Bottom Navigation untuk Library, Breadcrumbs bertingkat, dan Segmented Tabs.
        </p>
      </div>

      {/* 1. Desktop Navbar */}
      <ComponentPreview
        title="A. Main Website Navbar — Desktop"
        description="Navbar utama K4Family: logo, dropdown K4Book, Lini Bisnis, RANI, Bantuan, Akun, dan CTA Jelajahi K4Book. Hover item menu untuk melihat dropdown."
        code={desktopNavbarCode}
        controls={
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-semibold text-[#12303C]">Variant:</span>
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
        {/* Navbar rendered directly — no browser chrome frame */}
        <div className="w-full overflow-hidden rounded-xl border border-[#EAE5DC] shadow-sm">
          <MainNavbar variant={navbarVariant} activeRoute="beranda" />
        </div>
      </ComponentPreview>

      {/* 2. Mobile Navbar + Drawer */}
      <ComponentPreview
        title="B. Mobile Navbar + Slide-in Drawer"
        description="Header mobile dengan hamburger. Klik tombol 'Buka Drawer' untuk melihat slide-in accordion drawer dengan kategori K4Book, Lini Bisnis, dan Bantuan."
        code={mobileNavbarCode}
        controls={
          <Button
            size="sm"
            variant="outline"
            onClick={() => setMobileDrawerOpen(true)}
          >
            Buka Drawer
          </Button>
        }
      >
        <div className="w-full overflow-hidden rounded-xl border border-[#EAE5DC] shadow-sm">
          <MobileNavbar />
        </div>
        {/* Drawer rendered outside preview card so it overlays the full page */}
        <MobileDrawer
          isOpen={mobileDrawerOpen}
          onClose={() => setMobileDrawerOpen(false)}
        />
      </ComponentPreview>

      {/* 3. Bottom Navigation */}
      <ComponentPreview
        title="C. Mobile Bottom Navigation (Library)"
        description="Navigasi bawah khusus Library dengan touch target minimal 44px. Klik tab untuk melihat state aktif."
        code={bottomNavCode}
        hideDeviceSwitcher
      >
        <div className="w-full max-w-sm mx-auto">
          <div className="mb-4 p-4 bg-white rounded-xl border border-[#EAE5DC] text-center">
            <Badge variant="teal" dot>Konten Library</Badge>
            <p className="text-xs text-[#12303C]/70 mt-2">Area konten halaman — navigasi bawah tampil di bawah.</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-[#EAE5DC] shadow-sm">
            <BottomNavigation
              activeTab={activeBottomTab}
              onTabChange={(t) => setActiveBottomTab(t as "beranda" | "buku-saya" | "cari" | "akun")}
            />
          </div>
          <p className="text-center text-[11px] text-[#12303C]/50 mt-2 font-mono">
            Active: <strong>{activeBottomTab}</strong>
          </p>
        </div>
      </ComponentPreview>

      {/* 4. Breadcrumbs & Segmented Tabs — 2 col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ComponentPreview
          title="D. Breadcrumbs Navigation"
          description="Navigasi hierarkis: Beranda → K4Book → Kidstory → Detail Buku."
          code={breadcrumbCode}
          hideDeviceSwitcher
        >
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#12303C]/70 flex-wrap">
            <span className="hover:text-[#087FA0] cursor-pointer transition-colors">Beranda</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40 shrink-0" />
            <span className="hover:text-[#087FA0] cursor-pointer transition-colors">K4Book</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40 shrink-0" />
            <span className="hover:text-[#087FA0] cursor-pointer transition-colors">Kidstory</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40 shrink-0" />
            <span className="font-semibold text-[#12303C]">Detail Buku (Demo)</span>
          </nav>
        </ComponentPreview>

        <ComponentPreview
          title="E. Segmented Filter Tabs"
          description="Pengalih kategori: pilih tab untuk melihat state aktif."
          code={`<div className="flex bg-[#FBF8F0] p-1.5 rounded-full border border-[#EAE5DC] gap-1">
  {tabs.map((tab) => (
    <button key={tab.id} onClick={() => setActive(tab.id)}
      className={active === tab.id ? "bg-[#12303C] text-white rounded-full px-4 py-1.5" : "..."}>
      {tab.label}
    </button>
  ))}
</div>`}
          hideDeviceSwitcher
        >
          <div className="flex flex-col gap-4 items-center w-full">
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
            <p className="text-[11px] font-mono text-[#12303C]/50">
              Active: <strong>{activeSegmentedTab}</strong>
            </p>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
};
