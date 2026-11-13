"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

export interface DropdownItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string;
  href?: string;
  disabled?: boolean;
  isDivider?: boolean;
  onClick?: () => void;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: "left" | "right" | "center";
  width?: string;
  selectedValue?: string;
  className?: string;
  onSelect?: (item: DropdownItem) => void;
}

export function Dropdown({
  trigger,
  items,
  align = "left",
  width = "w-64",
  selectedValue,
  className = "",
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const actionableItems = items.filter((item) => !item.isDivider && !item.disabled);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeDropdown]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(0);
      }
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      closeDropdown();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev < actionableItems.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev > 0 ? prev - 1 : actionableItems.length - 1
      );
    } else if (e.key === "Enter" && focusedIndex >= 0) {
      e.preventDefault();
      const targetItem = actionableItems[focusedIndex];
      if (targetItem) {
        handleItemClick(targetItem);
      }
    }
  };

  const handleItemClick = (item: DropdownItem) => {
    if (item.disabled) return;
    if (item.onClick) item.onClick();
    if (onSelect) onSelect(item);
    closeDropdown();
  };

  const alignmentClasses = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  };

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      className={`relative inline-block text-left ${className}`}
    >
      {/* Trigger Button */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="cursor-pointer select-none"
      >
        {trigger}
      </div>

      {/* Dropdown Menu Container */}
      {isOpen && (
        <div
          ref={menuRef}
          role="menu"
          aria-orientation="vertical"
          className={`absolute z-50 mt-2 ${width} ${alignmentClasses[align]} bg-white rounded-2xl p-1.5 shadow-[0_12px_36px_-4px_rgba(18,48,60,0.14),0_0_0_1px_rgba(18,48,60,0.06)] border border-[#EAE5DC] focus:outline-none animate-in fade-in zoom-in-95 duration-150`}
        >
          <div className="flex flex-col gap-0.5">
            {items.map((item, index) => {
              if (item.isDivider) {
                return (
                  <div
                    key={`divider-${index}`}
                    className="h-px bg-[#EAE5DC] my-1 mx-1.5"
                    role="separator"
                  />
                );
              }

              const isSelected = selectedValue === item.id;
              const isFocused =
                actionableItems[focusedIndex]?.id === item.id;

              const itemContent = (
                <div
                  className={`flex items-start justify-between gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                    item.disabled
                      ? "opacity-40 cursor-not-allowed text-[#70695E]"
                      : isSelected
                      ? "bg-[#12303C]/8 text-[#12303C] font-semibold"
                      : isFocused
                      ? "bg-[#FAF8F5] text-[#12303C]"
                      : "text-[#12303C] hover:bg-[#FAF8F5]"
                  }`}
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    {item.icon && (
                      <span className="shrink-0 mt-0.5 text-[#087FA0]">
                        {item.icon}
                      </span>
                    )}
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-medium leading-snug truncate">
                        {item.label}
                      </span>
                      {item.description && (
                        <span className="text-xs text-[#70695E] leading-normal truncate mt-0.5">
                          {item.description}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.badge && (
                    <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#12303C]/5 text-[#12303C] border border-[#12303C]/10">
                      {item.badge}
                    </span>
                  )}
                </div>
              );

              if (item.href && !item.disabled) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    role="menuitem"
                    onClick={() => closeDropdown()}
                    className="block focus:outline-none"
                  >
                    {itemContent}
                  </Link>
                );
              }

              return (
                <button
                  key={item.id}
                  role="menuitem"
                  type="button"
                  disabled={item.disabled}
                  onClick={() => handleItemClick(item)}
                  className="w-full text-left focus:outline-none"
                >
                  {itemContent}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

