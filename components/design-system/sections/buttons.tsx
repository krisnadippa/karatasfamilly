"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Heart,
  Download,
  Sparkles,
  Check,
  Send,
  AlertTriangle,
  Trash2,
  Share2,
  Bookmark,
  ChevronDown,
  ExternalLink,
  Plus,
} from "lucide-react";
import { Button, ButtonVariant, ButtonSize } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "../component-preview";

export const ButtonsSection: React.FC = () => {
  const [variant, setVariant] = useState<ButtonVariant>("teal");
  const [size, setSize] = useState<ButtonSize>("md");
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [square, setSquare] = useState(false);
  const [hasLeftIcon, setHasLeftIcon] = useState(false);
  const [hasRightIcon, setHasRightIcon] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const generatedCode = `<Button
  variant="${variant}"
  size="${size}"${square ? "\n  square" : ""}${isLoading ? "\n  isLoading" : ""}${disabled ? "\n  disabled" : ""}${
    hasLeftIcon ? '\n  leftIcon={<BookOpen className="w-4 h-4" />}' : ""
  }${hasRightIcon ? '\n  rightIcon={<ArrowRight className="w-4 h-4" />}' : ""}
  onClick={() => console.log("Action triggered")}
>
  ${
    variant === "teal"
      ? "Jelajahi K4Book"
      : variant === "secondary"
      ? "Baca Artikel RANI"
      : variant === "destructive"
      ? "Hapus Draft"
      : variant === "outline"
      ? "Kenali Brand"
      : "Aksi Utama K4"
  }
</Button>`;

  const allVariants: { variant: ButtonVariant; label: string; role: string; sample: string }[] = [
    { variant: "teal", label: "Ocean Teal", role: "Primary brand CTA K4Book (Pendidikan, eksplorasi)", sample: "Jelajahi K4Book" },
    { variant: "primary", label: "Midnight Blue", role: "Struktur utama, aksi otoritatif ekosistem", sample: "Konfirmasi Akun" },
    { variant: "secondary", label: "Forest Green", role: "Aksi artikel RANI (Keberlanjutan & empati)", sample: "Baca Panduan RANI" },
    { variant: "outline", label: "Outline", role: "Kenali Brand lini masa depan (Akan Datang)", sample: "Kenali Brand" },
    { variant: "ghost", label: "Ghost", role: "Aksi sekunder non-intrusif & link navigasi", sample: "Lihat Arsip" },
    { variant: "link", label: "Link Style", role: "Tautan inline dalam teks & footer", sample: "Pelajari Selengkapnya" },
    { variant: "destructive", label: "Destructive", role: "Pembatalan, hapus draft, reset formulir", sample: "Hapus Koleksi" },
    { variant: "success", label: "Success", role: "Konfirmasi pembayaran terverifikasi", sample: "Pesanan Selesai" },
    { variant: "warning", label: "Warning (Gold)", role: "Peringatan moderasi & peninjauan", sample: "Tinjau Perubahan" },
  ];

  const sizes: { size: ButtonSize; label: string; pxHeight: string }[] = [
    { size: "xs", label: "Extra Small (XS)", pxHeight: "h-8 (32px)" },
    { size: "sm", label: "Small (SM)", pxHeight: "h-9 (36px)" },
    { size: "md", label: "Medium (MD) - Default", pxHeight: "h-10 (40px)" },
    { size: "lg", label: "Large (LG)", pxHeight: "h-11 (44px)" },
    { size: "xl", label: "Extra Large (XL)", pxHeight: "h-12 (48px)" },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FA0]/10 text-[#087FA0] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>Action Triggers</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#12303C] tracking-tight font-montserrat">
          K4Family Button System
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl leading-relaxed">
          Sistem tombol lengkap dengan 9 varian warna tema, 5 skala ukuran (XS hingga XL), icon slots, indikator loading, state disabled, dan kepatuhan touch target minimal 44px.
        </p>
      </div>

      {/* Main Interactive Playground */}
      <ComponentPreview
        title="1. Interactive Button Playground"
        description="Konfigurasikan varian, ukuran, radius, dan state untuk menguji interaktivitas tombol secara langsung."
        code={generatedCode}
        controls={
          <div className="w-full flex flex-wrap items-center justify-between gap-4">
            {/* Variant Selector */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#12303C]">Variant:</span>
              <div className="flex flex-wrap gap-1">
                {(
                  [
                    "teal",
                    "primary",
                    "secondary",
                    "outline",
                    "ghost",
                    "link",
                    "destructive",
                    "success",
                    "warning",
                  ] as ButtonVariant[]
                ).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                      variant === v
                        ? "bg-[#12303C] text-white shadow-xs"
                        : "bg-[#FBF8F0] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#12303C]">Size:</span>
              <div className="flex items-center gap-1">
                {(["xs", "sm", "md", "lg", "xl", "icon"] as ButtonSize[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                      size === s
                        ? "bg-[#12303C] text-white shadow-xs"
                        : "bg-[#FBF8F0] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="flex items-center gap-3 flex-wrap">
              <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={square}
                  onChange={(e) => setSquare(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Square Radius</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={isLoading}
                  onChange={(e) => setIsLoading(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Loading</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={disabled}
                  onChange={(e) => setDisabled(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Disabled</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={hasLeftIcon}
                  onChange={(e) => setHasLeftIcon(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Left Icon</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs">
                <input
                  type="checkbox"
                  checked={hasRightIcon}
                  onChange={(e) => setHasRightIcon(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Right Icon</span>
              </label>
            </div>
          </div>
        }
      >
        <div className="flex flex-col items-center gap-4 py-4">
          <Button
            variant={variant}
            size={size}
            square={square}
            isLoading={isLoading}
            disabled={disabled}
            leftIcon={hasLeftIcon ? <BookOpen className="w-4 h-4" /> : undefined}
            rightIcon={hasRightIcon ? <ArrowRight className="w-4 h-4" /> : undefined}
            onClick={() => setClickCount((c) => c + 1)}
          >
            {size === "icon" ? (
              <Send className="w-4 h-4" />
            ) : variant === "teal" ? (
              "Jelajahi K4Book"
            ) : variant === "secondary" ? (
              "Baca Artikel RANI"
            ) : variant === "destructive" ? (
              "Hapus Draft"
            ) : variant === "outline" ? (
              "Kenali Brand"
            ) : (
              "Aksi Utama K4"
            )}
          </Button>

          <span className="text-xs text-[#12303C]/60 font-mono">
            Interactions registered: {clickCount} clicks
          </span>
        </div>
      </ComponentPreview>

      {/* 2. Button Size Scale Showcase */}
      <ComponentPreview
        title="2. Button Size Scale (XS to XL + Icon)"
        description="Perbandingan visual 5 tingkatan ukuran tombol standar K4Family beserta proporsi tipografi dan padding."
        code={`<Button size="xs">Extra Small (32px)</Button>
<Button size="sm">Small (36px)</Button>
<Button size="md">Medium (40px)</Button>
<Button size="lg">Large (44px - Touch Target)</Button>
<Button size="xl">Extra Large (48px - Hero CTA)</Button>
<Button size="icon"><Bookmark className="w-4 h-4" /></Button>`}
      >
        <div className="w-full flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 py-4">
          {sizes.map((s) => (
            <div key={s.size} className="flex flex-col items-center gap-1.5">
              <Button variant="teal" size={s.size}>
                Size {s.size.toUpperCase()}
              </Button>
              <span className="text-[10px] font-mono text-[#12303C]/50">{s.pxHeight}</span>
            </div>
          ))}

          <div className="flex flex-col items-center gap-1.5">
            <Button variant="teal" size="icon" title="Icon Button">
              <Bookmark className="w-4 h-4" />
            </Button>
            <span className="text-[10px] font-mono text-[#12303C]/50">Icon (40px)</span>
          </div>
        </div>
      </ComponentPreview>

      {/* 3. Button Icon Combinations & Full Width */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ComponentPreview
          title="3. Icon Button Variations"
          description="Dukungan icon kiri (leftIcon), icon kanan (rightIcon), dan icon tunggal."
          code={`<Button variant="teal" leftIcon={<BookOpen className="w-4 h-4" />}>Buka Buku</Button>
<Button variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>Lanjutkan</Button>
<Button variant="outline" size="icon"><Share2 className="w-4 h-4" /></Button>`}
          hideDeviceSwitcher
        >
          <div className="flex flex-wrap items-center justify-center gap-3 py-2">
            <Button variant="teal" size="sm" leftIcon={<BookOpen className="w-4 h-4" />}>
              Buka Katalog
            </Button>
            <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Lanjutkan
            </Button>
            <Button variant="secondary" size="sm" leftIcon={<Heart className="w-4 h-4" />} rightIcon={<ArrowRight className="w-4 h-4" />}>
              Artikel RANI
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="4. Button States (Loading & Disabled)"
          description="Visualisasi state aktif: normal, spinner loading bawaan, dan disabled."
          code={`<Button variant="teal" isLoading>Memproses...</Button>
<Button variant="teal" disabled>Tombol Nonaktif</Button>
<Button variant="destructive" isLoading>Menghapus...</Button>`}
          hideDeviceSwitcher
        >
          <div className="flex flex-wrap items-center justify-center gap-3 py-2">
            <Button variant="teal" size="sm" isLoading>
              Menyimpan
            </Button>
            <Button variant="primary" size="sm" disabled>
              Tidak Tersedia
            </Button>
            <Button variant="destructive" size="sm" isLoading>
              Menghapus
            </Button>
            <Button variant="outline" size="sm" disabled>
              Akan Datang
            </Button>
          </div>
        </ComponentPreview>
      </div>

      {/* 5. Button Groups & Action Bars */}
      <ComponentPreview
        title="5. Button Groups & Mobile Sticky Actions"
        description="Pola pengelompokan tombol untuk toolbar filter, split button, dan aksi belanja K4Book."
        code={`<div className="inline-flex rounded-full border border-[#EAE5DC] bg-white p-1">
  <Button variant="ghost" size="sm">Buku Fisik</Button>
  <Button variant="teal" size="sm">E-Book Digital</Button>
  <Button variant="ghost" size="sm">Audio Book</Button>
</div>`}
      >
        <div className="w-full space-y-6">
          {/* Segmented Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex rounded-full border border-[#EAE5DC] bg-[#FBF8F0] p-1 gap-1">
              <Button variant="ghost" size="sm" className="rounded-full">
                Semua Format
              </Button>
              <Button variant="teal" size="sm" className="rounded-full shadow-xs">
                E-Book Digital
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full">
                Hardcover Cetak
              </Button>
            </div>
          </div>

          {/* Checkout Bar Pattern */}
          <div className="p-4 rounded-2xl border border-[#EAE5DC] bg-white flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-[#12303C]">Paket Membaca Kidstory</p>
              <p className="text-[11px] text-[#12303C]/60">Format E-Book + Audio Pendamping</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" leftIcon={<Heart className="w-3.5 h-3.5" />}>
                Wishlist
              </Button>
              <Button variant="teal" size="sm" leftIcon={<Download className="w-3.5 h-3.5" />}>
                Beli Sekarang (Demo)
              </Button>
            </div>
          </div>
        </div>
      </ComponentPreview>

      {/* 6. Comprehensive Variant Matrix */}
      <div className="rounded-2xl border border-[#EAE5DC] bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h3 className="text-base font-bold text-[#12303C] font-montserrat">
            6. Matriks 9 Varian Tombol & Panduan Peruntukan
          </h3>
          <p className="text-xs text-[#12303C]/70 mt-0.5">
            Setiap varian memiliki peruntukan fungsional spesifik sesuai panduan Developer Brief V04.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allVariants.map((item) => (
            <div
              key={item.variant}
              className="p-4 rounded-xl border border-[#EAE5DC] bg-[#FBF8F0]/50 flex flex-col justify-between gap-3"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#12303C] uppercase font-montserrat">
                    {item.label}
                  </span>
                  <Badge variant="outline" size="sm">{item.variant}</Badge>
                </div>
                <p className="text-[11px] text-[#12303C]/70 leading-snug">{item.role}</p>
              </div>

              <div className="pt-2">
                <Button variant={item.variant} size="sm" className="w-full justify-center">
                  {item.sample}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
