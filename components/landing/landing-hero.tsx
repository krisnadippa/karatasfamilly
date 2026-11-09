import Link from "next/link";
import { SafeImage } from "@/components/ui/safe-image";

export function LandingHero() {
  return (
    <main
      className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-3.5"
      data-purpose="hero-bento-grid"
    >
      {/* LEFT COLUMN: Headline Card + Sub-category Cards (6 cols on lg) */}
      <div className="lg:col-span-6 flex flex-col gap-3 md:gap-3.5">
        {/* Top Editorial Headline Card */}
        <section
          className="bg-[#DCDAD4] rounded-[28px] md:rounded-[36px] p-7 md:p-10 lg:p-11 flex flex-col justify-between min-h-[380px] lg:h-[460px]"
          data-purpose="editorial-headline-card"
        >
          {/* Main Statement */}
          <div>
            <div className="flex items-center mb-1">
              <h1 className="text-4xl sm:text-5xl md:text-[56px] font-[900] tracking-tight-custom text-[#121212] hero-title">
                FOR
              </h1>
              <span
                className="editorial-arrow hidden sm:inline-flex"
                aria-hidden="true"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-[56px] font-[900] tracking-tight-custom text-[#121212] hero-title uppercase">
              EVERYONE BUT
              <br />
              NOTANYONE
            </h2>
          </div>

          {/* Bottom Subtext Statement */}
          <div className="max-w-md pt-8">
            <p className="text-[13.5px] sm:text-[14px] leading-relaxed font-medium text-neutral-700">
              We establish personal relationships with our boutiques, to make sure
              each is vetted for a stress-free shopping experience
            </p>
          </div>
        </section>

        {/* Bottom Grid: Two Category Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-3.5 flex-1 min-h-[260px]">
          {/* Sub-Card 1: #RIP STOP */}
          <div
            className="group relative rounded-[26px] md:rounded-[32px] overflow-hidden bg-neutral-300 min-h-[220px]"
            data-purpose="category-card-ripstop"
          >
            <SafeImage
              alt="Black technical bucket hat - Ripstop model"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyjdS-yAyxI3imc6kuSbsTk1LbOVBdHkdcWl7aGqvX54m_U-PfstP07KqB3tBePGSEpiBuwI8yl8RZicowsnsctHtrYJRYydX3OiM5tLaUpBAW8CTtvIThAaHK6uFBimZnlkNrxzzTjSVjp0FBog37S8ezSJ0fcKWCErxNP0jjyjJoh1trW3maJKqjB38ZVpn7qmxgR55TcX-Y4PlmlS39UvSrX9I8WkzmaT-GLg"
            />
            {/* Gradient Overlay for Legibility */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
            {/* Tag Badge */}
            <div className="absolute bottom-5 left-5 z-10">
              <span className="text-white font-[800] text-sm md:text-base tracking-wider uppercase">
                #RIP STOP
              </span>
            </div>
          </div>

          {/* Sub-Card 2: #INSULATED */}
          <div
            className="group relative rounded-[26px] md:rounded-[32px] overflow-hidden bg-[#596d62] min-h-[220px]"
            data-purpose="category-card-insulated"
          >
            <SafeImage
              alt="Green insulated dad cap"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbvDGpX5mOxjiJm9d_7Z_GNklFnZ1cmRSfUcEKYo8xa1Nn0hjc6wippavxESfiR6879eXpLa2nA6r3HxtUTGz0qNmk7RCKr_8Z1tWRQo8Ky4Gzv0-YjdhgMjQOedVVdm7NvS_-xHp6NOKg9aTJdo_eKV7NnV0blJZama4mOmL9U-ZF2zVFkNXQZUCP8S23AyYNDv_4DLmVm0pDMdYeTFtZcEBSJAUnFyTW1K1heA"
            />
            {/* Gradient Overlay for Legibility */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
            {/* Tag Badge */}
            <div className="absolute bottom-5 left-5 z-10">
              <span className="text-white font-[800] text-sm md:text-base tracking-wider uppercase">
                #INSULATED
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Large Featured Karatas Family Hero Card (6 cols on lg) */}
      <section
        className="lg:col-span-6 relative rounded-[28px] md:rounded-[36px] overflow-hidden min-h-[560px] lg:min-h-full flex flex-col justify-between p-6 md:p-8 bg-[#FBF8F1] border border-neutral-200/60 shadow-sm"
        data-purpose="hero-lifestyle-showcase"
      >
        {/* Karatas Family Hero Artwork */}
        <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-5 z-0">
          <SafeImage
            alt="Karatas Family - Karatas Familly warm contemporary illustration"
            className="w-full h-full object-contain object-center select-none"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/images/karatas-family-hero.jpg"
          />
        </div>

        {/* Soft bottom scrim overlay for buttons legibility */}
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/20 via-black/5 to-transparent z-[1] pointer-events-none"
          aria-hidden="true"
        />

        {/* Bottom Action Bar Controls */}
        <div
          className="relative z-10 w-full flex flex-wrap items-center justify-end gap-3 mt-auto pt-6"
          data-purpose="hero-footer-actions"
        >
          {/* Learn More Button with Arrow */}
          <Link
            className="inline-flex items-center gap-3 bg-white text-black pl-5 pr-1.5 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:bg-neutral-100 transition-all group"
            href="#about"
          >
            <span>LEARN MORE</span>
            <span
              className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-y-0.5 transition-transform"
              aria-hidden="true"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
              </svg>
            </span>
          </Link>

          {/* Contact Us Pill with Mail Icon */}
          <Link
            className="glass-pill inline-flex items-center gap-3 text-neutral-900 bg-white/80 backdrop-blur-md pl-5 pr-1.5 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:bg-white shadow-md group border border-white/60"
            href="#contact"
          >
            <span>CONTACT US</span>
            <span
              className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-105 transition-transform"
              aria-hidden="true"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>
      {/* END: Large Featured Lookbook Card */}
    </main>
  );
}
