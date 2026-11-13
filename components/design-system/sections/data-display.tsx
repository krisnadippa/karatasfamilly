"use client";

import React, { useState } from "react";
import { Shield, Users, Compass, Sparkles, BookOpen, BookmarkCheck } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardVariant,
} from "@/components/ui/card";
import { Badge, BadgeVariant } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "../component-preview";

export const DataDisplaySection: React.FC = () => {
  const [selectedCardVariant, setSelectedCardVariant] = useState<CardVariant>("default");
  const [interactiveCard, setInteractiveCard] = useState(true);

  const cardCode = `<Card variant="${selectedCardVariant}"${interactiveCard ? " interactive" : ""}>
  <CardHeader>
    <div className="flex items-center justify-between">
      <Badge variant="teal" dot>Pillar 2</Badge>
      <span className="text-xs text-[#12303C]/50 font-mono">EST. 2024</span>
    </div>
    <CardTitle>Family Heritage</CardTitle>
    <CardDescription>
      Growing together through meaningful connections and shared wisdom.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-xs text-[#12303C]/80 leading-relaxed">
      Koneksi keluarga yang bermakna menjadi mercusuar dalam setiap pengambilan keputusan strategis.
    </p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">Pelajari Pilar</Button>
  </CardFooter>
</Card>`;

  const badgeCode = `<div className="flex flex-wrap gap-2">
  <Badge variant="midnight" dot>Midnight</Badge>
  <Badge variant="forest" dot>Forest Green</Badge>
  <Badge variant="teal" dot>Ocean Teal</Badge>
  <Badge variant="goldenrod" dot>Bright Goldenrod</Badge>
  <Badge variant="gold">Muted Gold</Badge>
  <Badge variant="cream">Cream Surface</Badge>
  <Badge variant="outline">Outline</Badge>
</div>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Presentation Layer
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Data Display & Cards
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Komponen penyaji informasi terstruktur seperti Kartu (Card), Lencana (Badge), dan Indikator Status dengan palet korporat.
        </p>
      </div>

      {/* Card Playground */}
      <ComponentPreview
        title="Card Component"
        description="Kontainer konten dengan header, title, description, content, dan footer."
        code={cardCode}
        controls={
          <div className="flex flex-wrap items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#12303C]">Card Variant:</span>
              <div className="flex flex-wrap gap-1">
                {(
                  [
                    "default",
                    "elevated",
                    "bordered",
                    "accent",
                    "midnight",
                    "forest",
                    "cream",
                  ] as CardVariant[]
                ).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setSelectedCardVariant(v)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                      selectedCardVariant === v
                        ? "bg-[#12303C] text-white"
                        : "bg-[#FAF8F5] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={interactiveCard}
                onChange={(e) => setInteractiveCard(e.target.checked)}
                className="rounded text-[#087FA0]"
              />
              <span className="text-[#12303C]">Interactive Hover</span>
            </label>
          </div>
        }
      >
        <div className="w-full max-w-md">
          <Card variant={selectedCardVariant} interactive={interactiveCard}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    selectedCardVariant === "midnight" || selectedCardVariant === "forest"
                      ? "goldenrod"
                      : "teal"
                  }
                  dot
                >
                  Pillar 2
                </Badge>
                <span
                  className={`text-xs font-mono ${
                    selectedCardVariant === "midnight" || selectedCardVariant === "forest"
                      ? "text-white/60"
                      : "text-[#12303C]/50"
                  }`}
                >
                  EST. 2024
                </span>
              </div>
              <CardTitle>Family Heritage</CardTitle>
              <CardDescription>
                Growing together through meaningful connections and shared wisdom.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p
                className={`text-xs leading-relaxed ${
                  selectedCardVariant === "midnight" || selectedCardVariant === "forest"
                    ? "text-white/80"
                    : "text-[#12303C]/80"
                }`}
              >
                Koneksi keluarga yang bermakna menjadi mercusuar dalam setiap pengambilan keputusan strategis.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant={
                  selectedCardVariant === "midnight"
                    ? "goldenrod"
                    : selectedCardVariant === "forest"
                    ? "cream"
                    : "outline"
                }
                size="sm"
              >
                Pelajari Pilar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </ComponentPreview>

      {/* Badges Showcase */}
      <ComponentPreview
        title="Badge & Status Indicators"
        description="Lencana penanda status, kategori, atau tag dengan opsi titik indikator (dot)."
        code={badgeCode}
      >
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Badge variant="midnight" dot>
              Midnight
            </Badge>
            <Badge variant="forest" dot>
              Forest Green
            </Badge>
            <Badge variant="teal" dot>
              Ocean Teal
            </Badge>
            <Badge variant="goldenrod" dot>
              Bright Goldenrod
            </Badge>
            <Badge variant="gold">Muted Gold</Badge>
            <Badge variant="cream">Cream Surface</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-[#EAE5DC]">
            <Badge variant="teal" size="sm">
              Small (sm)
            </Badge>
            <Badge variant="teal" size="md">
              Medium (md)
            </Badge>
            <Badge variant="teal" size="lg">
              Large (lg)
            </Badge>
          </div>
        </div>
      </ComponentPreview>
    </div>
  );
};
