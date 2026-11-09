"use client";

import { exploreCategories } from "@/data/k4book/explore-data";

interface CategoryFilterBarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onResetFilters: () => void;
}

export function CategoryFilterBar({
  activeCategory,
  onSelectCategory,
  onResetFilters,
}: CategoryFilterBarProps) {
  return (
    <div className="space-y-2.5">
      {/* Label and Reset Action */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Browse by Atmosphere &amp; Genre
        </span>
        <button
          type="button"
          onClick={onResetFilters}
          className="text-xs font-semibold text-[#a6332a] hover:underline flex items-center gap-1 focus:outline-none"
        >
          <span>Reset filters</span>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Horizontal Scrollable Category Pills */}
      <div
        className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar"
        role="tablist"
      >
        {/* All Filters Button */}
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-800 hover:bg-[#efeeeb] shadow-sm flex-shrink-0 transition-colors border border-[#eae6dd]"
        >
          <svg
            className="w-4 h-4 text-[#a6332a]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs font-semibold">All Filters</span>
          <span className="w-5 h-5 rounded-full bg-[#c74b40] text-white text-[11px] font-bold flex items-center justify-center">
            3
          </span>
        </button>

        {/* Dynamic Category Bubbles */}
        {exploreCategories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold flex-shrink-0 transition-all duration-200 border ${
                isActive
                  ? "bg-[#a6332a] text-white shadow-md border-transparent scale-[1.02]"
                  : "bg-white text-slate-700 hover:bg-[#efeeeb] shadow-sm border-[#eae6dd]"
              }`}
            >
              <span>{cat.label}</span>
              {"count" in cat && (
                <span
                  className={`text-[11px] ${
                    isActive ? "opacity-90" : "text-slate-400"
                  }`}
                >
                  ({cat.count})
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

