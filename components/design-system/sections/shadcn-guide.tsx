"use client";

import React, { useState } from "react";
import {
  Layout,
  Columns,
  Grid,
  Maximize2,
  Box,
  Layers,
  Sparkles,
  Check,
  Code2,
  ArrowRight,
  Shield,
  BookOpen,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "../component-preview";

export const ShadcnGuideSection: React.FC = () => {
  const [activeColumns, setActiveColumns] = useState<number>(3);

  const containerPatterns = [
    { name: "Container XL (Desktop)", maxWidth: "max-w-7xl (1280px)", usage: "Halaman landing utama, direktori brand, header ekosistem" },
    { name: "Container LG (Standard)", maxWidth: "max-w-5xl (1024px)", usage: "Halaman katalog K4Book, daftar artikel RANI, dokumentasi" },
    { name: "Container MD (Reading)", maxWidth: "max-w-3xl (768px)", usage: "Detail artikel bacaan RANI, formulir permohonan buku" },
    { name: "Container SM (Modal/Card)", maxWidth: "max-w-xl (576px)", usage: "Modal dialog, ringkasan checkout, kartu pilar tunggal" },
  ];

  const cardAnatomyCode = `<Card variant="default" interactive>
  <CardHeader>
    <div className="flex items-center justify-between">
      <Badge variant="teal" size="sm" dot>Kategori</Badge>
      <span className="text-[10px] text-[#12303C]/50 font-mono">ID-01</span>
    </div>
    <CardTitle>Judul Komponen (Montserrat)</CardTitle>
    <CardDescription>Deskripsi kontekstual singkat (12-14px)</CardDescription>
  </CardHeader>

  <CardContent>
    <p className="text-xs text-[#12303C]/80 leading-relaxed">
      Area konten utama yang menampung teks panjang, data, gambar, atau formulir.
    </p>
  </CardContent>

  <CardFooter className="flex items-center justify-between pt-4 border-t border-[#EAE5DC]/60">
    <span className="text-xs text-[#12303C]/60">Status: Aktif</span>
    <Button variant="teal" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
      Aksi
    </Button>
  </CardFooter>
</Card>`;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FA0]/10 text-[#087FA0] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>Architecture & Guidelines</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#12303C] tracking-tight font-montserrat">
          shadcn/ui & Layout Guidelines
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl leading-relaxed">
          Panduan layout, hierarki kontainer, sistem grid responsif, dan prinsip komposisi komponen berbasis pola shadcn/ui yang diadaptasi khusus untuk identitas K4Family.
        </p>
      </div>

      {/* 1. Card Anatomy (shadcn/ui Composition) */}
      <ComponentPreview
        title="1. Anatomi Komponen Card (shadcn/ui Pattern)"
        description="Pola komposisi standar shadcn: Card > CardHeader (Title, Description) > CardContent > CardFooter."
        code={cardAnatomyCode}
      >
        <div className="w-full max-w-md mx-auto">
          <Card variant="default" interactive className="border-l-4 border-l-[#087FA0]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="teal" size="sm" dot>
                  Fase 1: K4Book
                </Badge>
                <span className="text-[10px] text-[#12303C]/50 font-mono">ANATOMY-01</span>
              </div>
              <CardTitle className="mt-2 text-lg font-montserrat font-bold text-[#12303C]">
                Anatomi Card Terstruktur
              </CardTitle>
              <CardDescription className="text-xs text-[#12303C]/70">
                Pemisahan tanggung jawab elemen secara deklaratif dan rapi
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="p-3 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC] text-xs text-[#12303C]/80 leading-relaxed space-y-1">
                <p className="font-semibold text-[#087FA0]">Prinsip Komposisi:</p>
                <p>1. Header memuat label kategori, judul, dan subjudul.</p>
                <p>2. Content memuat konten tubuh atau grafik.</p>
                <p>3. Footer memuat metadata dan trigger aksi (CTA).</p>
              </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between pt-3 border-t border-[#EAE5DC]/70">
              <span className="text-xs text-[#12303C]/60 font-mono">Format: Digital</span>
              <Button variant="teal" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Buka Detail
              </Button>
            </CardFooter>
          </Card>
        </div>
      </ComponentPreview>

      {/* 2. Responsive Grid System Interactive Simulator */}
      <ComponentPreview
        title="2. Sistem Grid Responsif (1, 2, 3, dan 4 Kolom)"
        description="Gunakan tombol di atas untuk mengubah jumlah kolom grid secara dinamis dan melihat penataan responsif."
        code={`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${activeColumns} gap-4">
  {items.map((item) => (
    <div key={item.id} className="p-4 rounded-xl border border-[#EAE5DC] bg-white">
      ...
    </div>
  ))}
</div>`}
        controls={
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#12303C]">Pilih Jumlah Kolom:</span>
            {[1, 2, 3, 4].map((col) => (
              <button
                key={col}
                type="button"
                onClick={() => setActiveColumns(col)}
                className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  activeColumns === col
                    ? "bg-[#12303C] text-white shadow-xs"
                    : "bg-[#FBF8F0] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                }`}
              >
                {col} Kolom
              </button>
            ))}
          </div>
        }
      >
        <div
          className={`grid gap-4 w-full transition-all duration-200 ${
            activeColumns === 1
              ? "grid-cols-1"
              : activeColumns === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : activeColumns === 3
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-[#EAE5DC] bg-white shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <Badge variant="outline" size="sm">Item 0{i + 1}</Badge>
                <div className="w-2.5 h-2.5 rounded-full bg-[#087FA0]" />
              </div>
              <h4 className="text-sm font-bold text-[#12303C] font-montserrat">
                Modul Konten #{i + 1}
              </h4>
              <p className="text-xs text-[#12303C]/70 leading-relaxed">
                Menyesuaikan secara otomatis pada breakpoint layar mobile (1-kolom) hingga desktop.
              </p>
              <div className="pt-2 border-t border-[#EAE5DC]">
                <span className="text-[10px] font-mono text-[#087FA0]">
                  Col Span: 1 / {activeColumns}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ComponentPreview>

      {/* 3. Container Hierarchy Table */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[#EAE5DC] bg-white shadow-xs space-y-6">
        <div>
          <h3 className="text-base font-bold text-[#12303C] font-montserrat">
            3. Panduan Skala Lebar Kontainer (Container Scale)
          </h3>
          <p className="text-xs text-[#12303C]/70 mt-0.5">
            Gunakan kelas Tailwind berikut untuk membungkus konten agar konsisten di semua rute aplikasi.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-[#EAE5DC] text-[#12303C]/60 uppercase tracking-wider font-montserrat">
                <th className="py-2.5 font-bold">Nama Pola</th>
                <th className="py-2.5 font-bold">Kelas Tailwind</th>
                <th className="py-2.5 font-bold">Peruntukan Halaman</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5DC]">
              {containerPatterns.map((pat) => (
                <tr key={pat.name} className="hover:bg-[#FBF8F0]/50 transition-colors">
                  <td className="py-3 font-semibold text-[#12303C]">{pat.name}</td>
                  <td className="py-3 font-mono text-[#087FA0] font-bold">{pat.maxWidth}</td>
                  <td className="py-3 text-[#12303C]/80">{pat.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Spacing, Radius & Elevation System */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Spacing */}
        <div className="p-6 rounded-2xl border border-[#EAE5DC] bg-white shadow-xs space-y-3">
          <h4 className="text-sm font-bold text-[#12303C] font-montserrat flex items-center gap-2">
            <Box className="w-4 h-4 text-[#087FA0]" /> Spacing Tokens
          </h4>
          <ul className="text-xs space-y-2 text-[#12303C]/80">
            <li className="flex justify-between border-b border-[#EAE5DC] pb-1.5">
              <span>Section Gap</span>
              <code className="font-mono text-[#087FA0]">space-y-12 / 16</code>
            </li>
            <li className="flex justify-between border-b border-[#EAE5DC] pb-1.5">
              <span>Card Padding</span>
              <code className="font-mono text-[#087FA0]">p-6 / p-8</code>
            </li>
            <li className="flex justify-between border-b border-[#EAE5DC] pb-1.5">
              <span>Item Gap</span>
              <code className="font-mono text-[#087FA0]">gap-3 / gap-4</code>
            </li>
            <li className="flex justify-between">
              <span>Inline Margin</span>
              <code className="font-mono text-[#087FA0]">px-4 sm:px-6</code>
            </li>
          </ul>
        </div>

        {/* Radius */}
        <div className="p-6 rounded-2xl border border-[#EAE5DC] bg-white shadow-xs space-y-3">
          <h4 className="text-sm font-bold text-[#12303C] font-montserrat flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#20463D]" /> Corner Radius
          </h4>
          <ul className="text-xs space-y-2 text-[#12303C]/80">
            <li className="flex justify-between border-b border-[#EAE5DC] pb-1.5">
              <span>Small Elements</span>
              <code className="font-mono text-[#20463D]">rounded-lg (8px)</code>
            </li>
            <li className="flex justify-between border-b border-[#EAE5DC] pb-1.5">
              <span>Standard Cards</span>
              <code className="font-mono text-[#20463D]">rounded-2xl (16px)</code>
            </li>
            <li className="flex justify-between border-b border-[#EAE5DC] pb-1.5">
              <span>Hero Containers</span>
              <code className="font-mono text-[#20463D]">rounded-3xl (24px)</code>
            </li>
            <li className="flex justify-between">
              <span>Pills & Badges</span>
              <code className="font-mono text-[#20463D]">rounded-full</code>
            </li>
          </ul>
        </div>

        {/* Shadows */}
        <div className="p-6 rounded-2xl border border-[#EAE5DC] bg-white shadow-xs space-y-3">
          <h4 className="text-sm font-bold text-[#12303C] font-montserrat flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#EBCC3D]" /> Elevation
          </h4>
          <ul className="text-xs space-y-2 text-[#12303C]/80">
            <li className="flex justify-between border-b border-[#EAE5DC] pb-1.5">
              <span>Card Base</span>
              <code className="font-mono text-[#12303C]">shadow-xs</code>
            </li>
            <li className="flex justify-between border-b border-[#EAE5DC] pb-1.5">
              <span>Hover Lift</span>
              <code className="font-mono text-[#12303C]">hover:shadow-sm</code>
            </li>
            <li className="flex justify-between border-b border-[#EAE5DC] pb-1.5">
              <span>Dropdown Menu</span>
              <code className="font-mono text-[#12303C]">shadow-xl</code>
            </li>
            <li className="flex justify-between">
              <span>Modal Dialog</span>
              <code className="font-mono text-[#12303C]">shadow-2xl</code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
