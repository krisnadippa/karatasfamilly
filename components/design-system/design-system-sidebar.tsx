"use client";

import React from "react";
import {
  Palette,
  SquareCheckBig,
  Layers,
  Component,
  FormInput,
  ToggleLeft,
  BellRing,
  Navigation,
  ExternalLink,
  Table as TableIcon,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  count?: number;
}

export const navSections: NavSection[] = [
  { id: "foundations", title: "Foundations & Tokens", icon: <Palette className="w-4 h-4" />, count: 6 },
  { id: "buttons", title: "Buttons", icon: <Component className="w-4 h-4" />, count: 7 },
  { id: "forms", title: "Form Controls", icon: <FormInput className="w-4 h-4" />, count: 3 },
  { id: "selection", title: "Selection & Toggles", icon: <ToggleLeft className="w-4 h-4" />, count: 4 },
  { id: "data-display", title: "Data Display", icon: <Layers className="w-4 h-4" />, count: 5 },
  { id: "feedback", title: "Feedback & Loading", icon: <BellRing className="w-4 h-4" />, count: 4 },
  { id: "navigation", title: "Navigation", icon: <Navigation className="w-4 h-4" />, count: 3 },
  { id: "overlays", title: "Overlays & Tooltips", icon: <SquareCheckBig className="w-4 h-4" />, count: 2 },
  { id: "tables", title: "Data Tables", icon: <TableIcon className="w-4 h-4" />, count: 1 },
  { id: "layouts", title: "Layouts & Bounds", icon: <LayoutGrid className="w-4 h-4" />, count: 4 },
  { id: "advanced", title: "Advanced Patterns", icon: <Sparkles className="w-4 h-4" />, count: 2 },
];

export interface DesignSystemSidebarProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export const DesignSystemSidebar: React.FC<DesignSystemSidebarProps> = ({
  activeSection,
  onSelectSection,
  isOpenMobile = false,
  onCloseMobile,
}) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar aside */}
      <aside
        className={cn(
          "fixed top-16 bottom-0 left-0 z-40 w-64 bg-white border-r border-[#EAE5DC] flex flex-col p-4 transition-transform duration-200 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:translate-x-0 overflow-y-auto",
          isOpenMobile ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="pb-3 mb-2 border-b border-[#EAE5DC]">
          <span className="text-[11px] font-bold text-[#12303C]/50 uppercase tracking-wider">
            Components & Modules
          </span>
        </div>

        <nav className="flex flex-col gap-1">
          {navSections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => {
                  onSelectSection(sec.id);
                  onCloseMobile?.();
                }}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors text-left cursor-pointer",
                  isActive
                    ? "bg-[#12303C] text-white shadow-xs font-semibold"
                    : "text-[#12303C]/75 hover:bg-[#FAF8F5] hover:text-[#12303C]"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span className={cn(isActive ? "text-[#EBCC3D]" : "text-[#12303C]/60")}>
                    {sec.icon}
                  </span>
                  <span>{sec.title}</span>
                </div>
                {sec.count !== undefined && (
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-full font-mono",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#12303C]/8 text-[#12303C]/60"
                    )}
                  >
                    {sec.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-4 border-t border-[#EAE5DC]">
          <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE5DC]">
            <span className="text-[10px] font-bold text-[#12303C] uppercase tracking-wider block">
              Corporate Palette
            </span>
            <p className="text-[11px] text-[#12303C]/70 mt-1">
              Midnight Blue, Forest Green, Ocean Teal, Goldenrod, Cream.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
