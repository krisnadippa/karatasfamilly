"use client";

import React from "react";
import Link from "next/link";
import { Search, Compass, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OFFICIAL_LOGO_PLACEHOLDER } from "@/lib/design-system/tokens";

export interface DesignSystemHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onToggleSidebar?: () => void;
}

export const DesignSystemHeader: React.FC<DesignSystemHeaderProps> = ({
  searchQuery,
  onSearchChange,
  onToggleSidebar,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Mobile hamburger & Logo */}
        <div className="flex items-center gap-3">
          {onToggleSidebar && (
            <button
              type="button"
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-lg text-[#12303C]/70 hover:text-[#12303C] hover:bg-[#FBF8F0] transition-colors cursor-pointer"
              aria-label="Buka menu navigasi"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-8 px-2.5 rounded-md bg-[#12303C] text-white flex items-center font-mono font-bold text-[10px] tracking-wider group-hover:bg-[#087FA0] transition-colors">
              {OFFICIAL_LOGO_PLACEHOLDER}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#12303C] tracking-tight leading-tight">
                K4FAMILY DESIGN SYSTEM
              </span>
              <span className="text-[10px] text-[#087FA0] font-semibold tracking-wider uppercase font-mono">
                Version V1.0 • Developer Brief V04
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Search component */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-[#12303C]/40 pointer-events-none" />
            <input
              type="search"
              placeholder="Cari komponen, warna, icon, atau brand..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-9 pl-9 pr-4 text-xs rounded-full bg-[#FBF8F0] text-[#12303C] placeholder:text-[#12303C]/40 border border-[#EAE5DC] focus:outline-none focus:border-[#087FA0] focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        {/* Right: Badges & Links */}
        <div className="flex items-center gap-3">
          <Badge variant="forest" size="sm" dot>
            Phase 1 Active
          </Badge>
          <Button
            href="/"
            variant="outline"
            size="sm"
            leftIcon={<Compass className="w-3.5 h-3.5" />}
          >
            Beranda
          </Button>
        </div>
      </div>
    </header>
  );
};
