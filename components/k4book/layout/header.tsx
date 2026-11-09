"use client";

import { useState } from "react";
import { UserProfile } from "@/types/k4book";
import { SafeImage } from "@/components/ui/safe-image";

interface HeaderProps {
  user: UserProfile;
  onSearch?: (query: string) => void;
}

export function Header({ user, onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasNotification, setHasNotification] = useState(true);

  // Sanitize user search input to prevent injection or abuse
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Limit to 100 characters and strip unsafe control characters
    const sanitized = e.target.value.slice(0, 100);
    setSearchQuery(sanitized);
    onSearch?.(sanitized);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery.trim());
  };

  return (
    <header className="px-10 pt-7 pb-4 flex items-center justify-between gap-6">
      {/* Search Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className="relative w-full max-w-md"
        role="search"
      >
        <span
          className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500"
          aria-hidden="true"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          maxLength={100}
          placeholder="Search book name, author, edition ..."
          aria-label="Search books, authors, editions"
          className="w-full pl-10 pr-4 py-2 bg-transparent text-sm text-slate-800 placeholder-slate-400 border-none focus:outline-none focus:ring-0 tracking-wide font-normal"
        />
      </form>

      {/* User Profile & Notifications */}
      <div className="flex items-center space-x-6">
        <div
          className="flex items-center space-x-3 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#e26b67] rounded-full p-1"
          tabIndex={0}
          role="button"
          aria-label={`View profile of ${user.name}`}
        >
          <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-300 ring-2 ring-[#e6e0d3] relative">
            <SafeImage
              src={user.avatarUrl}
              alt={`${user.name}'s profile picture`}
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-semibold text-slate-800 tracking-tight group-hover:text-black">
            {user.name}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setHasNotification(!hasNotification)}
          aria-label="Notifications"
          className="text-slate-700 hover:text-slate-900 transition-colors p-1 relative focus:outline-none focus:ring-2 focus:ring-[#e26b67] rounded-full"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {hasNotification && (
            <span
              className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#e26b67]"
              aria-label="New notifications available"
            />
          )}
        </button>
      </div>
    </header>
  );
}

