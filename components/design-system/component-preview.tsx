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
  hideDeviceSwitcher?: boolean;
}

const viewportMaxWidth: Record<DeviceViewport, string> = {
  desktop: "w-full",
  laptop: "max-w-5xl mx-auto",
  tablet: "max-w-2xl mx-auto",
  mobile: "max-w-[390px] mx-auto",
  "small-mobile": "max-w-[320px] mx-auto",
};

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  title,
  description,
  code,
  children,
  controls,
  className,
  defaultTab = "preview",
  hideDeviceSwitcher = false,
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

  const viewportButtons: { id: DeviceViewport; icon: React.ReactNode; label: string }[] = [
    { id: "desktop", icon: <Monitor className="w-3.5 h-3.5" />, label: "1440" },
    { id: "laptop", icon: <Laptop className="w-3.5 h-3.5" />, label: "1280" },
    { id: "tablet", icon: <Tablet className="w-3.5 h-3.5" />, label: "768" },
    { id: "mobile", icon: <Smartphone className="w-3.5 h-3.5" />, label: "390" },
    { id: "small-mobile", icon: <span className="text-[10px] font-mono font-bold">xs</span>, label: "320" },
  ];

  return (
    <div
      className={cn(
        "rounded-2xl border border-[#EAE5DC] bg-white shadow-xs overflow-hidden flex flex-col my-8 transition-shadow hover:shadow-sm",
        className
      )}
    >
      {/* Header Bar */}
      <div className="p-4 px-6 border-b border-[#EAE5DC] bg-[#FBF8F0] flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#12303C] tracking-tight">{title}</h3>
          {description && (
            <p className="text-xs text-[#12303C]/70 mt-0.5">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Viewport Switcher — no device frames, just max-width constraint */}
          {!hideDeviceSwitcher && activeTab === "preview" && (
            <div className="hidden sm:flex items-center bg-white p-1 rounded-xl border border-[#EAE5DC] shadow-xs gap-0.5">
              {viewportButtons.map((vb) => (
                <button
                  key={vb.id}
                  type="button"
                  onClick={() => setViewport(vb.id)}
                  title={`${vb.label}px`}
                  className={cn(
                    "flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer",
                    viewport === vb.id
                      ? "bg-[#12303C] text-white shadow-xs"
                      : "text-[#12303C]/60 hover:text-[#12303C] hover:bg-[#FBF8F0]"
                  )}
                >
                  {vb.icon}
                  <span className="text-[11px] font-mono">{vb.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Dark canvas toggle */}
          {activeTab === "preview" && (
            <button
              type="button"
              onClick={() => setDarkCanvas((v) => !v)}
              title="Toggle dark canvas"
              className="p-2 rounded-xl bg-white border border-[#EAE5DC] text-[#12303C]/70 hover:text-[#12303C] hover:bg-[#FBF8F0] transition-colors cursor-pointer"
            >
              {darkCanvas ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          {/* Preview / Code tabs */}
          <div className="flex items-center bg-white p-1 rounded-xl border border-[#EAE5DC] shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab("preview")}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-[#12303C]/70 hover:text-[#12303C] transition-colors cursor-pointer",
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
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-[#12303C]/70 hover:text-[#12303C] transition-colors cursor-pointer",
                activeTab === "code" && "bg-[#12303C] text-white hover:text-white"
              )}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Code</span>
            </button>
          </div>

          {/* Copy Code Shortcut */}
          <button
            type="button"
            onClick={handleCopy}
            title="Salin kode TSX"
            className="p-2 rounded-xl bg-white border border-[#EAE5DC] text-[#12303C]/70 hover:text-[#12303C] hover:bg-[#FBF8F0] transition-colors cursor-pointer"
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

      {/* Preview Canvas — plain, no device bezels */}
      {activeTab === "preview" ? (
        <div
          className={cn(
            "p-6 sm:p-10 min-h-[180px] flex items-center justify-center transition-colors duration-200 overflow-x-auto",
            darkCanvas ? "bg-[#12303C]" : "bg-[#FBF8F0]/70"
          )}
        >
          <div className={cn("w-full transition-all duration-300", viewportMaxWidth[viewport])}>
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
