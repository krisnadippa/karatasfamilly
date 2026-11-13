"use client";

import React from "react";
import { BookOpen, Sparkles, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/navigation/footer";
import { ComponentPreview } from "../component-preview";
import { OFFICIAL_LOGO_PLACEHOLDER, OFFICIAL_TAGLINE } from "@/lib/design-system/tokens";

export const LayoutsSection: React.FC = () => {
  const heroCode = `<section className="w-full py-16 md:py-24 bg-[#FBF8F0] border-b border-[#EAE5DC]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <Badge variant="teal" dot>Ekosistem Resmi K4Family</Badge>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#12303C]">
          Inspire the Young — Learn, Grow, Lead
        </h1>
        <p className="text-sm text-[#12303C]/80 leading-relaxed">
          Membangun peradaban keluarga melalui literatur bernilai tinggi, edukasi dini empatik, dan karya berkelanjutan.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="teal" size="lg">Jelajahi K4Book</Button>
          <Button variant="outline" size="lg">Kenali Ekosistem</Button>
        </div>
      </div>
      <div className="p-12 rounded-3xl bg-white border border-[#EAE5DC] text-center">
        {/* Visual Hero Container */}
      </div>
    </div>
  </div>
</section>`;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FA0]/10 text-[#087FA0] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>Spatial & Structure Rules</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#12303C] tracking-tight font-montserrat">
          Page Layout & Footer System
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl leading-relaxed">
          Sistem tata letak halaman: Hero Section dua kolom asimetris, batas kontainer `max-w-7xl` (1280px), padding vertikal ritmis, dan Sistem Footer 5 Kolom K4Family.
        </p>
      </div>

      {/* 1. Homepage & K4Book Hero Layout */}
      <ComponentPreview
        title="1. Homepage Hero Layout (Editorial Split Screen)"
        description="Layout dua kolom asimetris dengan headline resmi, badge ekosistem, deskripsi nilai, dan tombol aksi utama."
        code={heroCode}
      >
        <div className="w-full rounded-2xl border border-[#EAE5DC] bg-[#FBF8F0] p-6 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Badge variant="teal" size="sm" dot>
                Ekosistem Resmi K4Family
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#12303C] leading-tight font-montserrat">
                {OFFICIAL_TAGLINE}
              </h3>
              <p className="text-xs text-[#12303C]/75 leading-relaxed">
                Membangun masa depan generasi melalui penerbitan buku anak bermutu tinggi (K4Book), artikel edukasi keluarga yang empatik (RANI), serta karya kriya dan agrikultur berkelanjutan.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <Button variant="teal" size="md" rightIcon={<BookOpen className="w-4 h-4" />}>
                  Jelajahi K4Book
                </Button>
                <Button variant="outline" size="md">
                  Pelajari Ekosistem
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#EAE5DC] flex flex-col items-center justify-center text-center shadow-xs">
              <div className="h-10 px-4 rounded-lg bg-[#12303C] text-white flex items-center font-mono font-bold text-xs tracking-wider mb-3">
                {OFFICIAL_LOGO_PLACEHOLDER}
              </div>
              <span className="text-xs font-bold text-[#12303C] font-montserrat">
                Pusat Integrasi Nilai Keluarga
              </span>
              <span className="text-[11px] text-[#12303C]/60 mt-1">
                K4Book • RANI • K4Craft • K4Studio • K4Farm • K4Health • K4Academy • WarunK
              </span>
            </div>
          </div>
        </div>
      </ComponentPreview>

      {/* 2. Official 5-Column Footer System */}
      <ComponentPreview
        title="2. Official 5-Column Footer System"
        description="Sistem footer resmi K4Family: Kolom 1 (Logo + Tagline), Kolom 2 (Explore), Kolom 3 (K4Book), Kolom 4 (Support), Kolom 5 (Information)."
        code={`<Footer />`}
      >
        <div className="w-full rounded-2xl overflow-hidden border border-[#EAE5DC] shadow-sm">
          <Footer />
        </div>
      </ComponentPreview>
    </div>
  );
};
