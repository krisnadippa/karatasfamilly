"use client";

import React, { useState, useMemo } from "react";
import { DesignSystemLayout } from "@/components/design-system/design-system-layout";
import { FoundationsSection } from "@/components/design-system/sections/foundations";
import { IconsSection } from "@/components/design-system/sections/icons";
import { BrandDirectorySection } from "@/components/design-system/sections/brand-directory";
import { NavigationSection } from "@/components/design-system/sections/navigation";
import { ButtonsSection } from "@/components/design-system/sections/buttons";
import { FormsSection } from "@/components/design-system/sections/forms";
import { SelectionSection } from "@/components/design-system/sections/selection";
import { DataDisplaySection } from "@/components/design-system/sections/data-display";
import { FeedbackSection } from "@/components/design-system/sections/feedback";
import { SidebarsSection } from "@/components/design-system/sections/sidebars";
import { TablesSection } from "@/components/design-system/sections/tables";
import { OverlaysSection } from "@/components/design-system/sections/overlays";
import { LayoutsSection } from "@/components/design-system/sections/layouts";
import { Button } from "@/components/ui/button";
import { OFFICIAL_TAGLINE } from "@/lib/design-system/tokens";

export default function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sections = useMemo(
    () => [
      { id: "foundations", title: "Foundations & Colors", component: <FoundationsSection /> },
      { id: "icons", title: "Icon System (Lucide)", component: <IconsSection /> },
      { id: "brand-directory", title: "Brand Tokens (9 Brands)", component: <BrandDirectorySection /> },
      { id: "navigation", title: "Navigation System", component: <NavigationSection /> },
      { id: "buttons", title: "Buttons System", component: <ButtonsSection /> },
      { id: "forms", title: "Form Components", component: <FormsSection /> },
      { id: "selection", title: "Selection Controls", component: <SelectionSection /> },
      { id: "data-display", title: "Data Display & Cards", component: <DataDisplaySection /> },
      { id: "feedback", title: "Feedback & Transactions", component: <FeedbackSection /> },
      { id: "sidebars", title: "Sidebar System (Admin)", component: <SidebarsSection /> },
      { id: "tables", title: "Data Tables (DEMO)", component: <TablesSection /> },
      { id: "overlays", title: "Overlays & Tooltips", component: <OverlaysSection /> },
      { id: "layouts", title: "Page Layout & Footer", component: <LayoutsSection /> },
    ],
    []
  );

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      if (activeSection === "all") return sections;
      return sections.filter((s) => s.id === activeSection);
    }
    const q = searchQuery.toLowerCase();
    return sections.filter(
      (s) => s.title.toLowerCase().includes(q) || s.id.toLowerCase().includes(q)
    );
  }, [sections, activeSection, searchQuery]);

  return (
    <DesignSystemLayout
      activeSection={activeSection}
      onSelectSection={(id) => {
        setActiveSection(id);
        setSearchQuery("");
      }}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
    >
      <div className="space-y-16">
        {/* Top Header Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EAE5DC]">
          <div>
            <h1 className="text-3xl font-bold text-[#12303C] tracking-tight font-montserrat">
              K4Family Design System
            </h1>
            <p className="text-xs text-[#12303C]/70 mt-1">
              Developer Brief V04 Single Source of Truth: Palet warna korporat resmi, 9 lini brand ekosistem, sistem icon Lucide, dan komponen UI terintegrasi Next.js.
            </p>
            <p className="text-[11px] text-[#087FA0] font-serif italic mt-0.5">
              "{OFFICIAL_TAGLINE}"
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={activeSection === "all" ? "primary" : "outline"}
              size="sm"
              onClick={() => {
                setActiveSection("all");
                setSearchQuery("");
              }}
            >
              Tampilkan Semua ({sections.length})
            </Button>
          </div>
        </div>

        {/* Render Sections */}
        {filteredSections.length > 0 ? (
          filteredSections.map((sec) => (
            <section key={sec.id} id={sec.id} className="scroll-mt-24">
              {sec.component}
            </section>
          ))
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-[#EAE5DC]">
            <p className="text-sm font-semibold text-[#12303C]">
              Tidak ditemukan komponen untuk pencarian "{searchQuery}"
            </p>
            <p className="text-xs text-[#12303C]/60 mt-1">
              Coba kata kunci seperti navbar, button, card, kidstory, rani, icon, dialog, atau table.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => setSearchQuery("")}
            >
              Reset Pencarian
            </Button>
          </div>
        )}
      </div>
    </DesignSystemLayout>
  );
}
