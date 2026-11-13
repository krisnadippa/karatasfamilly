"use client";

import React, { useState } from "react";
import { Monitor, Laptop, Tablet, Smartphone, Code2, Eye, Copy, Check, Moon, Sun } from "lucide-react";
import { ComponentCode } from "./component-code";
import { cn } from "@/lib/utils";

export type DeviceViewport = "desktop" | "laptop" | "tablet" | "mobile" | "small-mobile";

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
  const [viewport, setViewport] = useState<DeviceViewport>("desktop");
  const [copied, setCopied] = useState(false);
  const [darkCanvas, setDarkCanvas] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const viewportWidths: Record<DeviceViewport, string> = {
    desktop: "w-full",
    laptop: "max-w-5xl mx-auto",
    tablet: "max-w-2xl mx-auto",
    mobile: "max-w-sm mx-auto",
    "small-mobile": "max-w-[320px] mx-auto",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-[#EAE5DC] bg-white shadow-xs overflow-hidden flex flex-col my-6",
        className
      )}
    >
      {/* Component Title & Viewport/Code Bar */}
      <div className="p-4 px-6 border-b border-[#EAE5DC] bg-[#FBF8F0] flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#12303C] tracking-tight">{title}</h3>
          {description && (
            <p className="text-xs text-[#12303C]/70 mt-0.5">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Responsive Device Switcher (Desktop 1440, Laptop 1280, Tablet 768, Mobile 390, Small 320) */}
          {activeTab === "preview" && (
            <div className="hidden sm:flex items-center bg-white p-1 rounded-lg border border-[#EAE5DC]">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                title="Desktop 1440px"
                className={cn(
                  "p-1.5 rounded text-[#12303C]/60 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "desktop" && "bg-[#12303C] text-white"
                )}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("laptop")}
                title="Laptop 1280px"
                className={cn(
                  "p-1.5 rounded text-[#12303C]/60 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "laptop" && "bg-[#12303C] text-white"
                )}
              >
                <Laptop className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("tablet")}
                title="Tablet 768px"
                className={cn(
                  "p-1.5 rounded text-[#12303C]/60 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "tablet" && "bg-[#12303C] text-white"
                )}
              >
                <Tablet className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                title="Mobile 390px"
                className={cn(
                  "p-1.5 rounded text-[#12303C]/60 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "mobile" && "bg-[#12303C] text-white"
                )}
              >
                <Smartphone className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("small-mobile")}
                title="Small Mobile 320px"
                className={cn(
                  "px-2 py-1 rounded text-[10px] font-mono text-[#12303C]/60 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "small-mobile" && "bg-[#12303C] text-white"
                )}
              >
                320
              </button>
            </div>
          )}

          {/* Canvas Mode Toggle */}
          <button
            type="button"
            onClick={() => setDarkCanvas(!darkCanvas)}
            title="Toggle canvas background"
            className={cn(
              "p-2 rounded-lg border border-[#EAE5DC] text-[#12303C]/70 hover:text-[#12303C] transition-colors cursor-pointer",
              darkCanvas ? "bg-[#12303C] text-white border-[#12303C]" : "bg-white"
            )}
          >
            {darkCanvas ? <Sun className="w-4 h-4 text-[#EBCC3D]" /> : <Moon className="w-4 h-4" />}
          </button>

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

          {/* Quick copy code button */}
          <button
            type="button"
            onClick={handleCopy}
            title="Copy component code"
            className="p-2 rounded-lg bg-white border border-[#EAE5DC] text-[#12303C]/70 hover:text-[#12303C] hover:bg-[#FBF8F0] transition-colors cursor-pointer"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Controls Bar */}
      {controls && (
        <div className="p-4 px-6 bg-white border-b border-[#EAE5DC] flex flex-wrap items-center gap-4 text-xs">
          {controls}
        </div>
      )}

      {/* Content Area */}
      {activeTab === "preview" ? (
        <div
          className={cn(
            "p-6 sm:p-10 min-h-[180px] flex items-center justify-center transition-colors duration-200 overflow-x-auto",
            darkCanvas ? "bg-[#12303C]" : "bg-[#FBF8F0]"
          )}
        >
          <div className={cn("transition-all duration-300 w-full", viewportWidths[viewport])}>
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
