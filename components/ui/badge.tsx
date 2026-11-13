"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "midnight"
  | "forest"
  | "teal"
  | "goldenrod"
  | "gold"
  | "cream"
  | "outline"
  | "destructive"
  | "success";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  midnight: "bg-[#12303C] text-white border-transparent",
  forest: "bg-[#20463D] text-white border-transparent",
  teal: "bg-[#087FA0] text-white border-transparent",
  goldenrod: "bg-[#EBCC3D] text-[#12303C] font-semibold border-transparent",
  gold: "bg-[#DFC54E]/20 text-[#12303C] border-[#DFC54E]/40",
  cream: "bg-[#FBF8F0] text-[#12303C] border-[#EAE5DC]",
  outline: "bg-transparent text-[#12303C] border-[#12303C]/20",
  destructive: "bg-red-50 text-red-700 border-red-200 font-medium",
  success: "bg-emerald-50 text-emerald-800 border-emerald-200 font-medium",
};

const dotColors: Record<BadgeVariant, string> = {
  midnight: "bg-white",
  forest: "bg-[#EBCC3D]",
  teal: "bg-white",
  goldenrod: "bg-[#12303C]",
  gold: "bg-[#DFC54E]",
  cream: "bg-[#087FA0]",
  outline: "bg-[#12303C]",
  destructive: "bg-red-600",
  success: "bg-emerald-600",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[10px] px-2 py-0.5 font-medium gap-1",
  md: "text-xs px-2.5 py-1 font-medium gap-1.5",
  lg: "text-sm px-3.5 py-1.5 font-semibold gap-2",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "cream",
  size = "md",
  dot = false,
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border tracking-wide select-none transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};
