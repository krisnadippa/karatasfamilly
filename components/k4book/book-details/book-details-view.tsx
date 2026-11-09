"use client";

import { useState } from "react";
import { Sidebar } from "@/components/k4book/layout/sidebar";
import { Header } from "@/components/k4book/layout/header";
import { BookHero } from "./book-hero";
import { SpecificationsCard } from "./specifications-card";
import { RatingsAndReviews } from "./ratings-and-reviews";
import { ReaderModal } from "@/components/k4book/reader/reader-modal";
import { BookDetail, UserProfile, FeaturedBook } from "@/types/k4book";

interface BookDetailsViewProps {
  user: UserProfile;
  book: BookDetail;
  readerTemplate: FeaturedBook;
}

export function BookDetailsView({
  user,
  book,
  readerTemplate,
}: BookDetailsViewProps) {
  const [isReaderOpen, setIsReaderOpen] = useState(false);

  // Adapt current book detail to ReaderModal template
  const activeReadingBook: FeaturedBook = {
    ...readerTemplate,
    id: book.id,
    title: book.title,
    author: book.author,
    currentPage: 1,
    totalPages: book.paperbackSpecs.pages,
    synopsis: book.synopsis,
    excerpt: {
      chapter: "CHAPTER SIXTEEN",
      chapterNumber: "16",
      paragraphs: [
        "Harry peered into the basin. The liquid inside was glowing with an unnatural phosphoric green luminescence, casting eerie shadows across Dumbledore's pale, lined face.",
        "\"It must be drunk,\" whispered Dumbledore calmly. \"Only by draining the potion can the Horcrux resting at the bottom be touched. Do not hesitate, Harry. Even if I beg you to stop, you must make me keep drinking.\"",
        "The wind wailed through the cavernous black cliffs outside, carrying the icy scent of brine and approaching dread.",
      ],
      pageNumber: 345,
      illustrationUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBeEu5M8mjWpe8Nz8ezPSpa57civKYDIB0SRQT2Hd7gdmr4EZio3KXv7h2qSjq1LCSNjfP4Uwbry1julNlSbxFiE2O8SVx0zRoMixaovXumti2uBLN-l_fhF0gylsS4uCb-n94V41kyc19a3JB0EKakgp45ajaqaHj2PfKvhveLUQbh3Le6WfRqShkhjbmrvxKBSZSy1CuLVW3rqD6cJZOR0RELvo4aqdPWlvQbp4Rm",
      illustrationAlt: "Magical Horcrux cavern with green potion basin",
    },
  };

  return (
    <div className="min-h-screen flex flex-row overflow-x-hidden bg-[#F6F4EE] text-[#1F2428] antialiased selection:bg-neutral-200">
      {/* Left Navigation Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <Header user={user} />

        {/* Hero Area & Content Specifications */}
        <main className="flex-1 flex flex-col relative">
          <BookHero
            book={book}
            onStartReading={() => setIsReaderOpen(true)}
          />

          <SpecificationsCard book={book} />

          <RatingsAndReviews book={book} />
        </main>
      </div>

      {/* Interactive Reader Modal */}
      <ReaderModal
        isOpen={isReaderOpen}
        onClose={() => setIsReaderOpen(false)}
        book={activeReadingBook}
      />
    </div>
  );
}
