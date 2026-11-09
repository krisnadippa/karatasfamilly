import {
  UserProfile,
  FeaturedBook,
  PopularBook,
  SeriesCollectionItem,
  ScheduleDay,
  RecentlyReadBook,
  ReaderFriend,
} from "@/types/k4book";

export const currentUser: UserProfile = {
  id: "user-1",
  name: "Alexander Mark",
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAdck_PT-ZTlseI8c8j957W2X6hC0MJtOSduP_pgBrFrEd7kT61c5DTpof4b0k9N50k7HwhQ33MDd1yAieeXxdd0y9DJ_AGSTYXj-wgaB27muNDkMFuDpaOdO2eWtL6R8mne6jZIkjBGfn_gIyYZT4iDA5t2YvUfZVyCqP43WQ9BUpQfabri60QOZYlUmhJ1S5naQ-4InTG5a3HIHX8hyir-I3pw6NSrclaE3JdzBkY",
};

export const featuredBook: FeaturedBook = {
  id: "harry-potter-cos",
  title: "The Chambers of Secrets",
  author: "J.K. Rowling",
  greetingUser: "Harvey",
  quoteOrComment:
    "Wow! you've delved deep into the wizarding world's secrets. Have Harry's parents died yet? Oops, looks like you're not there yet. Get reading now!",
  currentPage: 154,
  totalPages: 300,
  synopsis:
    "Harry as he returns to Hogwarts school of witchcraft and wizardry for his 2nd year, only to discover that..",
  excerpt: {
    chapter: "CHAPTER SIX",
    chapterNumber: "6",
    paragraphs: [
      `Harry had no idea what he was talking about. He was about to say so when Lockhart went on, "Don't know what I'd have done without you, Harry. Flying a car to Hogwarts! Well, of course, I knew straight away why you'd done it. Stood out a mile. Harry, Harry, Harry!"`,
      `It was remarkable how he could show every one of those brilliant teeth even when he wasn't talking.`,
      `"Gave you a taste for publicity, didn't it?" said Lockhart. "Gave you the bug. You got onto the front page of the paper with me and you couldn't wait to do it again."`,
    ],
    pageNumber: 154,
    illustrationUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeEu5M8mjWpe8Nz8ezPSpa57civKYDIB0SRQT2Hd7gdmr4EZio3KXv7h2qSjq1LCSNjfP4Uwbry1julNlSbxFiE2O8SVx0zRoMixaovXumti2uBLN-l_fhF0gylsS4uCb-n94V41kyc19a3JB0EKakgp45ajaqaHj2PfKvhveLUQbh3Le6WfRqShkhjbmrvxKBSZSy1CuLVW3rqD6cJZOR0RELvo4aqdPWlvQbp4Rm",
    illustrationAlt: "Magical herbology greenhouse with arches and Mandrakes",
  },
};

