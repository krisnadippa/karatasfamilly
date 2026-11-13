"use client";

import React, { useState } from "react";
import { ArrowRight, Send, Download, Sparkles, Check, RefreshCw } from "lucide-react";
import { Button, ButtonVariant, ButtonSize } from "@/components/ui/button";
import { ComponentPreview } from "../component-preview";

export const ButtonsSection: React.FC = () => {
  // Playground interactive state
  const [variant, setVariant] = useState<ButtonVariant>("primary");
  const [size, setSize] = useState<ButtonSize>("md");
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [hasLeftIcon, setHasLeftIcon] = useState(false);
  const [hasRightIcon, setHasRightIcon] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Generate real, functional component code
  const generatedCode = `<Button
  variant="${variant}"
  size="${size}"${isLoading ? "\n  isLoading" : ""}${disabled ? "\n  disabled" : ""}${
    hasLeftIcon ? "\n  leftIcon={<Sparkles className=\"w-4 h-4\" />}" : ""
  }${hasRightIcon ? "\n  rightIcon={<ArrowRight className=\"w-4 h-4\" />}" : ""}
  onClick={() => console.log("Clicked")}
>
  ${variant === "goldenrod" ? "Action Button" : "Button Label"}
</Button>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Interactive Primitives
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Button Component
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Komponen tombol interaktif berbasis token korporat dengan 7 varian warna, 4 ukuran, dan dukungan state loading, disabled, serta icon slots.
        </p>
      </div>

      {/* Main Interactive Playground */}
      <ComponentPreview
        title="Interactive Button Playground"
        description="Pilih kombinasi varian, ukuran, state, dan icon untuk melihat preview dan kode secara langsung."
        code={generatedCode}
        controls={
          <div className="w-full flex flex-wrap items-center justify-between gap-4">
            {/* Variant selector */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#12303C]">Variant:</span>
              <div className="flex flex-wrap gap-1">
                {(
                  [
                    "primary",
                    "secondary",
                    "teal",
                    "goldenrod",
                    "outline",
                    "ghost",
                    "cream",
                  ] as ButtonVariant[]
                ).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                      variant === v
                        ? "bg-[#12303C] text-white"
                        : "bg-[#FAF8F5] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#12303C]">Size:</span>
              <div className="flex gap-1">
                {(["sm", "md", "lg", "icon"] as ButtonSize[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                      size === s
                        ? "bg-[#12303C] text-white"
                        : "bg-[#FAF8F5] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* State toggles */}
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isLoading}
                  onChange={(e) => setIsLoading(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Loading</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={disabled}
                  onChange={(e) => setDisabled(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Disabled</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasLeftIcon}
                  onChange={(e) => setHasLeftIcon(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Left Icon</span>
              </label>

              <label className="inline-flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasRightIcon}
                  onChange={(e) => setHasRightIcon(e.target.checked)}
                  className="rounded text-[#087FA0]"
                />
                <span className="text-[#12303C]">Right Icon</span>
              </label>
            </div>
          </div>
        }
      >
        <div className="flex flex-col items-center gap-4">
          <Button
            variant={variant}
            size={size}
            isLoading={isLoading}
            disabled={disabled}
            leftIcon={hasLeftIcon ? <Sparkles className="w-4 h-4" /> : undefined}
            rightIcon={hasRightIcon ? <ArrowRight className="w-4 h-4" /> : undefined}
            onClick={() => setClickCount((c) => c + 1)}
          >
            {size === "icon" ? <Send className="w-4 h-4" /> : "Action Button"}
          </Button>

          <span className="text-xs text-[#12303C]/60 font-mono">
            Interactions registered: {clickCount} clicks
          </span>
        </div>
      </ComponentPreview>

      {/* Grid of all variants side by side */}
      <div className="rounded-2xl border border-[#EAE5DC] bg-white p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#12303C] mb-4">
          Semua Varian Tombol (All Variants)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-[#12303C] uppercase">Primary (Midnight)</span>
            <Button variant="primary">Midnight Button</Button>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-[#12303C] uppercase">Secondary (Forest)</span>
            <Button variant="secondary">Forest Green</Button>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-[#12303C] uppercase">Teal (Ocean)</span>
            <Button variant="teal">Ocean Teal</Button>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-[#12303C] uppercase">Goldenrod</span>
            <Button variant="goldenrod">Bright Goldenrod</Button>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-[#12303C] uppercase">Outline</span>
            <Button variant="outline">Outline Button</Button>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-[#12303C] uppercase">Ghost</span>
            <Button variant="ghost">Ghost Button</Button>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-[#12303C] uppercase">Cream Canvas</span>
            <Button variant="cream">Cream Surface</Button>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col items-center gap-3">
            <span className="text-xs font-bold text-[#12303C] uppercase">Icon Only</span>
            <Button variant="teal" size="icon" aria-label="Download">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
