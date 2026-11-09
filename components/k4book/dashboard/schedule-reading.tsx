"use client";

import { useState } from "react";
import { ScheduleDay } from "@/types/k4book";

interface ScheduleReadingProps {
  days: ScheduleDay[];
  onSelectDay?: (day: ScheduleDay) => void;
}

export function ScheduleReading({ days, onSelectDay }: ScheduleReadingProps) {
  // Default selected day is Tuesday 13
  const [selectedDayId, setSelectedDayId] = useState<string>("day-3");
  const [weekOffset, setWeekOffset] = useState<number>(0);

  const handleSelectDay = (day: ScheduleDay) => {
    setSelectedDayId(day.id);
    onSelectDay?.(day);
  };

  return (
    <section aria-labelledby="schedule-reading-heading">
      <div className="flex items-center justify-between mb-6">
        <h3
          id="schedule-reading-heading"
          className="text-xl font-bold text-slate-900 tracking-tight"
        >
          Schedule Reading
        </h3>

        {/* Previous / Next Week Navigation */}
        <div className="flex items-center space-x-3 text-slate-600">
          <button
            type="button"
            onClick={() => setWeekOffset((prev) => prev - 1)}
            aria-label="Previous week"
            className="hover:text-black transition-colors p-0.5 focus:outline-none focus:ring-2 focus:ring-[#e26b67] rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
            onClick={() => setWeekOffset((prev) => prev + 1)}
            aria-label="Next week"
            className="hover:text-black transition-colors p-0.5 focus:outline-none focus:ring-2 focus:ring-[#e26b67] rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
              aria-hidden="true"
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

      {/* 7-Day Week Selector */}
      <div className="grid grid-cols-7 gap-1 text-center" role="list">
        {days.map((day) => {
          const isSelected = selectedDayId === day.id;
          const isToday = day.isToday;

          return (
            <button
              key={day.id}
              type="button"
              onClick={() => handleSelectDay(day)}
              role="listitem"
              aria-label={`${day.dayName}, date ${day.dateNumber + weekOffset * 7}`}
              aria-current={isSelected ? "date" : undefined}
              className="flex flex-col items-center py-1 cursor-pointer group focus:outline-none focus:ring-1 focus:ring-[#e26b67] rounded-lg transition-transform"
            >
              <span
                className={`text-[11px] font-medium ${
                  isToday
                    ? "text-[#e26b67]"
                    : "text-slate-500 group-hover:text-slate-900"
                }`}
              >
                {day.dayName}
              </span>

              {isSelected ? (
                <span className="mt-2.5 w-7 h-7 rounded-full bg-[#eee9df] text-slate-900 font-bold text-sm flex items-center justify-center shadow-inner">
                  {day.dateNumber + weekOffset * 7}
                </span>
              ) : (
                <span
                  className={`mt-3 text-sm font-bold ${
                    isToday
                      ? "text-[#e26b67]"
                      : "text-slate-800 group-hover:text-black"
                  }`}
                >
                  {day.dateNumber + weekOffset * 7}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

