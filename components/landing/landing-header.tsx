"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, User, BookOpen, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MobileDrawer } from "@/components/navigation/mobile-drawer";
import { OFFICIAL_LOGO_PLACEHOLDER, k4Brands } from "@/lib/design-system/tokens";

export function LandingHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const k4bookItems = [
    { label: "Semua Buku", desc: "Katalog publikasi K4Book", href: "/k4book" },
    { label: "Kidstory", desc: "Cerita anak (0–18m, 18m–3y, 3–5y)", href: "/k4book/explore", badge: "Active" },
    { label: "HumOR", desc: "Komedi editorial & HR", href: "/k4book/explore" },
    { label: "Novel", desc: "Literatur fiksi keluarga", href: "/k4book/explore" },
  ];

  const businessLines = [
    { name: "K4Craft", tag: "Woodcraft", desc: "Kriya kayu fungsional" },
    { name: "K4Studio", tag: "Production", desc: "Produksi visual & audio" },
    { name: "K4Farm", tag: "Agriculture", desc: "Pertanian berkelanjutan" },
    { name: "K4Health", tag: "Botanical", desc: "Sains botani herbal" },
    { name: "K4Academy", tag: "Early Years", desc: "Edukasi anak usia dini" },
    { name: "WarunK", tag: "Culinary", desc: "Jurnal kuliner keluarga" },
  ];

  const helpItems = [
    { label: "FAQ", desc: "Pertanyaan yang sering diajukan", href: "#faq" },
    { label: "Request", desc: "Permintaan buku atau kolaborasi", href: "#request" },
    { label: "Kontak", desc: "Hubungi tim ekosistem", href: "#kontak" },
  ];

  return (
    <>
      <header
        ref={navRef}
        className="w-full bg-white/95 backdrop-blur-md rounded-full px-5 py-3 flex items-center justify-between shadow-[0_4px_20px_rgba(18,48,60,0.06)] border border-[#EAE5DC] relative transition-all"
        data-purpose="k4family-header"
      >
        {/* Left: Official Logo Placeholder */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center select-none group">
            <div className="h-9 px-3 rounded-full bg-[#12303C] text-white flex items-center justify-center font-mono font-bold text-[11px] tracking-wider border border-[#12303C] group-hover:bg-[#087FA0] transition-colors">
              {OFFICIAL_LOGO_PLACEHOLDER}
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links with Dropdowns */}
        <nav
          className="hidden lg:flex items-center space-x-1 text-xs font-semibold text-[#12303C]"
          data-purpose="desktop-navigation"
        >
          <Link
            href="/"
            className="px-3 py-1.5 rounded-full hover:text-[#087FA0] hover:bg-[#FBF8F0] transition-colors"
          >
            Beranda
          </Link>

          <Link
            href="#about"
            className="px-3 py-1.5 rounded-full hover:text-[#087FA0] hover:bg-[#FBF8F0] transition-colors"
          >
            Tentang K4Family
          </Link>

          {/* K4Book Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "k4book" ? null : "k4book")}
              onMouseEnter={() => setOpenDropdown("k4book")}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors cursor-pointer hover:text-[#087FA0] ${
                openDropdown === "k4book" ? "text-[#087FA0] bg-[#FBF8F0]" : ""
              }`}
            >
              <span>K4Book</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {openDropdown === "k4book" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl border border-[#EAE5DC] shadow-xl p-2 z-50 animate-in fade-in-0 zoom-in-95"
              >
                <div className="px-3 py-1.5 border-b border-[#EAE5DC] mb-1">
                  <span className="text-[10px] font-bold text-[#087FA0] uppercase tracking-wider">
                    Digital Publishing & Commerce
                  </span>
                </div>
                {k4bookItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex flex-col p-2.5 rounded-xl hover:bg-[#FBF8F0] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#12303C]">{item.label}</span>
                      {item.badge && <Badge variant="teal" size="sm">{item.badge}</Badge>}
                    </div>
                    <span className="text-[11px] text-[#12303C]/60 mt-0.5">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Lini Bisnis Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "bisnis" ? null : "bisnis")}
              onMouseEnter={() => setOpenDropdown("bisnis")}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors cursor-pointer hover:text-[#087FA0] ${
                openDropdown === "bisnis" ? "text-[#087FA0] bg-[#FBF8F0]" : ""
              }`}
            >
              <span>Lini Bisnis</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {openDropdown === "bisnis" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 bg-white rounded-2xl border border-[#EAE5DC] shadow-xl p-3 z-50 animate-in fade-in-0 zoom-in-95"
              >
                <div className="px-3 py-1.5 border-b border-[#EAE5DC] mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#12303C] uppercase tracking-wider">
                    Direktori Brand Ekosistem
                  </span>
                  <Badge variant="outline" size="sm">Akan Datang</Badge>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {businessLines.map((brand) => (
                    <div
                      key={brand.name}
                      className="p-2.5 rounded-xl bg-[#FBF8F0]/60 hover:bg-[#FBF8F0] border border-transparent hover:border-[#EAE5DC] transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#12303C]">{brand.name}</span>
                        <span className="text-[10px] font-mono text-[#087FA0]">{brand.tag}</span>
                      </div>
                      <p className="text-[10px] text-[#12303C]/70 mt-1 leading-snug">{brand.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RANI */}
          <Link
            href="#rani"
            className="px-3 py-1.5 rounded-full hover:text-[#087FA0] hover:bg-[#FBF8F0] transition-colors flex items-center gap-1.5"
          >
            <span>RANI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#20463D]" />
          </Link>

          {/* Bantuan Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "bantuan" ? null : "bantuan")}
              onMouseEnter={() => setOpenDropdown("bantuan")}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors cursor-pointer hover:text-[#087FA0] ${
                openDropdown === "bantuan" ? "text-[#087FA0] bg-[#FBF8F0]" : ""
              }`}
            >
              <span>Bantuan</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {openDropdown === "bantuan" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl border border-[#EAE5DC] shadow-xl p-2 z-50 animate-in fade-in-0 zoom-in-95"
              >
                {helpItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex flex-col p-2.5 rounded-xl hover:bg-[#FBF8F0] transition-colors"
                  >
                    <span className="text-xs font-bold text-[#12303C]">{item.label}</span>
                    <span className="text-[11px] text-[#12303C]/60 mt-0.5">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right: Akun / Library & Primary CTA */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Button
            href="/k4book"
            variant="ghost"
            size="sm"
            leftIcon={<User className="w-3.5 h-3.5 text-[#12303C]/70" />}
          >
            Akun
          </Button>

          <Button
            href="/k4book"
            variant="teal"
            size="sm"
            rightIcon={<BookOpen className="w-3.5 h-3.5" />}
          >
            Jelajahi K4Book
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex lg:hidden items-center gap-1">
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(true)}
            className="p-2 rounded-full text-[#12303C] hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Buka menu navigasi"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Slide-in Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </>
  );
}
