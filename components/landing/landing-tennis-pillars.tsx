"use client";

import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/safe-image";

export function LandingTennisPillars() {
  const cardsData = [
    {
      id: "pillar-faith",
      type: "text",
      bgColor: "bg-[#EEF5C9]",
      title: "Faith",
      description: "Building everything upon faith and values.",
    },
    {
      id: "img-racket",
      type: "image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI9-fQ8l-5cuRGc2Tj0nKKteVhvwqSEPsI5l4POJnKzDfapPXJZAUPqg-O5EJbAl7Op9D4eA-Z8ZogqFIx0u2zz10XTxxP47siMIz7qQphLBTLB5ugVkyKCIh5z8L2PjcQO5GDS_XNUYapm3MZYhe8t2l9Jl8R9c0jlq3Y4hWgOhc5RTh1-5KZIGR-20tn2PUvF1XyYtPkBXs8wsApvATSdFGNOE7K1VMRmZF4fQ",
      alt: "Pillar visualization of precision and sport",
    },
    {
      id: "pillar-family",
      type: "text",
      bgColor: "bg-[#FBFBF9]",
      title: "Family",
      description: "Growing together through meaningful connections.",
    },
    {
      id: "img-player-action",
      type: "image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0OwbtFTCFr76ghyr-Ltu-xCWDhHWJ6RSuTgX2WqvucuBXI_SBVRtSgNGn_mLxXSjJYgK7X1T_BjHgClAxrGRc2G12X9f0GLOPeUeZoG-IR3h4Mqg_F5a-izHhs8SayeTY0Ku69ET5SGje97HblHOjjIXdIYzpJV6QvQkcnYiTFnfGgdPZYgGScavzaZMfYmqGhwgaaGgx6Cffxlc-qLAMIn3Z6mNztzdASi6RLQ",
      alt: "Dynamic active momentum of movement and growth",
    },
    {
      id: "img-bottle-balls",
      type: "image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhLjkYMANM-ZhPWTike6gNtQneqmmnMjWK0Jbk3gulG9gdu85uZWba2tAb7TPYPKMMD4WpJrJZxqabwkEg_nqGI3TrDRzGjLCN9AHXhYSzgodtrvWdGJtW3lK6Nc_aEbQ9lyltzYKL0c0lg6O1fEbKUTvUbdf3DSEHg9mAbsbfk8qYpt0YXPgNe5QaokdqmcA6ZuI2ZEnZSySaXbFZfDaX07qH7eGYDK5oKyVmEQ",
      alt: "Reflective wellness and mindful pause",
    },
    {
      id: "pillar-freedom",
      type: "text",
      bgColor: "bg-[#FBFBF9]",
      title: "Freedom",
      description: "Encouraging independence and creativity.",
    },
    {
      id: "img-players-smiling",
      type: "image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfxOSrP-3_ZUiAUbCZJxGWKvVtO_X-85frsPVU0u2M4OPvdiEqjfSP0hAPKRnjWFiDNP4Qs6WfNHzP5-XpKqlF_1hUzr7h8OGX6XKTojr3JOv5vG1MtiYl9kgOrHm6_d1bzO8boE5XOTBrvgVR5rlNXNMX7fUR9m3exwkHkNKefqfjkChb2fUUwx3ldUJ-oNan-h-8hoOgWZN-x_ToNA7mzvrib__vzr5ffOgn1A",
      alt: "Joyful collaboration and community bonding",
    },
    {
      id: "pillar-future",
      type: "text",
      bgColor: "bg-[#EEF5C9]",
      title: "Future",
      description: "Creating opportunities for generations ahead.",
    },
  ];

  return (
    <section
      id="pillars"
      className="w-full rounded-[28px] md:rounded-[36px] py-16 md:py-24 px-4 md:px-8 lg:px-12 flex flex-col items-center bg-white overflow-hidden"
      data-purpose="four-pillars-section"
    >
      {/* Section Header with Consistent Unified Typography */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 text-neutral-900 border border-neutral-200/60 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#111111]" />
          <span className="text-[11px] font-bold tracking-[0.14em] uppercase">
            Our Four Pillars
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-[50px] leading-[1.1] tracking-tight mb-5">
          <span className="font-extrabold text-neutral-950">
            Our Four Pillars,
          </span>
          <br />
          <span className="font-light text-neutral-400">
            foundations for life.
          </span>
        </h2>
        <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-neutral-500 max-w-xl mx-auto font-normal">
          Faith, Family, Freedom, and Future form the cornerstone of our community.
          Empowering lives, authentic connections, and sustainable opportunities
          for generations ahead.
        </p>
      </div>

      {/* 3D Perspective Card Grid Container */}
      <div
        style={{ perspective: 1400 }}
        className="w-full max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 md:gap-1 bg-neutral-200/50 rounded-2xl overflow-hidden shadow-sm"
      >
        {cardsData.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{
              opacity: 0,
              rotateY: 85,
              scale: 0.88,
            }}
            whileInView={{
              opacity: 1,
              rotateY: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ scale: 1.015 }}
            className="aspect-square relative overflow-hidden transition-shadow"
          >
            {card.type === "text" ? (
              <div
                className={`${card.bgColor} p-7 md:p-8 flex flex-col justify-start h-full w-full`}
              >
                <h3 className="font-extrabold text-neutral-950 text-xl md:text-2xl mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs md:text-[13.5px] text-neutral-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            ) : (
              <div className="bg-neutral-100 w-full h-full relative group">
                <SafeImage
                  alt={card.alt || "Pillars imagery"}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  src={card.src || ""}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
