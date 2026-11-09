"use client";

import { ExploreBook } from "@/types/k4book";
import { SafeImage } from "@/components/ui/safe-image";

interface PopularSectionProps {
  books: ExploreBook[];
  viewMode: "grid" | "list";
  onSelectBook: (book: ExploreBook) => void;
}

export function PopularSection({
  books,
  viewMode,
  onSelectBook,
}: PopularSectionProps) {
  return (
    <section className="space-y-4" aria-labelledby="popular-explore-heading">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2
            id="popular-explore-heading"
            className="text-2xl font-bold font-serif-heading text-slate-900 tracking-tight"
          >
            Popular Now
          </h2>
          <span
            className="w-2 h-2 rounded-full bg-[#a6332a] animate-pulse"
            aria-hidden="true"
          />
          <span className="text-xs font-medium text-slate-500">
            Trending this week
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous items"
            className="w-8 h-8 rounded-full bg-white hover:bg-[#efeeeb] shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors border border-[#eae6dd]"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next items"
            className="w-8 h-8 rounded-full bg-white hover:bg-[#efeeeb] shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors border border-[#eae6dd]"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Book Container: Grid vs List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {books.map((book) => (
            <article
              key={book.id}
              onClick={() => onSelectBook(book)}
              tabIndex={0}
              role="button"
              aria-label={`View ${book.title} by ${book.author}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectBook(book);
                }
              }}
              className="group flex flex-col space-y-2 cursor-pointer focus:outline-none"
            >
              <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-slate-200 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                {/* Book Spine Shadow Fold */}
                <div
                  className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent z-10 pointer-events-none"
                  aria-hidden="true"
                />

                <SafeImage
                  src={book.coverImage}
                  alt={`Cover of ${book.title}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Rating Badge */}
                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm z-10">
                  <span className="text-[#a6332a] text-xs">★</span>
                  <span className="text-[11px] font-bold text-slate-900">
                    {book.rating}
                  </span>
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 gap-2 z-20">
                  <button
                    type="button"
                    className="w-full py-1.5 rounded-full bg-[#a6332a] text-white text-xs font-semibold hover:bg-[#881e18] transition-colors shadow"
                  >
                    Preview Book
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-[#a6332a] transition-colors font-serif-heading">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {book.author}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[11px] text-[#7b542b] font-semibold">
                    {book.genre}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-400" />
                  <span className="text-[11px] text-slate-400">
                    {book.pages} pp
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="space-y-3">
          {books.map((book) => (
            <article
              key={book.id}
              onClick={() => onSelectBook(book)}
              tabIndex={0}
              role="button"
              aria-label={`View ${book.title} by ${book.author}`}
              className="p-3 bg-white rounded-xl shadow-sm border border-[#eae6dd] flex items-center justify-between gap-4 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-14 aspect-[2/3] rounded-md overflow-hidden bg-slate-200 flex-shrink-0 shadow">
                  <SafeImage
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    sizes="60px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#a6332a] font-serif-heading transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {book.author}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] text-[#7b542b] font-semibold">
                      {book.genre}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-400" />
                    <span className="text-[11px] text-slate-400">
                      {book.pages} pages
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-[#fbf9f6] px-3 py-1 rounded-full border border-[#eae6dd]">
                  <span className="text-[#a6332a] text-xs">★</span>
                  <span className="text-xs font-bold text-slate-800">
                    {book.rating}
                  </span>
                </div>
                <button
                  type="button"
                  className="px-4 py-1.5 rounded-full bg-[#a6332a] text-white text-xs font-semibold hover:bg-[#881e18] transition-colors"
                >
                  Preview
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

