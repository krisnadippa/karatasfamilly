"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/k4book/layout/sidebar";
import { Header } from "@/components/k4book/layout/header";
import { HeroReading } from "./hero-reading";
import { PopularBooks } from "./popular-books";
import { SeriesCollection } from "./series-collection";
import { ScheduleReading } from "./schedule-reading";
import { RecentlyRead } from "./recently-read";
import { ReaderFriends } from "./reader-friends";
import {
  UserProfile,
  FeaturedBook,
  PopularBook,
  SeriesCollectionItem,
  ScheduleDay,
  RecentlyReadBook,
  ReaderFriend,
} from "@/types/k4book";
import { sanitizeInput } from "@/lib/security";

interface DashboardViewProps {
  user: UserProfile;
  initialFeaturedBook: FeaturedBook;
  initialPopularBooks: PopularBook[];
  seriesCollection: SeriesCollectionItem;
  scheduleDays: ScheduleDay[];
  initialRecentlyReadBooks: RecentlyReadBook[];
  readerFriends: ReaderFriend[];
}

export function DashboardView({
  user,
  initialFeaturedBook,
  initialPopularBooks,
  seriesCollection,
  scheduleDays,
  initialRecentlyReadBooks,
  readerFriends,
}: DashboardViewProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // Handle sanitized search query
  const handleSearch = (query: string) => {
    setSearchQuery(sanitizeInput(query));
  };

  // Filter books based on search query
  const filteredPopularBooks = useMemo(() => {
    if (!searchQuery) return initialPopularBooks;
    const lower = searchQuery.toLowerCase();
    return initialPopularBooks.filter(
      (b) =>
        b.title.toLowerCase().includes(lower) ||
        b.author.toLowerCase().includes(lower)
    );
  }, [initialPopularBooks, searchQuery]);

  const filteredRecentlyRead = useMemo(() => {
    if (!searchQuery) return initialRecentlyReadBooks;
    const lower = searchQuery.toLowerCase();
    return initialRecentlyReadBooks.filter(
      (b) =>
        b.title.toLowerCase().includes(lower) ||
        b.author.toLowerCase().includes(lower)
    );
  }, [initialRecentlyReadBooks, searchQuery]);

  // Navigate to book details page
  const handleSelectPopularBook = () => {
    router.push("/k4book/book/half-blood-prince");
  };

  const handleSelectRecentBook = () => {
    router.push("/k4book/book/half-blood-prince");
  };

  return (
    <div className="min-h-screen flex flex-row bg-[#f9f7f2] text-slate-800 antialiased selection:bg-[#e26b67] selection:text-white">
      {/* Left Navigation Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto custom-scrollbar min-w-0">
        {/* Top Header with Search & Profile */}
        <Header user={user} onSearch={handleSearch} />

        {/* Dashboard 2-Column Responsive Grid */}
        <div className="px-10 pb-12 grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Hero Reading & Catalogs (8 Cols on xl) */}
          <div className="col-span-12 xl:col-span-8 flex flex-col space-y-11 min-w-0">
            <HeroReading
              book={initialFeaturedBook}
              onStartReading={() => router.push("/k4book/book/half-blood-prince")}
            />

            <PopularBooks
              books={filteredPopularBooks}
              onSelectBook={handleSelectPopularBook}
            />

            {filteredPopularBooks.length === 0 && (
              <div className="p-6 text-center text-sm text-slate-500 bg-[#fbf9f4] border border-[#eae5dc] rounded-xl">
                No popular books match &quot;{searchQuery}&quot;
              </div>
            )}

            <SeriesCollection
              collection={seriesCollection}
              onSelectSeries={() => router.push("/k4book/book/half-blood-prince")}
            />
          </div>

          {/* Right Column: Schedule Reading, Progress & Friends (4 Cols on xl) */}
          <aside
            aria-label="Reading schedule and social activity"
            className="col-span-12 xl:col-span-4 flex flex-col space-y-9 xl:pl-4 xl:border-l xl:border-[#ece7dc]"
          >
            <ScheduleReading days={scheduleDays} />
            <RecentlyRead
              books={filteredRecentlyRead}
              onSelectBook={handleSelectRecentBook}
            />
            <ReaderFriends friends={readerFriends} />
          </aside>
        </div>
      </main>
    </div>
  );
}
