"use client";

import { Sidebar } from "@/components/k4book/layout/sidebar";
import { Header } from "@/components/k4book/layout/header";
import { ReadingTimerCard } from "./reading-timer-card";
import { StatsOverview } from "./stats-overview";
import { SessionLogTimeline } from "./session-log-timeline";
import { ReadingStatSummary, ReadingSession, UserProfile } from "@/types/k4book";

interface HistoryViewProps {
  user: UserProfile;
  stats: ReadingStatSummary;
  sessions: ReadingSession[];
}

export function HistoryView({ user, stats, sessions }: HistoryViewProps) {
  return (
    <div className="min-h-screen flex flex-row bg-[#fbf9f6] text-slate-800 antialiased selection:bg-[#a6332a] selection:text-white">
      {/* Left Navigation Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-y-auto custom-scrollbar min-w-0">
        {/* Top Header */}
        <Header user={user} />

        {/* Content Container */}
        <div className="px-6 sm:px-12 py-8 max-w-6xl mx-auto w-full space-y-8 pb-16">
          {/* Header Title */}
          <div className="space-y-1">
            <span className="text-xs font-semibold text-[#a6332a] uppercase tracking-wider">
              Reading Analytics &amp; Habits
            </span>
            <h1 className="text-3xl font-bold font-serif-heading text-slate-900 tracking-tight">
              Timer &amp; Reading History
            </h1>
            <p className="text-xs text-slate-500 max-w-lg">
              Track your daily reading momentum, cultivate deep focus sessions,
              and review your literary journey over time.
            </p>
          </div>

          {/* Reading Focus Stopwatch / Timer */}
          <ReadingTimerCard />

          {/* Habit Statistics & Weekly Chart */}
          <StatsOverview stats={stats} />

          {/* Reading Sessions Timeline */}
          <SessionLogTimeline sessions={sessions} />
        </div>
      </main>
    </div>
  );
}
