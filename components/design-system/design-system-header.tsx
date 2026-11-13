"use client";

import React from "react";
import Link from "next/link";
import { Search, Compass, BookOpen, ExternalLink, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
              className="lg:hidden p-2 rounded-lg text-[#12303C]/70 hover:text-[#12303C] hover:bg-[#FAF8F5] transition-colors"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#12303C] text-white flex items-center justify-center font-bold text-sm tracking-widest group-hover:bg-[#087FA0] transition-colors">
              KF
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#12303C] tracking-tight leading-tight">
                KARATAS FAMILY
              </span>
              <span className="text-[10px] text-[#087FA0] font-semibold tracking-wider uppercase">
                Design System & Component Playground
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
              placeholder="Search components, foundations, tokens..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-9 pl-9 pr-4 text-xs rounded-full bg-[#FAF8F5] text-[#12303C] placeholder:text-[#12303C]/40 border border-[#EAE5DC] focus:outline-none focus:border-[#087FA0] focus:bg-white transition-all duration-200"
            />
          </div>
        </div>

        {/* Right: Badges & Links */}
        <div className="flex items-center gap-3">
          <Badge variant="teal" size="sm" dot>
            Next.js App Router
          </Badge>
          <Button
            href="/"
            variant="outline"
            size="sm"
            leftIcon={<Compass className="w-3.5 h-3.5" />}
          >
            Landing Page
          </Button>
        </div>
      </div>
    </header>
  );
};
