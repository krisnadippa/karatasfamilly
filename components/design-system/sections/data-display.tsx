"use client";

import React from "react";
import { BookOpen, Heart, Calendar, Clock, User, ArrowRight, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/skeleton";
import { ComponentPreview } from "../component-preview";

export const DataDisplaySection: React.FC = () => {
  const k4bookCardCode = `<Card variant="default" interactive className="overflow-hidden">
  {/* Official Book Cover Placeholder */}
  <div className="h-48 w-full bg-[#12303C] flex flex-col items-center justify-center p-4 text-center">
    <BookOpen className="w-8 h-8 text-[#EBCC3D] mb-2" />
    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
      Cover Placeholder Resmi
    </span>
    <span className="text-[10px] text-white/60 mt-1">K4Book Digital Publishing</span>
  </div>

  <CardHeader>
    <div className="flex items-center justify-between">
      <Badge variant="teal" size="sm" dot>Kidstory</Badge>
      <span className="text-[11px] font-mono text-[#087FA0] font-bold">Usia 3–5 thn</span>
    </div>
    <CardTitle className="text-base font-bold mt-1">Petualangan Bintang Kecil</CardTitle>
    <CardDescription className="text-xs">
      Cerita nilai ketulusan dan persahabatan awal.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex items-center gap-3 text-[11px] text-[#12303C]/70">
      <span>Format: Digital e-Book</span>
      <span>•</span>
      <Badge variant="goldenrod" size="sm">Fase 1 Aktif</Badge>
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="teal" size="sm" className="w-full justify-center">
      Lihat Detail Buku
    </Button>
  </CardFooter>
</Card>`;

  const raniCardCode = `<Card variant="default" interactive>
  {/* Gouache Style Placeholder */}
  <div className="h-40 w-full bg-[#20463D]/10 flex flex-col items-center justify-center p-4 border-b border-[#EAE5DC]">
    <Heart className="w-7 h-7 text-[#20463D] mb-1.5" />
    <span className="text-xs font-mono font-bold text-[#20463D] uppercase">
      Ilustrasi Gouache (Faceless-First)
    </span>
    <span className="text-[10px] text-[#20463D]/60">Placeholder Seni Edukasi RANI</span>
  </div>

  <CardHeader>
    <div className="flex items-center justify-between">
      <Badge variant="forest" size="sm" dot>Parenting Empatik</Badge>
      <span className="text-[10px] text-[#12303C]/50 font-mono">12 Nov 2024</span>
    </div>
    <CardTitle className="text-base font-bold mt-1">Mendengar dengan Hati: Seni Komunikasi Anak</CardTitle>
    <CardDescription className="text-xs leading-relaxed">
      Panduan reflektif bagi orang tua dalam membangun jembatan emosional tanpa penghakiman.
    </CardDescription>
  </CardHeader>
  <CardFooter>
    <Button variant="secondary" size="sm" className="w-full justify-center" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
      Baca Artikel Lengkap
    </Button>
  </CardFooter>
</Card>`;

  return (
    <div className="space-y-12">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Presentation Layer
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Data Display & Specialized Cards
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Komponen penyaji informasi terstruktur: Kartu Buku K4Book (Cover placeholder resmi, batas usia, format), Kartu Artikel RANI (Gouache faceless-first), Kartu Brand Masa Depan (Akan Datang), dan Metrik.
        </p>
      </div>

      {/* Special Cards: K4Book & RANI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* K4Book Card */}
        <ComponentPreview
          title="K4Book Specialized Card (Brief V04 Standard)"
          description="Kartu buku resmi dengan cover placeholder yang jelas, kategori Kidstory, kelompok usia (3–5 thn), format, dan tombol detail."
          code={k4bookCardCode}
        >
          <div className="w-full max-w-xs mx-auto">
            <Card variant="default" interactive className="overflow-hidden">
              <div className="h-44 w-full bg-[#12303C] flex flex-col items-center justify-center p-4 text-center">
                <BookOpen className="w-8 h-8 text-[#EBCC3D] mb-1.5" />
                <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                  Cover Placeholder Resmi
                </span>
                <span className="text-[10px] text-white/60 mt-0.5">K4Book Digital Publishing</span>
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="teal" size="sm" dot>Kidstory</Badge>
                  <span className="text-[10px] font-mono text-[#087FA0] font-bold">3–5 tahun</span>
                </div>
                <CardTitle className="text-sm font-bold mt-1">Petualangan Bintang Kecil</CardTitle>
                <CardDescription className="text-xs leading-snug">
                  Cerita nilai ketulusan dan persahabatan anak.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-1 pb-3 text-[11px] text-[#12303C]/70 flex items-center justify-between">
                <span>Format: Digital e-Book</span>
                <Badge variant="goldenrod" size="sm">Fase 1 Aktif</Badge>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="teal" size="sm" className="w-full justify-center">
                  Lihat Detail Buku
                </Button>
              </CardFooter>
            </Card>
          </div>
        </ComponentPreview>

        {/* RANI Article Card */}
        <ComponentPreview
          title="RANI Article Card (Faceless-First)"
          description="Kartu artikel edukasi keluarga dengan ilustrasi gouache lembut, kategori, tanggal, status rilis resmi, dan tombol baca."
          code={raniCardCode}
        >
          <div className="w-full max-w-xs mx-auto">
            <Card variant="default" interactive className="overflow-hidden">
              <div className="h-44 w-full bg-[#20463D]/10 flex flex-col items-center justify-center p-4 text-center border-b border-[#EAE5DC]">
                <Heart className="w-8 h-8 text-[#20463D] mb-1.5" />
                <span className="text-[11px] font-mono font-bold text-[#20463D] uppercase tracking-wider">
                  Ilustrasi Gouache
                </span>
                <span className="text-[10px] text-[#20463D]/70 mt-0.5">Faceless-First Standard</span>
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="forest" size="sm" dot>Parenting Empatik</Badge>
                  <span className="text-[10px] text-[#12303C]/50 font-mono">12 Nov 2024</span>
                </div>
                <CardTitle className="text-sm font-bold mt-1">Mendengar dengan Hati: Seni Komunikasi</CardTitle>
                <CardDescription className="text-xs leading-snug">
                  Panduan reflektif membangun jembatan emosional tanpa penghakiman.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-1 pb-3 text-[11px] text-[#12303C]/70 flex items-center justify-between">
                <span>Waktu Baca: 4 Menit</span>
                <Badge variant="forest" size="sm">Published</Badge>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="secondary" size="sm" className="w-full justify-center" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Baca Artikel
                </Button>
              </CardFooter>
            </Card>
          </div>
        </ComponentPreview>
      </div>

      {/* Metrics, Avatars, Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs">
          <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider block">
            Katalog Judul Aktif
          </span>
          <p className="text-3xl font-mono font-bold text-[#12303C] mt-2">18</p>
          <span className="text-xs text-[#12303C]/60 mt-1 block">Buku Kidstory & HumOR</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs">
          <span className="text-xs font-bold text-[#20463D] uppercase tracking-wider block">
            Artikel Terpublikasi RANI
          </span>
          <p className="text-3xl font-mono font-bold text-[#12303C] mt-2">42</p>
          <span className="text-xs text-[#12303C]/60 mt-1 block">Edukasi parenting & empati</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs">
          <span className="text-xs font-bold text-[#EBCC3D] uppercase tracking-wider block">
            Ekosistem Lini Brand
          </span>
          <p className="text-3xl font-mono font-bold text-[#12303C] mt-2">9</p>
          <span className="text-xs text-[#12303C]/60 mt-1 block">2 Aktif • 6 Akan Datang</span>
        </div>
      </div>
    </div>
  );
};
