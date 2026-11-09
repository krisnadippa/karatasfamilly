"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/k4book/layout/sidebar";
import { Header } from "@/components/k4book/layout/header";
import { ExploreHeader } from "./explore-header";
import { CategoryFilterBar } from "./category-filter-bar";
import { PopularSection } from "./popular-section";
import { NewReleasesSection } from "./new-releases-section";
import { CuratedCollectionsSection } from "./curated-collections-section";
import {
  ExploreBook,
  NewReleaseBook,
  CuratedBoxSet,
  ReadingClubSpotlight,
  UserProfile,
} from "@/types/k4book";
import { sanitizeInput } from "@/lib/security";

interface ExploreViewProps {
  user: UserProfile;
  popularBooks: ExploreBook[];
  newReleases: NewReleaseBook[];
  boxSets: CuratedBoxSet[];
  spotlight: ReadingClubSpotlight;
}

export function ExploreView({
  user,
  popularBooks,
  newReleases,
  boxSets,
  spotlight,
}: ExploreViewProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter popular books based on category and search query
  const filteredPopularBooks = useMemo(() => {
    let result = [...popularBooks];

    // Filter by genre category
    if (activeCategory !== "all") {
      result = result.filter((b) => b.genreCategory === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.genre.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "length") {
      result.sort((a, b) => a.pages - b.pages);
    } else if (sortBy === "newest") {
      result.reverse();
    }

    return result;
  }, [popularBooks, activeCategory, searchQuery, sortBy]);

  // Filter new releases based on search
  const filteredNewReleases = useMemo(() => {
    if (!searchQuery) return newReleases;
    const q = searchQuery.toLowerCase();
    return newReleases.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
    );
  }, [newReleases, searchQuery]);

  // Navigate to book detail page
  const handleSelectBook = () => {
    router.push("/k4book/book/half-blood-prince");
  };

  const handleSelectRelease = () => {
    router.push("/k4book/book/half-blood-prince");
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setSortBy("popular");
  };

  return (
    <div className="min-h-screen flex flex-row bg-[#fbf9f6] text-slate-800 antialiased selection:bg-[#a6332a] selection:text-white">
      {/* Left Navigation Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-y-auto custom-scrollbar min-w-0">
        {/* Top Header with Search & Profile */}
        <Header
          user={user}
          onSearch={(q) => setSearchQuery(sanitizeInput(q))}
        />

        {/* Explore Content Body */}
        <div className="px-8 sm:px-12 py-8 max-w-7xl mx-auto w-full space-y-10 pb-16">
          {/* Top Editorial Header & Discovery Controls */}
          <ExploreHeader
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          {/* Bubble Category Filter Bar */}
          <CategoryFilterBar
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            onResetFilters={handleResetFilters}
          />

          {/* Section 1: Popular Now */}
          <PopularSection
            books={filteredPopularBooks}
            viewMode={viewMode}
            onSelectBook={handleSelectBook}
          />

          {filteredPopularBooks.length === 0 && (
            <div className="p-8 text-center text-sm text-slate-500 bg-white border border-[#eae6dd] rounded-xl shadow-sm">
              <p className="font-semibold text-slate-800">
                No books found in this category
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Try resetting your filters or searching for another title.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-3 px-4 py-1.5 rounded-full bg-[#a6332a] text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Section 2: New Releases & Fresh Arrivals */}
          <NewReleasesSection
            releases={filteredNewReleases}
            onSelectRelease={handleSelectRelease}
          />

          {/* Section 3: Curated Collections & Series */}
          <CuratedCollectionsSection
            boxSets={boxSets}
            spotlight={spotlight}
            onSelectBoxSet={() => router.push("/k4book/book/half-blood-prince")}
            onJoinClub={() =>
              alert("You have joined The Wizarding Legacy reading circle!")
            }
          />
        </div>
      </main>
    </div>
  );
}
