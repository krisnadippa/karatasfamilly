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
import { ChartsSection } from "@/components/design-system/sections/charts";
import { AdvancedSection } from "@/components/design-system/sections/advanced";
import { ShadcnGuideSection } from "@/components/design-system/sections/shadcn-guide";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      { id: "charts", title: "Charts & Data Viz", component: <ChartsSection /> },
      { id: "advanced", title: "Four Pillars Composite", component: <AdvancedSection /> },
      { id: "shadcn-guide", title: "shadcn & Layout Guide", component: <ShadcnGuideSection /> },
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
      <div className="space-y-16 pb-24">
        {/* Top Header Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EAE5DC] shadow-xs flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="teal" size="sm" dot>
                Version V1.0
              </Badge>
              <span className="text-[11px] font-mono text-[#12303C]/60 uppercase tracking-wider">
                Developer Brief V04 Official
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#12303C] tracking-tight font-montserrat">
              K4Family Design System
            </h1>
            <p className="text-xs sm:text-sm text-[#12303C]/75 leading-relaxed">
              Panduan desain komprehensif untuk ekosistem terintegrasi K4Family: K4Book (Penerbitan Digital), RANI (Artikel Edukasi), dan 6 lini masa depan.
            </p>
            <p className="text-xs text-[#087FA0] font-serif italic pt-1">
              "{OFFICIAL_TAGLINE}"
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant={activeSection === "all" ? "primary" : "outline"}
              size="sm"
              onClick={() => {
                setActiveSection("all");
                setSearchQuery("");
              }}
            >
              Semua Modul ({sections.length})
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
          <div className="p-12 text-center bg-white rounded-3xl border border-[#EAE5DC] space-y-3">
            <p className="text-sm font-bold text-[#12303C] font-montserrat">
              Tidak ditemukan komponen untuk kata kunci "{searchQuery}"
            </p>
            <p className="text-xs text-[#12303C]/60">
              Coba kata kunci seperti navbar, button, card, kidstory, rani, icon, dialog, atau table.
            </p>
            <Button
              variant="outline"
              size="sm"
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
