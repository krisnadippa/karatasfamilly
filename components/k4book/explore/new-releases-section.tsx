"use client";

import Link from "next/link";
import { NewReleaseBook } from "@/types/k4book";
import { SafeImage } from "@/components/ui/safe-image";

interface NewReleasesSectionProps {
  releases: NewReleaseBook[];
  onSelectRelease: (book: NewReleaseBook) => void;
}

export function NewReleasesSection({
  releases,
  onSelectRelease,
}: NewReleasesSectionProps) {
  return (
    <section className="space-y-4" aria-labelledby="new-releases-heading">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2
            id="new-releases-heading"
            className="text-2xl font-bold font-serif-heading text-slate-900 tracking-tight"
          >
            New Releases
          </h2>
          <span className="px-2.5 py-0.5 rounded-full bg-[#a33d23] text-white text-[11px] font-bold tracking-wide">
            NEW
          </span>
          <span className="hidden sm:inline text-xs text-slate-500 font-medium">
            Freshly bound editions
          </span>
        </div>

        <Link
          href="#explore-all-releases"
          className="text-xs font-semibold text-[#a6332a] hover:underline flex items-center gap-1"
        >
          <span>Explore all new releases</span>
          <svg
            className="w-3.5 h-3.5"
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
        </Link>
      </div>

      {/* Bento-style Detailed Release Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {releases.map((item) => (
          <div
            key={item.id}
            className="p-5 bg-white rounded-xl shadow-sm border border-[#eae6dd] flex flex-col sm:flex-row gap-5 items-start hover:shadow-md transition-shadow"
          >
            {/* Book Cover with Spine Fold */}
            <div className="relative w-32 aspect-[2/3] flex-shrink-0 rounded-lg overflow-hidden shadow-md bg-slate-200">
              <div
                className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/40 via-white/10 to-transparent z-10 pointer-events-none"
                aria-hidden="true"
              />
              <SafeImage
                src={item.coverImage}
                alt={item.title}
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>

            {/* Info and Actions */}
            <div className="flex flex-col justify-between h-full space-y-2 min-w-0 flex-1">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full bg-[#ffdad5] text-[#410001] text-[11px] font-bold">
                    {item.badgeText}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {item.editionInfo}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-serif-heading line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#7b542b] font-semibold">
                  {item.author}
                </p>
                <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[11px] font-medium">
                    ~{item.estimatedHours} hrs read
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectRelease(item)}
                  className="px-4 py-1.5 rounded-full bg-[#a6332a] text-white text-xs font-semibold shadow hover:bg-[#881e18] transition-colors flex items-center gap-1"
                >
                  <span>Start Reading</span>
                  <span className="text-xs">↗</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

