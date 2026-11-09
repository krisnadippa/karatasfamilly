"use client";

import { useState, useEffect } from "react";
import { explorePopularBooks } from "@/data/k4book/explore-data";

export function ReadingTimerCard() {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [selectedBookId, setSelectedBookId] = useState(explorePopularBooks[0].id);
  const [ambientSound, setAmbientSound] = useState("rain");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0 && interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const selectedBook =
    explorePopularBooks.find((b) => b.id === selectedBookId) ||
    explorePopularBooks[0];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eae6dd] flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Timer Display */}
      <div className="flex flex-col items-center md:items-start space-y-1">
        <span className="text-xs font-bold text-[#a6332a] uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#a6332a] animate-pulse" />
          Focus Reading Session
        </span>
        <div className="text-5xl font-bold font-serif-heading text-slate-900 tracking-tight py-1">
          {formatTime(seconds)}
        </div>
        <p className="text-xs text-slate-500 font-medium">
          Currently reading:{" "}
          <span className="font-bold text-slate-800">
            {selectedBook.title}
          </span>
        </p>
      </div>

      {/* Book & Ambience Controls */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Book Selector */}
        <div className="relative">
          <select
            value={selectedBookId}
            onChange={(e) => setSelectedBookId(e.target.value)}
            className="text-xs font-semibold text-slate-800 bg-[#fbf9f6] border border-[#eae6dd] rounded-full px-4 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-[#a6332a]"
          >
            {explorePopularBooks.map((b) => (
              <option key={b.id} value={b.id}>
                📖 {b.title}
              </option>
            ))}
          </select>
        </div>

        {/* Ambient Mode */}
        <select
          value={ambientSound}
          onChange={(e) => setAmbientSound(e.target.value)}
          className="text-xs font-semibold text-slate-800 bg-[#fbf9f6] border border-[#eae6dd] rounded-full px-3 py-2 pr-7 focus:outline-none focus:ring-1 focus:ring-[#a6332a]"
        >
          <option value="rain">🌧️ Rain on Glass</option>
          <option value="library">🏛️ Library Quiet</option>
          <option value="cafe">☕ Slow Cafe</option>
          <option value="fire">🪵 Fireplace</option>
        </select>

        {/* Start / Pause / Reset Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsActive(!isActive)}
            className={`px-5 py-2 rounded-full text-xs font-bold shadow transition-all ${
              isActive
                ? "bg-amber-600 hover:bg-amber-700 text-white"
                : "bg-[#a6332a] hover:bg-[#881e18] text-white"
            }`}
          >
            {isActive ? "Pause" : "Start Session"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            disabled={seconds === 0}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-[#efeeeb] text-slate-700 hover:bg-[#dedcd7] disabled:opacity-40 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

