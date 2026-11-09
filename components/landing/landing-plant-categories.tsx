"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SafeImage } from "@/components/ui/safe-image";

interface PlantCardData {
  id: string;
  title: string;
  family: string;
  dotColor?: string;
  hasArrowTag?: boolean;
  shortDesc: string;
  fullDesc: string;
  image: string;
  imageAlt: string;
  gradientBg: string;
}

export function LandingPlantCategories() {
  const [activeCategory, setActiveCategory] = useState("Outdoor Plant");
  const [activeCardId, setActiveCardId] = useState<string>("pet-friendly");

  const categories = [
    "Outdoor Plant",
    "Indoor Plant",
    "Flower Pot",
    "Potted Plant",
  ];

  const cards: PlantCardData[] = [
    {
      id: "pet-friendly",
      title: "Pet Friendly Plants",
      family: "Piperaceae",
      dotColor: "bg-emerald-400",
      shortDesc: "Non-toxic and vibrant greenery safe for kids & pets.",
      fullDesc:
        "There are many houseplants options for your home that are non-toxic. These plants will add life to your home while keeping your kids and pets safe.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBKOFUw_e19PlRdqBqQjbSMK5BhrwMD8jRdcU-ltQVhfiIuNKx0cqr37SoB60xAZLTj8kv5zo16Pmpj4s29V9Io8t-wdZus0W7mm9Q6sKzkOf3loKkznWVpyAMjcaNmWXjMtKudm2p8ADr_oznV_vcFDtS3l8rcruVLqWaKxrRYFxXRRzMmBcIy3Me3js5Icfj12bG75Y50g5JUnTNPqwUNgbF8gjm0owqE7UrkJA",
      imageAlt: "Lush tropical leaves background",
      gradientBg: "from-black/80 via-black/40 to-black/30",
    },
    {
      id: "orchids",
      title: "Orchids",
      family: "Araceae",
      hasArrowTag: true,
      shortDesc: "Exotic blooms and bespoke flowering success items.",
      fullDesc:
        "Orchids are easily everyone's favorite flowering plant. Find rare species, breathtaking blooms, and essential orchid success items in this curated collection.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCbvDGpX5mOxjiJm9d_7Z_GNklFnZ1cmRSfUcEKYo8xa1Nn0hjc6wippavxESfiR6879eXpLa2nA6r3HxtUTGz0qNmk7RCKr_8Z1tWRQo8Ky4Gzv0-YjdhgMjQOedVVdm7NvS_-xHp6NOKg9aTJdo_eKV7NnV0blJZama4mOmL9U-ZF2zVFkNXQZUCP8S23AyYNDv_4DLmVm0pDMdYeTFtZcEBSJAUnFyTW1K1heA",
      imageAlt: "Exotic blooming orchid botanical specimen",
      gradientBg: "from-[#1b2b23]/95 via-[#121a16]/90 to-[#0a0f0d]/95",
    },
    {
      id: "succulents",
      title: "Succulents",
      family: "Moraceae",
      dotColor: "bg-emerald-300",
      shortDesc: "Architectural, resilient & low-maintenance houseplants.",
      fullDesc:
        "All succulents are cacti, but not all cacti are succulents. Both make remarkably resilient, sculptural houseplants that thrive with minimal watering.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyjdS-yAyxI3imc6kuSbsTk1LbOVBdHkdcWl7aGqvX54m_U-PfstP07KqB3tBePGSEpiBuwI8yl8RZicowsnsctHtrYJRYydX3OiM5tLaUpBAW8CTtvIThAaHK6uFBimZnlkNrxzzTjSVjp0FBog37S8ezSJ0fcKWCErxNP0jjyjJoh1trW3maJKqjB38ZVpn7qmxgR55TcX-Y4PlmlS39UvSrX9I8WkzmaT-GLg",
      imageAlt: "Geometric desert succulent in modern interior container",
      gradientBg: "from-[#242b26]/95 via-[#161c18]/90 to-[#0c100e]/95",
    },
  ];

  return (
    <section
      id="categories"
      className="w-full flex flex-col gap-5 pt-4 pb-12"
      data-purpose="plant-categories-section"
    >
      {/* Category Pills Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 w-full">
        <div className="flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all shadow-sm ${
                  isActive
                    ? "bg-black text-white scale-[1.02]"
                    : "bg-white text-neutral-800 border border-neutral-200 hover:border-black font-medium"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* See All link */}
        <Link
          className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 hover:border-black text-neutral-800 text-xs md:text-sm font-semibold tracking-wide transition-all inline-flex items-center gap-1.5"
          href="#all-plants"
        >
          <span>See All</span>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
          </svg>
        </Link>
      </div>

      {/* Interactive Expandable Bento Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
        {cards.map((card) => {
          const isOpen = activeCardId === card.id;

          return (
            <motion.div
              key={card.id}
              layout
              transition={{
                layout: { type: "spring", stiffness: 280, damping: 28 },
              }}
              onClick={() => {
                if (!isOpen) setActiveCardId(card.id);
              }}
              className={`relative rounded-[28px] md:rounded-[36px] overflow-hidden min-h-[380px] p-7 md:p-8 flex flex-col justify-between bg-neutral-900 group cursor-pointer transition-shadow duration-300 ${
                isOpen
                  ? "lg:col-span-6 shadow-xl ring-1 ring-white/10"
                  : "lg:col-span-3 hover:shadow-lg opacity-90 hover:opacity-100"
              }`}
            >
              {/* Card Background Image */}
              <SafeImage
                alt={card.imageAlt}
                className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out ${
                  isOpen ? "opacity-60" : "opacity-35"
                }`}
                fill
                sizes={isOpen ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 25vw"}
                src={card.image}
              />

              {/* Gradient Scrim */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${card.gradientBg} pointer-events-none`}
                aria-hidden="true"
              />

              {/* Card Header */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-[800] text-white tracking-tight">
                    {card.title}
                  </h3>
                  {!isOpen && (
                    <span className="text-[11px] font-medium text-white/50 block mt-1">
                      Click to expand
                    </span>
                  )}
                </div>

                {/* Right Action Button: Circle Arrow when open, subtle expand icon when compact */}
                {isOpen ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shrink-0 hover:scale-105 transition-transform shadow-md"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </motion.div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm text-white/70 flex items-center justify-center shrink-0 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Card Footer & Description */}
              <div className="relative z-10 space-y-4 pt-10">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="open-desc"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-lg font-normal">
                        {card.fullDesc}
                      </p>
                      <div className="w-full h-px bg-white/20 mt-4 mb-4" />
                    </motion.div>
                  ) : (
                    <motion.p
                      key="closed-desc"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-2"
                    >
                      {card.shortDesc}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Badge Tag */}
                <div className="flex items-center">
                  <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-white text-xs font-semibold tracking-wide">
                    {card.dotColor && (
                      <span className={`w-2 h-2 rounded-full ${card.dotColor}`} />
                    )}
                    {card.hasArrowTag && (
                      <svg
                        className="w-3.5 h-3.5 text-white/80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                    <span>{card.family}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
