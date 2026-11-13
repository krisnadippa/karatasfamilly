"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup } from "@/components/ui/radio-group";
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

  const selectionCode = `<RadioGroup
  name="kidstory-age-group"
  label="Kelompok Usia Sasaran (Developer Brief V04)"
  value={selectedKidstoryAge}
  onChange={setSelectedKidstoryAge}
  options={[
    { value: "0-18m", label: "0–18 bulan", description: "Buku sensori & rima awal" },
    { value: "18m-3y", label: "18 bulan–3 tahun", description: "Eksplorasi kata & empati dasar" },
    { value: "3-5y", label: "3–5 tahun", description: "Kemandirian & persahabatan" },
  ]}
/>`;

  return (
    <div className="space-y-12">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Binary & Discrete Selectors
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Selection Controls & Age Filters
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Komponen seleksi eksklusif dan multi-opsi termasuk Radio Group untuk kelompok usia Kidstory (0–18m, 18m–3y, 3–5y), Checkbox persetujuan, Toggle Switch, dan Rating interaktif.
        </p>
      </div>

      {/* Main Radio: Kidstory Age Groups */}
      <ComponentPreview
        title="Kidstory Age Groups Radio Selector (Brief V04 Standard)"
        description="Seleksi kategori usia resmi untuk buku anak K4Book Kidstory. Kategori dibatasi secara ketat sesuai panduan kurasi."
        code={selectionCode}
      >
        <div className="w-full max-w-md bg-white p-6 rounded-2xl border border-[#EAE5DC] shadow-xs">
          <RadioGroup
            name="kidstory-age-group"
            label="Kelompok Usia Sasaran"
            value={selectedKidstoryAge}
            onChange={setSelectedKidstoryAge}
            options={kidstoryAgeGroups.map((g) => ({
              value: g.id,
              label: g.label,
              description: g.description,
            }))}
          />
        </div>
      </ComponentPreview>

      {/* Checkbox, Switch, Rating */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Checkbox & Switch */}
        <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC] space-y-5">
          <h4 className="font-bold text-sm text-[#12303C]">Checkboxes & Toggles</h4>
          <div className="space-y-3">
            <Checkbox
              label="Saya menyetujui Kebijakan Privasi K4Family"
              description="Data hanya digunakan untuk notifikasi akses dan pengiriman buku."
              checked={agreePrivacy}
              onChange={(e) => setAgreePrivacy(e.target.checked)}
            />
            <Checkbox
              label="Langganan Artikel RANI Mingguan"
              description="Dapatkan panduan parenting dan refleksi pendidikan keluarga."
              checked={subscribeNewsletter}
              onChange={(e) => setSubscribeNewsletter(e.target.checked)}
            />
          </div>

          <div className="pt-4 border-t border-[#EAE5DC]">
            <Switch
              label="Mode Membaca Offline (Library)"
              description="Simpan halaman buku ke cache lokal browser."
              checked={offlineSync}
              onChange={(e) => setOfflineSync(e.target.checked)}
            />
          </div>
        </div>

        {/* Rating & Font Scale Slider */}
        <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC] space-y-5">
          <h4 className="font-bold text-sm text-[#12303C]">Rating & Reading Customization</h4>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#12303C] uppercase tracking-wide block">
              Rating Kepuasan Pembaca
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

          <div className="pt-4 border-t border-[#EAE5DC]">
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
