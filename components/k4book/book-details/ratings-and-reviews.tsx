"use client";

import { useState } from "react";
import { BookDetail, BookReview } from "@/types/k4book";
import { SafeImage } from "@/components/ui/safe-image";

interface RatingsAndReviewsProps {
  book: BookDetail;
}

export function RatingsAndReviews({ book }: RatingsAndReviewsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});
  const [reviewsList, setReviewsList] = useState<BookReview[]>(book.reviews);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [userComment, setUserComment] = useState("");
  const [userRating, setUserRating] = useState(5);

  const handleHelpfulClick = (reviewId: string, initialCount: number) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [reviewId]: (prev[reviewId] ?? initialCount) + 1,
    }));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userComment.trim()) return;

    const newRev: BookReview = {
      id: `rev-${Date.now()}`,
      reviewerName: "Alexander Mark",
      reviewerRole: "Avid Reader",
      isVerified: true,
      date: "Hari ini",
      format: "Digital Edition",
      rating: userRating,
      content: userComment.trim(),
      helpfulCount: 0,
    };

    setReviewsList([newRev, ...reviewsList]);
    setUserComment("");
    setIsWriteReviewOpen(false);
  };

  // Filter reviews
  const filteredReviews = reviewsList.filter((r) => {
    if (activeFilter === "5-star") return r.rating === 5;
    if (activeFilter === "with-quote") return Boolean(r.quote);
    return true;
  });

  return (
    <section
      className="bg-white border-t border-neutral-100 px-6 sm:px-10 pb-16 pt-8"
      aria-label="Ratings and Reviews Section"
    >
      <div className="max-w-[1040px] mx-auto">
        {/* Header & Write Review Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#e6e2d8]">
          <div className="flex flex-col gap-1">
            <h3 className="font-serif text-2xl sm:text-[26px] font-semibold text-[#1f2428] tracking-tight">
              Penilaian &amp; Ulasan Pembaca
            </h3>
            <p className="text-xs text-[#686b6e]">
              Ulasan terverifikasi dari komunitas pembaca dan penikmat sastra
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsWriteReviewOpen(true)}
              className="px-5 py-2.5 rounded-full border border-[#1f2428] text-[#1f2428] text-xs font-semibold hover:bg-neutral-100 transition-colors"
            >
              Beri Rating
            </button>
            <button
              type="button"
              onClick={() => setIsWriteReviewOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#1f2428] text-white text-xs font-semibold hover:bg-neutral-800 transition-all flex items-center gap-1.5 shadow-sm"
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
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              <span>Tulis Ulasan</span>
            </button>
          </div>
        </div>

        {/* Write Review Form Drawer / Modal */}
        {isWriteReviewOpen && (
          <form
            onSubmit={handleAddReview}
            className="mb-8 p-6 bg-[#FAF8F5] rounded-xl border border-[#e6e2d8] space-y-4"
          >
            <h4 className="text-sm font-bold text-[#1f2428]">
              Tulis Ulasan Anda
            </h4>

            {/* Rating Stars Select */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Rating:</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setUserRating(star)}
                    className="text-amber-500 text-lg hover:scale-110 transition-transform"
                  >
                    {star <= userRating ? "★" : "☆"}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              value={userComment}
              onChange={(e) => setUserComment(e.target.value.slice(0, 500))}
              placeholder="Bagikan pandangan Anda tentang buku ini (alur cerita, karakter, atau gaya bahasa)..."
              rows={3}
              maxLength={500}
              className="w-full p-3 text-xs bg-white rounded-lg border border-[#e6e2d8] focus:outline-none focus:ring-1 focus:ring-[#1f2428]"
            />

            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                {userComment.length} / 500 karakter
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsWriteReviewOpen(false)}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-200"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-1.5 rounded-full bg-[#1f2428] text-white text-xs font-semibold shadow hover:bg-black"
                >
                  Kirim Ulasan
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Rating Breakdown Grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-start mb-10 pb-10 border-b border-neutral-100">
          {/* Average Score */}
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center md:items-start text-center md:text-left pr-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-[48px] font-bold text-[#1f2428] leading-none">
                {book.ratingsSummary.average}
              </span>
              <span className="text-[#686b6e] text-sm font-medium">/ 5.0</span>
            </div>

            <div className="flex items-center gap-1 text-amber-500 my-2.5">
              {[1, 2, 3, 4].map((s) => (
                <svg
                  key={s}
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg
                className="w-4 h-4 fill-current text-amber-300"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <p className="text-xs text-[#686b6e]">
              {book.ratingsSummary.totalRatings.toLocaleString()} penilaian •{" "}
              {book.ratingsSummary.totalReviews.toLocaleString()} ulasan komunitas
            </p>
          </div>

          {/* Star Distribution Bars */}
          <div className="col-span-12 md:col-span-8 flex flex-col gap-2">
            {book.ratingsSummary.distribution.map((dist) => (
              <div
                key={dist.stars}
                className="flex items-center gap-3 text-xs"
              >
                <span className="w-16 text-[#686b6e] font-medium text-right">
                  {dist.stars} Bintang
                </span>
                <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${dist.percentage}%` }}
                  />
                </div>
                <span className="w-10 text-[#686b6e] text-right font-medium">
                  {dist.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs text-[#686b6e] font-medium mr-2">
            Filter:
          </span>
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeFilter === "all"
                ? "bg-[#1f2428] text-white"
                : "border border-[#e6e2d8] text-[#686b6e] hover:text-[#1f2428]"
            }`}
          >
            Semua ({book.ratingsSummary.totalReviews.toLocaleString()})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("5-star")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeFilter === "5-star"
                ? "bg-[#1f2428] text-white"
                : "border border-[#e6e2d8] text-[#686b6e] hover:text-[#1f2428]"
            }`}
          >
            5 Bintang (1,420)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("with-quote")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeFilter === "with-quote"
                ? "bg-[#1f2428] text-white"
                : "border border-[#e6e2d8] text-[#686b6e] hover:text-[#1f2428]"
            }`}
          >
            Dengan Catatan (840)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className="px-3.5 py-1.5 rounded-full border border-[#e6e2d8] text-[#686b6e] hover:text-[#1f2428] hover:border-neutral-400 text-xs font-medium transition-colors"
          >
            Terbaru
          </button>
        </div>

        {/* Review Cards List */}
        <div className="space-y-6">
          {filteredReviews.map((rev) => {
            const currentHelpful =
              helpfulCounts[rev.id] ?? rev.helpfulCount;

            return (
              <div
                key={rev.id}
                className="p-5 rounded-xl border border-[#e6e2d8] bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    {rev.reviewerAvatar ? (
                      <div className="w-9 h-9 rounded-full overflow-hidden border border-[#e6e2d8] flex-shrink-0 relative">
                        <SafeImage
                          src={rev.reviewerAvatar}
                          alt={rev.reviewerName}
                          width={36}
                          height={36}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-emerald-800 text-white font-semibold text-xs flex items-center justify-center border border-[#e6e2d8] flex-shrink-0">
                        {rev.reviewerInitials || rev.reviewerName.slice(0, 2)}
                      </div>
                    )}

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#1f2428]">
                          {rev.reviewerName}
                        </span>
                        {rev.reviewerRole && (
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                              rev.isVerified
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-neutral-100 text-[#686b6e]"
                            }`}
                          >
                            {rev.reviewerRole}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-[#686b6e] mt-0.5">
                        {rev.date} • {rev.format}
                      </span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? "fill-current"
                            : "fill-current text-neutral-200"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#1f2428] leading-relaxed">
                  {rev.content}
                </p>

                {rev.quote && (
                  <div className="mt-3.5 p-3 rounded-lg bg-white border-l-2 border-[#103a2e] text-xs text-[#686b6e] italic">
                    {rev.quote}
                  </div>
                )}

                <div className="mt-3.5 flex items-center justify-between pt-2 border-t border-neutral-100 text-xs text-[#686b6e]">
                  <button
                    type="button"
                    onClick={() =>
                      handleHelpfulClick(rev.id, rev.helpfulCount)
                    }
                    className="inline-flex items-center gap-1.5 hover:text-[#1f2428] transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    </svg>
                    <span>Membantu ({currentHelpful})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Ulasan telah dilaporkan ke moderator.")}
                    className="hover:text-[#1f2428] transition-colors"
                  >
                    Laporkan
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <button
            type="button"
            className="px-6 py-2.5 rounded-full border border-[#e6e2d8] text-[#1f2428] text-xs font-semibold hover:bg-neutral-100 transition-colors inline-flex items-center gap-2"
          >
            <span>Muat Lebih Banyak Ulasan</span>
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
      </div>
    </section>
  );
}

