"use client";

import React, { useState } from "react";
import { Monitor, Tablet, Smartphone, Code2, Eye, Copy, Check } from "lucide-react";
import { ComponentCode } from "./component-code";
import { cn } from "@/lib/utils";

export interface ComponentPreviewProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  controls?: React.ReactNode;
  className?: string;
  defaultTab?: "preview" | "code";
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  title,
  description,
  code,
  children,
  controls,
  className,
  defaultTab = "preview",
}) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">(defaultTab);
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
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

  const viewportWidths = {
    desktop: "w-full",
    tablet: "max-w-2xl mx-auto",
    mobile: "max-w-sm mx-auto",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-[#EAE5DC] bg-white shadow-xs overflow-hidden flex flex-col my-6",
        className
      )}
    >
      {/* Component Title & Viewport/Code Bar */}
      <div className="p-4 px-6 border-b border-[#EAE5DC] bg-[#FAF8F5] flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#12303C] tracking-tight">{title}</h3>
          {description && (
            <p className="text-xs text-[#12303C]/70 mt-0.5">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Viewport controls (only active in preview mode) */}
          {activeTab === "preview" && (
            <div className="hidden sm:flex items-center bg-white p-1 rounded-lg border border-[#EAE5DC]">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                title="Desktop view"
                className={cn(
                  "p-1.5 rounded text-[#12303C]/60 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "desktop" && "bg-[#12303C]/10 text-[#12303C] font-semibold"
                )}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("tablet")}
                title="Tablet view (768px)"
                className={cn(
                  "p-1.5 rounded text-[#12303C]/60 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "tablet" && "bg-[#12303C]/10 text-[#12303C] font-semibold"
                )}
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                title="Mobile view (375px)"
                className={cn(
                  "p-1.5 rounded text-[#12303C]/60 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "mobile" && "bg-[#12303C]/10 text-[#12303C] font-semibold"
                )}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Tab switcher: Preview vs Code */}
          <div className="flex items-center bg-white p-1 rounded-lg border border-[#EAE5DC]">
            <button
              type="button"
              onClick={() => setActiveTab("preview")}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium text-[#12303C]/70 hover:text-[#12303C] transition-colors cursor-pointer",
                activeTab === "preview" && "bg-[#12303C] text-white hover:text-white"
              )}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("code")}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium text-[#12303C]/70 hover:text-[#12303C] transition-colors cursor-pointer",
                activeTab === "code" && "bg-[#12303C] text-white hover:text-white"
              )}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Code</span>
            </button>
          </div>

          {/* Copy code button shortcut */}
          <button
            type="button"
            onClick={handleCopy}
            title="Copy component code"
            className="p-2 rounded-lg bg-white border border-[#EAE5DC] text-[#12303C]/70 hover:text-[#12303C] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Controls Bar (if provided) */}
      {controls && (
        <div className="p-4 px-6 bg-white border-b border-[#EAE5DC] flex flex-wrap items-center gap-4 text-xs">
          {controls}
        </div>
      )}

      {/* Main Display Area */}
      {activeTab === "preview" ? (
        <div className="p-6 sm:p-10 bg-[#FAF9F7] min-h-[160px] flex items-center justify-center transition-all duration-300">
          <div className={cn("transition-all duration-300", viewportWidths[viewport])}>
            {children}
          </div>
        </div>
      ) : (
        <div className="p-4 bg-[#12303C]">
          <ComponentCode code={code} />
        </div>
      )}
    </div>
  );
};
