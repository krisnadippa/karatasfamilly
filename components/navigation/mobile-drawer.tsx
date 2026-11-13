"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown, User, BookOpen, Search, Heart, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OFFICIAL_LOGO_PLACEHOLDER, OFFICIAL_TAGLINE, k4Brands } from "@/lib/design-system/tokens";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>("k4book");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-[#12303C]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in right drawer */}
      <div className="relative z-10 w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
        {/* Top Header */}
        <div>
          <div className="p-4 px-5 border-b border-[#EAE5DC] flex items-center justify-between bg-[#FBF8F0]">
            <div className="h-8 px-2.5 rounded-md bg-[#12303C] text-white flex items-center font-mono font-bold text-[10px] tracking-wider">
              {OFFICIAL_LOGO_PLACEHOLDER}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#12303C]/60 hover:text-[#12303C] hover:bg-[#12303C]/5 transition-colors cursor-pointer"
              aria-label="Tutup navigasi"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items (Vertical List) */}
          <div className="p-4 flex flex-col divide-y divide-[#EAE5DC]/60 text-sm font-medium text-[#12303C]">
            <Link
              href="/"
              onClick={onClose}
              className="py-3 px-2 hover:text-[#087FA0] transition-colors"
            >
              Beranda
            </Link>

            <Link
              href="/#tentang"
              onClick={onClose}
              className="py-3 px-2 hover:text-[#087FA0] transition-colors"
            >
              Tentang K4Family
            </Link>

            {/* Accordion 1: K4Book */}
            <div className="py-2">
              <button
                type="button"
                onClick={() => toggleAccordion("k4book")}
                className="w-full py-2 px-2 flex items-center justify-between text-left hover:text-[#087FA0] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold">K4Book</span>
                  <Badge variant="teal" size="sm">Active</Badge>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openAccordion === "k4book" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openAccordion === "k4book" && (
                <div className="pl-4 pr-2 py-2 flex flex-col gap-1.5 bg-[#FBF8F0]/50 rounded-xl mt-1 text-xs">
                  <Link href="/k4book" onClick={onClose} className="p-2 rounded-lg hover:bg-white transition-colors">
                    Semua Buku
                  </Link>
                  <Link href="/k4book/explore" onClick={onClose} className="p-2 rounded-lg hover:bg-white transition-colors flex items-center justify-between">
                    <span>Kidstory (Cerita Anak)</span>
                    <span className="text-[10px] text-[#087FA0] font-mono">0–5 thn</span>
                  </Link>
                  <Link href="/k4book/explore" onClick={onClose} className="p-2 rounded-lg hover:bg-white transition-colors">
                    HumOR (Editorial HR)
                  </Link>
                  <Link href="/k4book/explore" onClick={onClose} className="p-2 rounded-lg hover:bg-white transition-colors">
                    Novel (Literatur)
                  </Link>
                </div>
              )}
            </div>

            {/* Accordion 2: Lini Bisnis */}
            <div className="py-2">
              <button
                type="button"
                onClick={() => toggleAccordion("bisnis")}
                className="w-full py-2 px-2 flex items-center justify-between text-left hover:text-[#087FA0] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Lini Bisnis</span>
                  <Badge variant="outline" size="sm">6 Brand</Badge>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openAccordion === "bisnis" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openAccordion === "bisnis" && (
                <div className="pl-4 pr-2 py-2 flex flex-col gap-1 bg-[#FBF8F0]/50 rounded-xl mt-1 text-xs">
                  {k4Brands.filter((b) => b.status === "Akan Datang").map((brand) => (
                    <div key={brand.id} className="p-2 rounded-lg flex items-center justify-between">
                      <span className="font-semibold text-[#12303C]">{brand.name}</span>
                      <span className="text-[10px] text-[#12303C]/50 font-mono">Akan Datang</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RANI Link */}
            <Link
              href="/#rani"
              onClick={onClose}
              className="py-3 px-2 hover:text-[#087FA0] transition-colors flex items-center justify-between"
            >
              <span>RANI (Artikel Edukasi)</span>
              <Badge variant="forest" size="sm">Active</Badge>
            </Link>

            {/* Accordion 3: Bantuan */}
            <div className="py-2">
              <button
                type="button"
                onClick={() => toggleAccordion("bantuan")}
                className="w-full py-2 px-2 flex items-center justify-between text-left hover:text-[#087FA0] transition-colors cursor-pointer"
              >
                <span className="font-semibold">Bantuan</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openAccordion === "bantuan" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openAccordion === "bantuan" && (
                <div className="pl-4 pr-2 py-2 flex flex-col gap-1.5 bg-[#FBF8F0]/50 rounded-xl mt-1 text-xs">
                  <Link href="#faq" onClick={onClose} className="p-2 rounded-lg hover:bg-white transition-colors">
                    FAQ
                  </Link>
                  <Link href="#request" onClick={onClose} className="p-2 rounded-lg hover:bg-white transition-colors">
                    Request Buku / Nilai
                  </Link>
                  <Link href="#kontak" onClick={onClose} className="p-2 rounded-lg hover:bg-white transition-colors">
                    Kontak Ekosistem
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTAs & Official Tagline */}
        <div className="p-5 border-t border-[#EAE5DC] bg-[#FBF8F0] flex flex-col gap-3">
          <Button
            href="/k4book"
            variant="teal"
            size="md"
            className="w-full justify-center"
            rightIcon={<BookOpen className="w-4 h-4" />}
            onClick={onClose}
          >
            Jelajahi K4Book
          </Button>

          <Button
            href="/k4book"
            variant="outline"
            size="md"
            className="w-full justify-center bg-white"
            leftIcon={<User className="w-4 h-4" />}
            onClick={onClose}
          >
            Masuk / Akun Library
          </Button>

          <p className="text-[11px] text-center text-[#12303C]/70 italic mt-2 font-serif">
            "{OFFICIAL_TAGLINE}"
          </p>
        </div>
      </div>
    </div>
  );
};

