import { ReadingSession } from "@/types/k4book";
import { SafeImage } from "@/components/ui/safe-image";

interface SessionLogTimelineProps {
  sessions: ReadingSession[];
}

export function SessionLogTimeline({ sessions }: SessionLogTimelineProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eae6dd] space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-[#eae6dd]">
        <div>
          <h3 className="text-lg font-bold font-serif-heading text-slate-900">
            Reading Log &amp; Session Timeline
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Your recent reading records, pages completed, and literary reflections
          </p>
        </div>
        <button
          type="button"
          className="text-xs font-semibold text-[#a6332a] hover:underline"
        >
          Export CSV / PDF
        </button>
      </div>

      <div className="space-y-6">
        {sessions.map((session, index) => (
          <div
            key={session.id}
            className="flex items-start gap-4 pb-6 last:pb-0 border-b last:border-none border-neutral-100"
          >
            {/* Timeline Indicator */}
            <div className="flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-[#a6332a] ring-4 ring-[#ffdad5]" />
              {index !== sessions.length - 1 && (
                <span className="w-0.5 h-full bg-[#efeeeb] my-1" />
              )}
            </div>

            {/* Book Cover Thumbnail */}
            <div className="relative w-12 h-16 rounded overflow-hidden bg-slate-200 flex-shrink-0 shadow-sm">
              <SafeImage
                src={session.coverImage}
                alt={session.bookTitle}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>

            {/* Session Details */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-sm font-bold text-slate-900 font-serif-heading truncate">
                  {session.bookTitle}
                </h4>
                <span className="text-xs text-slate-400 font-medium">
                  {session.date}
                </span>
              </div>

              <p className="text-xs text-[#7b542b] font-medium mt-0.5">
                {session.author}
              </p>

              <div className="flex items-center gap-3 mt-2 text-xs text-slate-600 font-medium">
                <span className="inline-flex items-center gap-1 bg-[#fbf9f6] px-2.5 py-0.5 rounded-full border border-[#eae6dd]">
                  ⏱️ {session.durationMinutes} minutes
                </span>
                <span className="inline-flex items-center gap-1 bg-[#fbf9f6] px-2.5 py-0.5 rounded-full border border-[#eae6dd]">
                  📄 {session.pagesRead} pages read
                </span>
              </div>

              {session.notes && (
                <div className="mt-3 p-3 rounded-lg bg-[#FAF8F5] border-l-2 border-[#a6332a] text-xs text-slate-600 italic leading-relaxed">
                  &ldquo;{session.notes}&rdquo;
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

