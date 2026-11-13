"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "link"
  | "destructive"
  | "success"
  | "warning"
  | "teal"
  | "goldenrod"
  | "cream";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  square?: boolean;
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
  link:
    "bg-transparent text-[#087FA0] hover:underline p-0 h-auto border-none shadow-none font-normal",
  destructive:
    "bg-red-700 text-white hover:bg-red-800 active:bg-red-900 border border-transparent shadow-xs",
  success:
    "bg-emerald-700 text-white hover:bg-emerald-800 active:bg-emerald-900 border border-transparent shadow-xs",
  warning:
    "bg-[#DFC54E] text-[#12303C] hover:bg-[#E7D16E] active:bg-[#C8AD36] border border-transparent shadow-xs font-semibold",
  cream:
    "bg-[#FBF8F0] text-[#12303C] border border-[#EAE5DC] hover:bg-[#F4F6F5] active:bg-[#EAE5DC] shadow-xs",
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: "h-7 px-2.5 text-[11px] gap-1",
  sm: "h-9 px-3.5 text-xs gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2.5",
  xl: "h-14 px-8 text-lg gap-3",
  icon: "h-10 w-10 p-0 justify-center items-center shrink-0",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled = false,
      fullWidth = false,
      square = false,
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
      "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FA0] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none min-h-[44px]";

    const radiusClass = square ? "rounded-lg" : "rounded-full";

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

    const combinedClasses = cn(
      baseClasses,
      radiusClass,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      className
    );

    if (href && !disabled) {
      return (
        <Link href={href} className={combinedClasses}>
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
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
