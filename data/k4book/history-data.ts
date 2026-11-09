import { ReadingSession, ReadingStatSummary } from "@/types/k4book";

export const initialReadingStats: ReadingStatSummary = {
  todayMinutes: 38,
  dailyGoalMinutes: 45,
  currentStreakDays: 14,
  longestStreakDays: 28,
  averageReadingPaceWpm: 260,
  booksCompletedThisYear: 18,
  yearlyTargetBooks: 25,
  weeklyActivity: [
    { dayName: "Mon", date: "Nov 3", minutes: 40, goalMet: false },
    { dayName: "Tue", date: "Nov 4", minutes: 65, goalMet: true },
    { dayName: "Wed", date: "Nov 5", minutes: 35, goalMet: false },
    { dayName: "Thu", date: "Nov 6", minutes: 55, goalMet: true },
    { dayName: "Fri", date: "Nov 7", minutes: 45, goalMet: true },
    { dayName: "Sat", date: "Nov 8", minutes: 60, goalMet: true },
    { dayName: "Sun", date: "Nov 9", minutes: 38, goalMet: false },
  ],
};

export const readingHistorySessions: ReadingSession[] = [
  {
    id: "sess-1",
    bookId: "notw",
    bookTitle: "The Name of the Wind",
    author: "Patrick Rothfuss",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmqUPuQT3oDPxR1XZ_whi3hBuCZVD_RGNJp-mngxciP6jS0UGXih0oIXG6A1GlbkU2-tlZczFqO6GQMywBdaX72n-wlsDLTnLSSbSQ5xeR_b96uwc64GOTsLWDTxKNniozuBdeCp-bn-Dv_AdKN965K4jRNoLxGApzwD1jW9CHdhrv9mSQPZFo8NWymwaDBD-4CJopGqDE6LVG5nyOuXbMbVnrU4cKUbg9a413kgFM",
    durationMinutes: 38,
    pagesRead: 24,
    date: "Today, 09:15 PM",
    notes:
      "Finished Chapter 16. The description of Kvothe discovering the Sympathy lamps was brilliantly immersive.",
  },
  {
    id: "sess-2",
    bookId: "dune",
    bookTitle: "Dune",
    author: "Frank Herbert",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPaK_F51CsgZLGv56agbpJywTQELVTty0w9tZB9iSciRnvHeTxa5MpSOeB5gB5FTR2lfLjajhsi2OFVem2VHDR-opKFyXCtOwM8ARp9QMWbQj72zE_5wPJM03aKwmQGFdXXchzXsSPKYPclPsas2GmH8wUjCHjGXLXhqXMndaeCAnHj-xZ3N7L-tsqs6T5R_7SY5R9nyj-To_YGGd4plf1p6OT1NDUMVK-Vup3ypEq",
    durationMinutes: 60,
    pagesRead: 42,
    date: "Yesterday, 08:30 PM",
    notes:
      "The Gom Jabbar trial scene remains one of the most intense psychological introductions in sci-fi literature.",
  },
  {
    id: "sess-3",
    bookId: "babel",
    bookTitle: "Babel: An Arcane History",
    author: "R.F. Kuang",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACqtXaeTtPcYMR0xsOGrmN1c9AMhIpWjulSln8WFU7NM81HTQLmO3pzY0O07MUDNLhjDrVQGE_XTwyKEqpdhpI6a_CvE-Fo6MQVtxyI7Bg5dkWMNSVPRu5B_K1gSdCP0Kng_ftdX3nWhHYXxh95Uu8vBm37wPjOSFLNl97HazO47GPDPNA6DE18KUl4x-KHHs-UxJ0lkDR0j90nNqkgoEkUgnua_qNU5hsl9fhGPe2",
    durationMinutes: 45,
    pagesRead: 28,
    date: "2 days ago, 02:00 PM",
    notes:
      "Fascinating linguistic analysis of translation loss and etymology in colonial power structures.",
  },
  {
    id: "sess-4",
    bookId: "norwegian",
    bookTitle: "Norwegian Wood",
    author: "Haruki Murakami",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj_yN0HTCRTmRGo5ojfaebLNwoDctUrqHpLYGcVIcCtSw017PmepFX_jKdPAW-GegZ-I-1QzvT1ZJwQGH1rDIhV48WZ0fZWCinUtdI7NUMBxI1eyNBWrHhjo4N6MbsCJSkurRL-hPcOI-dh6yo4Sf0lrGTu1cRfDsBHTI85ymWadHZN_E9XfYARHtL1_7fabC0gQix5R0hb0uYz6Kmpjqp9pKePmvjpljKJaGRrthE",
    durationMinutes: 55,
    pagesRead: 35,
    date: "3 days ago, 10:40 PM",
    notes:
      "Completed the book. Tender, nostalgic, and melancholic reflections on memory and youth in 1960s Tokyo.",
  },
];

