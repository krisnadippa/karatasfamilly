"use client";

import React, { forwardRef } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  description?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, disabled, checked, ...props }, ref) => {
    const inputId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <label
        htmlFor={inputId}
        className={cn(
          "inline-flex items-start gap-3 select-none",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            id={inputId}
            ref={ref}
            type="checkbox"
            disabled={disabled}
            checked={checked}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "w-5 h-5 rounded border border-[#12303C]/30 bg-white transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-[#087FA0] peer-focus-visible:ring-offset-1 peer-checked:bg-[#087FA0] peer-checked:border-[#087FA0] flex items-center justify-center",
              className
            )}
          >
            <Check className="w-3.5 h-3.5 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
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
              <span className="text-xs text-[#12303C]/60 leading-normal mt-0.5">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
