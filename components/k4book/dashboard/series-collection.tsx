"use client";

import { SeriesCollectionItem } from "@/types/k4book";

interface SeriesCollectionProps {
  collection: SeriesCollectionItem;
  onSelectSeries?: (collection: SeriesCollectionItem) => void;
}

export function SeriesCollection({
  collection,
  onSelectSeries,
}: SeriesCollectionProps) {
  return (
    <section className="pt-1" aria-labelledby="series-collection-heading">
      <div className="flex items-center justify-between mb-3">
        <h3
          id="series-collection-heading"
          className="text-lg font-bold text-slate-900 tracking-tight"
        >
          New Series Collection
        </h3>
        <button
          type="button"
          aria-label="Collection options"
          className="text-slate-400 hover:text-slate-700 text-base tracking-widest leading-none font-bold p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#e26b67]"
        >
          ••
        </button>
      </div>

      <div
        onClick={() => onSelectSeries?.(collection)}
        className="bg-[#fbf9f4] border border-[#eae5dc] rounded-xl p-4 flex items-center justify-between group cursor-pointer hover:border-[#dfd8ca] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e26b67]"
        tabIndex={0}
        role="button"
        aria-label={`View series: ${collection.title}, ${collection.volumeCountText}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelectSeries?.(collection);
          }
        }}
      >
        <div className="flex items-center space-x-4">
          {/* Mini 3D Book Spines */}
          <div className="flex items-center space-x-1.5 flex-shrink-0">
            {collection.volumes.map((vol, idx) => (
              <div
                key={idx}
                className={`w-9 h-14 rounded-sm ${vol.bgColor} shadow-md border-l-2 ${vol.borderColor} flex flex-col justify-between p-1 text-center transform ${vol.rotationClass} group-hover:rotate-0 transition-transform`}
              >
                <div
                  className={`text-[5px] ${vol.textColor} uppercase font-bold tracking-tighter`}
                >
                  {vol.volumeLabel}
                </div>
                <div className="text-[6px] text-white font-serif">
                  {vol.symbol}
                </div>
                <div className={`h-0.5 ${vol.barColor} w-full`} />
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#e26b67] transition-colors">
              {collection.title}
            </h4>
            <p className="text-[11px] text-slate-500 italic mt-0.5">
              {collection.subtitle}
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold text-slate-600 bg-[#efebe1] px-3 py-1 rounded-md">
          {collection.volumeCountText}
        </span>
      </div>
    </section>
  );
}
