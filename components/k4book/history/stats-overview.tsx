import { ReadingStatSummary } from "@/types/k4book";

interface StatsOverviewProps {
  stats: ReadingStatSummary;
}

export function StatsOverview({ stats }: StatsOverviewProps) {
  const dailyPercent = Math.min(
    100,
    Math.round((stats.todayMinutes / stats.dailyGoalMinutes) * 100)
  );
  const yearlyPercent = Math.min(
    100,
    Math.round((stats.booksCompletedThisYear / stats.yearlyTargetBooks) * 100)
  );

  return (
    <div className="space-y-6">
      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Today's Goal */}
        <div className="p-4 bg-white rounded-xl shadow-sm border border-[#eae6dd] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Today&apos;s Reading</span>
            <span>{dailyPercent}%</span>
          </div>
          <div className="mt-2 text-2xl font-bold font-serif-heading text-slate-900">
            {stats.todayMinutes}{" "}
            <span className="text-xs font-sans font-normal text-slate-400">
              / {stats.dailyGoalMinutes} min
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#efeeeb] rounded-full overflow-hidden mt-3">
            <div
              className="h-full bg-[#a6332a] rounded-full transition-all duration-300"
              style={{ width: `${dailyPercent}%` }}
            />
          </div>
        </div>

        {/* Reading Streak */}
        <div className="p-4 bg-white rounded-xl shadow-sm border border-[#eae6dd] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Current Streak</span>
            <span>🔥 Active</span>
          </div>
          <div className="mt-2 text-2xl font-bold font-serif-heading text-slate-900">
            {stats.currentStreakDays}{" "}
            <span className="text-xs font-sans font-normal text-slate-400">
              Days in a row
            </span>
          </div>
          <div className="text-[11px] text-slate-400 mt-3 truncate">
            Best streak: {stats.longestStreakDays} consecutive days
          </div>
        </div>

        {/* Average Reading Speed */}
        <div className="p-4 bg-white rounded-xl shadow-sm border border-[#eae6dd] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Reading Pace</span>
            <span>Steady</span>
          </div>
          <div className="mt-2 text-2xl font-bold font-serif-heading text-slate-900">
            {stats.averageReadingPaceWpm}{" "}
            <span className="text-xs font-sans font-normal text-slate-400">
              words / min
            </span>
          </div>
          <div className="text-[11px] text-slate-400 mt-3 truncate">
            ~1.2 min per standard page
          </div>
        </div>

        {/* 2026 Reading Challenge */}
        <div className="p-4 bg-white rounded-xl shadow-sm border border-[#eae6dd] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Annual Challenge</span>
            <span>{yearlyPercent}%</span>
          </div>
          <div className="mt-2 text-2xl font-bold font-serif-heading text-slate-900">
            {stats.booksCompletedThisYear}{" "}
            <span className="text-xs font-sans font-normal text-slate-400">
              / {stats.yearlyTargetBooks} books
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#efeeeb] rounded-full overflow-hidden mt-3">
            <div
              className="h-full bg-emerald-600 rounded-full transition-all duration-300"
              style={{ width: `${yearlyPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Weekly Activity Visual Bar Chart */}
      <div className="p-6 bg-white rounded-xl shadow-sm border border-[#eae6dd]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold font-serif-heading text-slate-900">
              Weekly Reading Rhythm
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Minutes spent reading each day this week
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-slate-600">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#a6332a]" />
              Goal Met
            </span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#efeeeb]" />
              In Progress
            </span>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-3 items-end h-36 pt-6 border-b border-[#eae6dd] pb-2">
          {stats.weeklyActivity.map((day, idx) => {
            const heightPercent = Math.min(100, Math.round((day.minutes / 70) * 100));

            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-end h-full group"
              >
                <span className="text-[10px] font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity mb-1">
                  {day.minutes}m
                </span>
                <div className="w-full max-w-[36px] bg-[#fbf9f6] rounded-t-md h-full flex items-end overflow-hidden">
                  <div
                    className={`w-full rounded-t-md transition-all duration-500 ${
                      day.goalMet
                        ? "bg-[#a6332a] group-hover:bg-[#881e18]"
                        : "bg-[#e0dad0] group-hover:bg-[#d0c8bd]"
                    }`}
                    style={{ height: `${heightPercent}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-slate-700 mt-2">
                  {day.dayName}
                </span>
                <span className="text-[10px] text-slate-400 font-normal">
                  {day.date}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

