"use client";

import React, { useState } from "react";
import { Star, Baby, Sparkles, Compass, Check, Bell, Wifi, Moon, Volume2, Shield } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { RadioGroup } from "@/components/ui/radio-group";
import { kidstoryAgeGroups } from "@/lib/design-system/tokens";
import { ComponentPreview } from "../component-preview";
import { Badge } from "@/components/ui/badge";

export const SelectionSection: React.FC = () => {
  const [selectedKidstoryAge, setSelectedKidstoryAge] = useState("0-18m");
  const [agreePrivacy, setAgreePrivacy] = useState(true);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [readingRating, setReadingRating] = useState(5);
  const [fontScale, setFontScale] = useState(100);

  // Switch state demo
  const [offlineSync, setOfflineSync] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [autoBookmark, setAutoBookmark] = useState(true);
  const [soundEffects, setSoundEffects] = useState(false);
  const [familyFilter, setFamilyFilter] = useState(true);
  const [switchSizeDemo, setSwitchSizeDemo] = useState(true);

  // Radio state demo
  const [deliveryFormat, setDeliveryFormat] = useState("digital");

  const kidstoryCode = `<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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

  const switchCode = `<Switch
  label="Mode Membaca Offline"
  description="Simpan halaman buku ke cache lokal browser"
  checked={offlineSync}
  onChange={(e) => setOfflineSync(e.target.checked)}
/>

{/* Switch Size SM */}
<Switch size="sm" label="Pengaturan Cepat" checked={true} />`;

  const radioCode = `<RadioGroup
  name="deliveryFormat"
  label="Pilih Format Buku K4Book"
  value={deliveryFormat}
  onChange={setDeliveryFormat}
  options={[
    { value: "digital", label: "E-Book Interaktif (EPUB/PDF)", description: "Langsung tersedia di rak Buku Saya setelah transaksi" },
    { value: "print", label: "Buku Fisik Hardcover", description: "Dicetak dengan kertas ramah lingkungan K4Family" },
    { value: "bundle", label: "Paket Bundle Edukasi", description: "Buku fisik + akses e-book + lembar aktivitas anak" },
  ]}
/>`;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FA0]/10 text-[#087FA0] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>Selection Controls</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#12303C] tracking-tight font-montserrat">
          Selection Controls, Switches & Age Filters
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl leading-relaxed">
          Komponen seleksi eksklusif dan multi-opsi: Pilihan kelompok usia resmi Kidstory (0–18m, 18m–3y, 3–5y), Toggle Switches responsif, Radio Group, Checkbox persetujuan, dan Slider kustomisasi teks.
        </p>
      </div>

      {/* 1. Main Kidstory Age Group Card Selector */}
      <ComponentPreview
        title="1. Kidstory Age Groups Card Selector (Brief V04 Standard)"
        description="Seleksi kategori usia resmi untuk buku anak K4Book Kidstory. Kategori dibatasi secara ketat sesuai panduan kurasi: 0–18 bulan, 18 bulan–3 tahun, dan 3–5 tahun."
        code={kidstoryCode}
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

      {/* 2. Interactive Switches & Preference Panel */}
      <ComponentPreview
        title="2. Toggle Switches & Reading Preferences"
        description="Komponen switch/toggle interaktif dengan dukungan ukuran sm & md, label, deskripsi panduan, dan status keyboard focus."
        code={switchCode}
      >
        <div className="w-full max-w-xl mx-auto space-y-6">
          <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAE5DC]">
              <div>
                <h4 className="text-sm font-bold text-[#12303C] font-montserrat">
                  Pengaturan Pengalaman Membaca
                </h4>
                <p className="text-[11px] text-[#12303C]/60">
                  Uji coba interaksi klik switch langsung pada komponen di bawah.
                </p>
              </div>
              <Badge variant="teal" size="sm">Interactive</Badge>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-[#FBF8F0]/60 border border-[#EAE5DC]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#087FA0]/10 text-[#087FA0]">
                    <Wifi className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#12303C]">Mode Membaca Offline (Library)</p>
                    <p className="text-[11px] text-[#12303C]/60">Simpan otomatis bab buku ke browser cache</p>
                  </div>
                </div>
                <Switch
                  checked={offlineSync}
                  onChange={(e) => setOfflineSync(e.target.checked)}
                />
              </div>

              <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-[#FBF8F0]/60 border border-[#EAE5DC]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#20463D]/10 text-[#20463D]">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#12303C]">Notifikasi Rilis Baru K4Book</p>
                    <p className="text-[11px] text-[#12303C]/60">Pemberitahuan artikel RANI & buku Kidstory terbaru</p>
                  </div>
                </div>
                <Switch
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                />
              </div>

              <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-[#FBF8F0]/60 border border-[#EAE5DC]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#12303C]/10 text-[#12303C]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#12303C]">Family Safe Content Filter</p>
                    <p className="text-[11px] text-[#12303C]/60">Kunci konten sesuai klasifikasi usia anak</p>
                  </div>
                </div>
                <Switch
                  checked={familyFilter}
                  onChange={(e) => setFamilyFilter(e.target.checked)}
                />
              </div>

              <div className="flex items-start justify-between gap-4 p-3 rounded-xl bg-[#FBF8F0]/60 border border-[#EAE5DC]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#EBCC3D]/20 text-[#856B08]">
                    <Volume2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#12303C]">Efek Suara Balik Halaman</p>
                    <p className="text-[11px] text-[#12303C]/60">Audio tactile lembut saat membalik halaman e-book</p>
                  </div>
                </div>
                <Switch
                  checked={soundEffects}
                  onChange={(e) => setSoundEffects(e.target.checked)}
                />
              </div>
            </div>

            {/* Switch Size Comparison */}
            <div className="pt-4 border-t border-[#EAE5DC] flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Switch
                    size="sm"
                    checked={switchSizeDemo}
                    onChange={(e) => setSwitchSizeDemo(e.target.checked)}
                  />
                  <span className="text-xs font-medium text-[#12303C]">Size SM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    size="md"
                    checked={switchSizeDemo}
                    onChange={(e) => setSwitchSizeDemo(e.target.checked)}
                  />
                  <span className="text-xs font-medium text-[#12303C]">Size MD (Default)</span>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#087FA0]">
                State: {switchSizeDemo ? "Active (ON)" : "Inactive (OFF)"}
              </span>
            </div>
          </div>
        </div>
      </ComponentPreview>

      {/* 3. Radio Group & Checkboxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Radio Group */}
        <ComponentPreview
          title="3. Radio Group Selection"
          description="Pilihan format tunggal eksklusif dengan judul dan deskripsi terperinci."
          code={radioCode}
          hideDeviceSwitcher
        >
          <div className="w-full">
            <RadioGroup
              name="deliveryFormat"
              label="Pilih Format Buku K4Book"
              value={deliveryFormat}
              onChange={setDeliveryFormat}
              options={[
                {
                  value: "digital",
                  label: "E-Book Interaktif (EPUB/PDF)",
                  description: "Langsung tersedia di rak Buku Saya setelah transaksi.",
                },
                {
                  value: "print",
                  label: "Buku Fisik Hardcover",
                  description: "Dicetak premium dengan kertas ramah lingkungan K4Family.",
                },
                {
                  value: "bundle",
                  label: "Paket Bundle Edukasi",
                  description: "Buku fisik + e-book + lembar aktivitas anak.",
                },
              ]}
            />
            <p className="mt-3 text-[11px] font-mono text-[#087FA0]">
              Format terpilih: <strong>{deliveryFormat}</strong>
            </p>
          </div>
        </ComponentPreview>

        {/* Checkbox & Rating */}
        <ComponentPreview
          title="4. Checkboxes & Rating"
          description="Checkbox multi-pilihan dengan deskripsi dan skala rating bintang 1-5."
          code={`<Checkbox label="..." description="..." checked={...} />`}
          hideDeviceSwitcher
        >
          <div className="w-full space-y-6">
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

            <div className="pt-4 border-t border-[#EAE5DC] space-y-2">
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
              <p className="text-xs text-[#12303C]/70 mt-1 font-mono">
                Ukuran teks: {fontScale}%
              </p>
            </div>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
};
