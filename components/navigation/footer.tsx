"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Shield, Heart, ExternalLink } from "lucide-react";
import { OFFICIAL_LOGO_PLACEHOLDER, OFFICIAL_TAGLINE } from "@/lib/design-system/tokens";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#12303C] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Kolom 1: Brand & Tagline */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="inline-flex h-9 px-3 rounded-lg bg-white/10 text-white items-center font-mono font-bold text-xs tracking-wider border border-white/20 self-start">
              {OFFICIAL_LOGO_PLACEHOLDER}
            </div>
            <p className="text-xs text-white/80 leading-relaxed font-serif italic">
              "{OFFICIAL_TAGLINE}"
            </p>
            <p className="text-[11px] text-white/60 leading-normal">
              Ekosistem terintegrasi keluarga untuk penerbitan digital, edukasi dini, dan karya berkelanjutan.
            </p>
          </div>

          {/* Kolom 2: Explore */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-[#EBCC3D] uppercase tracking-wider">
              Explore
            </span>
            <ul className="flex flex-col gap-2 text-xs text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/#tentang" className="hover:text-white transition-colors">
                  Tentang K4Family
                </Link>
              </li>
              <li>
                <Link href="/#bisnis" className="hover:text-white transition-colors">
                  Lini Bisnis (9 Brand)
                </Link>
              </li>
              <li>
                <Link href="/#rani" className="hover:text-white transition-colors">
                  RANI (Artikel Edukasi)
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: K4Book */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
              K4Book
            </span>
            <ul className="flex flex-col gap-2 text-xs text-white/70">
              <li>
                <Link href="/k4book" className="hover:text-white transition-colors">
                  Semua Buku
                </Link>
              </li>
              <li>
                <Link href="/k4book/explore" className="hover:text-white transition-colors">
                  Kidstory (0–5 Tahun)
                </Link>
              </li>
              <li>
                <Link href="/k4book/explore" className="hover:text-white transition-colors">
                  HumOR (Editorial HR)
                </Link>
              </li>
              <li>
                <Link href="/k4book/explore" className="hover:text-white transition-colors">
                  Novel & Sastra
                </Link>
              </li>
              <li>
                <Link href="/k4book" className="hover:text-white transition-colors">
                  Library Saya
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Support */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-white/90 uppercase tracking-wider">
              Support
            </span>
            <ul className="flex flex-col gap-2 text-xs text-white/70">
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#request" className="hover:text-white transition-colors">
                  Request Buku / Nilai
                </Link>
              </li>
              <li>
                <Link href="#kontak" className="hover:text-white transition-colors">
                  Kontak Tim
                </Link>
              </li>
              <li>
                <Link href="#bantuan" className="hover:text-white transition-colors">
                  Pusat Bantuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 5: Information */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-white/90 uppercase tracking-wider">
              Information
            </span>
            <ul className="flex flex-col gap-2 text-xs text-white/70">
              <li>
                <Link href="#ketentuan" className="hover:text-white transition-colors">
                  Ketentuan Layanan
                </Link>
              </li>
              <li>
                <Link href="#privasi" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/design-system" className="hover:text-white transition-colors">
                  Design System V1.0
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} K4Family Ecosystem. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-[#087FA0]">
              Developer Brief V04 Compliant
            </span>
            <span>•</span>
            <span className="text-[11px] font-mono text-[#EBCC3D]">
              Production Grade Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

