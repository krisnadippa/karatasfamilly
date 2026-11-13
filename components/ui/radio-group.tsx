"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  label,
  className,
  orientation = "vertical",
}) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <span className="text-xs font-semibold text-[#12303C] tracking-wide uppercase">
          {label}
        </span>
      )}
      <div
        className={cn(
          "flex gap-3",
          orientation === "vertical" ? "flex-col" : "flex-row flex-wrap"
        )}
      >
        {options.map((option) => {
          const isChecked = value === option.value;
          const id = `${name}-${option.value}`;

          return (
            <label
              key={option.value}
              htmlFor={id}
              className={cn(
                "inline-flex items-start gap-3 select-none",
                option.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              )}
            >
              <div className="relative flex items-center justify-center mt-0.5">
                <input
                  id={id}
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={isChecked}
                  disabled={option.disabled}
                  onChange={() => !option.disabled && onChange?.(option.value)}
                  className="peer sr-only"
                />
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border border-[#12303C]/30 bg-white transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-[#087FA0] peer-focus-visible:ring-offset-1 flex items-center justify-center",
                    isChecked ? "border-[#087FA0]" : ""
                  )}
                >
                  {isChecked && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#087FA0]" />
                  )}
                </div>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-medium text-[#12303C] leading-snug">
                  {option.label}
                </span>
                {option.description && (
                  <span className="text-xs text-[#12303C]/60 leading-normal mt-0.5">
                    {option.description}
                  </span>
                )}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

