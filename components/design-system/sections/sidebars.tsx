"use client";

import React, { useState } from "react";
import {
  LayoutDashboard, BookOpen, Layers, Users, ShoppingCart, CreditCard, Key, FileText, CheckCircle2, Ticket, CircleHelp, Building2, Shield, BarChart3, Settings, LogOut, ChevronLeft, ChevronRight, Menu, Bell
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "../component-preview";
import { OFFICIAL_LOGO_PLACEHOLDER } from "@/lib/design-system/tokens";

export const SidebarsSection: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeAdminRoute, setActiveAdminRoute] = useState("dashboard");

  const adminMenuGroups = [
    {
      group: "Overview",
      items: [
        { id: "dashboard", label: "Dashboard Utama", icon: <LayoutDashboard className="w-4 h-4" /> },
      ],
    },
    {
      group: "K4Book Publishing",
      items: [
        { id: "produk", label: "Katalog Produk", icon: <BookOpen className="w-4 h-4" />, badge: "12" },
        { id: "kategori", label: "Kategori & Seri", icon: <Layers className="w-4 h-4" /> },
        { id: "pesanan", label: "Pesanan Masuk", icon: <ShoppingCart className="w-4 h-4" />, badge: "4 Baru" },
        { id: "pembayaran", label: "Status Pembayaran", icon: <CreditCard className="w-4 h-4" /> },
        { id: "library-akses", label: "Library & Hak Akses", icon: <Key className="w-4 h-4" /> },
      ],
    },
    {
      group: "RANI Education",
      items: [
        { id: "artikel", label: "Daftar Artikel", icon: <FileText className="w-4 h-4" />, badge: "28" },
        { id: "review", label: "Review & Approval", icon: <CheckCircle2 className="w-4 h-4" />, badge: "3 Pending" },
      ],
    },
    {
      group: "Support & Request",
      items: [
        { id: "tiket", label: "Tiket Bantuan", icon: <Ticket className="w-4 h-4" /> },
        { id: "faq", label: "Kelola FAQ", icon: <CircleHelp className="w-4 h-4" /> },
      ],
    },
    {
      group: "Business & System",
      items: [
        { id: "brand-dir", label: "Direktori Brand", icon: <Building2 className="w-4 h-4" /> },
        { id: "analytics", label: "Analytics", icon: <BarChart3 className="w-4 h-4" /> },
        { id: "settings", label: "Pengaturan Sistem", icon: <Settings className="w-4 h-4" /> },
      ],
    },
  ];

  const sidebarCode = `<aside className={\`bg-[#12303C] text-white flex flex-col transition-all duration-300 \${
  isCollapsed ? "w-20" : "w-64"
}\`}>
  {/* Header Brand */}
  {/* Grouped Admin Menus */}
  {/* Bottom User Profile & Logout */}
</aside>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Workspace Navigation
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Sidebar System (Admin & Documentation)
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Sistem sidebar untuk dashboard administrasi K4Family dan panel dokumentasi. Mendukung mode Expanded (260px) dan Collapsed (76px) dengan integrasi profil user dan badge notifikasi.
        </p>
      </div>

      <ComponentPreview
        title="Admin Dashboard Sidebar Preview (DEMO)"
        description="Sidebar manajemen K4Book, RANI, Tiket Bantuan, dan Direktori Brand. Uji collapse/expand untuk melihat adaptasi layout."
        code={sidebarCode}
        controls={
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              leftIcon={isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            >
              {isCollapsed ? "Expand Sidebar (260px)" : "Collapse Sidebar (76px)"}
            </Button>
            <span className="text-xs text-[#12303C]/60 font-mono">
              Status: {isCollapsed ? "Collapsed (76px)" : "Expanded (260px)"}
            </span>
          </div>
        }
      >
        <div className="w-full flex justify-center py-4 bg-[#F4F6F5] rounded-xl p-4">
          <aside
            className={`bg-[#12303C] text-white rounded-2xl shadow-xl flex flex-col transition-all duration-300 overflow-hidden ${
              isCollapsed ? "w-20" : "w-64"
            } h-[580px]`}
          >
            {/* Top Brand Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              {!isCollapsed ? (
                <div className="flex flex-col">
                  <span className="font-mono font-bold text-[10px] tracking-wider text-[#EBCC3D]">
                    {OFFICIAL_LOGO_PLACEHOLDER}
                  </span>
                  <span className="text-[11px] text-white/60">Admin Console</span>
                </div>
              ) : (
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono font-bold text-[10px] text-[#EBCC3D] mx-auto">
                  K4
                </div>
              )}
            </div>

            {/* Scrollable Nav Items */}
            <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
              {adminMenuGroups.map((grp) => (
                <div key={grp.group} className="space-y-1">
                  {!isCollapsed && (
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider px-2 block">
                      {grp.group}
                    </span>
                  )}
                  {grp.items.map((item) => {
                    const isActive = activeAdminRoute === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveAdminRoute(item.id)}
                        className={`w-full flex items-center ${
                          isCollapsed ? "justify-center p-2.5" : "justify-between px-3 py-2"
                        } rounded-xl font-medium transition-colors cursor-pointer ${
                          isActive
                            ? "bg-[#087FA0] text-white shadow-xs font-semibold"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                        title={isCollapsed ? item.label : undefined}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={isActive ? "text-white" : "text-white/60"}>
                            {item.icon}
                          </span>
                          {!isCollapsed && <span>{item.label}</span>}
                        </div>
                        {!isCollapsed && item.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/15 text-[#EBCC3D] font-mono">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* User Profile & Logout Bottom */}
            <div className="p-3 border-t border-white/10 bg-black/10 flex items-center justify-between">
              {!isCollapsed ? (
                <>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EBCC3D] text-[#12303C] flex items-center justify-center font-bold text-xs">
                      AD
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold leading-tight">Admin K4</span>
                      <span className="text-[10px] text-white/50">ops@k4family.id</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="p-1.5 rounded-lg text-white/60 hover:text-red-400 hover:bg-white/5 transition-colors cursor-pointer"
                    title="Keluar"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <div className="w-7 h-7 rounded-full bg-[#EBCC3D] text-[#12303C] flex items-center justify-center font-bold text-xs mx-auto">
                  AD
                </div>
              )}
            </div>
          </aside>
        </div>
      </ComponentPreview>
    </div>
  );
};
