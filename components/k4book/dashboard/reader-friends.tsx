"use client";

import Link from "next/link";
import { ReaderFriend } from "@/types/k4book";
import { SafeImage } from "@/components/ui/safe-image";

interface ReaderFriendsProps {
  friends: ReaderFriend[];
  onSelectFriend?: (friend: ReaderFriend) => void;
}

export function ReaderFriends({ friends, onSelectFriend }: ReaderFriendsProps) {
  return (
    <section className="pt-2" aria-labelledby="reader-friends-heading">
      <div className="flex items-center justify-between mb-4">
        <h3
          id="reader-friends-heading"
          className="text-lg font-bold text-slate-900 tracking-tight"
        >
          Reader Friends
        </h3>
        <Link
          href="#see-all-friends"
          className="text-xs font-semibold text-[#e26b67] hover:underline decoration-1 underline-offset-2 transition-colors focus:outline-none focus:ring-1 focus:ring-[#e26b67] rounded"
        >
          See all
        </Link>
      </div>

      <div className="space-y-3">
        {friends.map((friend) => (
          <div
            key={friend.id}
            onClick={() => onSelectFriend?.(friend)}
            tabIndex={0}
            role="button"
            aria-label={`Friend: ${friend.name}, currently ${friend.activity}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectFriend?.(friend);
              }
            }}
            className="flex items-center justify-between p-2 rounded-xl hover:bg-[#eae4d8]/50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e26b67]"
          >
            <div className="flex items-center space-x-3 min-w-0">
              {/* Avatar or Initials Fallback */}
              {friend.avatarUrl ? (
                <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-300 ring-2 ring-[#e6e0d3] flex-shrink-0 relative">
                  <SafeImage
                    src={friend.avatarUrl}
                    alt={`${friend.name}'s profile avatar`}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#fae1be] text-[#881e18] font-bold text-xs flex items-center justify-center ring-2 ring-[#e6e0d3] flex-shrink-0">
                  {friend.initials || friend.name.slice(0, 2).toUpperCase()}
                </div>
              )}

              <div className="min-w-0">
                <h5 className="text-xs font-bold text-slate-900 truncate">
                  {friend.name}
                </h5>
                <p className="text-[11px] text-slate-500 truncate">
                  {friend.activity}
                </p>
              </div>
            </div>

            <span className="text-[10px] text-slate-400 font-medium ml-2 flex-shrink-0">
              {friend.timeAgo}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
