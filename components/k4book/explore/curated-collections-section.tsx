"use client";

import { CuratedBoxSet, ReadingClubSpotlight } from "@/types/k4book";
import { SafeImage } from "@/components/ui/safe-image";

interface CuratedCollectionsSectionProps {
  boxSets: CuratedBoxSet[];
  spotlight: ReadingClubSpotlight;
  onSelectBoxSet?: (boxSet: CuratedBoxSet) => void;
  onJoinClub?: () => void;
}

export function CuratedCollectionsSection({
  boxSets,
  spotlight,
  onSelectBoxSet,
  onJoinClub,
}: CuratedCollectionsSectionProps) {
  return (
    <section className="space-y-4" aria-labelledby="collections-heading">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs text-[#7b542b] uppercase tracking-wider font-bold">
            Curated Collections
          </span>
          <h2
            id="collections-heading"
            className="text-2xl font-bold font-serif-heading text-slate-900 tracking-tight"
          >
            Trending Box Sets &amp; Universes
          </h2>
        </div>
        <p className="text-xs text-slate-500">
          Cohesive sagas accompanied by author forewords and audio adaptations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Box Set Cards */}
        {boxSets.map((box) => (
          <div
            key={box.id}
            onClick={() => onSelectBoxSet?.(box)}
            className="p-5 bg-white rounded-xl shadow-sm border border-[#eae6dd] hover:shadow-md transition-all flex flex-col justify-between space-y-4 cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#efeeeb] text-slate-800 font-semibold">
                  {box.tag}
                </span>
                <h3 className="text-lg font-bold font-serif-heading text-slate-900 mt-2 group-hover:text-[#a6332a] transition-colors">
                  {box.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {box.author}
                </p>
              </div>

              <div className="flex items-center gap-1 text-[#a6332a]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-bold">
                  {box.featureBadge.label}
                </span>
              </div>
            </div>

            {/* Staggered Spine Stack Visual */}
            <div className="relative h-44 flex items-center justify-center my-2 select-none">
              {box.volumes[0] && (
                <div className="absolute -left-2 w-24 h-36 rounded-lg bg-slate-300 shadow-md overflow-hidden rotate-[-8deg] opacity-75">
                  <SafeImage
                    src={box.volumes[0].coverImage}
                    alt={box.volumes[0].alt}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              )}
              {box.volumes[1] && (
                <div className="absolute left-10 w-26 h-38 rounded-lg bg-slate-300 shadow-lg overflow-hidden rotate-[-2deg] opacity-90 z-10">
                  <SafeImage
                    src={box.volumes[1].coverImage}
                    alt={box.volumes[1].alt}
                    fill
                    sizes="104px"
                    className="object-cover"
                  />
                </div>
              )}
              {box.volumes[2] && (
                <div className="absolute right-4 w-28 h-40 rounded-lg bg-slate-300 shadow-xl overflow-hidden rotate-[5deg] z-20">
                  <SafeImage
                    src={box.volumes[2].coverImage}
                    alt={box.volumes[2].alt}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            <div className="pt-3 flex items-center justify-between border-t border-[#eae6dd]">
              <div className="flex items-center gap-1.5 text-slate-600">
                <svg
                  className="w-3.5 h-3.5 text-[#a33d23]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-medium">
                  {box.activeReadersCount} active readers
                </span>
              </div>
              <span className="text-xs font-semibold text-[#a6332a] group-hover:underline">
                {box.totalVolumesText}
              </span>
            </div>
          </div>
        ))}

        {/* Reader Club Spotlight Card */}
        <div className="p-5 bg-[#fbf9f6] rounded-xl shadow-sm border border-[#eae6dd] flex flex-col justify-between space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#a33d23]" />
              <span className="text-xs text-slate-800 font-bold">
                Reader Club Spotlight
              </span>
            </div>
            <h3 className="text-lg font-bold font-serif-heading text-slate-900">
              {spotlight.title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {spotlight.description}
            </p>
          </div>

          {/* SVG Progress Ring */}
          <div className="bg-white p-3 rounded-lg shadow-sm border border-[#eae6dd] flex items-center gap-3">
            <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
              <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-200"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                />
                <path
                  className="text-[#a6332a]"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray={`${spotlight.progressPercent}, 100`}
                  strokeLinecap="round"
                  strokeWidth="3.5"
                />
              </svg>
              <span className="absolute text-xs font-bold text-slate-900">
                {spotlight.progressPercent}%
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">
                Global Community Pace
              </p>
              <p className="text-[11px] text-slate-500">
                Currently reading: {spotlight.currentChapter}
              </p>
              <p className="text-[11px] text-[#a6332a] font-semibold mt-0.5">
                {spotlight.newNotesCount}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onJoinClub}
            className="w-full py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-black transition-colors shadow"
          >
            Join Reading Circle
          </button>
        </div>
      </div>
    </section>
  );
}

