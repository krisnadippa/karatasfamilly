"use client";

import React from "react";

export type BadgeVariant =
  | "midnight"
  | "forest"
  | "teal"
  | "goldenrod"
  | "gold"
  | "neutral"
  | "outline";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

export function Badge({
  children,
  variant = "neutral",
  size = "md",
  dot = false,
  className = "",
  ...props
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    midnight: "bg-[#12303C] text-white border border-transparent",
    forest: "bg-[#20463D]/10 text-[#20463D] border border-[#20463D]/20",
    teal: "bg-[#087FA0]/10 text-[#087FA0] border border-[#087FA0]/20",
    goldenrod: "bg-[#EBCC3D]/15 text-[#12303C] border border-[#EBCC3D]/30 font-bold",
    gold: "bg-[#DFC54E]/15 text-[#12303C] border border-[#DFC54E]/30",
    neutral: "bg-black/5 text-[#12303C] border border-black/8",
    outline: "bg-transparent text-[#12303C] border border-[#EAE5DC]",
  };

  const dotColors: Record<BadgeVariant, string> = {
    midnight: "bg-white",
    forest: "bg-[#20463D]",
    teal: "bg-[#087FA0]",
    goldenrod: "bg-[#EBCC3D]",
    gold: "bg-[#DFC54E]",
    neutral: "bg-[#70695E]",
    outline: "bg-[#12303C]",
  };

  const sizeStyles: Record<BadgeSize, string> = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-[11px] px-2.5 py-1 gap-1.5",
    lg: "text-xs px-3.5 py-1.5 gap-2",
  };

  return (
    <span
      className={`inline-flex items-center font-bold tracking-wider uppercase rounded-full select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
