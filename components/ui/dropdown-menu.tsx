"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DropdownMenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
  disabled?: boolean;
  destructive?: boolean;
  onClick?: () => void;
}

export interface DropdownMenuProps {
  triggerText?: string;
  trigger?: React.ReactNode;
  items: DropdownMenuItem[];
  align?: "left" | "right";
  className?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  triggerText = "Options",
  trigger,
  items,
  align = "left",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className={cn("relative inline-block text-left", className)}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger ? (
          trigger
        ) : (
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white text-[#12303C] border border-[#EAE5DC] shadow-xs hover:bg-[#FAF8F5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087FA0]"
          >
            <span>{triggerText}</span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-[#12303C]/60 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          </button>
        )}
      </div>

      {isOpen && (
        <div
          className={cn(
            "absolute z-50 mt-2 min-w-[200px] bg-white rounded-xl border border-[#EAE5DC] shadow-xl p-1.5 animate-in fade-in-0 zoom-in-95 duration-150",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              disabled={item.disabled}
              onClick={() => {
                if (!item.disabled) {
                  item.onClick?.();
                  setIsOpen(false);
                }
              }}
              className={cn(
                "w-full flex items-center justify-between gap-3 px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors",
                item.destructive
                  ? "text-red-600 hover:bg-red-50"
                  : "text-[#12303C] hover:bg-[#FAF8F5]",
                item.disabled && "opacity-40 cursor-not-allowed hover:bg-transparent"
              )}
            >
              <div className="flex items-center gap-2">
                {item.icon && <span className="text-[#12303C]/60">{item.icon}</span>}
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-[#12303C]/10 text-[#12303C]">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

