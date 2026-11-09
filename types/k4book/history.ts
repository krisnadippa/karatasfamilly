export interface ReadingSession {
  id: string;
  bookId: string;
  bookTitle: string;
  author: string;
  coverImage: string;
  durationMinutes: number;
  pagesRead: number;
  date: string;
  notes?: string;
}

export interface ReadingStatSummary {
  todayMinutes: number;
  dailyGoalMinutes: number;
  currentStreakDays: number;
  longestStreakDays: number;
  averageReadingPaceWpm: number;
  booksCompletedThisYear: number;
  yearlyTargetBooks: number;
  weeklyActivity: {
    dayName: string;
    date: string;
    minutes: number;
    goalMet: boolean;
  }[];
}

