"use client";

import React, { useState } from "react";
import { Copy, Check, Info } from "lucide-react";
import { corporateColors } from "@/lib/design-system/tokens";

export const FoundationsSection: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const primaryPalette = [
    {
      name: "Midnight Blue",
      hex: "#12303C",
      role: "Header, heading, struktur utama, teks kontras tinggi.",
      textColor: "text-white",
      bgClass: "bg-[#12303C]",
      variable: "--color-corporate-midnight",
      shades: [
        { level: "50", hex: "#F0F4F7" },
        { level: "100", hex: "#D9E3E8" },
        { level: "200", hex: "#B3C7D1" },
        { level: "300", hex: "#8DABBA" },
        { level: "400", hex: "#4D7A94" },
        { level: "500", hex: "#1E4C60" },
        { level: "600", hex: "#173C4D" },
        { level: "700", hex: "#12303C" }, // Primary
        { level: "800", hex: "#0D222B" },
        { level: "900", hex: "#08151B" },
      ],
    },
    {
      name: "Forest Green",
      hex: "#20463D",
      role: "Natural elements, sustainability, nilai pertumbuhan regeneratif.",
      textColor: "text-white",
      bgClass: "bg-[#20463D]",
      variable: "--color-corporate-forest",
      shades: [
        { level: "50", hex: "#F0F5F4" },
        { level: "100", hex: "#DCE7E4" },
        { level: "200", hex: "#B9D0CA" },
        { level: "300", hex: "#96B8AF" },
        { level: "400", hex: "#508A7C" },
        { level: "500", hex: "#2B5D51" },
        { level: "600", hex: "#20463D" }, // Primary
        { level: "700", hex: "#17342D" },
        { level: "800", hex: "#10231E" },
        { level: "900", hex: "#0A1713" },
      ],
    },
    {
      name: "Ocean Teal",
      hex: "#087FA0",
      role: "Education, digital accent, aksi interaktif dan link utama.",
      textColor: "text-white",
      bgClass: "bg-[#087FA0]",
      variable: "--color-corporate-teal",
      shades: [
        { level: "50", hex: "#EAF6F9" },
        { level: "100", hex: "#CAECF4" },
        { level: "200", hex: "#95D9E9" },
        { level: "300", hex: "#60C6DE" },
        { level: "400", hex: "#24AED0" },
        { level: "500", hex: "#0A95BC" },
        { level: "600", hex: "#087FA0" }, // Primary
        { level: "700", hex: "#06627C" },
        { level: "800", hex: "#044658" },
        { level: "900", hex: "#022B36" },
      ],
    },
    {
      name: "Bright Goldenrod",
      hex: "#EBCC3D",
      role: "Highlight premium secukupnya, badge aktif, bintang rating.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#EBCC3D]",
      variable: "--color-corporate-goldenrod",
      shades: [
        { level: "50", hex: "#FCF9E8" },
        { level: "100", hex: "#F9F3C6" },
        { level: "200", hex: "#F3E78D" },
        { level: "300", hex: "#EDDB55" },
        { level: "400", hex: "#EBCC3D" }, // Primary
        { level: "500", hex: "#D4B426" },
        { level: "600", hex: "#B0951C" },
        { level: "700", hex: "#8C7614" },
        { level: "800", hex: "#69580D" },
        { level: "900", hex: "#453A07" },
      ],
    },
    {
      name: "Muted Gold",
      hex: "#DFC54E",
      role: "Aksen lembut, garis batas halus, ornamen visual editorial.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#DFC54E]",
      variable: "--color-corporate-gold-muted",
      shades: [
        { level: "50", hex: "#FAF7EA" },
        { level: "100", hex: "#F4ECC9" },
        { level: "200", hex: "#E9DA94" },
        { level: "300", hex: "#DFC54E" }, // Primary
        { level: "400", hex: "#C8AD36" },
        { level: "500", hex: "#A9922A" },
        { level: "600", hex: "#8B7720" },
        { level: "700", hex: "#6C5C17" },
        { level: "800", hex: "#4D410F" },
        { level: "900", hex: "#2F2708" },
      ],
    },
    {
      name: "Cream",
      hex: "#FBF8F0",
      role: "Latar utama halaman (background), whitespace kanvas bacaan.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#FBF8F0]",
      border: true,
      variable: "--color-corporate-cream",
      shades: [
        { level: "50", hex: "#FFFFFF" },
        { level: "100", hex: "#FBF8F0" }, // Primary
        { level: "200", hex: "#F5EFE0" },
        { level: "300", hex: "#EFE5CE" },
        { level: "400", hex: "#E2D3B3" },
        { level: "500", hex: "#D2BF96" },
      ],
    },
    {
      name: "White",
      hex: "#FFFFFF",
      role: "Surface kartu, modal container, kontras bersih.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#FFFFFF]",
      border: true,
      variable: "--color-corporate-white",
      shades: [{ level: "100", hex: "#FFFFFF" }],
    },
    {
      name: "Soft Gray",
      hex: "#F4F6F5",
      role: "Secondary background, bar filter, kontainer sekunder.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#F4F6F5]",
      border: true,
      variable: "--color-corporate-softgray",
      shades: [
        { level: "50", hex: "#FAFBFA" },
        { level: "100", hex: "#F4F6F5" }, // Primary
        { level: "200", hex: "#E6ECE9" },
        { level: "300", hex: "#D4DED9" },
        { level: "400", hex: "#A7B8B0" },
        { level: "500", hex: "#7A9287" },
      ],
    },
  ];

  const typographyHierarchy = [
    {
      level: "Display Hero (Editorial Serif)",
      font: "Newsreader / Cormorant",
      size: "40px - 48px",
      weight: "Bold 700",
      leading: "Leading tight (1.15)",
      sample: "Inspire the Young — Learn, Grow, Lead",
      rule: "Headline hero utama dan cover publikasi K4Family.",
    },
    {
      level: "Heading 1 (Montserrat)",
      font: "Montserrat",
      size: "28px - 32px",
      weight: "SemiBold 600",
      leading: "Leading tight (1.25)",
      sample: "K4Book Digital Publishing & Commerce",
      rule: "Judul section, nama direktori brand, dan headline utama artikel.",
    },
    {
      level: "Heading 2 (Montserrat)",
      font: "Montserrat",
      size: "20px - 24px",
      weight: "Medium 500",
      leading: "Leading snug (1.3)",
      sample: "Kidstory: Cerita Nilai Anak Usia Dini",
      rule: "Judul kartu produk, sub-section, dan modal titles.",
    },
    {
      level: "Body Text (16px Default)",
      font: "Montserrat / Plus Jakarta Sans",
      size: "16px (1rem)",
      weight: "Regular 400",
      leading: "Leading relaxed (1.6)",
      sample: "Setiap publikasi dirancang dengan cermat untuk menumbuhkan rasa ingin tahu, kemandirian berpikir, dan nilai kepemimpinan antargenerasi.",
      rule: "Teks konten utama yang menjamin kenyamanan pembaca dalam paragraf panjang.",
    },
    {
      level: "Small Text (14px)",
      font: "Montserrat",
      size: "14px (0.875rem)",
      weight: "Medium 500",
      leading: "Leading normal (1.4)",
      sample: "Format e-Book PDF berkualitas tinggi dapat diakses melalui Library digital akun Anda.",
      rule: "Label form input, deskripsi sekunder kartu, dan menu navigasi.",
    },
    {
      level: "Caption / Mono (12px Minimum)",
      font: "JetBrains Mono / Montserrat",
      size: "12px (0.75rem)",
      weight: "SemiBold 600",
      leading: "Leading none",
      sample: "KODE_DOKUMEN_V04 • HAK CIPTA K4FAMILY EKOSISTEM",
      rule: "Metadata, timestamp, badge pilar usia, dan token CSS variables.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FA0]/10 text-[#087FA0] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>Foundations & Tokens</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#12303C] tracking-tight font-montserrat">
          Corporate Palette & Typography
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-3xl leading-relaxed">
          Standar fondasi visual resmi K4Family Developer Brief V04: 8 warna korporat utama, skala turunan 50–900, hierarki tipografi Montserrat, dan aturan tata letak presisi.
        </p>
      </div>

      {/* Corporate Colors Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-[#EAE5DC]">
          <h3 className="text-base font-bold text-[#12303C]">
            Palet Warna Korporat Resmi & Skala 50–900
          </h3>
          <span className="text-xs text-[#12303C]/60">
            Klik pada warna untuk menyalin kode HEX
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {primaryPalette.map((item) => {
            const isCopied = copiedHex === item.hex;
            return (
              <div
                key={item.name}
                className="rounded-2xl border border-[#EAE5DC] bg-white overflow-hidden shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
              >
                {/* Main Color Header Block */}
                <div
                  className={`h-28 w-full p-4 flex flex-col justify-between ${item.bgClass} ${item.textColor} ${item.border ? "border-b border-[#EAE5DC]" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wide font-montserrat">{item.name}</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(item.hex)}
                      className="p-1.5 rounded-lg bg-black/15 hover:bg-black/25 text-current transition-colors cursor-pointer"
                      title="Salin HEX resmi"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <span className="font-mono text-xs font-bold tracking-wider">{item.hex}</span>
                </div>

                {/* Sub-scale preview bar with tooltips */}
                <div className="p-3 bg-[#FBF8F0]/70 border-b border-[#EAE5DC]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-[#12303C]/60 uppercase tracking-wider">
                      Skala Turunan (50–900)
                    </span>
                    <span className="text-[9px] font-mono text-[#087FA0]">Klik shade</span>
                  </div>
                  <div className="flex h-5 w-full rounded-md overflow-hidden border border-black/10">
                    {item.shades.map((sh) => (
                      <div
                        key={sh.level}
                        className="flex-1 cursor-pointer transition-transform hover:scale-110 relative group"
                        style={{ backgroundColor: sh.hex }}
                        onClick={() => handleCopy(sh.hex)}
                        title={`${item.name} ${sh.level}: ${sh.hex}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Role Description */}
                <div className="p-4 flex flex-col gap-1 text-xs">
                  <p className="font-medium text-[#12303C] leading-snug">{item.role}</p>
                  <code className="text-[11px] font-mono text-[#087FA0] mt-1 bg-[#FBF8F0] px-2 py-0.5 rounded border border-[#EAE5DC] self-start">
                    {item.variable}
                  </code>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Typography Hierarchy Table */}
      <div className="rounded-2xl border border-[#EAE5DC] bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h3 className="text-base font-bold text-[#12303C] font-montserrat">
            Hierarki Tipografi Resmi (Montserrat & Editorial Serif)
          </h3>
          <p className="text-xs text-[#12303C]/70 mt-1">
            Montserrat digunakan sebagai font fondasi untuk Headings, Navigation, Buttons, dan Labels. Body text diatur pada standar 16px dengan line-height yang nyaman untuk bacaan panjang.
          </p>
        </div>

        <div className="divide-y divide-[#EAE5DC]/80">
          {typographyHierarchy.map((typo) => (
            <div key={typo.level} className="py-5 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-baseline justify-between gap-6">
              <div className="w-64 shrink-0 space-y-1">
                <span className="text-xs font-bold text-[#12303C] block font-montserrat">{typo.level}</span>
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#087FA0]">
                  <span>{typo.size}</span>
                  <span>•</span>
                  <span>{typo.weight}</span>
                </div>
                <span className="text-[11px] text-[#12303C]/60 block leading-tight">{typo.rule}</span>
              </div>
              <div className="flex-1">
                <p className="text-base text-[#12303C] leading-relaxed">
                  {typo.sample}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spatial Boundaries & Rulers */}
      <div className="rounded-2xl border border-[#EAE5DC] bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h3 className="text-base font-bold text-[#12303C] font-montserrat">
            Batas Layout & Spacing Rulers (Developer Brief V04)
          </h3>
          <p className="text-xs text-[#12303C]/70 mt-1">
            Menjamin keselarasan proporsi ruang antar-perangkat desktop, tablet, dan smartphone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#FBF8F0] border border-[#EAE5DC]">
            <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider block">
              Max Container Width
            </span>
            <p className="text-3xl font-mono font-bold text-[#12303C] mt-2">1280px</p>
            <p className="text-xs text-[#12303C]/70 mt-1 leading-relaxed">
              <code>max-w-7xl mx-auto</code> untuk menjaga garis pandang konten terpusat dan ergonomis.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FBF8F0] border border-[#EAE5DC]">
            <span className="text-xs font-bold text-[#20463D] uppercase tracking-wider block">
              Section Padding (Y)
            </span>
            <p className="text-3xl font-mono font-bold text-[#12303C] mt-2">64px – 96px</p>
            <p className="text-xs text-[#12303C]/70 mt-1 leading-relaxed">
              <code>py-16 md:py-24</code> memberi jeda ritmis antar-section ekosistem.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FBF8F0] border border-[#EAE5DC]">
            <span className="text-xs font-bold text-[#12303C] uppercase tracking-wider block">
              Touch Target Minimum
            </span>
            <p className="text-3xl font-mono font-bold text-[#12303C] mt-2">≥ 44px</p>
            <p className="text-xs text-[#12303C]/70 mt-1 leading-relaxed">
              Menjamin tombol dan link ramah sentuhan pada layar mobile 320px–767px.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
