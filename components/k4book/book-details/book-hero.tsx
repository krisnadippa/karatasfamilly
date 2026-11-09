"use client";

import { useState } from "react";
import { BookDetail } from "@/types/k4book";

interface BookHeroProps {
  book: BookDetail;
  onStartReading: () => void;
}

export function BookHero({ book, onStartReading }: BookHeroProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <section
      className="px-8 pt-4 pb-14 relative z-10 flex items-center justify-center"
      aria-label="Book Hero Presentation"
    >
      <div className="w-full max-w-[1040px] flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Left: Vertical Switchers + 3D Book Cover */}
        <div className="flex items-center gap-7 flex-shrink-0">
          {/* Navigation Arrow Controls */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              aria-label="Previous Book"
              className="w-9 h-9 rounded-full border border-[#e6e2d8] bg-transparent flex items-center justify-center text-neutral-500 hover:text-[#1f2428] hover:border-neutral-400 transition-colors focus:outline-none focus:ring-1 focus:ring-[#1f2428]"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next Book"
              className="w-9 h-9 rounded-full border border-[#e6e2d8] bg-transparent flex items-center justify-center text-neutral-500 hover:text-[#1f2428] hover:border-neutral-400 transition-colors focus:outline-none focus:ring-1 focus:ring-[#1f2428]"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Realistic 3D Book Cover Presentation */}
          <div
            onClick={onStartReading}
            className="relative group cursor-pointer"
            tabIndex={0}
            role="button"
            aria-label={`Open reader for ${book.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onStartReading();
              }
            }}
          >
            <div className="w-[230px] h-[345px] rounded-r-md rounded-l-sm overflow-hidden book-shadow relative bg-[#0D241C] border-l-[3px] border-[#224838] transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Book spine ridge highlight */}
              <div
                className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/50 via-white/10 to-transparent z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Rich Illustrated Magical Cover Art */}
              <div className="w-full h-full relative flex flex-col items-center justify-between p-4 text-center bg-gradient-to-b from-[#0e2c24] via-[#103a2e] to-[#081812] select-none">
                {/* Title Area */}
                <div className="pt-3 z-10">
                  <h1 className="font-serif text-[28px] leading-[0.95] tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-emerald-100 via-teal-200 to-emerald-400 font-bold drop-shadow-md">
                    Harry Potter
                  </h1>
                  <p className="text-[9px] tracking-[0.25em] text-emerald-200/80 font-medium uppercase mt-1">
                    {book.subtitle}
                  </p>
                </div>

                {/* Magical Illustration: Cauldron & Emerald Glow */}
                <div className="relative w-full flex-1 flex items-center justify-center my-1">
                  <div
                    className="absolute w-28 h-28 bg-emerald-400/20 rounded-full blur-xl pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* SVG illustration of Dumbledore, Harry & the basin of emerald potion */}
                  <svg
                    className="w-36 h-40 text-emerald-300 drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]"
                    fill="none"
                    viewBox="0 0 160 180"
                    aria-hidden="true"
                  >
                    <ellipse
                      cx="80"
                      cy="130"
                      fill="#143b2f"
                      rx="35"
                      ry="8"
                      stroke="#34d399"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M48 130 C48 152 112 152 112 130"
                      fill="#0d241c"
                      stroke="#34d399"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M78 150 L75 168 L85 168 L82 150 Z"
                      fill="#34d399"
                      opacity="0.8"
                    />
                    <ellipse
                      cx="80"
                      cy="168"
                      fill="#143b2f"
                      rx="20"
                      ry="3"
                      stroke="#34d399"
                      strokeWidth="1"
                    />
                    <ellipse
                      cx="80"
                      cy="130"
                      fill="#34d399"
                      fillOpacity="0.75"
                      rx="31"
                      ry="6"
                    />
                    {/* Dumbledore figure */}
                    <path
                      d="M68 62 Q80 50 90 64 Q94 82 86 108 Q80 118 70 106 Z"
                      fill="#2d6a54"
                      opacity="0.6"
                    />
                    {/* Flowing beard */}
                    <path
                      d="M75 75 Q80 102 85 75 Q82 92 78 92 Z"
                      fill="#e2e8f0"
                      opacity="0.9"
                    />
                    {/* Raised arm holding crystal goblet */}
                    <path
                      d="M68 70 Q56 60 62 48"
                      stroke="#a7f3d0"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                    />
                    <path d="M58 45 L66 45 L64 52 L60 52 Z" fill="#34d399" />
                    {/* Harry Potter silhouette */}
                    <circle cx="106" cy="80" fill="#1e4d3c" r="8" />
                    <path
                      d="M102 88 Q108 92 114 96 Q118 114 116 128 L100 128 Z"
                      fill="#15362b"
                    />
                    <circle
                      cx="104"
                      cy="79"
                      r="2.5"
                      stroke="#a7f3d0"
                      strokeWidth="0.8"
                    />
                  </svg>
                </div>

                {/* Author Signature & Book Number Badge */}
                <div className="pb-2 z-10 flex flex-col items-center">
                  <p className="text-xs font-serif tracking-[0.2em] uppercase font-bold text-neutral-100">
                    {book.author}
                  </p>
                  <div className="mt-1 flex items-center justify-center">
                    <span className="inline-flex items-center justify-center w-4 h-4 border border-emerald-400/50 rounded-full text-[9px] text-emerald-200">
                      {book.bookNumber}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Book Headline, Meta & Actions */}
        <div className="flex-1 max-w-[500px]">
          <h2 className="font-serif text-3xl sm:text-[42px] leading-[1.1] font-semibold text-[#1f2428] tracking-tight">
            {book.title}
          </h2>
          <p className="text-sm font-semibold text-[#1f2428] mt-4 tracking-wide">
            {book.author}
          </p>
          <p className="text-[13px] text-[#686b6e] italic leading-relaxed mt-4 font-normal">
            {book.synopsis}
          </p>

          {/* Buttons Row */}
          <div className="flex items-center gap-3 mt-7">
            {/* Primary Start Reading CTA */}
            <button
              type="button"
              onClick={onStartReading}
              className="px-6 py-2.5 rounded-full bg-[#1f2428] text-white text-xs font-semibold hover:bg-neutral-800 transition-all flex items-center gap-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1f2428]"
            >
              <span>Start reading</span>
              <span className="text-sm leading-none" aria-hidden="true">
                ↗
              </span>
            </button>

            {/* Bookmark Action */}
            <button
              type="button"
              onClick={() => setIsBookmarked(!isBookmarked)}
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this book"}
              className={`w-10 h-10 rounded-full border border-[#e6e2d8] bg-transparent flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-[#1f2428] ${
                isBookmarked
                  ? "text-[#a6332a] border-[#a6332a]"
                  : "text-[#1f2428] hover:border-neutral-400"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill={isBookmarked ? "currentColor" : "none"}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
            </button>

            {/* Share Action */}
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share book"
              className="w-10 h-10 rounded-full border border-[#e6e2d8] bg-transparent flex items-center justify-center text-[#1f2428] hover:border-neutral-400 transition-colors focus:outline-none focus:ring-1 focus:ring-[#1f2428] relative"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
              </svg>
              {copiedShare && (
                <span className="absolute -top-7 text-[10px] bg-black text-white px-2 py-0.5 rounded shadow">
                  Copied!
                </span>
              )}
            </button>

            {/* Download Action */}
            <button
              type="button"
              aria-label="Download book"
              onClick={() => alert("Downloading e-book copy...")}
              className="w-10 h-10 rounded-full border border-[#e6e2d8] bg-transparent flex items-center justify-center text-[#1f2428] hover:border-neutral-400 transition-colors focus:outline-none focus:ring-1 focus:ring-[#1f2428]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

