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

  const primaryPalette = [
    {
      name: "Midnight Blue",
      hex: "#12303C",
      role: "Header, heading, struktur utama, teks kontras tinggi.",
      textColor: "text-white",
      bgClass: "bg-[#12303C]",
      variable: "--color-corporate-midnight",
      scale: ["#F0F4F7", "#D9E3E8", "#B3C7D1", "#8DABBA", "#4D7A94", "#1E4C60", "#173C4D", "#12303C", "#0D222B", "#08151B"],
    },
    {
      name: "Forest Green",
      hex: "#20463D",
      role: "Natural elements, sustainability, nilai pertumbuhan regeneratif.",
      textColor: "text-white",
      bgClass: "bg-[#20463D]",
      variable: "--color-corporate-forest",
      scale: ["#F0F5F4", "#DCE7E4", "#B9D0CA", "#96B8AF", "#508A7C", "#2B5D51", "#20463D", "#17342D", "#10231E", "#0A1713"],
    },
    {
      name: "Ocean Teal",
      hex: "#087FA0",
      role: "Education, digital accent, aksi interaktif dan link utama.",
      textColor: "text-white",
      bgClass: "bg-[#087FA0]",
      variable: "--color-corporate-teal",
      scale: ["#EAF6F9", "#CAECF4", "#95D9E9", "#60C6DE", "#24AED0", "#0A95BC", "#087FA0", "#06627C", "#044658", "#022B36"],
    },
    {
      name: "Bright Goldenrod",
      hex: "#EBCC3D",
      role: "Highlight premium secukupnya, indikator penting, lencana aktif.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#EBCC3D]",
      variable: "--color-corporate-goldenrod",
      scale: ["#FCF9E8", "#F9F3C6", "#F3E78D", "#EDDB55", "#EBCC3D", "#D4B426", "#B0951C", "#8C7614", "#69580D", "#453A07"],
    },
    {
      name: "Muted Gold",
      hex: "#DFC54E",
      role: "Aksen lembut, garis batas halus, ornamen visual editorial.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#DFC54E]",
      variable: "--color-corporate-gold-muted",
      scale: ["#FAF7EA", "#F4ECC9", "#E9DA94", "#DFC54E", "#C8AD36", "#A9922A", "#8B7720", "#6C5C17", "#4D410F", "#2F2708"],
    },
    {
      name: "Cream",
      hex: "#FBF8F0",
      role: "Latar utama halaman (background), whitespace kanvas bacaan.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#FBF8F0]",
      border: true,
      variable: "--color-corporate-cream",
      scale: ["#FFFFFF", "#FBF8F0", "#F5EFE0", "#EFE5CE", "#E2D3B3", "#D2BF96"],
    },
    {
      name: "White",
      hex: "#FFFFFF",
      role: "Surface kartu, modal container, kontras bersih.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#FFFFFF]",
      border: true,
      variable: "--color-corporate-white",
      scale: ["#FFFFFF"],
    },
    {
      name: "Soft Gray",
      hex: "#F4F6F5",
      role: "Secondary background, bar filter, kontainer sekunder.",
      textColor: "text-[#12303C]",
      bgClass: "bg-[#F4F6F5]",
      border: true,
      variable: "--color-corporate-softgray",
      scale: ["#FAFBFA", "#F4F6F5", "#E6ECE9", "#D4DED9", "#A7B8B0", "#7A9287"],
    },
  ];

  const typographyHierarchy = [
    { level: "Display 1 (Serif)", font: "Newsreader", size: "36px - 48px", sample: "Inspire the Young — Learn, Grow, Lead", rule: "Headline hero dan cover utama publikasi K4Family." },
    { level: "Heading 1 (Montserrat)", font: "Montserrat SemiBold", size: "28px - 32px", sample: "K4Book Digital Publishing & Commerce", rule: "Judul section utama dan nama direktori brand." },
    { level: "Heading 2 (Montserrat)", font: "Montserrat Medium", size: "20px - 24px", sample: "Kidstory: Cerita Nilai Anak Usia Dini", rule: "Judul kartu produk dan sub-section." },
    { level: "Body Text (16px Default)", font: "Montserrat / Sans", size: "16px (Leading 1.6)", sample: "Setiap publikasi dirancang dengan cermat untuk menumbuhkan rasa ingin tahu, kemandirian berpikir, dan nilai kepemimpinan antargenerasi.", rule: "Teks konten utama yang menjamin kenyamanan baca panjang." },
    { level: "Small Text (14px)", font: "Montserrat", size: "14px", sample: "Format e-Book PDF berkualitas tinggi dapat diakses melalui Library digital akun Anda.", rule: "Label input, deskripsi sekunder kartu, dan menu navigasi." },
    { level: "Caption / Mono (12px Min)", font: "Mono / Montserrat", size: "12px", sample: "KODE_DOKUMEN_V04 • HAK CIPTA K4FAMILY EKOSISTEM", rule: "Metadata, timestamp, badge pilar, dan kode token." },
  ];

  return (
    <div className="space-y-12">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Visual Identity Tokens
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Foundations & Corporate Color Palette
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Standar fondasi visual resmi K4Family Developer Brief V04: 8 warna korporat utama, skala turunan 50–900, hierarki tipografi Montserrat, dan aturan tata letak.
        </p>
      </div>

      {/* Corporate Colors with 50-900 Scale */}
      <div className="space-y-6">
        <h3 className="text-base font-bold text-[#12303C]">
          Palet Warna Resmi & Skala Turunan (50–900)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {primaryPalette.map((item) => {
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
                      title="Salin HEX"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <span className="font-mono text-xs font-semibold">{item.hex}</span>
                </div>

                {/* Sub-scale preview bar */}
                <div className="p-3 bg-[#FBF8F0]/70 border-b border-[#EAE5DC]">
                  <span className="text-[10px] font-bold text-[#12303C]/60 uppercase tracking-wider block mb-1">
                    Skala visual (50–900)
                  </span>
                  <div className="flex h-3 w-full rounded overflow-hidden border border-black/10">
                    {item.scale.map((scColor, idx) => (
                      <div
                        key={idx}
                        className="flex-1 cursor-pointer"
                        style={{ backgroundColor: scColor }}
                        title={`Tingkat ${idx * 100 || 50}: ${scColor}`}
                        onClick={() => handleCopy(scColor)}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-1 text-xs">
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

      {/* Typography Hierarchy */}
      <div className="rounded-2xl border border-[#EAE5DC] bg-white p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base font-bold text-[#12303C]">
            Hierarki Tipografi (Montserrat & Editorial Serif)
          </h3>
          <p className="text-xs text-[#12303C]/70 mt-0.5">
            Montserrat digunakan sebagai font utama untuk headings, navigasi, tombol, dan label. Body text menggunakan ukuran default 16px dengan line-height yang nyaman untuk bacaan panjang.
          </p>
        </div>

        <div className="divide-y divide-[#EAE5DC]">
          {typographyHierarchy.map((typo) => (
            <div key={typo.level} className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <div className="w-56 shrink-0">
                <span className="text-xs font-bold text-[#12303C] block">{typo.level}</span>
                <span className="text-[11px] font-mono text-[#087FA0]">{typo.size}</span>
                <span className="text-[10px] text-[#12303C]/60 block mt-0.5">{typo.rule}</span>
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

      {/* Layout Rulers & Bounds */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#EAE5DC] shadow-xs">
          <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider block">
            Container Boundaries
          </span>
          <p className="text-3xl font-mono font-bold text-[#12303C] mt-2">1280px</p>
          <p className="text-xs text-[#12303C]/70 mt-1">
            <code>max-w-7xl mx-auto</code> memastikan kenyamanan pandang di monitor ultra-wide.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#EAE5DC] shadow-xs">
          <span className="text-xs font-bold text-[#20463D] uppercase tracking-wider block">
            Vertical Section Rhythm
          </span>
          <p className="text-3xl font-mono font-bold text-[#12303C] mt-2">64px – 96px</p>
          <p className="text-xs text-[#12303C]/70 mt-1">
            <code>py-16 md:py-24</code> memberi ruang bernapas alami antar blok konten ekosistem.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#EAE5DC] shadow-xs">
          <span className="text-xs font-bold text-[#12303C] uppercase tracking-wider block">
            Touch Target & Insets
          </span>
          <p className="text-3xl font-mono font-bold text-[#12303C] mt-2">≥ 44px</p>
          <p className="text-xs text-[#12303C]/70 mt-1">
            Aksesibilitas tombol dan tautan terjamin pada layar sentuh mobile 320px–767px.
          </p>
        </div>
      </div>
    </div>
  );
};
