"use client";

import React from "react";
import { LayoutGrid, Maximize2, SplitSquareVertical, ArrowRightLeft } from "lucide-react";
import { ComponentPreview } from "../component-preview";

export const LayoutsSection: React.FC = () => {
  const containerCode = `<section className="w-full py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* 4 Pilar Karatas */}
    </div>
  </div>
</section>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Spatial & Alignment Rules
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Layout Bounds & Grid Rulers
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Standar batas kontainer, margin horizontal, jarak antar-section, dan sistem kolom adaptif untuk menjamin konsistensi visual di seluruh perangkat.
        </p>
      </div>

      <ComponentPreview
        title="Responsive Grid & Safe Margin Ruler"
        description="Visualisasi batas layout 4-kolom dengan padding aman dan batasan max-w-7xl (1280px)."
        code={containerCode}
      >
        <div className="w-full space-y-4">
          {/* Layout Rulers Visualizer */}
          <div className="p-4 rounded-xl border border-dashed border-[#087FA0]/40 bg-[#087FA0]/5 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#087FA0]">
              <span>[Outer Bleed: 100% viewport]</span>
              <span>Section Padding: py-16 / py-24</span>
            </div>

            <div className="border border-[#12303C]/20 rounded-lg p-3 bg-white">
              <div className="flex items-center justify-between text-xs font-mono text-[#12303C]/60 mb-2">
                <span>Safe Margin X: px-4 (mobile) to px-8 (desktop)</span>
                <span>Max Width: 1280px (max-w-7xl)</span>
              </div>

              {/* 4 Columns Demonstration */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-[#12303C] text-white text-center text-xs font-bold">
                  Col 1: Faith
                </div>
                <div className="p-3 rounded-lg bg-[#20463D] text-white text-center text-xs font-bold">
                  Col 2: Family
                </div>
                <div className="p-3 rounded-lg bg-[#087FA0] text-white text-center text-xs font-bold">
                  Col 3: Freedom
                </div>
                <div className="p-3 rounded-lg bg-[#EBCC3D] text-[#12303C] text-center text-xs font-bold">
                  Col 4: Future
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentPreview>
    </div>
  );
};
