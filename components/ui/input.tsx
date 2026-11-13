"use client";

import React, { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className = "",
      disabled = false,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-bold uppercase tracking-wider text-[#12303C]"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center w-full">
          {leftIcon && (
            <div className="absolute left-3.5 flex items-center pointer-events-none text-[#70695E]">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={`w-full bg-white text-[#12303C] placeholder-[#9E9689] text-sm rounded-xl border transition-all duration-200 outline-none
              ${leftIcon ? "pl-10" : "pl-4"}
              ${rightIcon ? "pr-10" : "pr-4"}
              py-2.5
              ${
                error
                  ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                  : "border-[#EAE5DC] hover:border-[#12303C]/40 focus:border-[#087FA0] focus:ring-2 focus:ring-[#087FA0]/15"
              }
              ${disabled ? "opacity-50 cursor-not-allowed bg-[#FAF8F5]" : ""}
              ${className}
            `}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3.5 flex items-center text-[#70695E]">
              {rightIcon}
            </div>
          )}
        </div>
        {error ? (
          <span className="text-xs font-medium text-red-600">{error}</span>
        ) : helperText ? (
          <span className="text-xs text-[#70695E]">{helperText}</span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
