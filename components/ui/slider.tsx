"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  showValue?: boolean;
  valueSuffix?: string;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      className,
      label,
      showValue = true,
      valueSuffix = "",
      value,
      min = 0,
      max = 100,
      step = 1,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const sliderId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col gap-2">
        {(label || showValue) && (
          <div className="flex items-center justify-between text-xs font-semibold text-[#12303C] tracking-wide">
            {label && <label htmlFor={sliderId} className="uppercase">{label}</label>}
            {showValue && (
              <span className="font-mono text-[#087FA0]">
                {value}
                {valueSuffix}
              </span>
            )}
          </div>
        )}
        <input
          id={sliderId}
          ref={ref}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          className={cn(
            "w-full h-2 bg-[#12303C]/10 rounded-lg appearance-none cursor-pointer accent-[#087FA0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087FA0] disabled:opacity-50 disabled:cursor-not-allowed",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Slider.displayName = "Slider";

