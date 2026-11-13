"use client";

import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered" | "accent" | "cream" | "midnight";
  isInteractive?: boolean;
}

export function Card({
  children,
  variant = "default",
  isInteractive = false,
  className = "",
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-white border border-[#EAE5DC] shadow-xs",
    elevated: "bg-white border border-[#EAE5DC] shadow-[0_8px_30px_rgb(18,48,60,0.08)]",
    bordered: "bg-white border-2 border-[#12303C]/15 shadow-none",
    accent: "bg-white border-l-4 border-l-[#087FA0] border-t border-r border-b border-[#EAE5DC] shadow-xs",
    cream: "bg-[#FAF8F5] border border-[#EAE5DC] shadow-xs",
    midnight: "bg-[#12303C] text-white border border-[#1A4252] shadow-md",
  };

  const interactiveStyles = isInteractive
    ? "transition-all duration-300 hover:shadow-[0_12px_36px_-4px_rgba(18,48,60,0.12)] hover:-translate-y-1 cursor-pointer"
    : "";

  return (
    <div
      className={`rounded-[24px] overflow-hidden p-6 md:p-8 flex flex-col justify-between ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 mb-4 ${className}`}>{children}</div>
  );
}

export function CardTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`text-xl md:text-2xl font-extrabold tracking-tight text-inherit leading-snug ${className}`}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs md:text-sm text-[#70695E] dark:text-neutral-400 leading-relaxed font-normal ${className}`}
    >
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`flex-1 my-2 ${className}`}>{children}</div>;
}

export function CardFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 pt-4 mt-auto border-t border-[#EAE5DC] ${className}`}
    >
      {children}
    </div>
  );
}
