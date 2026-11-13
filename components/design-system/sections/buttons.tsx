"use client";

import React, { useState } from "react";
import { ArrowRight, BookOpen, Heart, Download, Sparkles, Check, Send, AlertTriangle, Trash2 } from "lucide-react";
import { Button, ButtonVariant, ButtonSize } from "@/components/ui/button";
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
      : "Primary Action"
  }
</Button>`;

  return (
    <div className="space-y-12">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Action Triggers
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          K4Family Button System
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Sistem tombol lengkap dengan 9 varian warna tema, 5 skala ukuran (XS hingga XL), icon slot, dan penanganan status aksesibilitas minimal 44px touch target.
        </p>
      </div>

      {/* Main Interactive Playground */}
      <ComponentPreview
        title="Interactive Button Playground"
        description="Konfigurasikan varian, ukuran, bentuk, dan state untuk menghasilkan kode TSX riil."
        code={generatedCode}
        controls={
          <div className="w-full flex flex-wrap items-center justify-between gap-4">
            {/* Variant selector */}
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
                    className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition-colors ${
                      variant === v
                        ? "bg-[#12303C] text-white"
                        : "bg-[#FBF8F0] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#12303C]">Size:</span>
              <div className="flex gap-1">
                {(["xs", "sm", "md", "lg", "xl", "icon"] as ButtonSize[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`px-2 py-1 rounded text-xs font-mono uppercase cursor-pointer transition-colors ${
                      size === s
                        ? "bg-[#12303C] text-white font-bold"
                        : "bg-[#FBF8F0] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
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
        <div className="flex flex-col items-center gap-4">
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

      {/* Contextual Real-World Actions */}
      <div className="rounded-2xl border border-[#EAE5DC] bg-white p-6 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-[#12303C]">
          Konteks Penggunaan Tombol Resmi K4Family
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC] space-y-2">
            <span className="text-xs font-bold text-[#087FA0] uppercase block">
              1. K4Book Commerce Actions
            </span>
            <div className="flex flex-col gap-2">
              <Button variant="teal" size="sm" rightIcon={<BookOpen className="w-3.5 h-3.5" />}>
                Jelajahi K4Book
              </Button>
              <Button variant="primary" size="sm">
                Masuk Library
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC] space-y-2">
            <span className="text-xs font-bold text-[#20463D] uppercase block">
              2. RANI Educational Actions
            </span>
            <div className="flex flex-col gap-2">
              <Button variant="secondary" size="sm" rightIcon={<Heart className="w-3.5 h-3.5" />}>
                Baca Artikel Lengkap
              </Button>
              <Button variant="outline" size="sm">
                Lihat Kategori Parenting
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC] space-y-2">
            <span className="text-xs font-bold text-[#12303C] uppercase block">
              3. Future Brands (Non-Transaksi)
            </span>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm">
                Kenali Brand
              </Button>
              <Button variant="ghost" size="sm">
                Lihat Konsep Karya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
