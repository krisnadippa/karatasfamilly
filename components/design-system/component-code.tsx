"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComponentCodeProps {
  code: string;
  language?: string;
  className?: string;
}

export const ComponentCode: React.FC<ComponentCodeProps> = ({
  code,
  language = "tsx",
  className,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className={cn(
        "relative rounded-xl bg-[#12303C] text-white border border-white/10 overflow-hidden font-mono text-xs",
        className
      )}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-black/20 border-b border-white/5">
        <span className="text-[11px] text-[#EBCC3D] font-medium uppercase tracking-wider">
          {language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/15 transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#EBCC3D]" />
              <span className="text-[#EBCC3D]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto leading-relaxed max-h-96">
        <pre className="text-emerald-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

