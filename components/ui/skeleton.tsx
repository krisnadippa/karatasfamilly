"use client";

import React from "react";
import { Info, CheckCircle2, AlertTriangle, AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse bg-[#12303C]/8 rounded-xl", className)}
      {...props}
    />
  );
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 border border-[#EAE5DC] flex flex-col gap-4 shadow-xs",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <Skeleton className="w-10 h-10 rounded-full" />
        <Skeleton className="w-16 h-5 rounded-full" />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <Skeleton className="w-3/4 h-5 rounded-md" />
        <Skeleton className="w-full h-3.5 rounded-md" />
        <Skeleton className="w-2/3 h-3.5 rounded-md" />
      </div>
      <div className="flex items-center justify-between pt-4 mt-2 border-t border-[#EAE5DC]">
        <Skeleton className="w-24 h-4 rounded-md" />
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
}

export function Spinner({
  size = "md",
  color = "midnight",
  className,
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
      className={cn("animate-spin shrink-0", sizeMap[size], colorMap[color], className)}
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
  className,
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

  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className={cn(
        "w-full h-2.5 bg-[#12303C]/8 rounded-full overflow-hidden p-0.5",
        className
      )}
      role="progressbar"
      aria-valuenow={clampedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn("h-full rounded-full transition-all duration-300", colorMap[color])}
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
}

export type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  description: string;
  onClose?: () => void;
  className?: string;
}

export function Alert({
  variant = "info",
  title,
  description,
  onClose,
  className,
}: AlertProps) {
  const styles = {
    info: {
      wrapper: "bg-[#087FA0]/10 border-[#087FA0]/30 text-[#12303C]",
      icon: <Info className="w-5 h-5 text-[#087FA0] shrink-0" />,
    },
    success: {
      wrapper: "bg-[#20463D]/10 border-[#20463D]/30 text-[#12303C]",
      icon: <CheckCircle2 className="w-5 h-5 text-[#20463D] shrink-0" />,
    },
    warning: {
      wrapper: "bg-[#EBCC3D]/20 border-[#EBCC3D]/50 text-[#12303C]",
      icon: <AlertTriangle className="w-5 h-5 text-[#997C0D] shrink-0" />,
    },
    error: {
      wrapper: "bg-red-50 border-red-200 text-red-950",
      icon: <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />,
    },
  };

  const current = styles[variant];

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 p-4 rounded-xl border text-sm",
        current.wrapper,
        className
      )}
    >
      {current.icon}
      <div className="flex-1 flex flex-col gap-0.5">
        {title && <h5 className="font-semibold text-xs tracking-wide uppercase">{title}</h5>}
        <p className="text-xs leading-relaxed opacity-90">{description}</p>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="text-current opacity-60 hover:opacity-100 transition-opacity p-0.5"
          aria-label="Close alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