export const popularBooks: PopularBook[] = [
  {
    id: "world-ice-fire",
    title: "The World of Ice and Fire",
    author: "George R.R. Martin",
    volumeLabel: "The Official History",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvGuZeWhGTbukPvez-aoAKyiwTe2tNeiKbW10owyZnziNmm30fhVMWbdbLeLttCNFCCnTb5zd9O4Yr-la4zbCItXwwYivLC4UU2X6RmjjNZgJh0Da7ECjYVypVMak78nVYMcXlFJA_FPAIs9iS8AdBytUov80OO3iBKMK9SbrA4OjSfissh-A2IYDZgnCapVT8yFdtVP7AhN29HVZa3oPn8jOGv_CCdghtbgSSukOd",
    themeColor: {
      bg: "bg-[#181110]",
      gradient: "from-[#3a1715]/90 via-[#68241d]/85 to-[#1c0706]",
      border: "border-[#823932]/40",
      textColor: "text-[#e6b484]",
    },
    iconBadge: "star",
  },
  {
    id: "fantastic-beasts-2",
    title: "Fantastic Beasts",
    author: "J.K. Rowling",
    volumeLabel: "Volume II",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj_yN0HTCRTmRGo5ojfaebLNwoDctUrqHpLYGcVIcCtSw017PmepFX_jKdPAW-GegZ-I-1QzvT1ZJwQGH1rDIhV48WZ0fZWCinUtdI7NUMBxI1eyNBWrHhjo4N6MbsCJSkurRL-hPcOI-dh6yo4Sf0lrGTu1cRfDsBHTI85ymWadHZN_E9XfYARHtL1_7fabC0gQix5R0hb0uYz6Kmpjqp9pKePmvjpljKJaGRrthE",
    themeColor: {
      bg: "bg-[#091e1d]",
      gradient: "from-[#0b2123]/90 via-[#0e2c2f]/90 to-[#040f10]",
      border: "border-[#1c5559]/40",
      textColor: "text-[#d4af37]",
    },
  },
  {
    id: "game-of-thrones-3",
    title: "Game of Thrones",
    author: "George R.R. Martin",
    volumeLabel: "Volume III",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrnTBj7gkTIT9cO1lwaX8ttjOWlURZpYEY1IS_g7LgUPp_KNYrNGl_Ciup7kHFldUPX1xCgcev8vNywbVoagtILONUMqrZY-LYNxkwn1KYzaPaa0cDgkKI-b7MKWUlBmd911eGm-79HHyFtitBwzSs_qh4YVY58HdceNkh3m7uXT5kh0kryoiwvt4fTLIkGPt7SlG60iwEGXHmiQwAmqS1licUbHRCWaoC5AeUUGM2",
    themeColor: {
      bg: "bg-[#132a40]",
      gradient: "from-[#183955]/95 via-[#1b3247]/90 to-[#0c1822]",
      border: "border-[#2b5a82]/40",
      textColor: "text-[#8cbde7]",
    },
    iconBadge: "sword",
  },
  {
    id: "wise-mans-fear",
    title: "The Wise Man's Fear",
    author: "Patrick Rothfuss",
    volumeLabel: "Patrick Rothfuss",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuActuhZL26JZlYk7pHLCH20hAATgtoA1qdNJGjJcqBsvchEWsBmDs6qykkWFuguWEogpTTRTosBQ2NrWtokatCYUJcXgJJfrAfXizkkq1J4RY4ErpUpH1TJKJMHqpsGe7KVUwrOUICnCqNBze50Z5vC0XV9jwYvX5cWMzLRiv3d5KwiMD2sqnsYakLPR219zTItXdqFQhNxTemjhyUSWaYSxek_aw2kw37wgyq2jAU9",
    themeColor: {
      bg: "bg-[#1f3724]",
      gradient: "from-[#213f28]/70 via-transparent to-[#101e13]/90",
      border: "border-[#457c52]/30",
      textColor: "text-[#ddf2df]",
    },
  },
];

export const seriesCollection: SeriesCollectionItem = {
  id: "legend-ice-fire",
  title: "A Legend of Ice and Fire: The Ice Horse",
  subtitle: "8 chapters each vol",
  volumeCountText: "2 vol",
  volumes: [
    {
      volumeLabel: "VOL I",
      symbol: "❄️",
      bgColor: "bg-[#1e3445]",
      borderColor: "border-[#395e7c]",
      barColor: "bg-[#4f7f9e]",
      textColor: "text-[#b8d6ed]",
      rotationClass: "-rotate-3",
    },
    {
      volumeLabel: "VOL II",
      symbol: "🐴",
      bgColor: "bg-[#e8bc68]",
      borderColor: "border-[#f7da99]",
      barColor: "bg-[#ad853b]",
      textColor: "text-[#6d4d12]",
      rotationClass: "rotate-2",
    },
  ],
};

