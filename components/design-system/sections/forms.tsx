"use client";

import React, { useState } from "react";
import { Mail, Lock, Search, Phone, FileUp, CheckCircle2, AlertCircle, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "../component-preview";

export const FormsSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [requestTitle, setRequestTitle] = useState("");
  const [requestDetail, setRequestDetail] = useState("");
  const [kidstoryAge, setKidstoryAge] = useState("0-18m");
  const [simulateError, setSimulateError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const formCode = `<form className="space-y-4">
  <Input
    label="Email Akun K4"
    type="email"
    placeholder="nama@k4family.id"
    leftIcon={<Mail className="w-4 h-4" />}
    required
  />
  <Input
    label="Nomor WhatsApp"
    type="tel"
    placeholder="0812-3456-7890"
    leftIcon={<Phone className="w-4 h-4" />}
    helperText="Untuk konfirmasi link akses buku digital."
  />
  <Select
    label="Kelompok Usia Kidstory"
    options={[
      { value: "0-18m", label: "0–18 bulan (Sensori & Suara)" },
      { value: "18m-3y", label: "18 bulan–3 tahun (Eksplorasi Kata)" },
      { value: "3-5y", label: "3–5 tahun (Kemandirian & Empati)" },
    ]}
  />
  <Textarea
    label="Detail Permintaan Buku / Nilai"
    placeholder="Tuliskan topik atau nilai yang ingin Anda temukan..."
    rows={3}
  />
  <Button variant="teal" size="md" className="w-full">
    Kirim Permintaan Buku
  </Button>
</form>`;

  return (
    <div className="space-y-12">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Data Collection
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          K4Family Form Components
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Komponen input, area teks, seleksi dropdown, upload berkas, dan validasi formulir untuk alur Request Buku, Tiket Bantuan, dan Pembelian K4Book.
        </p>
      </div>

      {/* Main Interactive Form Preview: Request Buku */}
      <ComponentPreview
        title="Formulir Alur Resmi: Request Buku K4Book"
        description="Contoh formulir permintaan judul baru atau kolaborasi nilai keluarga dengan validasi dan bantuan input."
        code={formCode}
        controls={
          <div className="flex items-center gap-3">
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={simulateError}
                onChange={(e) => setSimulateError(e.target.checked)}
                className="rounded text-[#087FA0]"
              />
              <span className="text-[#12303C]">Simulasikan Error Validasi</span>
            </label>
          </div>
        }
      >
        <div className="w-full max-w-lg bg-white p-6 rounded-2xl border border-[#EAE5DC] shadow-xs space-y-4">
          <Input
            label="Email Pengguna"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="keluarga@k4family.id"
            leftIcon={<Mail className="w-4 h-4" />}
            error={simulateError ? "Alamat email wajib diisi dengan format valid." : undefined}
            helperText="Link akses dan notifikasi kurasi akan dikirim ke alamat ini."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Nomor Kontak / WhatsApp"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0812-3456-7890"
              leftIcon={<Phone className="w-4 h-4" />}
            />

            <Select
              label="Kelompok Usia Sasaran"
              value={kidstoryAge}
              onChange={(e) => setKidstoryAge(e.target.value)}
              options={[
                { value: "0-18m", label: "0–18 bulan" },
                { value: "18m-3y", label: "18 bulan–3 tahun" },
                { value: "3-5y", label: "3–5 tahun" },
              ]}
              helperText="Kategori resmi Kidstory V04"
            />
          </div>

          <Textarea
            label="Topik / Nilai Cerita yang Dimohon"
            placeholder="Jelaskan kebutuhan bacaan anak atau tema kepemimpinan yang diharapkan..."
            value={requestDetail}
            onChange={(e) => setRequestDetail(e.target.value)}
            rows={3}
            helperText="Tim kurasi K4Book akan meninjau dalam 3 hari kerja."
          />

          {/* Drag & Drop Placeholder */}
          <div className="border-2 border-dashed border-[#EAE5DC] hover:border-[#087FA0] rounded-xl p-4 text-center cursor-pointer transition-colors bg-[#FBF8F0]/50">
            <FileUp className="w-6 h-6 text-[#087FA0] mx-auto mb-1" />
            <span className="text-xs font-semibold text-[#12303C] block">
              Unggah Dokumen Referensi (Opsional)
            </span>
            <span className="text-[11px] text-[#12303C]/60">
              Format PDF, DOCX, atau Gambar hingga 5MB
            </span>
          </div>

          <Button variant="teal" size="md" className="w-full justify-center">
            Kirimkan Permintaan Buku
          </Button>
        </div>
      </ComponentPreview>

      {/* Input Variations Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC] space-y-4">
          <h4 className="font-bold text-sm text-[#12303C]">Search & Prefix Inputs</h4>
          <Input
            placeholder="Cari judul buku Kidstory, HumOR, atau topik RANI..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            leftIcon={<Search className="w-4 h-4" />}
            helperText="Pencarian cepat katalog publikasi K4Family."
          />
          <Input
            label="Kupon Apresiasi (Prefix / Suffix)"
            placeholder="K4FAMILY-2024"
            className="uppercase font-mono"
            rightIcon={<span className="text-[10px] font-mono text-[#087FA0] font-bold">APPLY</span>}
          />
        </div>

        <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC] space-y-4">
          <h4 className="font-bold text-sm text-[#12303C]">Password & Security</h4>
          <div className="relative">
            <Input
              label="Kata Sandi Akun"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              leftIcon={<Lock className="w-4 h-4" />}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer text-[#12303C]/60 hover:text-[#12303C]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
              helperText="Minimal 8 karakter kombinasi huruf dan angka."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
