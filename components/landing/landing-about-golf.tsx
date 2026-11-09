"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { SafeImage } from "@/components/ui/safe-image";

interface ScrollWordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  isEmphasized?: boolean;
}

function ScrollWord({ word, range, progress, isEmphasized }: ScrollWordProps) {
  // Gradual color and opacity transition from muted light gray to deep black
  const opacity = useTransform(progress, range, [0.22, 1]);
  const color = useTransform(
    progress,
    range,
    isEmphasized ? ["#c4c4c4", "#111111"] : ["#d6d6d6", "#1c1c1c"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className={`inline-block mr-[0.25em] transition-colors duration-75 ${
        isEmphasized ? "font-extrabold" : "font-semibold"
      }`}
    >
      {word}
    </motion.span>
  );
}

export function LandingAboutGolf() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center 45%"],
  });

  // Expanded and well-balanced editorial statement for Karatas Family
  const aboutText =
    "We are Karatas Family, a dedicated sanctuary crafted for mindful living, intellectual curiosity, and enduring craftsmanship. Rooted in spiritual integrity, high ambition, and noble character, we build meaningful spaces, digital experiences, and sustainable futures that inspire generations.";

  const words = aboutText.split(" ");

  return (
    <section
      id="about"
      ref={containerRef}
      className="w-full rounded-[28px] md:rounded-[36px] py-16 px-6 md:px-12 lg:px-16 bg-white transition-all"
      data-purpose="about-golf-section"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Section Pill with Consistent Styling */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-900 border border-neutral-200/60 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#111111]" />
          <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
            About Karatas Family
          </span>
        </div>

        {/* Scroll-driven Text Reveal Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[38px] leading-[1.28] tracking-tight font-bold max-w-3xl mb-12 select-none">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = Math.min(1, start + 1.8 / words.length);
            const isEmphasized =
              i < 7 || (i >= 22 && i <= 34) || i >= words.length - 8;

            return (
              <ScrollWord
                key={`${word}-${i}`}
                word={word}
                range={[start, end]}
                progress={scrollYProgress}
                isEmphasized={isEmphasized}
              />
            );
          })}
        </h2>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-8 pt-4">
        {/* Left side: Two rounded square images */}
        <div className="flex items-center gap-4">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl md:rounded-[22px] overflow-hidden shadow-sm shrink-0 bg-neutral-200 relative group">
            <SafeImage
              alt="Close-up shot of a black golf putter head lined up against a white golf ball on green turf"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              fill
              sizes="(max-width: 640px) 144px, 176px"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiTT7hDp2iNIyAoWF_4fybD5IIA-Txvby7lHsenE2LnZ_2nlJVdUWgnF9dMNBePB-GshKhnx67jBp7uZBIhH9Bw6LdEIasQ7NB19JUosbXWSN_H9K0iTHowoTtSQBddllMKnQ-eHeMgy9LeLwRXJSSttp1iEBKMWzx0RWJfHyltI8IUrt3UCiRhSZJiIjYZ-rI7rubxK31tKB423hRxnlBXTIJ3sE4_rhrIwjALg"
            />
          </div>
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl md:rounded-[22px] overflow-hidden shadow-sm shrink-0 bg-neutral-200 relative group">
            <SafeImage
              alt="A couple practicing golf swing together on a scenic expansive green golf course fairway"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              fill
              sizes="(max-width: 640px) 144px, 176px"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYt3_RGJUV-dlpgXI8vY_i4JqWBLDAG6awNVAMJm6ljgw0vn3pdkhbByC5LlkV8fGsm3L9M8LmYZj1W0qAGJBNd9nOxmqAhjmU0r6jTiSclR47wk8eeoxYiycMfzCKYwTqyKNbEBFblqyLegoPfyIhCJJda_pnKuqSCAdgH72XPhzbKVMh1mLgyFHhIR1cHJNqykG6AIOSPKxblUT4re5IJkjniNo7QJZHLDTwLg"
            />
          </div>
        </div>

        {/* Right side: 4 circular feature icon buttons with labels */}
        <div className="flex items-center gap-5 sm:gap-7">
          {/* Unwind */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-neutral-700 shadow-sm border border-neutral-100 group-hover:scale-105 group-hover:border-neutral-300 transition-all">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600 tracking-tight group-hover:text-black transition-colors">
              Unwind
            </span>
          </div>

          {/* Play */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-neutral-700 shadow-sm border border-neutral-100 group-hover:scale-105 group-hover:border-neutral-300 transition-all">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600 tracking-tight group-hover:text-black transition-colors">
              Play
            </span>
          </div>

          {/* Games */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-neutral-700 shadow-sm border border-neutral-100 group-hover:scale-105 group-hover:border-neutral-300 transition-all">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 6l12 12M18 6L6 18M17 5l2 2-2 2M7 19l-2-2 2-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600 tracking-tight group-hover:text-black transition-colors">
              Games
            </span>
          </div>

          {/* Course */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-neutral-700 shadow-sm border border-neutral-100 group-hover:scale-105 group-hover:border-neutral-300 transition-all">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 11v8m-3 0h6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600 tracking-tight group-hover:text-black transition-colors">
              Course
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
