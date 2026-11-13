"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  description?: string;
  size?: "sm" | "md";
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, description, checked, disabled, id, size = "md", ...props }, ref) => {
    const switchId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    const trackSizes = {
      sm: "w-8 h-4.5 p-0.5",
      md: "w-11 h-6 p-0.5",
    };

    const thumbSizes = {
      sm: "w-3.5 h-3.5",
      md: "w-5 h-5",
    };

    const thumbTranslates = {
      sm: "translate-x-3.5",
      md: "translate-x-5",
    };

    return (
      <label
        htmlFor={switchId}
        className={cn(
          "inline-flex items-center gap-3 select-none",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <div className="relative inline-flex items-center">
          <input
            id={switchId}
            ref={ref}
            type="checkbox"
            role="switch"
            checked={checked}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "rounded-full transition-colors duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-[#087FA0] peer-focus-visible:ring-offset-1",
              trackSizes[size],
              checked ? "bg-[#087FA0]" : "bg-[#12303C]/20",
              className
            )}
          >
            <div
              className={cn(
                "rounded-full bg-white shadow-xs transition-transform duration-200 transform",
                thumbSizes[size],
                checked ? thumbTranslates[size] : "translate-x-0"
              )}
            />
          </div>
        </div>
        {(label || description) && (
          <div className="flex flex-col text-sm">
            {label && (
              <span className="font-medium text-[#12303C] leading-snug">
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs text-[#12303C]/60 leading-normal">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Switch.displayName = "Switch";

