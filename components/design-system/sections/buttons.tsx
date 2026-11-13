"use client";

import React, { useState } from "react";
import { ArrowRight, BookOpen, Heart, Download, Sparkles, Check, Send, AlertTriangle, Trash2 } from "lucide-react";
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

  const allVariants: { variant: ButtonVariant; label: string; role: string }[] = [
    { variant: "teal", label: "Ocean Teal", role: "Primary brand CTA K4Book (Pendidikan, eksplorasi)" },
    { variant: "primary", label: "Midnight Blue", role: "Struktur utama, aksi otoritatif ekosistem" },
    { variant: "secondary", label: "Forest Green", role: "Aksi artikel RANI (Keberlanjutan & empati)" },
    { variant: "outline", label: "Outline", role: "Kenali Brand lini masa depan (Akan Datang)" },
    { variant: "ghost", label: "Ghost", role: "Aksi sekunder non-intrusif & link navigasi" },
    { variant: "link", label: "Link Style", role: "Tautan inline dalam teks & footer" },
    { variant: "destructive", label: "Destructive", role: "Pembatalan, hapus draft, reset formulir" },
    { variant: "success", label: "Success", role: "Konfirmasi pembayaran terverifikasi" },
    { variant: "warning", label: "Warning (Gold)", role: "Peringatan moderasi & peninjauan" },
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
          Sistem tombol lengkap dengan 9 varian warna tema, 5 skala ukuran (XS hingga XL), icon slots, dan penanganan status aksesibilitas minimal 44px touch target.
        </p>
      </div>

      {/* Main Interactive Playground */}
      <ComponentPreview
        title="Interactive Button Playground"
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
              <div className="flex gap-1">
                {(["xs", "sm", "md", "lg", "xl", "icon"] as ButtonSize[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`px-2 py-1 rounded-lg text-xs font-mono uppercase cursor-pointer transition-colors ${
                      size === s
                        ? "bg-[#12303C] text-white font-bold shadow-xs"
                        : "bg-[#FBF8F0] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={square}
                  onChange={(e) => setSquare(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Square Radius</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isLoading}
                  onChange={(e) => setIsLoading(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Loading</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={disabled}
                  onChange={(e) => setDisabled(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Disabled</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasLeftIcon}
                  onChange={(e) => setHasLeftIcon(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Left Icon</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer">
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

      {/* Comprehensive Variant Matrix */}
      <div className="rounded-2xl border border-[#EAE5DC] bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h3 className="text-base font-bold text-[#12303C] font-montserrat">
            Matriks 9 Varian Tombol & Panduan Peruntukan
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
                  Contoh Tombol
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
