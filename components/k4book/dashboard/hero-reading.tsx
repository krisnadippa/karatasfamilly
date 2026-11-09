"use client";

import Link from "next/link";
import { FeaturedBook } from "@/types/k4book";
import { SafeImage } from "@/components/ui/safe-image";

interface HeroReadingProps {
  book: FeaturedBook;
  onStartReading?: () => void;
}

export function HeroReading({ book, onStartReading }: HeroReadingProps) {
  const { excerpt } = book;

  return (
    <section className="relative pt-4" aria-labelledby="featured-book-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fdfbf7]/60 rounded-2xl p-6 border border-[#eae5dc]/80">
        {/* Left Column: Greeting and CTA */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <h1
            id="featured-book-heading"
            className="text-4xl lg:text-[40px] leading-[1.1] font-bold text-slate-900 font-serif-heading tracking-tight"
          >
            Happy reading,
            <br />
            {book.greetingUser}
          </h1>
          <p className="text-xs text-slate-600 mt-3 leading-relaxed font-normal">
            {book.quoteOrComment}
          </p>
          <div className="mt-5">
            <Link
              href="/k4book/book/half-blood-prince"
              onClick={onStartReading}
              className="inline-flex items-center space-x-2 bg-[#20252b] hover:bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg group focus:outline-none focus:ring-2 focus:ring-[#e26b67] focus:ring-offset-2"
            >
              <span>Start reading</span>
              <span
                className="text-xs font-normal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Center Column: 3D Open Book Illustration (Clickable Link to Book Details) */}
        <div className="lg:col-span-5 flex justify-center py-1">
          <Link
            href="/k4book/book/half-blood-prince"
            title="Open Harry Potter Book Details"
            className="relative w-80 h-52 bg-[#fdfbf7] rounded-sm shadow-open-book flex border border-[#ded8cc]/70 overflow-hidden transform -rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-300 select-none cursor-pointer"
          >
            {/* Left Page (Typography & Excerpt) */}
            <div className="w-1/2 p-3 text-[5.5px] leading-[1.4] text-slate-600 border-r border-[#e0dad0] font-serif flex flex-col justify-between bg-[#fbf9f4]">
              <div>
                <div className="text-[6.5px] font-bold tracking-widest text-center text-slate-800 uppercase mb-1">
                  {excerpt.chapter}
                </div>
                {excerpt.paragraphs.map((p, idx) => (
                  <p key={idx} className="mb-1 text-justify indent-2">
                    {p}
                  </p>
                ))}
              </div>
              <div className="text-[5px] text-center text-slate-400 font-sans">
                {excerpt.pageNumber}
              </div>
            </div>

            {/* Book Spine Crease Illusion */}
            <div
              className="w-3.5 absolute inset-y-0 left-1/2 -ml-[7px] book-spine-crease pointer-events-none"
              aria-hidden="true"
            />

            {/* Right Page (Illustration) */}
            <div className="w-1/2 p-2 bg-[#f7f4ec] relative flex flex-col items-center justify-center">
              <div className="w-full h-full rounded border border-[#dfd8ca] overflow-hidden bg-emerald-950 relative shadow-inner">
                <SafeImage
                  src={excerpt.illustrationUrl}
                  alt={excerpt.illustrationAlt}
                  fill
                  sizes="160px"
                  className="object-cover opacity-90 filter contrast-125"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Right Column: Book Details & Author */}
        <div className="lg:col-span-3 flex flex-col justify-between h-full pl-2">
          <div>
            <Link
              href="/k4book/book/half-blood-prince"
              className="group focus:outline-none"
            >
              <h2 className="text-2xl font-bold font-serif-heading text-slate-900 group-hover:text-[#e26b67] transition-colors leading-snug">
                {book.title}
              </h2>
            </Link>
            <div className="mt-1.5 text-xs font-medium text-slate-500">
              <span className="text-[#e26b67] font-bold text-sm">
                {book.currentPage}
              </span>{" "}
              / {book.totalPages} pages
            </div>
            <p className="mt-3 text-xs text-slate-600 leading-relaxed font-normal">
              {book.synopsis}
            </p>
          </div>
          <div className="mt-6 text-right">
            <span className="text-xs font-serif font-medium text-slate-700 italic">
              - {book.author}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
