"use client";

import React, { useState, useMemo } from "react";
import { DesignSystemLayout } from "@/components/design-system/design-system-layout";
import { FoundationsSection } from "@/components/design-system/sections/foundations";
import { ButtonsSection } from "@/components/design-system/sections/buttons";
import { FormsSection } from "@/components/design-system/sections/forms";
import { SelectionSection } from "@/components/design-system/sections/selection";
import { DataDisplaySection } from "@/components/design-system/sections/data-display";
import { FeedbackSection } from "@/components/design-system/sections/feedback";
import { NavigationSection } from "@/components/design-system/sections/navigation";
import { OverlaysSection } from "@/components/design-system/sections/overlays";
import { TablesSection } from "@/components/design-system/sections/tables";
import { LayoutsSection } from "@/components/design-system/sections/layouts";
import { AdvancedSection } from "@/components/design-system/sections/advanced";
import { Button } from "@/components/ui/button";

export default function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sections = useMemo(
    () => [
      { id: "foundations", title: "Foundations & Tokens", component: <FoundationsSection /> },
      { id: "buttons", title: "Buttons", component: <ButtonsSection /> },
      { id: "forms", title: "Form Controls", component: <FormsSection /> },
      { id: "selection", title: "Selection & Toggles", component: <SelectionSection /> },
      { id: "data-display", title: "Data Display & Cards", component: <DataDisplaySection /> },
      { id: "feedback", title: "Feedback & Loading States", component: <FeedbackSection /> },
      { id: "navigation", title: "Navigation Components", component: <NavigationSection /> },
      { id: "overlays", title: "Dialogs & Tooltips", component: <OverlaysSection /> },
      { id: "tables", title: "Data Tables", component: <TablesSection /> },
      { id: "layouts", title: "Layouts & Grid Bounds", component: <LayoutsSection /> },
      { id: "advanced", title: "Advanced Composite Patterns", component: <AdvancedSection /> },
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
        // Clear search when explicitly selecting a category
        setSearchQuery("");
      }}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
    >
      <div className="space-y-16">
        {/* Top Banner / Filter status */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EAE5DC]">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#12303C] tracking-tight">
              Karatas Family Design System
            </h1>
            <p className="text-xs text-[#12303C]/70 mt-1">
              Panduan komponen arsitektural Next.js App Router, token warna korporat, dan playground interaktif.
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

        {/* Rendered Sections */}
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
              Coba kata kunci lain seperti button, input, card, badge, dialog, atau color.
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
