"use client";

import React from "react";

export function Skeleton({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse bg-[#12303C]/8 rounded-xl ${className}`}
      {...props}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-[24px] p-6 border border-[#EAE5DC] flex flex-col gap-4 shadow-xs">
      <div className="flex items-center justify-between">
        <Skeleton className="w-10 h-10 rounded-full" />
        <Skeleton className="w-16 h-5 rounded-full" />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <Skeleton className="w-3/4 h-6 rounded-md" />
        <Skeleton className="w-full h-4 rounded-md" />
        <Skeleton className="w-2/3 h-4 rounded-md" />
      </div>
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#EAE5DC]">
        <Skeleton className="w-24 h-4 rounded-md" />
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
}

export function Spinner({
  size = "md",
  color = "midnight",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  color?: "midnight" | "teal" | "forest" | "white";
  className?: string;
}) {
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const colorMap = {
    midnight: "text-[#12303C]",
    teal: "text-[#087FA0]",
    forest: "text-[#20463D]",
    white: "text-white",
  };

  return (
    <svg
      className={`animate-spin ${sizeMap[size]} ${colorMap[color]} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-20"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-80"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

export function ProgressBar({
  progress = 65,
  color = "teal",
  className = "",
}: {
  progress?: number;
  color?: "midnight" | "teal" | "forest" | "goldenrod";
  className?: string;
}) {
  const colorMap = {
    midnight: "bg-[#12303C]",
    teal: "bg-[#087FA0]",
    forest: "bg-[#20463D]",
    goldenrod: "bg-[#EBCC3D]",
  };

  return (
    <div
      className={`w-full bg-[#EAE5DC] h-2 rounded-full overflow-hidden ${className}`}
    >
      <div
        className={`h-full rounded-full transition-all duration-500 ease-out ${colorMap[color]}`}
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  );
}
