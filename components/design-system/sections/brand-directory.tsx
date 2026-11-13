"use client";

import React, { useState } from "react";
import { BookOpen, Sparkles, Heart, Hammer, Camera, Sprout, Activity, GraduationCap, Utensils, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { k4Brands, kidstoryAgeGroups } from "@/lib/design-system/tokens";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ComponentPreview } from "../component-preview";

export const BrandDirectorySection: React.FC = () => {
  const brandIcons: Record<string, React.ReactNode> = {
    k4family: <Sparkles className="w-5 h-5 text-[#EBCC3D]" />,
    k4book: <BookOpen className="w-5 h-5 text-[#087FA0]" />,
    rani: <Heart className="w-5 h-5 text-[#20463D]" />,
    k4craft: <Hammer className="w-5 h-5 text-[#8C5E38]" />,
    k4studio: <Camera className="w-5 h-5 text-[#2A4B7C]" />,
    k4farm: <Sprout className="w-5 h-5 text-[#3B6939]" />,
    k4health: <Activity className="w-5 h-5 text-[#1B7A68]" />,
    k4academy: <GraduationCap className="w-5 h-5 text-[#EB963D]" />,
    warunk: <Utensils className="w-5 h-5 text-[#B54D35]" />,
  };

  const brandDirectoryCode = `<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
  {k4Brands.map((brand) => (
    <Card key={brand.id} variant="default" interactive className="flex flex-col justify-between">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant={brand.status === "Active Phase 1" ? "teal" : "outline"} dot>
            {brand.status}
          </Badge>
          {brand.icon}
        </div>
        <CardTitle>{brand.name}</CardTitle>
        <CardDescription>{brand.tagline}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-[#12303C]/75">{brand.description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant={brand.status === "Active Phase 1" ? "teal" : "outline"}
          size="sm"
          className="w-full justify-center"
        >
          {brand.status === "Active Phase 1" ? "Jelajahi Brand" : "Kenali Brand"}
        </Button>
      </CardFooter>
    </Card>
  ))}
</div>`;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FA0]/10 text-[#087FA0] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>Brand Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#12303C] tracking-tight font-montserrat">
          K4Family 9 Lini Bisnis Ekosistem
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-3xl leading-relaxed">
          Dokumentasi identitas visual, panduan estetika, dan status rilis 9 lini brand. K4Book dan RANI merupakan prioritas aktif fase pertama; enam lini lainnya berstatus <strong>Akan Datang</strong> dengan larangan tombol transaksi.
        </p>
      </div>

      {/* Grid of 9 Brands with Equal Heights */}
      <ComponentPreview
        title="Direktori 9 Brand Resmi K4Family"
        description="Setiap kartu menampilkan status rilis resmi, deskripsi fungsi keluarga, panduan visual, dan tombol aksi yang patuh brief."
        code={brandDirectoryCode}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {k4Brands.map((brand) => {
            const isActive = brand.status === "Active Phase 1";
            return (
              <Card
                key={brand.id}
                variant="default"
                interactive
                className={`flex flex-col justify-between border-t-4 bg-white shadow-xs hover:shadow-md transition-all ${
                  isActive ? "border-t-[#087FA0]" : "border-t-[#12303C]/20"
                }`}
              >
                <div>
                  <CardHeader className="p-5 pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant={isActive ? "teal" : "outline"}
                        size="sm"
                        dot={isActive}
                      >
                        {brand.status}
                      </Badge>
                      <div className="p-2 rounded-lg bg-[#FBF8F0]">
                        {brandIcons[brand.id]}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-[#12303C] font-montserrat">
                      {brand.name}
                    </CardTitle>
                    <CardDescription className="text-xs font-medium text-[#087FA0]">
                      {brand.tagline}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-5 pt-0 space-y-3">
                    <p className="text-xs text-[#12303C]/75 leading-relaxed">
                      {brand.description}
                    </p>
                    <div className="p-2.5 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC] text-[11px] text-[#12303C]/80 leading-snug">
                      <span className="font-semibold text-[#12303C] block mb-0.5">Visual Aesthetic:</span>
                      {brand.visualStyle}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="p-5 pt-0">
                  <Button
                    variant={isActive ? "teal" : "outline"}
                    size="sm"
                    className="w-full justify-center"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    {isActive ? (brand.id === "k4book" ? "Jelajahi K4Book" : "Baca Artikel RANI") : "Kenali Brand"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </ComponentPreview>

      {/* Deep-Dive Active Brand Guidelines: K4Book & RANI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* K4Book Sub-lines */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE5DC]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#087FA0]/10 text-[#087FA0]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#12303C] font-montserrat">K4Book — Lini Aktif Fase 1</h3>
                <span className="text-[11px] text-[#087FA0] font-medium">Digital Publishing & Commerce</span>
              </div>
            </div>
            <Badge variant="teal" size="sm" dot>Fase 1</Badge>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="p-4 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC] space-y-2">
              <span className="font-bold text-xs text-[#12303C] block font-montserrat">
                1. Kidstory (Buku Cerita Anak)
              </span>
              <p className="text-[#12303C]/75 leading-relaxed">
                Estetika soft watercolor storybook. Pembagian kelompok usia resmi:
              </p>
              <div className="grid grid-cols-3 gap-2 pt-1">
                {kidstoryAgeGroups.map((age) => (
                  <div key={age.id} className="p-2 bg-white rounded-lg border border-[#EAE5DC] text-center shadow-2xs">
                    <span className="font-bold text-[11px] text-[#087FA0] block font-mono">{age.label}</span>
                    <span className="text-[10px] text-[#12303C]/60 block mt-0.5">{age.id === "0-18m" ? "Sensori" : age.id === "18m-3y" ? "Kata Pertama" : "Kemandirian"}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC]">
              <span className="font-bold text-xs text-[#12303C] block font-montserrat">
                2. HumOR (Komedi HR & Refleksi)
              </span>
              <p className="text-[#12303C]/75 mt-1 leading-relaxed">
                Warm Ivory (#F7F1E8), Deep Ocean (#173F52), flat-vector editorial, komedi elegan profesional dunia kerja.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC]">
              <span className="font-bold text-xs text-[#12303C] block font-montserrat">
                3. Novel (Fiksi & Sastra Nilai)
              </span>
              <p className="text-[#12303C]/75 mt-1 leading-relaxed">
                Cinematic literary look, narasi keluarga mendalam, format digital dan cetak berkualitas tinggi.
              </p>
            </div>
          </div>
        </div>

        {/* RANI Guidelines */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE5DC]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#20463D]/10 text-[#20463D]">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#12303C] font-montserrat">RANI — Kanal Edukasi Fase 1</h3>
                <span className="text-[11px] text-[#20463D] font-medium">Family Education Articles</span>
              </div>
            </div>
            <Badge variant="forest" size="sm" dot>Fase 1</Badge>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="p-4 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC]">
              <span className="font-bold text-xs text-[#12303C] block font-montserrat">
                Karakter Visual: Soft Editorial Gouache
              </span>
              <p className="text-[#12303C]/75 mt-1 leading-relaxed">
                Sentuhan tekstur lukisan gouache lembut bernuansa empatik, hangat, dan menenangkan jiwa.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC]">
              <span className="font-bold text-xs text-[#12303C] block font-montserrat">
                Aturan Pokok: Faceless-First
              </span>
              <p className="text-[#12303C]/75 mt-1 leading-relaxed">
                Seluruh ilustrasi dan cover artikel mengutamakan representasi universal keluarga tanpa menampilkan foto wajah figur atau founder.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC] space-y-2">
              <span className="font-bold text-xs text-[#12303C] block font-montserrat">
                Siklus Status Artikel Resmi
              </span>
              <div className="flex items-center gap-2 pt-1">
                <Badge variant="outline" size="sm">1. Draft</Badge>
                <span className="text-[#12303C]/40">→</span>
                <Badge variant="goldenrod" size="sm">2. Review</Badge>
                <span className="text-[#12303C]/40">→</span>
                <Badge variant="forest" size="sm" dot>3. Published</Badge>
              </div>
              <p className="text-[11px] text-[#12303C]/60 pt-1">
                Hanya artikel berstatus Published yang dapat diakses oleh publik pembaca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
