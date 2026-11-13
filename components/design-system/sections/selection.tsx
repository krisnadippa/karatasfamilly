"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ComponentPreview } from "../component-preview";

export const SelectionSection: React.FC = () => {
  // Checkbox state
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

  // Radio state
  const [selectedRole, setSelectedRole] = useState("founder");

  // Switch state
  const [smoothScrollEnabled, setSmoothScrollEnabled] = useState(true);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(false);

  // Slider state
  const [readingSpeed, setReadingSpeed] = useState(75);

  const checkboxCode = `<Checkbox
  label="Saya menyetujui prinsip Karatas Family"
  description="Nilai-nilai integritas, kerendahan hati, dan kontribusi lintas generasi."
  checked={agreedTerms}
  onChange={(e) => setAgreedTerms(e.target.checked)}
/>`;

  const radioCode = `<RadioGroup
  name="karatas-role"
  label="Peran dalam Ekosistem"
  value={selectedRole}
  onChange={setSelectedRole}
  options={[
    { value: "founder", label: "Founder & Dewan Nilai", description: "Menjaga arah visi dan filosofi utama" },
    { value: "educator", label: "Educator & Mentor", description: "Menumbuhkan generasi melalui pembelajaran" },
    { value: "builder", label: "Architect & Builder", description: "Mengembangkan produk dan karya nyata" },
  ]}
/>`;

  const switchCode = `<Switch
  label="Lenis Smooth Scroll"
  description="Mengaktifkan animasi inertial scrolling yang halus pada halaman."
  checked={smoothScrollEnabled}
  onChange={(e) => setSmoothScrollEnabled(e.target.checked)}
/>`;

  const sliderCode = `<Slider
  label="Reading Focus Intensity"
  min={10}
  max={100}
  step={5}
  value={readingSpeed}
  valueSuffix="%"
  onChange={(e) => setReadingSpeed(Number(e.target.value))}
/>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Binary & Range Selection
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Selection & Toggles
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Kontrol pilihan biner dan diskrit termasuk Checkbox, RadioGroup, Switch, dan Slider dengan feedback visual langsung.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Checkbox */}
        <ComponentPreview
          title="Checkbox"
          description="Pilihan multi-opsi atau persetujuan tunggal dengan deskripsi pelengkap."
          code={checkboxCode}
        >
          <div className="flex flex-col gap-4 w-full">
            <Checkbox
              label="Saya menyetujui prinsip Karatas Family"
              description="Nilai integritas, kerendahan hati, dan kontribusi antargenerasi."
              checked={agreedTerms}
              onChange={(e) => setAgreedTerms(e.target.checked)}
            />
            <Checkbox
              label="Langganan Catatan Bulanan Karatas"
              description="Wawasan kepemimpinan, arsitektur, dan filosofi keluarga."
              checked={subscribeNewsletter}
              onChange={(e) => setSubscribeNewsletter(e.target.checked)}
            />
          </div>
        </ComponentPreview>

        {/* Switch Toggle */}
        <ComponentPreview
          title="Switch Toggle"
          description="Pengalih status instan (on/off) untuk preferensi sistem atau antarmuka."
          code={switchCode}
        >
          <div className="flex flex-col gap-4 w-full">
            <Switch
              label="Lenis Smooth Scroll"
              description="Transisi inersia halus pada seluruh navigasi."
              checked={smoothScrollEnabled}
              onChange={(e) => setSmoothScrollEnabled(e.target.checked)}
            />
            <Switch
              label="Auto-Save Cloud Sync"
              description="Sinkronisasi otomatis progres pembaca setiap 30 detik."
              checked={autoSaveEnabled}
              onChange={(e) => setAutoSaveEnabled(e.target.checked)}
            />
          </div>
        </ComponentPreview>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Radio Group */}
        <ComponentPreview
          title="Radio Group"
          description="Pilihan tunggal eksklusif dengan keterangan detail per opsi."
          code={radioCode}
        >
          <div className="w-full">
            <RadioGroup
              name="karatas-role"
              label="Peran dalam Ekosistem"
              value={selectedRole}
              onChange={setSelectedRole}
              options={[
                {
                  value: "founder",
                  label: "Founder & Dewan Nilai",
                  description: "Menjaga arah visi dan filosofi utama.",
                },
                {
                  value: "educator",
                  label: "Educator & Mentor",
                  description: "Menumbuhkan generasi lewat modul belajar.",
                },
                {
                  value: "builder",
                  label: "Architect & Builder",
                  description: "Mengeksekusi sistem digital andal.",
                },
              ]}
            />
          </div>
        </ComponentPreview>

        {/* Range Slider */}
        <ComponentPreview
          title="Range Slider"
          description="Kontrol nilai numerik kontinu dengan tampilan nilai real-time."
          code={sliderCode}
        >
          <div className="w-full flex flex-col gap-4">
            <Slider
              label="Reading Focus Intensity"
              min={10}
              max={100}
              step={5}
              value={readingSpeed}
              valueSuffix="%"
              onChange={(e) => setReadingSpeed(Number(e.target.value))}
            />
            <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE5DC] text-xs text-[#12303C]/75">
              Nilai terpilih: <span className="font-mono font-bold text-[#087FA0]">{readingSpeed}%</span> kapasitas fokus kognitif.
            </div>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
};