export const scheduleDays: ScheduleDay[] = [
  { id: "day-1", dayName: "Sun", dateNumber: 11, isToday: true },
  { id: "day-2", dayName: "Mon", dateNumber: 12 },
  { id: "day-3", dayName: "Tue", dateNumber: 13 },
  { id: "day-4", dayName: "Wed", dateNumber: 14 },
  { id: "day-5", dayName: "Thu", dateNumber: 15 },
  { id: "day-6", dayName: "Fri", dateNumber: 16 },
  { id: "day-7", dayName: "Sat", dateNumber: 17 },
];

export const recentlyReadBooks: RecentlyReadBook[] = [
  {
    id: "recent-1",
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    timeAgo: "2 hrs ago",
    currentPage: 554,
    totalPages: 662,
    percentage: 84,
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuActuhZL26JZlYk7pHLCH20hAATgtoA1qdNJGjJcqBsvchEWsBmDs6qykkWFuguWEogpTTRTosBQ2NrWtokatCYUJcXgJJfrAfXizkkq1J4RY4ErpUpH1TJKJMHqpsGe7KVUwrOUICnCqNBze50Z5vC0XV9jwYvX5cWMzLRiv3d5KwiMD2sqnsYakLPR219zTItXdqFQhNxTemjhyUSWaYSxek_aw2kw37wgyq2jAU9",
    bgClass: "bg-[#1f3724]",
    borderClass: "border-[#457c52]/30",
  },
  {
    id: "recent-2",
    title: "Dune",
    author: "Frank Herbert",
    timeAgo: "Yesterday",
    currentPage: 256,
    totalPages: 412,
    percentage: 62,
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvGuZeWhGTbukPvez-aoAKyiwTe2tNeiKbW10owyZnziNmm30fhVMWbdbLeLttCNFCCnTb5zd9O4Yr-la4zbCItXwwYivLC4UU2X6RmjjNZgJh0Da7ECjYVypVMak78nVYMcXlFJA_FPAIs9iS8AdBytUov80OO3iBKMK9SbrA4OjSfissh-A2IYDZgnCapVT8yFdtVP7AhN29HVZa3oPn8jOGv_CCdghtbgSSukOd",
    bgClass: "bg-[#181110]",
    borderClass: "border-[#823932]/40",
  },
  {
    id: "recent-3",
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    timeAgo: "3 days ago",
    currentPage: 380,
    totalPages: 380,
    percentage: 100,
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCj_yN0HTCRTmRGo5ojfaebLNwoDctUrqHpLYGcVIcCtSw017PmepFX_jKdPAW-GegZ-I-1QzvT1ZJwQGH1rDIhV48WZ0fZWCinUtdI7NUMBxI1eyNBWrHhjo4N6MbsCJSkurRL-hPcOI-dh6yo4Sf0lrGTu1cRfDsBHTI85ymWadHZN_E9XfYARHtL1_7fabC0gQix5R0hb0uYz6Kmpjqp9pKePmvjpljKJaGRrthE",
    bgClass: "bg-[#091e1d]",
    borderClass: "border-[#1c5559]/40",
    isFinished: true,
  },
];

export const readerFriends: ReaderFriend[] = [
  {
    id: "friend-1",
    name: "Roberto Jordan",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdck_PT-ZTlseI8c8j957W2X6hC0MJtOSduP_pgBrFrEd7kT61c5DTpof4b0k9N50k7HwhQ33MDd1yAieeXxdd0y9DJ_AGSTYXj-wgaB27muNDkMFuDpaOdO2eWtL6R8mne6jZIkjBGfn_gIyYZT4iDA5t2YvUfZVyCqP43WQ9BUpQfabri60QOZYlUmhJ1S5naQ-4InTG5a3HIHX8hyir-I3pw6NSrclaE3JdzBkY",
    activity: "Reading Ch. 12 • Dune",
    timeAgo: "15m ago",
  },
  {
    id: "friend-2",
    name: "Anna Henry",
    initials: "AH",
    activity: "Finished • Norwegian Wood",
    timeAgo: "1h ago",
  },
];

