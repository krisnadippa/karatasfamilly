"use client";

import Link from "next/link";
import { RecentlyReadBook } from "@/types/k4book";
import { SafeImage } from "@/components/ui/safe-image";

interface RecentlyReadProps {
  books: RecentlyReadBook[];
  onSelectBook?: (book: RecentlyReadBook) => void;
}

export function RecentlyRead({ books, onSelectBook }: RecentlyReadProps) {
  return (
    <section className="pt-2" aria-labelledby="recently-read-heading">
      <div className="flex items-center justify-between mb-5">
        <h3
          id="recently-read-heading"
          className="text-xl font-bold text-slate-900 tracking-tight"
        >
          Recently Read
        </h3>
        <Link
          href="/k4book/explore"
          className="text-xs font-semibold text-[#e26b67] hover:underline decoration-1 underline-offset-2 transition-colors focus:outline-none focus:ring-1 focus:ring-[#e26b67] rounded"
        >
          View all
        </Link>
      </div>

      <div className="space-y-4 pl-1">
        {books.map((book) => {
          const barColor = book.isFinished
            ? "bg-emerald-600"
            : book.percentage > 70
            ? "bg-[#e26b67]"
            : "bg-[#e8bc68]";

          return (
            <Link
              key={book.id}
              href="/k4book/book/half-blood-prince"
              onClick={() => onSelectBook?.(book)}
              aria-label={`Open recent book: ${book.title} by ${book.author}, progress ${book.percentage}%`}
              className="flex items-center space-x-3.5 p-2 rounded-xl hover:bg-[#eae4d8]/50 transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e26b67] block"
            >
              {/* Mini Book Cover */}
              <div
                className={`w-12 h-16 rounded-sm overflow-hidden flex-shrink-0 ${book.bgClass} shadow-md border-l-2 ${book.borderClass} relative`}
              >
                <SafeImage
                  src={book.coverImage}
                  alt={`${book.title} cover`}
                  fill
                  sizes="48px"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Book Details and Progress */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 truncate group-hover:text-[#e26b67] transition-colors">
                    {book.title}
                  </h4>
                  <span className="text-[10px] text-slate-600 font-medium ml-2 flex-shrink-0">
                    {book.timeAgo}
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 italic mt-0.5 truncate">
                  {book.author}
                </p>

                <div className="mt-2.5">
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    {book.isFinished ? (
                      <span className="text-emerald-700 font-semibold">
                        Finished
                      </span>
                    ) : (
                      <span className="text-slate-500 font-medium">
                        p. {book.currentPage}/{book.totalPages}
                      </span>
                    )}
                    <span className="font-bold text-slate-800">
                      {book.percentage}%
                    </span>
                  </div>

                  <div
                    className="w-full h-1 bg-[#ded8cc]/70 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow={book.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className={`h-full ${barColor} rounded-full transition-all duration-300`}
                      style={{ width: `${book.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
