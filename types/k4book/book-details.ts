export interface BookReview {
  id: string;
  reviewerName: string;
  reviewerAvatar?: string;
  reviewerInitials?: string;
  reviewerRole?: string;
  isVerified?: boolean;
  date: string;
  format: string;
  rating: number;
  content: string;
  quote?: string;
  helpfulCount: number;
}

export interface BookDetail {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  bookNumber: number;
  synopsis: string;
  descriptionParagraphs: string[];
  editors: string;
  language: string;
  paperbackSpecs: {
    details: string;
    pages: number;
    isbn: string;
  };
  highlightReview: {
    reviewerName: string;
    reviewerAvatar: string;
    quote: string;
  };
  ratingsSummary: {
    average: number;
    totalRatings: number;
    totalReviews: number;
    distribution: {
      stars: number;
      percentage: number;
    }[];
  };
  reviews: BookReview[];
}

