"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, disabled, rows = 4, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-xs font-semibold text-[#12303C] tracking-wide uppercase"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          disabled={disabled}
          className={cn(
            "w-full px-3.5 py-2.5 text-sm rounded-lg bg-white text-[#12303C] placeholder:text-[#12303C]/40 border border-[#EAE5DC] transition-all duration-200 focus:outline-none focus:border-[#087FA0] focus:ring-2 focus:ring-[#087FA0]/20 disabled:bg-[#FAF8F5] disabled:text-[#12303C]/40 disabled:cursor-not-allowed resize-y",
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs font-medium text-red-600">{error}</p>}
        {!error && helperText && (
          <p className="text-xs text-[#12303C]/60">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

