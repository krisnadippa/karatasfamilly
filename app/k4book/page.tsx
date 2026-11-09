import type { Metadata } from "next";
import { DashboardView } from "@/components/k4book/dashboard/dashboard-view";
import {
  currentUser,
  featuredBook,
  popularBooks,
  seriesCollection,
  scheduleDays,
  recentlyReadBooks,
  readerFriends,
} from "@/data/k4book";

export const metadata: Metadata = {
  title: "K4Book Dashboard - Reading Sanctuary",
  description:
    "Your personalized reading sanctuary, popular books catalog, and active reading schedule.",
};

export default function K4BookDashboardPage() {
  return (
    <DashboardView
      user={currentUser}
      initialFeaturedBook={featuredBook}
      initialPopularBooks={popularBooks}
      seriesCollection={seriesCollection}
      scheduleDays={scheduleDays}
      initialRecentlyReadBooks={recentlyReadBooks}
      readerFriends={readerFriends}
    />
  );
}
