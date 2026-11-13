"use client";

import React, { useState } from "react";
import { Shield, Users, Compass, Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "../component-preview";

export const AdvancedSection: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const pillars = [
    {
      title: "Faith",
      desc: "Building everything upon faith and values.",
      detail: "Fondasi spiritual dan integritas moral yang menjadi akar dari setiap langkah serta arah hidup keluarga.",
      badge: "Pillar 1",
      color: "border-l-[#12303C]",
      icon: <Shield className="w-5 h-5 text-[#12303C]" />,
    },
    {
      title: "Family",
      desc: "Growing together through meaningful connections.",
      detail: "Membangun ikatan emosional dan kebijaksanaan lintas generasi yang tak terpisahkan dalam kebersamaan.",
      badge: "Pillar 2",
      color: "border-l-[#20463D]",
      icon: <Users className="w-5 h-5 text-[#20463D]" />,
    },
    {
      title: "Freedom",
      desc: "Encouraging independence and creativity.",
      detail: "Memberikan ruang untuk berpikir mandiri, berani berkarya, dan berekspresi secara merdeka dan terarah.",
      badge: "Pillar 3",
      color: "border-l-[#087FA0]",
      icon: <Compass className="w-5 h-5 text-[#087FA0]" />,
    },
    {
      title: "Future",
      desc: "Creating opportunities for generations ahead.",
      detail: "Menyiapkan warisan pengetahuan, jejaring kepemimpinan, dan peluang berkelanjutan untuk anak cucu.",
      badge: "Pillar 4",
      color: "border-l-[#EBCC3D]",
      icon: <Sparkles className="w-5 h-5 text-[#997C0D]" />,
    },
  ];

  const compositeCode = `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {pillars.map((pillar) => (
    <Card key={pillar.title} variant="default" interactive className="border-l-4">
      <CardHeader>
        <Badge variant="teal" dot>{pillar.badge}</Badge>
        <CardTitle>{pillar.title}</CardTitle>
        <CardDescription>{pillar.desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-[#12303C]/75">{pillar.detail}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
          Eksplorasi
        </Button>
      </CardFooter>
    </Card>
  ))}
</div>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Composite Architectural Patterns
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Advanced Patterns & Pillar Cards
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Pola gabungan siap pakai dari komponen primitif untuk halaman landing Karatas Family, kartu empat pilar, dan modular card decks.
        </p>
      </div>

      <ComponentPreview
        title="Karatas Four Pillars Composite Grid"
        description="Penerapan komposit Card, Badge, dan Button untuk menampilkan 4 Pilar (Faith, Family, Freedom, Future)."
        code={compositeCode}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {pillars.map((pillar, idx) => (
            <Card
              key={pillar.title}
              variant="default"
              interactive
              className={`border-l-4 ${pillar.color} ${
                activePillarIndex === idx ? "ring-2 ring-[#087FA0]" : ""
              }`}
              onClick={() => setActivePillarIndex(idx)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="teal" size="sm" dot>
                    {pillar.badge}
                  </Badge>
                  {pillar.icon}
                </div>
                <CardTitle className="text-lg font-serif mt-2">{pillar.title}</CardTitle>
                <CardDescription className="text-xs font-medium text-[#12303C]/80">
                  {pillar.desc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-[#12303C]/70 leading-relaxed">
                  {pillar.detail}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="px-0 hover:bg-transparent text-[#087FA0] font-semibold"
                >
                  Eksplorasi Pilar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ComponentPreview>
    </div>
  );
};
