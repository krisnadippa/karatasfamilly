"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dropdown, DropdownItem } from "@/components/ui/dropdown";
import { corporateColors, layoutTokens, typographyTokens } from "@/lib/design-system/tokens";

export default function DesignSystemPage() {
  const [selectedDropdownItem, setSelectedDropdownItem] = useState("family");

  const dropdownItems: DropdownItem[] = [
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

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#12303C] antialiased">
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#EAE5DC] px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm font-bold tracking-wider text-[#12303C] uppercase hover:opacity-80 transition-opacity"
            >
              Karatas Family
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#70695E]">
              Design System Showcase
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" href="/">
              Kembali ke Landing Page
            </Button>
            <Button variant="primary" size="sm" href="/k4book">
              Buka K4Book
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-20 flex flex-col gap-16">
        {/* Title Header */}
        <section className="flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EAE5DC] text-[11px] font-bold uppercase tracking-widest text-[#12303C] w-fit shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#12303C]" />
            <span>Dokumentasi Visual &amp; Komponen</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#12303C] leading-tight">
            Karatas Family Design System
          </h1>
          <p className="text-base sm:text-lg text-[#70695E] leading-relaxed font-normal">
            Halaman acuan visual untuk standardisasi tata letak, palet warna korporat, hirarki tipografi, tombol, dan komponen interaktif.
          </p>
        </section>

        {/* 1. Corporate Color Palette */}
        <section className="flex flex-col gap-6">
          <div className="border-b border-[#EAE5DC] pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
              Bagian 01
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
              Palet Warna Korporat
            </h2>
            <p className="text-sm text-[#70695E] mt-1">
              Enam warna identitas korporat beserta aturan fungsi dan kontras visual.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Midnight Blue */}
            <div className="bg-white rounded-2xl p-5 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
              <div className="h-28 rounded-xl bg-[#12303C] p-4 flex flex-col justify-between text-white shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                  #12303C
                </span>
                <span className="text-base font-bold">Midnight Blue</span>
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <span className="font-semibold text-[#12303C]">Penggunaan:</span>
                <span className="text-[#70695E] leading-relaxed">
                  {corporateColors.midnightBlue.description}
                </span>
              </div>
            </div>

            {/* Forest Green */}
            <div className="bg-white rounded-2xl p-5 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
              <div className="h-28 rounded-xl bg-[#20463D] p-4 flex flex-col justify-between text-white shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                  #20463D
                </span>
                <span className="text-base font-bold">Forest Green</span>
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <span className="font-semibold text-[#12303C]">Penggunaan:</span>
                <span className="text-[#70695E] leading-relaxed">
                  {corporateColors.forestGreen.description}
                </span>
              </div>
            </div>

            {/* Ocean Teal */}
            <div className="bg-white rounded-2xl p-5 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
              <div className="h-28 rounded-xl bg-[#087FA0] p-4 flex flex-col justify-between text-white shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                  #087FA0
                </span>
                <span className="text-base font-bold">Ocean Teal</span>
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <span className="font-semibold text-[#12303C]">Penggunaan:</span>
                <span className="text-[#70695E] leading-relaxed">
                  {corporateColors.oceanTeal.description}
                </span>
              </div>
            </div>

            {/* Bright Goldenrod */}
            <div className="bg-white rounded-2xl p-5 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
              <div className="h-28 rounded-xl bg-[#EBCC3D] p-4 flex flex-col justify-between text-[#12303C] shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                  #EBCC3D
                </span>
                <span className="text-base font-bold">Bright Goldenrod</span>
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <span className="font-semibold text-[#12303C]">Penggunaan:</span>
                <span className="text-[#70695E] leading-relaxed">
                  {corporateColors.brightGoldenrod.description}
                </span>
              </div>
            </div>

            {/* Muted Gold */}
            <div className="bg-white rounded-2xl p-5 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
              <div className="h-28 rounded-xl bg-[#DFC54E] p-4 flex flex-col justify-between text-[#12303C] shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                  #DFC54E
                </span>
                <span className="text-base font-bold">Muted Gold</span>
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <span className="font-semibold text-[#12303C]">Penggunaan:</span>
                <span className="text-[#70695E] leading-relaxed">
                  {corporateColors.mutedGold.description}
                </span>
              </div>
            </div>

            {/* Cream / White Surface */}
            <div className="bg-white rounded-2xl p-5 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
              <div className="h-28 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] p-4 flex flex-col justify-between text-[#12303C] shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider opacity-80">
                  #FAF8F5 / #FFFFFF
                </span>
                <span className="text-base font-bold">Cream &amp; White</span>
              </div>
              <div className="flex flex-col gap-1 text-xs">
                <span className="font-semibold text-[#12303C]">Penggunaan:</span>
                <span className="text-[#70695E] leading-relaxed">
                  {corporateColors.cream.description}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Button Component Showcase */}
        <section className="flex flex-col gap-6">
          <div className="border-b border-[#EAE5DC] pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
              Bagian 02
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
              Komponen Tombol (Button)
            </h2>
            <p className="text-sm text-[#70695E] mt-1">
              Tujuh varian tombol fungsional dan empat ukuran standar.
            </p>
          </div>

          {/* Variants Showcase */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#EAE5DC] shadow-xs flex flex-col gap-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#70695E]">
              Varian Fungsional
            </h3>
            <div className="flex flex-wrap items-center gap-3.5">
              <Button variant="primary">Primary (Midnight Blue)</Button>
              <Button variant="secondary">Secondary (Forest Green)</Button>
              <Button variant="teal">Accent (Ocean Teal)</Button>
              <Button variant="goldenrod">Goldenrod (Highlight)</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="cream">Cream Surface</Button>
              <Button variant="ghost">Ghost Action</Button>
            </div>

            <div className="h-px bg-[#EAE5DC] my-2" />

            {/* Sizes Showcase */}
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#70695E]">
              Skala Ukuran Standar
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg">
                Ukuran Large (52px)
              </Button>
              <Button variant="primary" size="md">
                Ukuran Medium (44px)
              </Button>
              <Button variant="primary" size="sm">
                Ukuran Small (36px)
              </Button>
              <Button
                variant="primary"
                size="icon"
                aria-label="Icon Button"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>

            <div className="h-px bg-[#EAE5DC] my-2" />

            {/* States Showcase */}
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#70695E]">
              Status Interaktif (States)
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Default State</Button>
              <Button variant="primary" isLoading>
                Memuat Data
              </Button>
              <Button variant="primary" disabled>
                Disabled State
              </Button>
              <Button
                variant="outline"
                leftIcon={
                  <svg
                    className="w-4 h-4 mr-1 text-[#087FA0]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                }
              >
                Dengan Ikon Kiri
              </Button>
            </div>
          </div>
        </section>

        {/* 3. Dropdown Component Showcase */}
        <section className="flex flex-col gap-6">
          <div className="border-b border-[#EAE5DC] pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
              Bagian 03
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
              Komponen Dropdown
            </h2>
            <p className="text-sm text-[#70695E] mt-1">
              Menu popup terstruktur dengan item aksi, badge status, pemisah baris, dan navigasi keyboard.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#EAE5DC] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-md">
              <span className="text-sm font-bold text-[#12303C]">
                Contoh Menu Dropdown Aktif
              </span>
              <p className="text-xs text-[#70695E] leading-relaxed">
                Klik tombol trigger di sebelah kanan untuk melihat menu terbuka. Dukungan penuh navigasi keyboard menggunakan tombol panah atas/bawah dan tombol Escape.
              </p>
              <div className="text-xs text-[#12303C] font-semibold mt-1">
                Item Terpilih: <span className="text-[#087FA0] uppercase font-mono">{selectedDropdownItem}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Dropdown
                selectedValue={selectedDropdownItem}
                onSelect={(item) => setSelectedDropdownItem(item.id)}
                trigger={
                  <Button
                    variant="outline"
                    size="md"
                    rightIcon={
                      <svg
                        className="w-4 h-4 text-[#70695E]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    }
                  >
                    Pilih Pilar Ekosistem
                  </Button>
                }
                items={dropdownItems}
                align="right"
                width="w-72"
              />
            </div>
          </div>
        </section>

        {/* 4. Layout Spacing Visualizer */}
        <section className="flex flex-col gap-6">
          <div className="border-b border-[#EAE5DC] pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
              Bagian 04
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
              Batas Kanan-Kiri &amp; Atas-Bawah (Layout Tokens)
            </h2>
            <p className="text-sm text-[#70695E] mt-1">
              Spesifikasi ukuran batas margin halaman dan jarak vertikal antar-section.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Batas Kanan Kiri */}
            <div className="bg-white rounded-2xl p-6 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
              <h3 className="text-base font-bold text-[#12303C]">
                Batas Kanan Kiri (Horizontal Page Padding)
              </h3>
              <ul className="flex flex-col gap-3 text-xs text-[#70695E]">
                <li className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
                  <span className="font-medium text-[#12303C]">Mobile (&lt; 640px)</span>
                  <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                    16px (px-4)
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
                  <span className="font-medium text-[#12303C]">Tablet (640px - 1023px)</span>
                  <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                    24px (px-6)
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
                  <span className="font-medium text-[#12303C]">Desktop (1024px - 1279px)</span>
                  <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                    48px (px-12)
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium text-[#12303C]">Wide Desktop (&gt;= 1280px)</span>
                  <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                    64px (px-16)
                  </span>
                </li>
              </ul>
            </div>

            {/* Batas Atas Bawah */}
            <div className="bg-white rounded-2xl p-6 border border-[#EAE5DC] shadow-xs flex flex-col gap-4">
              <h3 className="text-base font-bold text-[#12303C]">
                Batas Atas Bawah (Vertical Section Padding)
              </h3>
              <ul className="flex flex-col gap-3 text-xs text-[#70695E]">
                <li className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
                  <span className="font-medium text-[#12303C]">Compact Section</span>
                  <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                    48px / 64px (py-12 md:py-16)
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
                  <span className="font-medium text-[#12303C]">Standard Section</span>
                  <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                    64px / 96px (py-16 md:py-24)
                  </span>
                </li>
                <li className="flex items-center justify-between border-b border-[#EAE5DC] pb-2">
                  <span className="font-medium text-[#12303C]">Spacious (Hero &amp; Key Sections)</span>
                  <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                    80px / 128px (py-20 md:py-32)
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium text-[#12303C]">Jarak Antar-Section (Gap)</span>
                  <span className="font-mono bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                    32px md:48px lg:64px
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Typography Scale Showcase */}
        <section className="flex flex-col gap-6">
          <div className="border-b border-[#EAE5DC] pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#087FA0]">
              Bagian 05
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#12303C] mt-1">
              Hirarki Tipografi
            </h2>
            <p className="text-sm text-[#70695E] mt-1">
              Skala ukuran, line height, dan tracking font Plus Jakarta Sans.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#EAE5DC] shadow-xs flex flex-col gap-6">
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
      </main>
    </div>
  );
}
