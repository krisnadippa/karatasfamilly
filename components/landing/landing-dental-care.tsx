"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface PhilosophyCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  borderColor?: string;
  ringColor: string;
  icon: React.ReactNode;
  tag: string;
}

export function LandingDentalCare() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const baseItems: PhilosophyCard[] = [
    {
      id: "keimanan",
      number: "01",
      title: "Keimanan",
      subtitle: "Fondasi Spiritual",
      description:
        "Keteguhan spiritual yang menjiwai setiap niat dan gerak langkah, meletakkan pengabdian tertinggi hanya kepada Sang Pencipta.",
      bgColor: "bg-[#E0EBD6]",
      ringColor: "border-[#d5e2c8]",
      tag: "Faith & Belief",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z"
          />
        </svg>
      ),
    },
    {
      id: "akhlak",
      number: "02",
      title: "Akhlak",
      subtitle: "Keluhuran Budi",
      description:
        "Ketinggian adab, kejujuran, kerendahan hati, dan rasa hormat yang menjadi kompas moral dalam setiap tutur kata dan karya.",
      bgColor: "bg-white",
      borderColor: "border-neutral-200/90",
      ringColor: "border-neutral-100",
      tag: "Noble Character",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: "rasa-ingin-tahu",
      number: "03",
      title: "Rasa Ingin Tahu",
      subtitle: "Eksplorasi Tanpa Batas",
      description:
        "Dahaga intelektual dan kegairahan belajar tiada henti untuk meretas batas keilmuan serta menemukan solusi inovatif.",
      bgColor: "bg-[#EBF2FA]",
      ringColor: "border-[#dae7f5]",
      tag: "Curiosity & Intellect",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"
          />
        </svg>
      ),
    },
    {
      id: "ambisi",
      number: "04",
      title: "Ambisi",
      subtitle: "Daya Dorong Visioner",
      description:
        "Keberanian menetapkan standar mutu tertinggi dan menggapai impian besar untuk memberi kontribusi nyata bagi peradaban.",
      bgColor: "bg-[#FDEED9]",
      ringColor: "border-[#f5dec0]",
      tag: "Visionary Drive",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      id: "tanggung-jawab",
      number: "05",
      title: "Tanggung Jawab",
      subtitle: "Integritas & Akuntabilitas",
      description:
        "Keberanian mengemban risiko, kedisiplinan diri yang kokoh, dan dedikasi penuh untuk menuntaskan setiap mandat.",
      bgColor: "bg-[#ECEAF6]",
      ringColor: "border-[#ded9ee]",
      tag: "Accountability",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: "amanah",
      number: "06",
      title: "Amanah",
      subtitle: "Kekuatan Kepercayaan",
      description:
        "Menjaga titipan kepercayaan dengan segenap jiwa raga, menjunjung kejujuran, dan teguh menepati janji dalam setiap keadaan.",
      bgColor: "bg-[#F5F3EC]",
      ringColor: "border-[#eae6da]",
      tag: "Fidelity & Trust",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 11V7a5 5 0 0110 0v4"
          />
        </svg>
      ),
    },
    {
      id: "sustainability",
      number: "07",
      title: "Sustainability",
      subtitle: "Kelestarian Generasi",
      description:
        "Harmoni jangka panjang dengan alam semesta, merawat ekosistem hidup, dan mewariskan bumi yang lestari untuk masa depan.",
      bgColor: "bg-[#E4ECE7]",
      ringColor: "border-[#d2ded6]",
      tag: "Living Harmony",
      icon: (
        <svg
          className="w-5 h-5 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
  ];

  // 5 cycles = 35 items for flawless infinite continuous gliding
  const totalBase = baseItems.length;
  const loopCycles = 5;
  const infiniteCards = Array.from({ length: loopCycles }, () => baseItems).flat();

  // Start in the exact center cycle (Cycle 2, index 14)
  const initialIndex = totalBase * 2;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isInstantJump, setIsInstantJump] = useState(false);

  // Measure container width dynamically on mount and resize
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      setContainerWidth(el.offsetWidth);
    };

    updateWidth();
    const observer = new ResizeObserver(() => updateWidth());
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // Determine visible cards count & gap based on responsive width
  const visibleCount = containerWidth >= 1024 ? 3 : containerWidth >= 640 ? 2 : 1;
  const gap = containerWidth >= 1024 ? 24 : 16;
  const cardWidth = containerWidth > 0
    ? (containerWidth - (visibleCount - 1) * gap) / visibleCount
    : 340;
  const step = cardWidth + gap;

  // Next: shift the continuous ribbon to the left by 1 card
  const handleNext = useCallback(() => {
    setIsInstantJump(false);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Prev: shift the continuous ribbon to the right by 1 card
  const handlePrev = useCallback(() => {
    setIsInstantJump(false);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Silent infinite wrap-around teleport after transition completes
  const handleAnimationComplete = () => {
    if (currentIndex >= totalBase * 3) {
      setIsInstantJump(true);
      setCurrentIndex((prev) => prev - totalBase);
    } else if (currentIndex < totalBase) {
      setIsInstantJump(true);
      setCurrentIndex((prev) => prev + totalBase);
    }
  };

  // Re-enable smooth transitions immediately after silent teleport
  useEffect(() => {
    if (isInstantJump) {
      const raf = requestAnimationFrame(() => {
        setIsInstantJump(false);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isInstantJump]);

  // Active highlighted card index in the original 7 items
  const activeVirtueIndex = ((currentIndex + (visibleCount === 3 ? 1 : 0)) % totalBase + totalBase) % totalBase;

  return (
    <section
      id="philosophy"
      className="w-full bg-white rounded-[28px] md:rounded-[36px] py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center overflow-hidden"
      data-purpose="philosophy-section"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-10 md:mb-14">
        {/* KARATAS Philosophy Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-900 border border-neutral-200/60 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#111111]" />
          <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
            KARATAS Philosophy
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-[50px] leading-[1.1] tracking-tight mb-5">
          <span className="font-extrabold text-neutral-950">
            Everything your smile needs,
          </span>
          <br />
          <span className="font-light text-neutral-400">
            all in one calm place.
          </span>
        </h2>
        <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-neutral-500 max-w-xl font-normal">
          From everyday checkups to complete smile transformations, we make
          every visit simple and reassuring.
        </p>
      </div>

      {/* Clean Controls Header */}
      <div className="w-full max-w-6xl flex items-center justify-between mb-8 px-2 sm:px-4">
        <span className="text-xs font-bold tracking-wider uppercase text-neutral-900">
          7 Nilai Filosofi
        </span>

        {/* Previous / Next Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Geser ke kiri"
            className="w-11 h-11 rounded-full border border-neutral-200 bg-white hover:bg-neutral-900 hover:text-white hover:scale-105 active:scale-95 flex items-center justify-center text-neutral-800 transition-all shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Geser ke kanan"
            className="w-11 h-11 rounded-full border border-neutral-200 bg-white hover:bg-neutral-900 hover:text-white hover:scale-105 active:scale-95 flex items-center justify-center text-neutral-800 transition-all shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* CONTINUOUS CONNECTED RIBBON CAROUSEL (Smooth 1-by-1 in/out translation) */}
      <div
        ref={containerRef}
        className="w-full max-w-6xl overflow-hidden py-4 select-none"
      >
        <motion.div
          animate={{ x: -currentIndex * step }}
          initial={false}
          transition={
            isInstantJump
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: 170,
                  damping: 24,
                  mass: 0.85,
                }
          }
          onAnimationComplete={handleAnimationComplete}
          className="flex items-stretch"
          style={{ gap: `${gap}px` }}
        >
          {infiniteCards.map((card, i) => {
            const isLeft = visibleCount === 3 && i === currentIndex;
            const isRight = visibleCount === 3 && i === currentIndex + 2;

            return (
              <div
                key={`${card.id}-${i}`}
                style={{ width: `${cardWidth}px` }}
                onClick={() => {
                  if (isLeft) handlePrev();
                  if (isRight) handleNext();
                }}
                className={`relative shrink-0 ${card.bgColor} ${
                  card.borderColor ? `border ${card.borderColor}` : ""
                } rounded-[26px] md:rounded-[30px] p-7 md:p-8 flex flex-col justify-between min-h-[420px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer`}
              >
                {/* Background Concentric Rings Decor */}
                <div
                  className={`absolute -top-12 -right-12 w-64 h-64 rounded-full border-[28px] ${card.ringColor} pointer-events-none opacity-60`}
                  aria-hidden="true"
                />
                <div
                  className={`absolute -top-4 -right-4 w-44 h-44 rounded-full border-[20px] ${card.ringColor} pointer-events-none opacity-40`}
                  aria-hidden="true"
                />

                {/* Top Row: Icon badge + Tag + Number (No highlight tag) */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-13 h-13 rounded-full bg-white flex items-center justify-center text-neutral-800 shadow-sm border border-neutral-100/80">
                    {card.icon}
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/5 text-neutral-600">
                      {card.tag}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500 tracking-wider">
                      {card.number}
                    </span>
                  </div>
                </div>

                {/* Bottom Content: Title, Subtitle, Description, Link */}
                <div className="relative z-10 pt-12 flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                    {card.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-[26px] font-bold text-neutral-900 tracking-tight mb-3.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] leading-relaxed text-neutral-600 mb-6 font-normal">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <Link
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:gap-2.5 transition-all w-fit"
                      href="#philosophy"
                    >
                      <span>Pelajari Nilai</span>
                      <span className="text-sm" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 7 Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {baseItems.map((item, idx) => {
          const isCenterActive = activeVirtueIndex === idx;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                const diff = idx - activeVirtueIndex;
                setIsInstantJump(false);
                setCurrentIndex((prev) => prev + diff);
              }}
              title={item.title}
              aria-label={`Lihat nilai ${item.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                isCenterActive
                  ? "w-8 bg-neutral-900"
                  : "w-2 bg-neutral-200 hover:bg-neutral-400"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
