"use client";

import React from "react";
import Link from "next/link";
import { Home, BookMarked, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BottomNavigationProps {
  activeTab?: "beranda" | "buku-saya" | "cari" | "akun";
  onTabChange?: (tab: string) => void;
  className?: string;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab = "beranda",
  onTabChange,
  className,
}) => {
  const tabs = [
    { id: "beranda", label: "Beranda", icon: <Home className="w-5 h-5" />, href: "/" },
    { id: "buku-saya", label: "Buku Saya", icon: <BookMarked className="w-5 h-5" />, href: "/k4book" },
    { id: "cari", label: "Cari", icon: <Search className="w-5 h-5" />, href: "/k4book/explore" },
    { id: "akun", label: "Akun", icon: <User className="w-5 h-5" />, href: "/k4book" },
  ];

  return (
    <nav
      aria-label="Library Mobile Navigation"
      className={cn(
        "w-full bg-white/95 backdrop-blur-md border-t border-[#EAE5DC] px-2 py-1 shadow-lg flex items-center justify-around fixed bottom-0 left-0 right-0 z-40 lg:hidden",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <Link
            key={tab.id}
            href={tab.href}
            onClick={() => onTabChange?.(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center min-w-[64px] min-h-[48px] px-2 rounded-xl text-[11px] font-medium transition-all select-none cursor-pointer",
              isActive
                ? "text-[#087FA0] font-bold"
                : "text-[#12303C]/60 hover:text-[#12303C]"
            )}
          >
            <div className="relative flex items-center justify-center">
              {tab.icon}
              {isActive && (
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#EBCC3D]" />
              )}
            </div>
            <span className="mt-1 leading-none">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
