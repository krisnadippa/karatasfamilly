"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Search, User } from "lucide-react";
import { MobileDrawer } from "./mobile-drawer";
import { OFFICIAL_LOGO_PLACEHOLDER } from "@/lib/design-system/tokens";

export interface MobileNavbarProps {
  className?: string;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ className = "" }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header
        className={`w-full bg-[#FBF8F0] border-b border-[#EAE5DC] px-4 py-3 flex items-center justify-between gap-3 ${className}`}
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-8 px-2.5 rounded-md bg-[#12303C] text-white flex items-center font-mono font-bold text-[10px] tracking-wider">
            {OFFICIAL_LOGO_PLACEHOLDER}
          </div>
        </Link>

        {/* Right: Search, User, Hamburger */}
        <div className="flex items-center gap-1">
          <Link
            href="/k4book/explore"
            className="p-2 rounded-full text-[#12303C]/70 hover:text-[#12303C] hover:bg-black/5 transition-colors"
            aria-label="Cari Buku atau Artikel"
          >
            <Search className="w-5 h-5" />
          </Link>

          <Link
            href="/k4book"
            className="p-2 rounded-full text-[#12303C]/70 hover:text-[#12303C] hover:bg-black/5 transition-colors"
            aria-label="Akun atau Library"
          >
            <User className="w-5 h-5" />
          </Link>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-full text-[#12303C] hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Buka Menu Navigasi"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Slide-in Mobile Drawer */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

