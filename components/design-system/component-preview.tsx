"use client";

import React, { useState } from "react";
import { Monitor, Laptop, Tablet, Smartphone, Code2, Eye, Copy, Check, Moon, Sun, SmartphoneNfc } from "lucide-react";
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
          {/* Device Switcher */}
          {!hideDeviceSwitcher && activeTab === "preview" && (
            <div className="hidden sm:flex items-center bg-white p-1 rounded-xl border border-[#EAE5DC] shadow-xs">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                title="Desktop (100% / 1440px)"
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-[#12303C]/70 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "desktop" && "bg-[#12303C] text-white shadow-xs"
                )}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono">1440px</span>
              </button>

              <button
                type="button"
                onClick={() => setViewport("laptop")}
                title="Laptop (1280px)"
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-[#12303C]/70 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "laptop" && "bg-[#12303C] text-white shadow-xs"
                )}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono">1280px</span>
              </button>

              <button
                type="button"
                onClick={() => setViewport("tablet")}
                title="Tablet (768px)"
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-[#12303C]/70 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "tablet" && "bg-[#12303C] text-white shadow-xs"
                )}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono">768px</span>
              </button>

              <button
                type="button"
                onClick={() => setViewport("mobile")}
                title="Mobile (390px)"
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-[#12303C]/70 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "mobile" && "bg-[#12303C] text-white shadow-xs"
                )}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono">390px</span>
              </button>

              <button
                type="button"
                onClick={() => setViewport("small-mobile")}
                title="Small Mobile (320px)"
                className={cn(
                  "px-2 py-1 rounded-lg text-[11px] font-mono text-[#12303C]/70 hover:text-[#12303C] transition-colors cursor-pointer",
                  viewport === "small-mobile" && "bg-[#12303C] text-white shadow-xs"
                )}
              >
                320px
              </button>
            </div>
          )}

          {/* Theme Canvas Switcher */}
          <button
            type="button"
            onClick={() => setDarkCanvas(!darkCanvas)}
            title="Ganti latar kanvas preview"
            className={cn(
              "p-2 rounded-xl border border-[#EAE5DC] text-[#12303C]/70 hover:text-[#12303C] transition-colors cursor-pointer",
              darkCanvas ? "bg-[#12303C] text-white border-[#12303C]" : "bg-white"
            )}
          >
            {darkCanvas ? <Sun className="w-4 h-4 text-[#EBCC3D]" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Preview vs Code Tab Switcher */}
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

      {/* Preview Display Canvas */}
      {activeTab === "preview" ? (
        <div
          className={cn(
            "p-6 sm:p-10 min-h-[200px] flex items-center justify-center transition-colors duration-200 overflow-x-auto",
            darkCanvas ? "bg-[#12303C]" : "bg-[#FBF8F0]/70"
          )}
        >
          {/* Responsive Device Frame Mockups */}
          {viewport === "desktop" && (
            <div className="w-full transition-all duration-300">
              {children}
            </div>
          )}

          {viewport === "laptop" && (
            <div className="w-full max-w-5xl mx-auto rounded-xl border border-[#EAE5DC] bg-white shadow-md overflow-hidden transition-all duration-300">
              <div className="h-6 bg-[#F4F6F5] border-b border-[#EAE5DC] px-3 flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                <span className="text-[10px] text-[#12303C]/40 font-mono ml-2">1280px Viewport</span>
              </div>
              <div className="p-4 sm:p-6 overflow-x-auto">{children}</div>
            </div>
          )}

          {viewport === "tablet" && (
            <div className="w-full max-w-2xl mx-auto rounded-2xl border-4 border-[#12303C]/15 bg-white shadow-xl overflow-hidden transition-all duration-300">
              <div className="h-6 bg-[#F4F6F5] border-b border-[#EAE5DC] px-3 flex items-center justify-between">
                <span className="text-[10px] text-[#12303C]/50 font-mono">Tablet (768px)</span>
                <div className="w-12 h-1 rounded-full bg-black/10" />
              </div>
              <div className="p-4 overflow-x-auto">{children}</div>
            </div>
          )}

          {viewport === "mobile" && (
            <div className="w-full max-w-[390px] mx-auto rounded-[36px] border-4 border-[#12303C]/20 bg-white shadow-2xl overflow-hidden transition-all duration-300">
              <div className="h-7 bg-[#12303C] px-5 flex items-center justify-between text-white text-[10px] font-mono">
                <span>09:41</span>
                <div className="w-16 h-3 rounded-full bg-black/40" />
                <span>5G</span>
              </div>
              <div className="p-3 overflow-x-auto">{children}</div>
              <div className="h-4 bg-white flex justify-center items-center pb-1">
                <div className="w-24 h-1 rounded-full bg-black/20" />
              </div>
            </div>
          )}

          {viewport === "small-mobile" && (
            <div className="w-full max-w-[320px] mx-auto rounded-[28px] border-4 border-[#12303C]/20 bg-white shadow-2xl overflow-hidden transition-all duration-300">
              <div className="h-6 bg-[#12303C] px-4 flex items-center justify-between text-white text-[9px] font-mono">
                <span>09:41</span>
                <span>320px</span>
              </div>
              <div className="p-2.5 overflow-x-auto">{children}</div>
              <div className="h-3 bg-white flex justify-center items-center pb-1">
                <div className="w-16 h-1 rounded-full bg-black/20" />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 bg-[#12303C]">
          <ComponentCode code={code} />
        </div>
      )}
    </div>
  );
};
