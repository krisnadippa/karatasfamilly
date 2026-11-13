"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, User, BookOpen, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OFFICIAL_LOGO_PLACEHOLDER } from "@/lib/design-system/tokens";

export interface MainNavbarProps {
  variant?: "solid" | "transparent" | "centered";
  activeRoute?: string;
  className?: string;
}

export const MainNavbar: React.FC<MainNavbarProps> = ({
  variant = "solid",
  activeRoute = "beranda",
  className = "",
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
    { label: "Semua Buku", desc: "Katalog lengkap publikasi K4Book", href: "/k4book" },
    { label: "Kidstory", desc: "Buku cerita anak (0–18 bln, 18 bln–3 thn, 3–5 thn)", href: "/k4book/explore", badge: "Active" },
    { label: "HumOR", desc: "Komedi editorial & HR professional", href: "/k4book/explore" },
    { label: "Novel", desc: "Karya sastra & literatur keluarga", href: "/k4book/explore" },
  ];

  const businessLines = [
    { name: "K4Craft", tag: "Woodcraft", desc: "Kriya kayu fungsional keluarga" },
    { name: "K4Studio", tag: "Production", desc: "Produksi visual & audio kreatif" },
    { name: "K4Farm", tag: "Agriculture", desc: "Pertanian alami berkelanjutan" },
    { name: "K4Health", tag: "Botanical", desc: "Kebugaran & sains botani herbal" },
    { name: "K4Academy", tag: "Early Years", desc: "Edukasi anak usia dini holistik" },
    { name: "WarunK", tag: "Culinary", desc: "Jurnal kuliner autentik keluarga" },
  ];

  const helpItems = [
    { label: "FAQ", desc: "Pertanyaan yang sering diajukan", href: "#faq" },
    { label: "Request", desc: "Permintaan buku atau kolaborasi", href: "#request" },
    { label: "Kontak", desc: "Hubungi tim ekosistem K4Family", href: "#kontak" },
  ];

  const bgStyles = {
    solid: "bg-[#FBF8F0] border-b border-[#EAE5DC]",
    transparent: "bg-white/80 backdrop-blur-md border-b border-[#EAE5DC]/60",
    centered: "bg-white border-b border-[#EAE5DC]",
  };

  return (
    <nav
      ref={navRef}
      className={`w-full sticky top-0 z-40 transition-all duration-200 ${bgStyles[variant]} ${className}`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* LEFT: Official Logo Placeholder */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-10 px-3 rounded-lg bg-[#12303C] text-white flex items-center justify-center font-mono font-bold text-xs tracking-wider border border-[#12303C] group-hover:bg-[#087FA0] transition-colors">
              {OFFICIAL_LOGO_PLACEHOLDER}
            </div>
          </Link>
        </div>

        {/* CENTER: Navigation Links with Dropdowns */}
        <div className="hidden lg:flex items-center gap-1 font-medium text-sm text-[#12303C]">
          <Link
            href="/"
            className={`px-3.5 py-2 rounded-full transition-colors hover:text-[#087FA0] ${
              activeRoute === "beranda" ? "text-[#087FA0] font-semibold" : ""
            }`}
          >
            Beranda
          </Link>

          <Link
            href="/#tentang"
            className="px-3.5 py-2 rounded-full transition-colors hover:text-[#087FA0]"
          >
            Tentang K4Family
          </Link>

          {/* K4Book Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "k4book" ? null : "k4book")}
              onMouseEnter={() => setOpenDropdown("k4book")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-colors hover:text-[#087FA0] cursor-pointer ${
                openDropdown === "k4book" ? "text-[#087FA0] bg-black/5" : ""
              }`}
              aria-expanded={openDropdown === "k4book"}
            >
              <span>K4Book</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "k4book" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "k4book" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl border border-[#EAE5DC] shadow-xl p-2 z-50 animate-in fade-in-0 zoom-in-95"
              >
                <div className="px-3 py-2 border-b border-[#EAE5DC] mb-1">
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
                      <span className="text-xs font-semibold text-[#12303C]">{item.label}</span>
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
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-colors hover:text-[#087FA0] cursor-pointer ${
                openDropdown === "bisnis" ? "text-[#087FA0] bg-black/5" : ""
              }`}
              aria-expanded={openDropdown === "bisnis"}
            >
              <span>Lini Bisnis</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "bisnis" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "bisnis" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-96 bg-white rounded-2xl border border-[#EAE5DC] shadow-xl p-3 z-50 animate-in fade-in-0 zoom-in-95"
              >
                <div className="px-3 py-2 border-b border-[#EAE5DC] mb-2 flex items-center justify-between">
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
            href="/#rani"
            className="px-3.5 py-2 rounded-full transition-colors hover:text-[#087FA0] flex items-center gap-1.5"
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
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-colors hover:text-[#087FA0] cursor-pointer ${
                openDropdown === "bantuan" ? "text-[#087FA0] bg-black/5" : ""
              }`}
              aria-expanded={openDropdown === "bantuan"}
            >
              <span>Bantuan</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === "bantuan" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "bantuan" && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute top-full right-0 mt-1 w-64 bg-white rounded-2xl border border-[#EAE5DC] shadow-xl p-2 z-50 animate-in fade-in-0 zoom-in-95"
              >
                {helpItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex flex-col p-2.5 rounded-xl hover:bg-[#FBF8F0] transition-colors"
                  >
                    <span className="text-xs font-semibold text-[#12303C]">{item.label}</span>
                    <span className="text-[11px] text-[#12303C]/60 mt-0.5">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Akun & Primary CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            href="/k4book"
            variant="ghost"
            size="sm"
            leftIcon={<User className="w-4 h-4 text-[#12303C]/70" />}
          >
            Akun / Library
          </Button>

          <Button
            href="/k4book"
            variant="teal"
            size="md"
            rightIcon={<BookOpen className="w-4 h-4" />}
          >
            Jelajahi K4Book
          </Button>
        </div>
      </div>
    </nav>
  );
};
