"use client";

import { useEffect, useState, useCallback } from "react";
import { FeaturedBook } from "@/types/k4book";

type ReaderTheme = "cream" | "sepia" | "dark";

interface ReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: FeaturedBook;
}

export function ReaderModal({ isOpen, onClose, book }: ReaderModalProps) {
  const [theme, setTheme] = useState<ReaderTheme>("cream");
  const [fontSize, setFontSize] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(book.currentPage);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  // Close modal on Escape key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setCurrentPage((prev) => Math.min(book.totalPages, prev + 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentPage((prev) => Math.max(1, prev - 1));
      }
    },
    [book.totalPages, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  // Theme-specific styling
  const themeStyles = {
    cream: "bg-[#f9f7f2] text-[#1c1f24] border-[#eae6dd]",
    sepia: "bg-[#f4ebd9] text-[#2c221e] border-[#e2d4bd]",
    dark: "bg-[#181a1e] text-[#e3e6eb] border-[#2c3038]",
  };

  const cardStyles = {
    cream: "bg-[#fdfbf7] border-[#ded8cc]",
    sepia: "bg-[#faecd6] border-[#dac9ad]",
    dark: "bg-[#21242b] border-[#363b45]",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reader-title"
    >
      <div
        className={`relative w-full max-w-4xl h-[85vh] max-h-[800px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border ${themeStyles[theme]}`}
      >
        {/* Top Control Bar */}
        <header
          className={`px-6 py-4 flex items-center justify-between border-b ${themeStyles[theme]}`}
        >
          <div>
            <h2 id="reader-title" className="text-sm font-bold tracking-tight">
              {book.title}
            </h2>
            <p className="text-xs opacity-60 italic">{book.author}</p>
          </div>

          <div className="flex items-center space-x-3">
            {/* Font Size Adjusters */}
            <div className="flex items-center space-x-1 bg-black/5 dark:bg-white/5 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setFontSize((prev) => Math.max(12, prev - 1))}
                aria-label="Decrease font size"
                className="w-7 h-7 flex items-center justify-center text-xs font-bold rounded hover:bg-black/10 dark:hover:bg-white/10"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => setFontSize(16)}
                aria-label="Reset font size"
                className="text-xs px-1 opacity-70"
              >
                {fontSize}px
              </button>
              <button
                type="button"
                onClick={() => setFontSize((prev) => Math.min(24, prev + 1))}
                aria-label="Increase font size"
                className="w-7 h-7 flex items-center justify-center text-xs font-bold rounded hover:bg-black/10 dark:hover:bg-white/10"
              >
                A+
              </button>
            </div>

            {/* Reading Palette Themes */}
            <div className="flex items-center space-x-1 bg-black/5 dark:bg-white/5 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setTheme("cream")}
                aria-label="Cream theme"
                className={`w-6 h-6 rounded-full bg-[#f9f7f2] border ${
                  theme === "cream" ? "ring-2 ring-[#e26b67]" : "border-slate-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setTheme("sepia")}
                aria-label="Sepia theme"
                className={`w-6 h-6 rounded-full bg-[#f4ebd9] border ${
                  theme === "sepia" ? "ring-2 ring-[#e26b67]" : "border-amber-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setTheme("dark")}
                aria-label="Dark theme"
                className={`w-6 h-6 rounded-full bg-[#181a1e] border ${
                  theme === "dark" ? "ring-2 ring-[#e26b67]" : "border-slate-600"
                }`}
              />
            </div>

            {/* Bookmark Button */}
            <button
              type="button"
              onClick={() => setIsBookmarked(!isBookmarked)}
              aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
              className={`p-2 rounded-lg transition-colors ${
                isBookmarked
                  ? "text-[#e26b67]"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill={isBookmarked ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close reader modal"
              className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 opacity-70 hover:opacity-100 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Reader Book Content Canvas */}
        <div className="flex-1 overflow-y-auto px-8 sm:px-16 py-10 flex flex-col items-center">
          <div
            className={`w-full max-w-2xl p-8 sm:p-12 rounded-xl shadow-sm border ${cardStyles[theme]}`}
            style={{ fontSize: `${fontSize}px` }}
          >
            <div className="text-center font-bold tracking-widest text-xs uppercase opacity-70 mb-6">
              {book.excerpt.chapter}
            </div>

            <div className="font-serif leading-relaxed space-y-5 text-justify">
              {book.excerpt.paragraphs.map((p, index) => (
                <p key={index} className="indent-6">
                  {p}
                </p>
              ))}

              <p className="indent-6">
                Harry stared at Lockhart in utter disbelief. The golden-haired wizard leaned forward, his smile gleaming, tapping his silver-tipped wand against the mahogany desk as though expecting a standing ovation from the portraits lining the room.
              </p>
              <p className="indent-6">
                Outside, rain lashed against the high gothic mullioned windows of Hogwarts castle. Somewhere down in the damp dungeons, whispers of an ancient and terrifying presence stirred once more.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Pagination & Progress Bar */}
        <footer
          className={`px-6 py-3.5 flex items-center justify-between border-t text-xs ${themeStyles[theme]}`}
        >
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1.5 rounded-lg border border-current opacity-70 hover:opacity-100 disabled:opacity-30 transition-opacity"
          >
            ← Previous Page
          </button>

          <div className="flex items-center space-x-3">
            <span className="font-medium">
              Page {currentPage} of {book.totalPages}
            </span>
            <div className="w-32 h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#e26b67] rounded-full transition-all duration-300"
                style={{
                  width: `${(currentPage / book.totalPages) * 100}%`,
                }}
              />
            </div>
          </div>

          <button
            type="button"
            disabled={currentPage >= book.totalPages}
            onClick={() => setCurrentPage((p) => Math.min(book.totalPages, p + 1))}
            className="px-3 py-1.5 rounded-lg border border-current opacity-70 hover:opacity-100 disabled:opacity-30 transition-opacity"
          >
            Next Page →
          </button>
        </footer>
      </div>
    </div>
  );
}

