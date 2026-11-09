import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f9f7f2] flex flex-col items-center justify-center p-6 text-center text-slate-800 antialiased">
      <span className="text-xs font-bold text-[#e26b67] uppercase tracking-widest mb-2">
        404 — Page Not Found
      </span>
      <h1 className="text-4xl font-bold font-serif-heading text-slate-900 mb-3">
        Lost in the Sanctuary
      </h1>
      <p className="text-xs sm:text-sm text-slate-600 max-w-md mb-8 leading-relaxed">
        The page you are looking for might have been moved or does not exist.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-black transition-colors shadow-sm"
        >
          Return Home
        </Link>
        <Link
          href="/k4book"
          className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 text-xs font-semibold hover:border-slate-800 transition-colors"
        >
          K4Book Dashboard
        </Link>
      </div>
    </div>
  );
}

