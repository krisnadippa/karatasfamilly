"use client";

interface ExploreHeaderProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export function ExploreHeader({
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}: ExploreHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      {/* Title & Curated Badge */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdad2] text-[#3c0700] text-xs font-semibold">
            <svg
              className="w-4 h-4 text-[#a6332a]"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 1H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm-1 16H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12v14z" />
            </svg>
            Curated Library
          </span>
          <span className="text-xs text-slate-500 font-medium">
            12,480+ Handcrafted Editions
          </span>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold font-serif-heading text-slate-900 tracking-tight">
          Explore &amp; Discover Books
        </h1>
        <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
          Immerse yourself in handpicked literary treasures, sweeping epics,
          and new voices crafted for slow, contemplative reading.
        </p>
      </div>

      {/* Action Controls: Sort Dropdown & Grid/List View Toggle */}
      <div className="flex items-center gap-3 self-start md:self-end">
        {/* Sort Select */}
        <div className="relative inline-flex items-center bg-white rounded-full shadow-sm px-4 py-2 border border-[#eae6dd]">
          <span className="text-xs text-slate-400 font-medium mr-2">
            Sort by
          </span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none bg-transparent text-xs font-semibold text-slate-800 pr-6 py-0 border-none focus:outline-none focus:ring-0 cursor-pointer"
            aria-label="Sort books by"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Top Rated (4.8+)</option>
            <option value="newest">Latest Additions</option>
            <option value="length">Reading Pace</option>
          </select>
          <svg
            className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M19 9l-7 7-7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* View Toggle */}
        <div className="flex items-center p-1 bg-[#efeeeb] rounded-full border border-[#eae6dd]">
          <button
            type="button"
            onClick={() => onViewModeChange("grid")}
            aria-label="Grid layout"
            className={`p-1.5 rounded-full transition-all ${
              viewMode === "grid"
                ? "bg-white text-[#a6332a] shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange("list")}
            aria-label="List layout"
            className={`p-1.5 rounded-full transition-all ${
              viewMode === "list"
                ? "bg-white text-[#a6332a] shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="8" y1="6" x2="21" y2="6" strokeLinecap="round" />
              <line x1="8" y1="12" x2="21" y2="12" strokeLinecap="round" />
              <line x1="8" y1="18" x2="21" y2="18" strokeLinecap="round" />
              <line x1="3" y1="6" x2="3.01" y2="6" strokeLinecap="round" />
              <line x1="3" y1="12" x2="3.01" y2="12" strokeLinecap="round" />
              <line x1="3" y1="18" x2="3.01" y2="18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

