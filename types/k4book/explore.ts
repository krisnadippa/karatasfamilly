export type BookGenre =
  | "all"
  | "fantasy"
  | "mystery"
  | "history"
  | "self-dev"
  | "classics"
  | "romance"
  | "poetry"
  | "philosophy";

export interface ExploreBook {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  genre: string;
  genreCategory: BookGenre;
  pages: number;
  previewSnippet?: string;
}

export interface NewReleaseBook {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  badgeText: string;
  badgeVariant: "primary" | "surface" | "tertiary";
  editionInfo: string;
  description: string;
  estimatedHours: number;
  genreCategory: BookGenre;
}

export interface CuratedBoxSet {
  id: string;
  title: string;
  author: string;
  tag: string;
  featureBadge: {
    icon: "headphones" | "auto_stories";
    label: string;
  };
  volumes: {
    coverImage: string;
    alt: string;
  }[];
  activeReadersCount: string;
  totalVolumesText: string;
}

export interface ReadingClubSpotlight {
  id: string;
  title: string;
  description: string;
  progressPercent: number;
  currentChapter: string;
  newNotesCount: string;
}

