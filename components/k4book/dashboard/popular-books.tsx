"use client";

import Link from "next/link";
import { PopularBook } from "@/types/k4book";
import { SafeImage } from "@/components/ui/safe-image";

interface PopularBooksProps {
  books: PopularBook[];
  onSelectBook?: (book: PopularBook) => void;
}

export function PopularBooks({ books, onSelectBook }: PopularBooksProps) {
  return (
    <section aria-labelledby="popular-books-heading">
      <div className="flex items-center justify-between mb-4">
        <h3
          id="popular-books-heading"
          className="text-lg font-bold text-slate-900 tracking-tight"
        >
          Popular Now
        </h3>
        <button
          type="button"
          aria-label="Popular books options"
          className="text-slate-400 hover:text-slate-700 text-base tracking-widest leading-none font-bold p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#e26b67]"
        >
          ••
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {books.map((book) => (
          <Link
            key={book.id}
            href="/k4book/book/half-blood-prince"
            onClick={() => onSelectBook?.(book)}
            className="group cursor-pointer focus:outline-none block"
            aria-label={`View book details: ${book.title} by ${book.author}`}
          >
            <div
              className={`aspect-[2/3] w-full rounded-sm overflow-hidden shadow-book book-shadow-edge transition-transform duration-300 group-hover:-translate-y-1.5 relative ${book.themeColor.bg}`}
            >
              <SafeImage
                src={book.coverImage}
                alt={`${book.title} cover image`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover mix-blend-luminosity opacity-40 group-hover:opacity-50 transition-opacity"
              />

              {/* Book Foil and Typography Spine Layout */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${book.themeColor.gradient} p-3 flex flex-col justify-between text-center border-l-2 ${book.themeColor.border}`}
              >
                <div
                  className={`text-[8px] font-semibold tracking-wider ${book.themeColor.textColor} uppercase`}
                >
                  {book.author}
                </div>

                <div className="my-auto py-2">
                  {book.iconBadge === "star" && (
                    <div className="w-8 h-8 mx-auto mb-1 rounded-full border border-[#d6a575]/50 flex items-center justify-center text-[#e6b484]">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1-3-7z" />
                      </svg>
                    </div>
                  )}

                  {book.iconBadge === "sword" && (
                    <div className="w-7 h-7 mx-auto mb-1 border-b border-[#a8cdec] flex items-center justify-center text-[#d2e8fa]">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2v20M7 8l5-5 5 5M9 16l3 3 3-3" />
                      </svg>
                    </div>
                  )}

                  <div className="text-[9px] font-serif tracking-widest text-[#fae1be] font-bold uppercase leading-tight">
                    {book.title}
                  </div>
                </div>

                <div className="text-[7px] text-[#cca178] uppercase tracking-tighter truncate">
                  {book.volumeLabel || book.author}
                </div>
              </div>
            </div>

            <h4 className="mt-2.5 text-xs font-semibold text-slate-900 group-hover:text-[#e26b67] transition-colors leading-tight truncate">
              {book.title}
            </h4>
            <p className="text-[11px] text-slate-400 italic">{book.author}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
