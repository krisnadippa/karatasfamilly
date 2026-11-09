export interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface FeaturedBookExcerpt {
  chapter: string;
  chapterNumber: string;
  paragraphs: string[];
  pageNumber: number;
  illustrationUrl: string;
  illustrationAlt: string;
}

export interface FeaturedBook {
  id: string;
  title: string;
  author: string;
  greetingUser: string;
  quoteOrComment: string;
  currentPage: number;
  totalPages: number;
  synopsis: string;
  excerpt: FeaturedBookExcerpt;
}

export interface PopularBook {
  id: string;
  title: string;
  author: string;
  volumeLabel?: string;
  coverImage: string;
  themeColor: {
    bg: string;
    gradient: string;
    border: string;
    textColor: string;
  };
  iconBadge?: "star" | "sword" | "dragon" | "magic";
}

export interface SeriesVolItem {
  volumeLabel: string;
  symbol: string;
  bgColor: string;
  borderColor: string;
  barColor: string;
  textColor: string;
  rotationClass: string;
}

export interface SeriesCollectionItem {
  id: string;
  title: string;
  subtitle: string;
  volumeCountText: string;
  volumes: SeriesVolItem[];
}

export interface ScheduleDay {
  id: string;
  dayName: string;
  dateNumber: number;
  isToday?: boolean;
}

export interface RecentlyReadBook {
  id: string;
  title: string;
  author: string;
  timeAgo: string;
  currentPage: number;
  totalPages: number;
  percentage: number;
  coverImage: string;
  bgClass: string;
  borderClass: string;
  isFinished?: boolean;
}

export interface ReaderFriend {
  id: string;
  name: string;
  avatarUrl?: string;
  initials?: string;
  activity: string;
  timeAgo: string;
}

