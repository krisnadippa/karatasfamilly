"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const isHome = pathname === "/k4book";
  const isExplore =
    pathname.startsWith("/k4book/explore") || pathname.startsWith("/explore");
  const isHistory =
    pathname.startsWith("/k4book/history") || pathname.startsWith("/history");
  const isBook =
    pathname.startsWith("/k4book/book") || pathname.startsWith("/book");

  return (
    <aside
      className="w-20 flex-shrink-0 h-screen sticky top-0 border-r border-[#eae5dc] flex flex-col items-center justify-between py-7 bg-[#f9f7f2] z-20"
      aria-label="Sidebar Navigation"
    >
      <div className="flex flex-col items-center gap-10 w-full">
        {/* Brand Logo */}
        <Link
          href="/k4book"
          aria-label="K4Book Dashboard"
          className="text-slate-800 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#e26b67] rounded-lg p-1"
        >
          <svg
            className="w-8 h-8 text-[#a6332a]"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            viewBox="0 0 36 36"
            aria-hidden="true"
          >
            <path d="M11 25c-3-2-4.5-5.5-4-8.5.5-3 2.5-4.5 4-3 1.5 1.5 2 4.5 2 7.5" />
            <path d="M15 15c0-4.5 1.5-7 3.5-7s2.5 3 2.5 7.5" />
            <path d="M21 16.5c.5-3.5 2-5.5 3.5-5.5s2 2.5 1.5 6.5" />
            <path d="M26 18c1-2 2.5-3 3.5-2.5s1 2.5-.5 5.5-4 5.5-7.5 7.5-8.5 1.5-12.5-1c-2-1.3-3.5-3-3-5" />
          </svg>
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center space-y-4 w-full px-2">
          {/* 1. Home Tab */}
          <Link
            href="/k4book"
            aria-label="Home Dashboard"
            aria-current={isHome ? "page" : undefined}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#e26b67] ${
              isHome
                ? "bg-[#e26b67] text-white shadow-md shadow-[#e26b67]/25 scale-105"
                : "text-slate-700 hover:text-slate-900 hover:bg-[#eae4d8]/50"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* 2. Explore / Catalog Tab */}
          <Link
            href="/k4book/explore"
            aria-label="Explore & Discover Books"
            aria-current={isExplore ? "page" : undefined}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#e26b67] ${
              isExplore
                ? "bg-[#e26b67] text-white shadow-md shadow-[#e26b67]/25 scale-105"
                : "text-slate-700 hover:text-slate-900 hover:bg-[#eae4d8]/50"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* 3. Book Details Link */}
          <Link
            href="/k4book/book/half-blood-prince"
            aria-label="Book Details"
            aria-current={isBook ? "page" : undefined}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#e26b67] ${
              isBook
                ? "bg-[#e26b67] text-white shadow-md shadow-[#e26b67]/25 scale-105"
                : "text-slate-700 hover:text-slate-900 hover:bg-[#eae4d8]/50"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* 4. Reading Timer & History Tab */}
          <Link
            href="/k4book/history"
            aria-label="Reading Timer & History"
            aria-current={isHistory ? "page" : undefined}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#e26b67] ${
              isHistory
                ? "bg-[#e26b67] text-white shadow-md shadow-[#e26b67]/25 scale-105"
                : "text-slate-700 hover:text-slate-900 hover:bg-[#eae4d8]/50"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* 5. Bookmarks */}
          <button
            type="button"
            aria-label="Bookmarks"
            className="w-12 h-12 rounded-2xl text-slate-700 hover:text-slate-900 hover:bg-[#eae4d8]/50 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#e26b67]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* 6. Settings */}
          <button
            type="button"
            aria-label="Settings"
            className="w-12 h-12 rounded-2xl text-slate-700 hover:text-slate-900 hover:bg-[#eae4d8]/50 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#e26b67]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Bottom Filter/Sort Button */}
      <button
        type="button"
        aria-label="Filter or sort options"
        className="w-10 h-10 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-[#eae4d8]/50 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#e26b67]"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M4 6h16M4 12h10M4 18h6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </aside>
  );
}
