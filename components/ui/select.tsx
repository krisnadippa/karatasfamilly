"use client";

import React, { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options?: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      options = [],
      placeholder,
      id,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-xs font-semibold text-[#12303C] tracking-wide uppercase"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <select
            id={selectId}
            ref={ref}
            disabled={disabled}
            className={cn(
              "w-full h-11 pl-3.5 pr-10 text-sm rounded-lg bg-white text-[#12303C] border border-[#EAE5DC] transition-all duration-200 appearance-none cursor-pointer focus:outline-none focus:border-[#087FA0] focus:ring-2 focus:ring-[#087FA0]/20 disabled:bg-[#FAF8F5] disabled:text-[#12303C]/40 disabled:cursor-not-allowed",
              error ? "border-red-500 focus:border-red-500" : "",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
            {children}
          </select>
          <ChevronDown className="absolute right-3.5 w-4 h-4 text-[#12303C]/50 pointer-events-none" />
        </div>
        {error && <p className="text-xs font-medium text-red-600">{error}</p>}
        {!error && helperText && (
          <p className="text-xs text-[#12303C]/60">{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
