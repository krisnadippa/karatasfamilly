"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type CardVariant =
  | "default"
  | "elevated"
  | "bordered"
  | "midnight"
  | "forest"
  | "cream"
  | "accent";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  interactive?: boolean;
}

const cardVariants: Record<CardVariant, string> = {
  default: "bg-white border border-[#EAE5DC] text-[#12303C]",
  elevated:
    "bg-white border border-[#EAE5DC]/60 shadow-lg shadow-[#12303C]/5 text-[#12303C]",
  bordered: "bg-transparent border-2 border-[#12303C]/15 text-[#12303C]",
  midnight: "bg-[#12303C] text-white border border-white/10",
  forest: "bg-[#20463D] text-white border border-white/10",
  cream: "bg-[#FAF8F5] border border-[#EAE5DC] text-[#12303C]",
  accent:
    "bg-white border-l-4 border-l-[#087FA0] border-y border-r border-[#EAE5DC] text-[#12303C]",
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", interactive = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl transition-all duration-200 overflow-hidden",
          cardVariants[variant],
          interactive &&
            "cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-[#12303C]/10",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pb-3 flex flex-col gap-1.5", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-bold tracking-tight leading-snug", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm opacity-75 leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-3", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0 flex items-center gap-3", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
