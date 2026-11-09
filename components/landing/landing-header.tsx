"use client";

import Link from "next/link";
import { useState } from "react";

export function LandingHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full bg-white rounded-full px-6 py-3.5 flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-neutral-100 relative">
      {/* Left: Brand Logo (Without dot) */}
      <div className="flex-1 flex items-center justify-start">
        <Link
          className="flex items-center select-none group"
          data-purpose="site-brand"
          href="/"
        >
          <span className="text-[15px] sm:text-[17px] font-[900] tracking-wider text-black uppercase">
            KARATAS FAMILY
          </span>
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <nav
        className="hidden md:flex items-center justify-center space-x-7 lg:space-x-10 text-[12px] font-bold tracking-[0.06em] text-neutral-800"
        data-purpose="desktop-navigation"
      >
        <Link
          className="hover:text-black transition-colors uppercase"
          href="#about"
        >
          ABOUT
        </Link>
        <Link
          className="hover:text-black transition-colors uppercase"
          href="#categories"
        >
          VALUES
        </Link>
        <Link
          className="hover:text-black transition-colors uppercase"
          href="#pillars"
        >
          PILLARS
        </Link>
        <Link
          className="hover:text-black transition-colors uppercase"
          href="#ecosystem"
        >
          ECOSYSTEM
        </Link>
        <Link
          className="hover:text-black transition-colors uppercase"
          href="#philosophy"
        >
          PHILOSOPHY
        </Link>
      </nav>

      {/* Right: Search Input Pill */}
      <div
        className="flex-1 flex items-center justify-end"
        data-purpose="header-utilities"
      >
        <div className="relative flex items-center bg-[#F1F1F0] rounded-full px-3.5 py-1.5 w-36 sm:w-44 focus-within:w-52 transition-all">
          <svg
            className="w-3.5 h-3.5 text-neutral-500 mr-2 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
          </svg>
          <input
            className="bg-transparent border-none p-0 text-[13px] text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-0 w-full"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
