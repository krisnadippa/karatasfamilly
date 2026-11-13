"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dropdown, DropdownItem } from "@/components/ui/dropdown";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton, CardSkeleton, Spinner, ProgressBar } from "@/components/ui/skeleton";
import { corporateColors } from "@/lib/design-system/tokens";

type TabType =
  | "all"
  | "colors"
  | "buttons"
  | "loading"
  | "cards"
  | "dropdowns"
  | "inputs"
  | "badges"
  | "layout"
  | "typography";

export default function DesignSystemPage() {
  // State for interactive demonstrations
  const [activeTab, setActiveTab] = useState<TabType>("all");

  // Button loading simulation state
  const [isSimulatingLoading, setIsSimulatingLoading] = useState(false);
  const handleTriggerLoading = () => {
    setIsSimulatingLoading(true);
    setTimeout(() => setIsSimulatingLoading(false), 2200);
  };

  // Card skeleton toggle state
  const [showCardSkeleton, setShowCardSkeleton] = useState(false);

  // Progress bar slider state
  const [progressValue, setProgressValue] = useState(68);

  // Dropdown selected item states
  const [selectedPillar, setSelectedPillar] = useState("family");
  const [selectedAction, setSelectedAction] = useState("");

  const pillarItems: DropdownItem[] = [
    {
      id: "faith",
      label: "Faith",
      description: "Fondasi nilai dan spiritualitas",
      badge: "Pillar 1",
    },
    {
      id: "family",
      label: "Family",
      description: "Koneksi keluarga bermakna",
      badge: "Pillar 2",
    },
    {
      id: "freedom",
      label: "Freedom",
      description: "Kemandirian dan kreativitas",
      badge: "Pillar 3",
    },
    {
      id: "future",
      label: "Future",
      description: "Peluang generasi mendatang",
      badge: "Pillar 4",
    },
    {
      id: "divider-1",
      label: "",
      isDivider: true,
    },
    {
      id: "k4book",
      label: "K4Book Sanctuary",
      description: "Aplikasi membaca digital",
      badge: "Live",
      href: "/k4book",
    },
  ];

  const actionItems: DropdownItem[] = [
    { id: "edit", label: "Sunting Profil", description: "Perbarui informasi akun" },
    { id: "export", label: "Ekspor Ringkasan", description: "Unduh laporan PDF" },
    { id: "divider-act", label: "", isDivider: true },
    { id: "archive", label: "Arsipkan Dokumen", description: "Pindahkan ke arsip" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#12303C] antialiased">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#EAE5DC] px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm font-extrabold tracking-wider text-[#12303C] uppercase hover:opacity-80 transition-opacity"
            >
              Karatas Family
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#70695E]">
              Design System Showcase
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" href="/">
              Kembali ke Landing
            </Button>
            <Button variant="primary" size="sm" href="/k4book">
              Buka K4Book
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-10 md:py-16 flex flex-col gap-12">
        {/* Hero Title Section */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <Badge variant="midnight" size="md">
            Dokumentasi Desain &amp; Komponen
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#12303C] leading-tight">
            Karatas Family Design System
          </h1>
          <p className="text-base sm:text-lg text-[#70695E] leading-relaxed font-normal">
            Pusat acuan visual komponen, warna korporat, batas tata letak, dan status interaksi yang dirancang secara profesional tanpa elemen informal.
          </p>
        </div>

        {/* Quick Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#EAE5DC] [&::-webkit-scrollbar]:hidden">
          {[
            { id: "all", label: "Semua Modul" },
            { id: "colors", label: "Warna Korporat" },
            { id: "buttons", label: "Tombol (Buttons)" },
            { id: "loading", label: "Status Loading" },
            { id: "cards", label: "Kartu Konten (Cards)" },
            { id: "dropdowns", label: "Dropdown Menu" },
            { id: "inputs", label: "Form & Input" },
            { id: "badges", label: "Badges & Status" },
            { id: "layout", label: "Tata Letak & Batas" },
            { id: "typography", label: "Tipografi" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#12303C] text-white shadow-xs"
                  : "bg-white text-[#70695E] hover:text-[#12303C] hover:bg-neutral-100 border border-[#EAE5DC]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SECTION 1: COLOR PALETTE */}
        {(activeTab === "all" || activeTab === "colors") && (
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#EAE5DC] pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
                Modul 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
                Palet Warna Korporat
              </h2>
              <p className="text-sm text-[#70695E] mt-1">
                Warna identitas resmi Karatas Family yang memenuhi kontras aksesibilitas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Midnight Blue */}
              <div className="bg-white rounded-[22px] p-5 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
                <div className="h-28 rounded-2xl bg-[#12303C] p-4 flex flex-col justify-between text-white shadow-xs">
                  <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                    #12303C
                  </span>
                  <span className="text-lg font-bold">Midnight Blue</span>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <span className="font-bold text-[#12303C]">Penggunaan Utama:</span>
                  <span className="text-[#70695E] leading-relaxed">
                    {corporateColors.midnightBlue.description}
                  </span>
                </div>
              </div>

              {/* Forest Green */}
              <div className="bg-white rounded-[22px] p-5 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
                <div className="h-28 rounded-2xl bg-[#20463D] p-4 flex flex-col justify-between text-white shadow-xs">
                  <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                    #20463D
                  </span>
                  <span className="text-lg font-bold">Forest Green</span>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <span className="font-bold text-[#12303C]">Penggunaan Utama:</span>
                  <span className="text-[#70695E] leading-relaxed">
                    {corporateColors.forestGreen.description}
                  </span>
                </div>
              </div>

              {/* Ocean Teal */}
              <div className="bg-white rounded-[22px] p-5 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
                <div className="h-28 rounded-2xl bg-[#087FA0] p-4 flex flex-col justify-between text-white shadow-xs">
                  <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                    #087FA0
                  </span>
                  <span className="text-lg font-bold">Ocean Teal</span>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <span className="font-bold text-[#12303C]">Penggunaan Utama:</span>
                  <span className="text-[#70695E] leading-relaxed">
                    {corporateColors.oceanTeal.description}
                  </span>
                </div>
              </div>

              {/* Bright Goldenrod */}
              <div className="bg-white rounded-[22px] p-5 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
                <div className="h-28 rounded-2xl bg-[#EBCC3D] p-4 flex flex-col justify-between text-[#12303C] shadow-xs">
                  <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                    #EBCC3D
                  </span>
                  <span className="text-lg font-bold">Bright Goldenrod</span>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <span className="font-bold text-[#12303C]">Penggunaan Utama:</span>
                  <span className="text-[#70695E] leading-relaxed">
                    {corporateColors.brightGoldenrod.description}
                  </span>
                </div>
              </div>

              {/* Muted Gold */}
              <div className="bg-white rounded-[22px] p-5 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
                <div className="h-28 rounded-2xl bg-[#DFC54E] p-4 flex flex-col justify-between text-[#12303C] shadow-xs">
                  <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                    #DFC54E
                  </span>
                  <span className="text-lg font-bold">Muted Gold</span>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <span className="font-bold text-[#12303C]">Penggunaan Utama:</span>
                  <span className="text-[#70695E] leading-relaxed">
                    {corporateColors.mutedGold.description}
                  </span>
                </div>
              </div>

              {/* Cream & White */}
              <div className="bg-white rounded-[22px] p-5 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
                <div className="h-28 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] p-4 flex flex-col justify-between text-[#12303C] shadow-xs">
                  <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                    #FAF8F5 / #FFFFFF
                  </span>
                  <span className="text-lg font-bold">Cream &amp; White</span>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <span className="font-bold text-[#12303C]">Penggunaan Utama:</span>
                  <span className="text-[#70695E] leading-relaxed">
                    {corporateColors.cream.description}
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 2: SHOWCASE BUTTON */}
        {(activeTab === "all" || activeTab === "buttons") && (
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#EAE5DC] pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
                Modul 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
                Showcase Tombol (Button)
              </h2>
              <p className="text-sm text-[#70695E] mt-1">
                Tujuh varian tombol, empat ukuran terukur, status hover, active, focus, disabled, dan loading.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#EAE5DC] shadow-xs flex flex-col gap-8">
              {/* Varian Warna */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#70695E]">
                  1. Varian Berdasarkan Fungsi
                </span>
                <div className="flex flex-wrap items-center gap-3.5">
                  <Button variant="primary">Primary (Midnight Blue)</Button>
                  <Button variant="secondary">Secondary (Forest Green)</Button>
                  <Button variant="teal">Accent (Ocean Teal)</Button>
                  <Button variant="goldenrod">Goldenrod (Highlight)</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="cream">Cream Surface</Button>
                  <Button variant="ghost">Ghost Action</Button>
                </div>
              </div>

              {/* Ukuran Tombol */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#70695E]">
                  2. Skala Ukuran (Sizes)
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="lg">
                    Large (52px)
                  </Button>
                  <Button variant="primary" size="md">
                    Medium (44px)
                  </Button>
                  <Button variant="primary" size="sm">
                    Small (36px)
                  </Button>
                  <Button variant="primary" size="icon" aria-label="Aksi Panah">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Status Tombol & Simulasi */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#70695E]">
                  3. Status Interaktif (States) &amp; Simulasi
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary">Default State</Button>
                  <Button
                    variant="teal"
                    onClick={handleTriggerLoading}
                    isLoading={isSimulatingLoading}
                  >
                    {isSimulatingLoading ? "Memproses..." : "Klik untuk Simulasi Loading (2s)"}
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled State
                  </Button>
                  <Button
                    variant="outline"
                    leftIcon={
                      <svg className="w-4 h-4 text-[#087FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    }
                  >
                    Dengan Ikon Kiri
                  </Button>
                  <Button
                    variant="secondary"
                    rightIcon={
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    }
                  >
                    Dengan Ikon Kanan
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: SHOWCASE LOADING */}
        {(activeTab === "all" || activeTab === "loading") && (
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#EAE5DC] pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
                Modul 03
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
                Showcase Status Loading
              </h2>
              <p className="text-sm text-[#70695E] mt-1">
                Animasi pemuatan monokromatik terstandarisasi: skeleton shimmer, spinners, progress bar, dan status pemuatan kartu.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card Loading Simulation */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#EAE5DC] shadow-xs flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-base font-bold text-[#12303C]">
                      Pemuatan Kartu Konten (Card Skeleton)
                    </h3>
                    <p className="text-xs text-[#70695E]">
                      Gunakan tombol toggle di samping untuk menguji status skeleton.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowCardSkeleton((prev) => !prev)}
                  >
                    {showCardSkeleton ? "Tampilkan Kartu Asli" : "Tampilkan Skeleton"}
                  </Button>
                </div>

                {showCardSkeleton ? (
                  <CardSkeleton />
                ) : (
                  <Card variant="default">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="teal">Aktif</Badge>
                        <span className="text-xs font-mono text-[#70695E]">01</span>
                      </div>
                      <CardTitle className="mt-3">K4Book Reading Sanctuary</CardTitle>
                      <CardDescription>
                        Sanctuary digital editorial dengan simulasi kertas alami, velositas baca, dan tipografi tanpa distraksi.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <span className="text-xs font-bold text-[#12303C]">Tersedia Sekarang</span>
                      <Button variant="primary" size="sm" href="/k4book">
                        Akses Modul
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </div>

              {/* Spinners & Progress Loaders */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#EAE5DC] shadow-xs flex flex-col gap-6">
                <h3 className="text-base font-bold text-[#12303C]">
                  Indikator Putar (Circular Spinners)
                </h3>
                <div className="flex items-center gap-6 p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC]">
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="sm" color="midnight" />
                    <span className="text-[10px] font-mono text-[#70695E]">Small (16px)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="md" color="teal" />
                    <span className="text-[10px] font-mono text-[#70695E]">Medium (24px)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="lg" color="forest" />
                    <span className="text-[10px] font-mono text-[#70695E]">Large (32px)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#12303C]">
                      Bilah Progres (Progress Bar)
                    </h3>
                    <span className="text-xs font-mono font-bold text-[#087FA0]">
                      {progressValue}%
                    </span>
                  </div>
                  <ProgressBar progress={progressValue} color="teal" />
                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progressValue}
                      onChange={(e) => setProgressValue(Number(e.target.value))}
                      className="w-full cursor-pointer accent-[#087FA0]"
                    />
                  </div>
                </div>

                {/* Inline Text Skeletons */}
                <div className="flex flex-col gap-2 pt-2 border-t border-[#EAE5DC]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#70695E]">
                    Pemuatan Baris Teks (Text Shimmer)
                  </span>
                  <div className="flex flex-col gap-2 p-4 bg-[#FAF8F5] rounded-xl border border-[#EAE5DC]">
                    <Skeleton className="w-1/2 h-5 rounded-md" />
                    <Skeleton className="w-full h-4 rounded-md" />
                    <Skeleton className="w-4/5 h-4 rounded-md" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: SHOWCASE CARD */}
        {(activeTab === "all" || activeTab === "cards") && (
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#EAE5DC] pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
                Modul 04
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
                Showcase Kartu Konten (Cards)
              </h2>
              <p className="text-sm text-[#70695E] mt-1">
                Enam varian kartu terstandarisasi untuk modul bento, metrik ringkasan, dan presentasi editorial.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Default Card */}
              <Card variant="default" isInteractive>
                <CardHeader>
                  <Badge variant="teal">Bento Modul</Badge>
                  <CardTitle className="mt-2">Default Card</CardTitle>
                  <CardDescription>
                    Latar putih bersih dengan batas border netral halus. Cocok untuk presentasi fitur standar.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className="text-xs font-bold text-[#12303C]">Pelajari Detail</span>
                  <span className="text-sm text-[#087FA0]">&rarr;</span>
                </CardFooter>
              </Card>

              {/* Elevated Card */}
              <Card variant="elevated" isInteractive>
                <CardHeader>
                  <Badge variant="goldenrod">Highlight</Badge>
                  <CardTitle className="mt-2">Elevated Card</CardTitle>
                  <CardDescription>
                    Dilengkapi bayangan mendalam untuk menonjolkan konten utama atau item fokus pilihan.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className="text-xs font-bold text-[#12303C]">Lihat Penawaran</span>
                  <span className="text-sm text-[#EBCC3D]">&rarr;</span>
                </CardFooter>
              </Card>

              {/* Accent Border Card */}
              <Card variant="accent" isInteractive>
                <CardHeader>
                  <Badge variant="forest">Sustainability</Badge>
                  <CardTitle className="mt-2">Accent Border Card</CardTitle>
                  <CardDescription>
                    Garis aksen tepi kiri tebal untuk mengkategorikan modul berdasarkan tema tertentu.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className="text-xs font-bold text-[#12303C]">Eksplorasi Nilai</span>
                  <span className="text-sm text-[#20463D]">&rarr;</span>
                </CardFooter>
              </Card>

              {/* Cream Surface Card */}
              <Card variant="cream" isInteractive>
                <CardHeader>
                  <Badge variant="neutral">Editorial</Badge>
                  <CardTitle className="mt-2">Cream Surface Card</CardTitle>
                  <CardDescription>
                    Latar hangat alami yang meniru kelembutan kertas fisik, ramah untuk sesi membaca lama.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className="text-xs font-bold text-[#12303C]">Mulai Membaca</span>
                  <span className="text-sm text-[#70695E]">&rarr;</span>
                </CardFooter>
              </Card>

              {/* Midnight Blue Inverted Card */}
              <Card variant="midnight" isInteractive>
                <CardHeader>
                  <Badge variant="goldenrod">Premium</Badge>
                  <CardTitle className="mt-2 text-white">Midnight Inverted</CardTitle>
                  <CardDescription className="text-white/70">
                    Warna dasar gelap kontras tinggi untuk modul penutup, CTA, atau pengumuman prioritas.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="border-t-[#1A4252]">
                  <span className="text-xs font-bold text-white">Gabung Ekosistem</span>
                  <span className="text-sm text-[#EBCC3D]">&rarr;</span>
                </CardFooter>
              </Card>

              {/* Stat Metric Card */}
              <Card variant="default">
                <CardHeader>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#70695E]">
                    Metrik Pembaca
                  </span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-extrabold text-[#12303C]">1,420</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      +18.4%
                    </span>
                  </div>
                  <CardDescription className="mt-2">
                    Menit membaca aktif terakumulasi dalam ekosistem K4Book bulan ini.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className="text-xs text-[#70695E]">Pembaruan otomatis</span>
                  <Badge variant="neutral">Live Data</Badge>
                </CardFooter>
              </Card>
            </div>
          </section>
        )}

        {/* SECTION 5: SHOWCASE DROPDOWN */}
        {(activeTab === "all" || activeTab === "dropdowns") && (
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#EAE5DC] pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
                Modul 05
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
                Showcase Dropdown Menu
              </h2>
              <p className="text-sm text-[#70695E] mt-1">
                Komponen navigasi popup dengan perataan fleksibel, badge status, dan dukungan keyboard.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#EAE5DC] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-md">
                <h3 className="text-base font-bold text-[#12303C]">
                  Menu Dropdown dengan Item Terpilih
                </h3>
                <p className="text-xs text-[#70695E] leading-relaxed">
                  Menyediakan umpan balik visual terhadap item aktif. Mendukung navigasi tombol panah atas, panah bawah, dan penutupan dengan tombol Escape.
                </p>
                <div className="text-xs text-[#12303C] font-semibold mt-1">
                  Pilar Aktif: <span className="text-[#087FA0] uppercase font-mono">{selectedPillar}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {/* Pillar Selection Dropdown */}
                <Dropdown
                  selectedValue={selectedPillar}
                  onSelect={(item) => setSelectedPillar(item.id)}
                  trigger={
                    <Button
                      variant="outline"
                      size="md"
                      rightIcon={
                        <svg className="w-4 h-4 text-[#70695E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      }
                    >
                      Pilih Pilar Ekosistem
                    </Button>
                  }
                  items={pillarItems}
                  align="right"
                  width="w-72"
                />

                {/* Action Context Menu Dropdown */}
                <Dropdown
                  onSelect={(item) => setSelectedAction(item.label)}
                  trigger={
                    <Button
                      variant="cream"
                      size="md"
                      rightIcon={
                        <svg className="w-4 h-4 text-[#70695E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      }
                    >
                      Menu Aksi
                    </Button>
                  }
                  items={actionItems}
                  align="right"
                  width="w-64"
                />
              </div>
            </div>
          </section>
        )}

        {/* SECTION 6: SHOWCASE FORM & INPUT */}
        {(activeTab === "all" || activeTab === "inputs") && (
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#EAE5DC] pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
                Modul 06
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
                Showcase Formulir &amp; Input
              </h2>
              <p className="text-sm text-[#70695E] mt-1">
                Bidang isian teks standar, bilah pencarian pill, status error, dan helper text.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#EAE5DC] shadow-xs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Default Input */}
              <Input
                label="Nama Lengkap"
                placeholder="Masukkan nama lengkap Anda"
                helperText="Nama resmi untuk sertifikasi ekosistem."
              />

              {/* Input with Search Icon */}
              <Input
                label="Pencarian Modul"
                placeholder="Cari buku, modul, topik..."
                leftIcon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />

              {/* Error Input */}
              <Input
                label="Alamat Surel (Email)"
                defaultValue="invalid-email@"
                error="Format alamat surel tidak valid."
              />

              {/* Disabled Input */}
              <Input
                label="ID Anggota (Terkunci)"
                defaultValue="KT-2026-9812"
                disabled
                helperText="Nomor keanggotaan dibuat secara otomatis."
              />

              {/* Pill Search Input */}
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-xs font-bold uppercase tracking-wider text-[#12303C]">
                  Bilah Pencarian Pill (Search Pill)
                </label>
                <div className="relative flex items-center bg-[#F1F1F0] rounded-full px-4 py-2 border border-[#EAE5DC]">
                  <svg className="w-4 h-4 text-[#70695E] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Ketik pencarian cepat..."
                    className="bg-transparent border-none p-0 text-sm text-[#12303C] placeholder-[#9E9689] focus:outline-none w-full"
                  />
                </div>
                <span className="text-xs text-[#70695E]">Digunakan pada bilah header navigasi.</span>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 7: SHOWCASE BADGES & STATUS */}
        {(activeTab === "all" || activeTab === "badges") && (
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#EAE5DC] pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
                Modul 07
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
                Showcase Badges &amp; Status Pills
              </h2>
              <p className="text-sm text-[#70695E] mt-1">
                Pill penanda kategori, status kesiapan modul, dan metadata visual.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#EAE5DC] shadow-xs flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#70695E]">
                  Status Kesiapan Ekosistem
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="teal" dot size="md">Tersedia (Available)</Badge>
                  <Badge variant="neutral" dot size="md">Segera Hadir (Coming Soon)</Badge>
                  <Badge variant="forest" dot size="md">Aktif Berkelanjutan</Badge>
                  <Badge variant="goldenrod" dot size="md">Pilihan Unggulan</Badge>
                  <Badge variant="midnight" size="md">Edisi Kolektor</Badge>
                </div>
              </div>

              <div className="h-px bg-[#EAE5DC]" />

              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#70695E]">
                  Skala Ukuran Badge
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="midnight" size="lg">Ukuran Large (12px)</Badge>
                  <Badge variant="midnight" size="md">Ukuran Medium (11px)</Badge>
                  <Badge variant="midnight" size="sm">Ukuran Small (10px)</Badge>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 8: LAYOUT BOUNDS & RULERS */}
        {(activeTab === "all" || activeTab === "layout") && (
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#EAE5DC] pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
                Modul 08
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
                Tata Letak &amp; Batas Spasi (Layout Rulers)
              </h2>
              <p className="text-sm text-[#70695E] mt-1">
                Pedoman batas kanan-kiri dan atas-bawah untuk menjaga ketenangan komposisi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Batas Kanan Kiri */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
                <h3 className="text-base font-bold text-[#12303C]">
                  Batas Kanan Kiri (Horizontal Padding X)
                </h3>
                <div className="flex flex-col gap-2.5 text-xs text-[#70695E]">
                  <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
                    <span className="font-semibold text-[#12303C]">Mobile (&lt; 640px)</span>
                    <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                      16px (px-4)
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
                    <span className="font-semibold text-[#12303C]">Tablet (640px - 1023px)</span>
                    <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                      24px (px-6)
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
                    <span className="font-semibold text-[#12303C]">Desktop (1024px - 1279px)</span>
                    <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                      48px (px-12)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#12303C]">Wide Desktop (&gt;= 1280px)</span>
                    <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                      64px (px-16)
                    </span>
                  </div>
                </div>
              </div>

              {/* Batas Atas Bawah */}
              <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
                <h3 className="text-base font-bold text-[#12303C]">
                  Batas Atas Bawah (Vertical Padding Y)
                </h3>
                <div className="flex flex-col gap-2.5 text-xs text-[#70695E]">
                  <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
                    <span className="font-semibold text-[#12303C]">Compact Section</span>
                    <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                      48px / 64px (py-12 md:py-16)
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
                    <span className="font-semibold text-[#12303C]">Standard Section</span>
                    <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                      64px / 96px (py-16 md:py-24)
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
                    <span className="font-semibold text-[#12303C]">Spacious (Hero / Key Showcase)</span>
                    <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                      80px / 128px (py-20 md:py-32)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#12303C]">Jarak Antar-Section (Gap)</span>
                    <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                      32px / 48px / 64px
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 9: TYPOGRAPHY SCALE */}
        {(activeTab === "all" || activeTab === "typography") && (
          <section className="flex flex-col gap-6">
            <div className="border-b border-[#EAE5DC] pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
                Modul 09
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
                Skala Tipografi
              </h2>
              <p className="text-sm text-[#70695E] mt-1">
                Hirarki ukuran font Plus Jakarta Sans dan rasio spasi antar huruf.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-6 md:p-8 border border-[#EAE5DC] shadow-xs flex flex-col gap-6">
              <div className="flex flex-col gap-1 border-b border-[#EAE5DC] pb-4">
                <span className="text-xs font-mono text-[#087FA0]">Display · 56px · Bold 900</span>
                <p className="text-4xl md:text-[56px] font-[900] tracking-[-0.035em] text-[#12303C] leading-[1.08]">
                  Everything your smile needs
                </p>
              </div>

              <div className="flex flex-col gap-1 border-b border-[#EAE5DC] pb-4">
                <span className="text-xs font-mono text-[#087FA0]">Heading 1 (H1) · 44px · Bold 800</span>
                <h1 className="text-3xl md:text-[44px] font-[800] tracking-[-0.03em] text-[#12303C] leading-[1.12]">
                  Our Four Pillars, foundations for life.
                </h1>
              </div>

              <div className="flex flex-col gap-1 border-b border-[#EAE5DC] pb-4">
                <span className="text-xs font-mono text-[#087FA0]">Heading 2 (H2) · 36px · Bold 800</span>
                <h2 className="text-2xl md:text-[36px] font-[800] tracking-[-0.025em] text-[#12303C] leading-[1.18]">
                  K4Family Ecosystem &amp; Values
                </h2>
              </div>

              <div className="flex flex-col gap-1 border-b border-[#EAE5DC] pb-4">
                <span className="text-xs font-mono text-[#087FA0]">Heading 3 (H3) · 26px · Bold 700</span>
                <h3 className="text-xl md:text-[26px] font-[700] tracking-[-0.02em] text-[#12303C] leading-[1.25]">
                  Keimanan, Akhlak &amp; Sustainability
                </h3>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-[#087FA0]">Body Default · 15px · Regular 400</span>
                <p className="text-sm md:text-[15px] font-normal text-[#70695E] leading-[1.60] max-w-2xl">
                  Karatas Family adalah ekosistem terintegrasi yang berlandaskan nilai-nilai luhur filosofis, keluhuran budi pekerti, dan dedikasi karya berkelanjutan untuk masa depan.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
