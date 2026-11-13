"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { corporateColors } from "@/lib/design-system/tokens";

export const FoundationsSection: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const palette = [
    {
      name: "Midnight Blue",
      hex: "#12303C",
      role: "Struktur utama, headline, teks kontras.",
      textColor: "text-white",
      bgClass: "bg-[#12303C]",
      variable: "--color-corporate-midnight",
    },
    {
      name: "Forest Green",
      hex: "#20463D",
      role: "Alam, ketenangan, sustainability.",
      textColor: "text-white",
      bgClass: "bg-[#20463D]",
      variable: "--color-corporate-forest",
    },
    {
      name: "Ocean Teal",
      hex: "#087FA0",
      role: "Pendidikan, curiosity, digital accent.",
      textColor: "text-white",
      bgClass: "bg-[#087FA0]",
      variable: "--color-corporate-teal",
    },
    {
      name: "Bright Goldenrod",
      hex: "#EBCC3D",
      role: "Highlight premium secukupnya.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#EBCC3D]",
      variable: "--color-corporate-goldenrod",
    },
    {
      name: "Muted Gold",
      hex: "#DFC54E",
      role: "Aksen lembut.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#DFC54E]",
      variable: "--color-corporate-gold-muted",
    },
    {
      name: "Cream",
      hex: "#FAF8F5",
      role: "Latar dan whitespace, kanvas.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#FAF8F5]",
      border: true,
      variable: "--color-corporate-cream",
    },
    {
      name: "White",
      hex: "#FFFFFF",
      role: "Permukaan kartu dan kontras murni.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#FFFFFF]",
      border: true,
      variable: "--color-corporate-white",
    },
  ];

  const typographyScales = [
    { name: "Display 1 (Serif)", sample: "Karatas Family Heritage", size: "text-4xl md:text-5xl", style: "font-serif", tracking: "tracking-tight" },
    { name: "Headline 2 (Serif)", sample: "Everything your smile needs", size: "text-2xl md:text-3xl", style: "font-serif", tracking: "tracking-tight" },
    { name: "Headline 3 (Sans)", sample: "Building upon faith and values", size: "text-xl", style: "font-sans font-bold", tracking: "tracking-tight" },
    { name: "Body Regular (Sans)", sample: "Curated collections, wisdom-driven leadership, and sustainable digital architecture.", size: "text-sm", style: "font-sans", tracking: "leading-relaxed" },
    { name: "Caption / Mono", sample: "TOKEN_CORPORATE_MIDNIGHT_#12303C", size: "text-xs font-mono text-[#087FA0]", style: "font-mono", tracking: "uppercase tracking-wider" },
  ];

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Token Specifications
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Foundations & Corporate Palette
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-3xl">
          Dasar sistem visual Karatas Family yang mendefinisikan warna korporat, skala tipografi, elevasi bayangan, dan token batas tata letak.
        </p>
      </div>

      {/* Corporate Colors Grid */}
      <div>
        <h3 className="text-base font-bold text-[#12303C] mb-4">
          Warna Korporat (Corporate Palette)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {palette.map((item) => {
            const isCopied = copiedHex === item.hex;
            return (
              <div
                key={item.name}
                className="rounded-2xl border border-[#EAE5DC] bg-white overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div
                  className={`h-28 w-full p-4 flex flex-col justify-between ${item.bgClass} ${item.textColor} ${item.border ? "border-b border-[#EAE5DC]" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wide">{item.name}</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(item.hex)}
                      className="p-1.5 rounded-lg bg-black/15 hover:bg-black/25 text-current transition-colors cursor-pointer"
                      title="Copy HEX"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <span className="font-mono text-xs font-semibold">{item.hex}</span>
                </div>
                <div className="p-4 flex flex-col gap-1.5 text-xs">
                  <p className="font-medium text-[#12303C] leading-snug">{item.role}</p>
                  <code className="text-[11px] font-mono text-[#087FA0] mt-1">
                    {item.variable}
                  </code>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Typography Scale */}
      <div className="rounded-2xl border border-[#EAE5DC] bg-white p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#12303C] mb-4">
          Skala Tipografi (Typography Scale)
        </h3>
        <div className="divide-y divide-[#EAE5DC]">
          {typographyScales.map((item) => (
            <div key={item.name} className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-baseline justify-between gap-3">
              <div className="w-48 shrink-0">
                <span className="text-xs font-semibold text-[#12303C]/70 block">{item.name}</span>
                <span className="text-[11px] font-mono text-[#087FA0]">{item.size}</span>
              </div>
              <div className="flex-1">
                <p className={`${item.size} ${item.style} ${item.tracking} text-[#12303C]`}>
                  {item.sample}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layout Rulers & Boundaries */}
      <div className="rounded-2xl border border-[#EAE5DC] bg-white p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#12303C] mb-2">
          Batas Layout & Spacing Rulers
        </h3>
        <p className="text-xs text-[#12303C]/70 mb-6">
          Standar batas kontainer, margin aman, dan padding vertikal per section.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC]">
            <span className="text-xs font-bold text-[#12303C] uppercase tracking-wider block">
              Max Container Width
            </span>
            <p className="text-2xl font-mono font-bold text-[#087FA0] mt-1">1280px</p>
            <p className="text-xs text-[#12303C]/70 mt-1">
              <code>max-w-7xl mx-auto</code> untuk batas kanan-kiri desktop terpusat.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC]">
            <span className="text-xs font-bold text-[#12303C] uppercase tracking-wider block">
              Section Padding (Y)
            </span>
            <p className="text-2xl font-mono font-bold text-[#20463D] mt-1">64px - 96px</p>
            <p className="text-xs text-[#12303C]/70 mt-1">
              <code>py-16 md:py-24</code> untuk ruang bernapas antar section.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC]">
            <span className="text-xs font-bold text-[#12303C] uppercase tracking-wider block">
              Horizontal Insets (X)
            </span>
            <p className="text-2xl font-mono font-bold text-[#12303C] mt-1">16px - 32px</p>
            <p className="text-xs text-[#12303C]/70 mt-1">
              <code>px-4 sm:px-6 lg:px-8</code> menjamin konten tidak menabrak tepi layar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
