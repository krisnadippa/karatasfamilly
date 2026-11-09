"use client";

import Link from "next/link";
import { useState } from "react";

export function LandingCtaAndFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <div
      className="w-full flex flex-col gap-6"
      data-purpose="cta-and-footer-container"
    >
      {/* CTA Banner */}
      <div
        className="relative w-full rounded-[32px] overflow-hidden py-16 md:py-20 px-6 md:px-12 text-center text-white flex flex-col items-center justify-center shadow-lg"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, #ff833e 0%, #f15524 45%, #d83a06 100%)",
        }}
      >
        {/* Subtle ambient lighting glow circles */}
        <div
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-amber-300 opacity-20 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-orange-400 opacity-30 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Menumbuhkan Generasi Berkarakter, Berdaya &amp; Berkelanjutan
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-white/90 font-normal mt-4 leading-relaxed">
            Bergabunglah dalam perjalanan ekosistem Karatas Family. Mengintegrasikan nilai-nilai luhur filosofis dengan inovasi digital mutakhir.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-neutral-900 bg-white shadow-md hover:bg-neutral-100 hover:scale-105 transition-all text-sm sm:text-base group"
              href="/k4book"
            >
              <span>Explore K4Book Sanctuary</span>
              <svg
                className="w-4 h-4 text-neutral-900 group-hover:translate-x-0.5 transition-transform"
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
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-white rounded-[28px] md:rounded-[36px] p-8 md:p-14 flex flex-col gap-12">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link className="flex items-center select-none" href="/">
              <span className="text-xl font-[900] tracking-wider text-neutral-900 uppercase">
                Karatas Family
              </span>
            </Link>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
              Karatas Family — Ekosistem terintegrasi yang berlandaskan nilai-nilai luhur filosofi, keluhuran budi pekerti, dan dedikasi karya berkelanjutan untuk masa depan.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-neutral-400">
              {/* Instagram */}
              <a
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-black hover:border-black transition-colors"
                href="#instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-black hover:border-black transition-colors"
                href="#linkedin"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              {/* Telegram */}
              <a
                aria-label="Telegram"
                className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:text-black hover:border-black transition-colors"
                href="#telegram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.718-3.844 16.14-3.844 16.14s-.144.359-.444.382c-.3.023-.623-.174-.623-.174l-4.717-3.608-2.316 2.228c-.24.23-.443.23-.443.23l.348-4.887 8.932-8.067c.389-.345-.084-.537-.599-.196L7.15 14.34l-4.743-1.48s-.383-.12-.407-.442c-.024-.323.395-.49.395-.49l18.572-7.16s.731-.286 1.01.077c.28.362.155.836.155.836z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-semibold text-neutral-900 text-sm">Navigasi</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-neutral-500 font-normal">
              <li>
                <Link className="hover:text-black transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black transition-colors"
                  href="#about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black transition-colors"
                  href="#categories"
                >
                  Living &amp; Values
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black transition-colors"
                  href="#pillars"
                >
                  Four Pillars
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black transition-colors"
                  href="#philosophy"
                >
                  KARATAS Philosophy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Ecosystem (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-semibold text-neutral-900 text-sm">Ekosistem</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-neutral-500 font-normal">
              <li>
                <Link
                  className="hover:text-black transition-colors font-medium text-neutral-900"
                  href="/k4book"
                >
                  K4Book ↗
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black transition-colors"
                  href="#ecosystem"
                >
                  RANI AI
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black transition-colors"
                  href="#ecosystem"
                >
                  K4Craft
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black transition-colors"
                  href="#ecosystem"
                >
                  K4Studio
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black transition-colors"
                  href="#ecosystem"
                >
                  K4Farm
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-semibold text-neutral-900 text-sm">
              Warta Karatas
            </h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Dapatkan pembaruan berkala tentang peluncuran ekosistem, publikasi nilai, dan inisiatif baru.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-2 relative flex items-center bg-neutral-100 rounded-full p-1 pl-4 border border-neutral-200 focus-within:border-neutral-400 transition-colors"
            >
              <input
                className="bg-transparent border-none p-0 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-0 w-full pr-2"
                placeholder={
                  subscribed ? "Terima kasih!" : "Alamat email"
                }
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="shrink-0 inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#f15524] text-white text-xs font-semibold hover:bg-[#d83a06] transition-colors shadow-sm"
                type="submit"
              >
                <span>Daftar</span>
                <svg
                  className="w-3 h-3"
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
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Legal row */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>© {new Date().getFullYear()} Karatas Family. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link
              className="hover:text-neutral-700 transition-colors"
              href="#privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="hover:text-neutral-700 transition-colors"
              href="#terms"
            >
              Terms of Service
            </Link>
            <Link
              className="hover:text-neutral-700 transition-colors"
              href="#security"
            >
              Security
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
