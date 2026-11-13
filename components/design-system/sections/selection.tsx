"use client";

import React, { useState } from "react";
import { Star, Baby, Sparkles, Compass, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { kidstoryAgeGroups } from "@/lib/design-system/tokens";
import { ComponentPreview } from "../component-preview";

export const SelectionSection: React.FC = () => {
  const [selectedKidstoryAge, setSelectedKidstoryAge] = useState("0-18m");
  const [agreePrivacy, setAgreePrivacy] = useState(true);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [offlineSync, setOfflineSync] = useState(true);
  const [readingRating, setReadingRating] = useState(5);
  const [fontScale, setFontScale] = useState(100);

  const selectionCode = `<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
  {kidstoryAgeGroups.map((group) => (
    <div
      key={group.id}
      onClick={() => setSelectedKidstoryAge(group.id)}
      className={\`p-4 rounded-xl border cursor-pointer \${
        selectedKidstoryAge === group.id
          ? "border-[#087FA0] bg-[#087FA0]/5 ring-2 ring-[#087FA0]/20"
          : "border-[#EAE5DC] bg-white"
      }\`}
    >
      <span className="font-bold text-xs">{group.label}</span>
      <p className="text-[11px] text-[#12303C]/70">{group.description}</p>
    </div>
  ))}
</div>`;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FA0]/10 text-[#087FA0] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>Selection Controls</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#12303C] tracking-tight font-montserrat">
          Selection Controls & Age Filters
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl leading-relaxed">
          Komponen seleksi eksklusif dan multi-opsi: Pilihan kelompok usia resmi Kidstory (0–18m, 18m–3y, 3–5y), Checkbox persetujuan, Toggle Switch, dan Rating interaktif.
        </p>
      </div>

      {/* Main Kidstory Age Group Card Selector */}
      <ComponentPreview
        title="Kidstory Age Groups Card Selector (Brief V04 Standard)"
        description="Seleksi kategori usia resmi untuk buku anak K4Book Kidstory. Kategori dibatasi secara ketat sesuai panduan kurasi: 0–18 bulan, 18 bulan–3 tahun, dan 3–5 tahun."
        code={selectionCode}
      >
        <div className="w-full max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#EAE5DC]">
            <span className="text-xs font-bold text-[#12303C] uppercase tracking-wider font-montserrat">
              Pilih Kelompok Usia Anak
            </span>
            <span className="text-xs text-[#087FA0] font-mono font-bold">
              Terpilih: {kidstoryAgeGroups.find((g) => g.id === selectedKidstoryAge)?.label}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {kidstoryAgeGroups.map((group) => {
              const isSelected = selectedKidstoryAge === group.id;
              return (
                <div
                  key={group.id}
                  onClick={() => setSelectedKidstoryAge(group.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "border-[#087FA0] bg-white ring-2 ring-[#087FA0]/20 shadow-sm"
                      : "border-[#EAE5DC] bg-white hover:border-[#12303C]/30"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#12303C] font-montserrat">
                        {group.label}
                      </span>
                      {isSelected ? (
                        <div className="w-4 h-4 rounded-full bg-[#087FA0] text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-[#12303C]/20" />
                      )}
                    </div>
                    <p className="text-[11px] text-[#12303C]/75 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#EAE5DC]/60 text-[10px] font-mono text-[#087FA0]">
                    Fase 1 Approved
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ComponentPreview>

      {/* Checkbox, Switch, Rating */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Checkbox & Switch */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs space-y-6">
          <h4 className="font-bold text-sm text-[#12303C] font-montserrat">Checkboxes & Toggles</h4>
          <div className="space-y-4">
            <Checkbox
              label="Saya menyetujui Kebijakan Privasi K4Family"
              description="Data hanya digunakan untuk notifikasi akses dan pengiriman buku."
              checked={agreePrivacy}
              onChange={(e) => setAgreePrivacy(e.target.checked)}
            />
            <Checkbox
              label="Langganan Artikel RANI Mingguan"
              description="Dapatkan panduan parenting dan refleksi pendidikan keluarga setiap Jumat."
              checked={subscribeNewsletter}
              onChange={(e) => setSubscribeNewsletter(e.target.checked)}
            />
          </div>

          <div className="pt-5 border-t border-[#EAE5DC]">
            <Switch
              label="Mode Membaca Offline (Library)"
              description="Simpan halaman buku ke cache lokal browser agar dapat dibaca tanpa internet."
              checked={offlineSync}
              onChange={(e) => setOfflineSync(e.target.checked)}
            />
          </div>
        </div>

        {/* Rating & Font Scale Slider */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs space-y-6">
          <h4 className="font-bold text-sm text-[#12303C] font-montserrat">Rating & Reading Customization</h4>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#12303C] uppercase tracking-wide block font-montserrat">
              Rating Kepuasan Pembaca Buku
            </span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setReadingRating(star)}
                  className="p-1 cursor-pointer transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= readingRating
                        ? "fill-[#EBCC3D] text-[#EBCC3D]"
                        : "text-[#12303C]/20"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-xs font-bold font-mono text-[#087FA0]">
                {readingRating} / 5 Bintang
              </span>
            </div>
          </div>

          <div className="pt-5 border-t border-[#EAE5DC]">
            <Slider
              label="Skala Ukuran Teks Bacaan"
              min={80}
              max={150}
              step={5}
              value={fontScale}
              valueSuffix="%"
              onChange={(e) => setFontScale(Number(e.target.value))}
            />
            <p className="text-xs text-[#12303C]/70 mt-2 font-mono">
              Ukuran teks saat ini: {fontScale}% dari default 16px.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
