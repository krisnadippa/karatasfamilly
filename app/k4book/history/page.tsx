import { Metadata } from "next";
import { HistoryView } from "@/components/k4book/history/history-view";
import {
  initialReadingStats,
  readingHistorySessions,
  currentUser,
} from "@/data/k4book";

export const metadata: Metadata = {
  title: "Reading Timer & History - K4Book",
  description:
    "Track your daily reading momentum, cultivate deep focus sessions, and review your literary journey over time.",
};

export default function K4BookHistoryPage() {
  return (
    <HistoryView
      user={currentUser}
      stats={initialReadingStats}
      sessions={readingHistorySessions}
    />
  );
}

