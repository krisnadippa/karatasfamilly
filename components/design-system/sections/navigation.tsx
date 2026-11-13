"use client";

import React, { useState } from "react";
import { ChevronRight, Home, BookOpen, Settings, User, LogOut, Shield, Compass } from "lucide-react";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "../component-preview";

export const NavigationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("faith");
  const [lastAction, setLastAction] = useState<string>("Belum ada aksi");

  const dropdownCode = `<DropdownMenu
  triggerText="Aksi Cepat"
  items={[
    { id: "faith", label: "Pilar Faith", icon: <Shield className="w-4 h-4" />, badge: "P1", onClick: () => alert("Faith") },
    { id: "family", label: "Pilar Family", icon: <Compass className="w-4 h-4" />, badge: "P2", onClick: () => alert("Family") },
    { id: "settings", label: "Pengaturan Akun", icon: <Settings className="w-4 h-4" /> },
    { id: "logout", label: "Keluar Sesi", icon: <LogOut className="w-4 h-4" />, destructive: true },
  ]}
/>`;

  const tabsCode = `<div className="flex bg-[#FAF8F5] p-1.5 rounded-full border border-[#EAE5DC]">
  {["faith", "family", "freedom", "future"].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={\`px-4 py-2 rounded-full text-xs font-semibold uppercase \${
        activeTab === tab ? "bg-[#12303C] text-white shadow-xs" : "text-[#12303C]/70"
      }\`}
    >
      {tab}
    </button>
  ))}
</div>`;

  const breadcrumbsCode = `<nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#12303C]/70">
  <span className="hover:text-[#12303C] cursor-pointer">Karatas</span>
  <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40" />
  <span className="hover:text-[#12303C] cursor-pointer">Filosofi</span>
  <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40" />
  <span className="font-semibold text-[#12303C]">Empat Pilar</span>
</nav>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Wayfinding & Routing
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Navigation Components
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Komponen penunjuk arah dan alur interaksi seperti Menu Dropdown, Tab Segmented, dan Jalur Breadcrumbs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dropdown Menu */}
        <ComponentPreview
          title="Dropdown Menu"
          description="Menu popup kontekstual dengan dukungan icon, badge, item destruktif, dan click-outside."
          code={dropdownCode}
        >
          <div className="flex flex-col items-center gap-4">
            <DropdownMenu
              triggerText="Pilih Aksi Korporat"
              items={[
                {
                  id: "faith",
                  label: "Pilar 1: Faith",
                  icon: <Shield className="w-4 h-4" />,
                  badge: "P1",
                  onClick: () => setLastAction("Memilih Pilar Faith"),
                },
                {
                  id: "family",
                  label: "Pilar 2: Family",
                  icon: <Compass className="w-4 h-4" />,
                  badge: "P2",
                  onClick: () => setLastAction("Memilih Pilar Family"),
                },
                {
                  id: "settings",
                  label: "Pengaturan Akun",
                  icon: <Settings className="w-4 h-4" />,
                  onClick: () => setLastAction("Membuka Pengaturan"),
                },
                {
                  id: "logout",
                  label: "Keluar Sesi",
                  icon: <LogOut className="w-4 h-4" />,
                  destructive: true,
                  onClick: () => setLastAction("Keluar Sesi"),
                },
              ]}
            />
            <span className="text-xs font-mono text-[#087FA0]">
              Status interaksi: {lastAction}
            </span>
          </div>
        </ComponentPreview>

        {/* Breadcrumbs */}
        <ComponentPreview
          title="Breadcrumbs"
          description="Navigasi hierarkis jalur dokumen dengan pemisah visual yang rapi."
          code={breadcrumbsCode}
        >
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-[#12303C]/70 p-3 bg-white rounded-xl border border-[#EAE5DC]"
          >
            <div className="flex items-center gap-1.5 hover:text-[#12303C] cursor-pointer">
              <Home className="w-3.5 h-3.5" />
              <span>Karatas</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40" />
            <span className="hover:text-[#12303C] cursor-pointer">Dokumentasi</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#12303C]/40" />
            <span className="font-semibold text-[#12303C]">Design System</span>
          </nav>
        </ComponentPreview>
      </div>

      {/* Segmented Tabs */}
      <ComponentPreview
        title="Segmented Pill Tabs"
        description="Pengalih tampilan konten berbasis tab bulat dengan latar belakang kanvas Cream."
        code={tabsCode}
      >
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-wrap bg-[#FAF8F5] p-1.5 rounded-full border border-[#EAE5DC] gap-1">
            {(["faith", "family", "freedom", "future"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#12303C] text-white shadow-xs"
                    : "text-[#12303C]/70 hover:text-[#12303C]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC] text-center w-full max-w-md">
            <span className="text-xs font-mono font-bold text-[#087FA0] uppercase">
              Tab Aktif: {activeTab}
            </span>
            <p className="text-xs text-[#12303C]/75 mt-1 leading-relaxed">
              {activeTab === "faith" && "Building everything upon faith and values."}
              {activeTab === "family" && "Growing together through meaningful connections."}
              {activeTab === "freedom" && "Encouraging independence and creativity."}
              {activeTab === "future" && "Creating opportunities for generations ahead."}
            </p>
          </div>
        </div>
      </ComponentPreview>
    </div>
  );
};
