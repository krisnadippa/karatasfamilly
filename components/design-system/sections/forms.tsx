"use client";

import React, { useState } from "react";
import { Mail, Lock, Search, Globe, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "../component-preview";

export const FormsSection: React.FC = () => {
  // Input playground state
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Textarea playground state
  const [textareaValue, setTextareaValue] = useState("");

  // Select state
  const [selectedPillar, setSelectedPillar] = useState("family");

  const inputCode = `<Input
  label="Corporate Email"
  type="email"
  placeholder="member@karatas.id"
  leftIcon={<Mail className="w-4 h-4" />}
  helperText="Gunakan email terdaftar untuk sinkronisasi akun Karatas."${
    inputError ? '\n  error="Format email tidak valid."' : ""
  }
/>`;

  const textareaCode = `<Textarea
  label="Pesan & Nilai Keluarga"
  placeholder="Tuliskan refleksi atau komitmen Anda..."
  rows={4}
  helperText="Maksimal 500 karakter."
/>`;

  const selectCode = `<Select
  label="Pilar Karatas"
  value={selectedPillar}
  onChange={(e) => setSelectedPillar(e.target.value)}
  options={[
    { value: "faith", label: "Faith - Building upon faith and values" },
    { value: "family", label: "Family - Meaningful connections" },
    { value: "freedom", label: "Freedom - Independence and creativity" },
    { value: "future", label: "Future - Opportunities for generations" },
  ]}
/>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Data Collection
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Form Controls
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Komponen input, area teks, dan select dropdown dengan token warna korporat, penanganan validasi, dan aksesibilitas label.
        </p>
      </div>

      {/* Input Playground */}
      <ComponentPreview
        title="Text Input"
        description="Input teks dengan dukungan label atas, icon kiri/kanan, helper text, dan state error."
        code={inputCode}
        controls={
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={inputError}
                onChange={(e) => setInputError(e.target.checked)}
                className="rounded text-[#087FA0]"
              />
              <span className="text-[#12303C]">Simulasi Error State</span>
            </label>
          </div>
        }
      >
        <div className="w-full max-w-md">
          <Input
            label="Corporate Email"
            type="email"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="member@karatas.id"
            leftIcon={<Mail className="w-4 h-4" />}
            error={inputError ? "Alamat email wajib diisi dengan domain valid." : undefined}
            helperText="Gunakan email resmi keluarga atau korporat."
          />
        </div>
      </ComponentPreview>

      {/* Textarea & Select Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ComponentPreview
          title="Textarea"
          description="Area penulisan multi-baris dengan batasan vertikal dan border lembut."
          code={textareaCode}
        >
          <div className="w-full">
            <Textarea
              label="Refleksi & Komitmen"
              placeholder="Tuliskan catatan filosofi keluarga..."
              rows={4}
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              helperText="Tersimpan secara lokal di browser."
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Custom Select"
          description="Pilihan tunggal dropdown dengan indikator panah kustom dan fokus Ocean Teal."
          code={selectCode}
        >
          <div className="w-full">
            <Select
              label="Pilar Karatas Terpilih"
              value={selectedPillar}
              onChange={(e) => setSelectedPillar(e.target.value)}
              options={[
                { value: "faith", label: "Faith (Pilar 1)" },
                { value: "family", label: "Family (Pilar 2)" },
                { value: "freedom", label: "Freedom (Pilar 3)" },
                { value: "future", label: "Future (Pilar 4)" },
              ]}
              helperText="Pilih pilar utama yang sedang dipelajari."
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
};
