"use client";

import React, { useState } from "react";
import { BookOpen, Sparkles, Heart, Hammer, Camera, Sprout, Activity, GraduationCap, Utensils, ArrowRight } from "lucide-react";
import { k4Brands, kidstoryAgeGroups } from "@/lib/design-system/tokens";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ComponentPreview } from "../component-preview";

export const BrandDirectorySection: React.FC = () => {
  const [selectedBrandId, setSelectedBrandId] = useState<string>("k4book");

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

  const selectedBrand = k4Brands.find((b) => b.id === selectedBrandId) || k4Brands[0];

  const brandDirectoryCode = `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {k4Brands.map((brand) => (
    <Card key={brand.id} variant="default" interactive>
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
        >
          {brand.status === "Active Phase 1" ? "Jelajahi Brand" : "Kenali Brand"}
        </Button>
      </CardFooter>
    </Card>
  ))}
</div>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Ecosystem Architecture
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          K4Family 9 Lini Bisnis (Brand Tokens)
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Dokumentasi identitas visual, panduan estetika, dan status rilis per lini brand. K4Book dan RANI merupakan prioritas aktif fase pertama; enam lini lainnya berstatus Akan Datang.
        </p>
      </div>

      {/* Grid of 9 Brands */}
      <ComponentPreview
        title="Direktori 9 Brand K4Family"
        description="Kartu identitas resmi seluruh brand dengan status rilis dan larangan CTA transaksi pada lini masa depan."
        code={brandDirectoryCode}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {k4Brands.map((brand) => {
            const isActive = brand.status === "Active Phase 1";
            return (
              <Card
                key={brand.id}
                variant="default"
                interactive
                className={`border-l-4 ${
                  isActive ? "border-l-[#087FA0]" : "border-l-[#12303C]/20"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={isActive ? "teal" : "outline"}
                      size="sm"
                      dot={isActive}
                    >
                      {brand.status}
                    </Badge>
                    {brandIcons[brand.id]}
                  </div>
                  <CardTitle className="text-lg font-bold mt-2 text-[#12303C]">
                    {brand.name}
                  </CardTitle>
                  <CardDescription className="text-xs font-medium text-[#12303C]/80">
                    {brand.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-[#12303C]/70 leading-relaxed mb-3">
                    {brand.description}
                  </p>
                  <div className="p-2.5 rounded-lg bg-[#FBF8F0] border border-[#EAE5DC] text-[11px] text-[#12303C]/80">
                    <span className="font-semibold block text-[#12303C]">Visual Direction:</span>
                    {brand.visualStyle}
                  </div>
                </CardContent>
                <CardFooter>
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
        <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#EAE5DC]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#087FA0]" />
              <h3 className="font-bold text-sm text-[#12303C]">K4Book — Lini Aktif</h3>
            </div>
            <Badge variant="teal" size="sm">Fase 1</Badge>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC]">
              <span className="font-bold text-[#12303C] block">1. Kidstory (Buku Cerita Anak)</span>
              <p className="text-[#12303C]/70 mt-0.5 leading-relaxed">
                Estetika soft watercolor storybook. Pembagian kelompok usia resmi:
              </p>
              <div className="grid grid-cols-3 gap-1.5 mt-2">
                {kidstoryAgeGroups.map((age) => (
                  <div key={age.id} className="p-1.5 bg-white rounded-md border border-[#EAE5DC] text-center">
                    <span className="font-bold text-[10px] text-[#087FA0] block">{age.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC]">
              <span className="font-bold text-[#12303C] block">2. HumOR (Komedi HR & Refleksi)</span>
              <p className="text-[#12303C]/70 mt-0.5 leading-relaxed">
                Warm Ivory (#F7F1E8), Deep Ocean (#173F52), flat-vector editorial, komedi elegan profesional.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC]">
              <span className="font-bold text-[#12303C] block">3. Novel (Literatur & Fiksi)</span>
              <p className="text-[#12303C]/70 mt-0.5 leading-relaxed">
                Cinematic literary look, kedalaman narasi, format cetak & e-book resolusi tinggi.
              </p>
            </div>
          </div>
        </div>

        {/* RANI Guidelines */}
        <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#EAE5DC]">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#20463D]" />
              <h3 className="font-bold text-sm text-[#12303C]">RANI — Kanal Edukasi</h3>
            </div>
            <Badge variant="forest" size="sm">Fase 1</Badge>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC]">
              <span className="font-bold text-[#12303C] block">Karakter Visual: Soft Editorial Gouache</span>
              <p className="text-[#12303C]/70 mt-0.5 leading-relaxed">
                Sentuhan lukisan gouache lembut bernuansa empatik, hangat, dan menenangkan.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC]">
              <span className="font-bold text-[#12303C] block">Aturan Utama: Faceless-First</span>
              <p className="text-[#12303C]/70 mt-0.5 leading-relaxed">
                Ilustrasi mengutamakan representasi universal keluarga tanpa menonjolkan foto figur atau founder.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#FBF8F0] border border-[#EAE5DC]">
              <span className="font-bold text-[#12303C] block">Siklus Status Artikel Resmi</span>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" size="sm">Draft</Badge>
                <span className="text-[#12303C]/40">→</span>
                <Badge variant="goldenrod" size="sm">Review</Badge>
                <span className="text-[#12303C]/40">→</span>
                <Badge variant="forest" size="sm">Published</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
