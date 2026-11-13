"use client";

import React, { useState } from "react";
import {
  Home, Menu, Search, User, Users, Settings, Bell, ChevronDown, ChevronRight, ArrowRight, ArrowLeft, ExternalLink, X, Plus, Minus, Check, Info, CircleHelp,
  BookOpen, BookMarked, Library, BookText, ShoppingBag, ShoppingCart, CreditCard, Receipt, Download, Bookmark, GraduationCap,
  Heart, MessageCircle, Leaf, BookHeart, Lightbulb,
  Palette, Camera, Sprout, Activity, Utensils, Wrench,
  LayoutDashboard, Package, ChartNoAxesCombined, FileText, ClipboardList, Ticket, ShieldCheck, Database, Clock, Calendar, Filter, SlidersHorizontal, MoreHorizontal, Ellipsis,
  Copy
} from "lucide-react";
import { ComponentPreview } from "../component-preview";

export const IconsSection: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<number>(20);
  const [selectedStroke, setSelectedStroke] = useState<number>(2);
  const [searchFilter, setSearchFilter] = useState("");
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 1800);
  };

  const iconCategories = [
    {
      category: "General & Navigation",
      icons: [
        { name: "Home", component: Home },
        { name: "Menu", component: Menu },
        { name: "Search", component: Search },
        { name: "User", component: User },
        { name: "Users", component: Users },
        { name: "Settings", component: Settings },
        { name: "Bell", component: Bell },
        { name: "ChevronDown", component: ChevronDown },
        { name: "ChevronRight", component: ChevronRight },
        { name: "ArrowRight", component: ArrowRight },
        { name: "ArrowLeft", component: ArrowLeft },
        { name: "ExternalLink", component: ExternalLink },
        { name: "X", component: X },
        { name: "Plus", component: Plus },
        { name: "Minus", component: Minus },
        { name: "Check", component: Check },
        { name: "Info", component: Info },
        { name: "CircleHelp", component: CircleHelp },
      ],
    },
    {
      category: "K4Book — Publishing & Commerce",
      icons: [
        { name: "BookOpen", component: BookOpen },
        { name: "BookMarked", component: BookMarked },
        { name: "Library", component: Library },
        { name: "BookText", component: BookText },
        { name: "ShoppingBag", component: ShoppingBag },
        { name: "ShoppingCart", component: ShoppingCart },
        { name: "CreditCard", component: CreditCard },
        { name: "Receipt", component: Receipt },
        { name: "Download", component: Download },
        { name: "Bookmark", component: Bookmark },
        { name: "GraduationCap", component: GraduationCap },
      ],
    },
    {
      category: "RANI — Family Education",
      icons: [
        { name: "Heart", component: Heart },
        { name: "MessageCircle", component: MessageCircle },
        { name: "Leaf", component: Leaf },
        { name: "BookHeart", component: BookHeart },
        { name: "Lightbulb", component: Lightbulb },
      ],
    },
    {
      category: "Business Directory (6 Brand Lainnya)",
      icons: [
        { name: "Palette", component: Palette, role: "K4Studio / Seni" },
        { name: "Camera", component: Camera, role: "K4Studio / Media" },
        { name: "Sprout", component: Sprout, role: "K4Farm / Pertanian" },
        { name: "Activity", component: Activity, role: "K4Health / Kesehatan" },
        { name: "GraduationCap", component: GraduationCap, role: "K4Academy / Dini" },
        { name: "Utensils", component: Utensils, role: "WarunK / Kuliner" },
        { name: "Wrench", component: Wrench, role: "K4Craft / Kriya" },
      ],
    },
    {
      category: "Admin & System",
      icons: [
        { name: "LayoutDashboard", component: LayoutDashboard },
        { name: "Package", component: Package },
        { name: "ChartNoAxesCombined", component: ChartNoAxesCombined },
        { name: "FileText", component: FileText },
        { name: "ClipboardList", component: ClipboardList },
        { name: "Ticket", component: Ticket },
        { name: "ShieldCheck", component: ShieldCheck },
        { name: "Database", component: Database },
        { name: "Clock", component: Clock },
        { name: "Calendar", component: Calendar },
        { name: "Filter", component: Filter },
        { name: "SlidersHorizontal", component: SlidersHorizontal },
        { name: "MoreHorizontal", component: MoreHorizontal },
        { name: "Ellipsis", component: Ellipsis },
      ],
    },
  ];

  const codeExample = `import { BookOpen } from "lucide-react";

<BookOpen 
  size={${selectedSize}} 
  strokeWidth={${selectedStroke}} 
  className="text-[#087FA0]" 
/>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Iconography Standard
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          K4Family Icon System (Lucide React)
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Sistem icon resmi yang dikelompokkan berdasarkan fungsi: General, K4Book, RANI, Direktori Brand, dan Admin. Bebas emoji untuk menjaga kredibilitas dan kejelasan navigasi.
        </p>
      </div>

      <ComponentPreview
        title="Icon Catalog & Controls"
        description="Pilih ukuran, ketebalan stroke, dan klik icon untuk menyalin nama komponen Lucide."
        code={codeExample}
        controls={
          <div className="w-full flex flex-wrap items-center justify-between gap-4">
            {/* Size selector */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#12303C]">Size:</span>
              <div className="flex gap-1">
                {[14, 16, 18, 20, 24, 32].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`px-2 py-1 rounded text-xs font-mono cursor-pointer transition-colors ${
                      selectedSize === s
                        ? "bg-[#12303C] text-white font-bold"
                        : "bg-[#FBF8F0] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                    }`}
                  >
                    {s}px
                  </button>
                ))}
              </div>
            </div>

            {/* Stroke selector */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#12303C]">Stroke:</span>
              <div className="flex gap-1">
                {[1.5, 2, 2.5].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setSelectedStroke(st)}
                    className={`px-2 py-1 rounded text-xs font-mono cursor-pointer transition-colors ${
                      selectedStroke === st
                        ? "bg-[#12303C] text-white font-bold"
                        : "bg-[#FBF8F0] text-[#12303C]/70 hover:bg-[#EAE5DC]"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Filter */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Cari icon..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="h-8 px-3 text-xs rounded-full bg-[#FBF8F0] border border-[#EAE5DC] text-[#12303C] focus:outline-none focus:border-[#087FA0]"
              />
            </div>
          </div>
        }
      >
        <div className="w-full space-y-8">
          {iconCategories.map((cat) => {
            const filteredIcons = cat.icons.filter((i) =>
              i.name.toLowerCase().includes(searchFilter.toLowerCase())
            );
            if (filteredIcons.length === 0) return null;

            return (
              <div key={cat.category} className="space-y-3">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#EAE5DC]">
                  <span className="text-xs font-bold text-[#12303C] uppercase tracking-wider">
                    {cat.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#087FA0]">
                    {filteredIcons.length} icons
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {filteredIcons.map((ic) => {
                    const IconComp = ic.component;
                    const isCopied = copiedName === ic.name;

                    return (
                      <button
                        key={ic.name}
                        type="button"
                        onClick={() => handleCopy(ic.name)}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                          isCopied
                            ? "bg-[#087FA0] text-white border-[#087FA0]"
                            : "bg-white border-[#EAE5DC] text-[#12303C] hover:border-[#087FA0] hover:shadow-xs"
                        }`}
                        title="Klik untuk menyalin nama icon"
                      >
                        <IconComp
                          size={selectedSize}
                          strokeWidth={selectedStroke}
                          className={isCopied ? "text-white" : "text-[#12303C]"}
                        />
                        <span className="text-[11px] font-mono truncate max-w-full">
                          {isCopied ? "Copied!" : ic.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </ComponentPreview>
    </div>
  );
};

