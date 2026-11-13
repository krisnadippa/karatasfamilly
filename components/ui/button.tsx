"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "teal"
  | "goldenrod"
  | "outline"
  | "ghost"
  | "cream";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#12303C] text-white hover:bg-[#1A4252] active:bg-[#0D222B] border border-transparent shadow-xs",
  secondary:
    "bg-[#20463D] text-white hover:bg-[#2B5D51] active:bg-[#17342D] border border-transparent shadow-xs",
  teal:
    "bg-[#087FA0] text-white hover:bg-[#0B97BD] active:bg-[#06627B] border border-transparent shadow-xs",
  goldenrod:
    "bg-[#EBCC3D] text-[#12303C] hover:bg-[#F2D75C] active:bg-[#D4B426] border border-transparent shadow-xs font-semibold",
  outline:
    "bg-transparent text-[#12303C] border border-[#12303C]/20 hover:border-[#12303C] hover:bg-[#12303C]/5 active:bg-[#12303C]/10",
  ghost:
    "bg-transparent text-[#12303C] hover:bg-[#12303C]/5 active:bg-[#12303C]/10 border border-transparent",
  cream:
    "bg-[#FAF8F5] text-[#12303C] border border-[#EAE5DC] hover:bg-[#F3EFE8] active:bg-[#EAE5DC] shadow-xs",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-xs rounded-full gap-1.5",
  md: "h-11 px-5 text-sm rounded-full gap-2",
  lg: "h-12 px-7 text-base rounded-full gap-2.5",
  icon: "h-10 w-10 p-0 rounded-full justify-center items-center shrink-0",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled = false,
      className,
      href,
      leftIcon,
      rightIcon,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FA0] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && (
          <span className="shrink-0 flex items-center">{leftIcon}</span>
        )}
        {children && <span>{children}</span>}
        {!isLoading && rightIcon && (
          <span className="shrink-0 flex items-center">{rightIcon}</span>
        )}
      </>
    );

    if (href && !disabled) {
      return (
        <Link
          href={href}
          className={cn(baseClasses, variantStyles[variant], sizeStyles[size], className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={cn(baseClasses, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
