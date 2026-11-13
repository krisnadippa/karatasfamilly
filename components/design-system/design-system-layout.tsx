"use client";

import React, { useState } from "react";
import { DesignSystemHeader } from "./design-system-header";
import { DesignSystemSidebar } from "./design-system-sidebar";

export interface DesignSystemLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSelectSection: (section: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const DesignSystemLayout: React.FC<DesignSystemLayoutProps> = ({
  children,
  activeSection,
  onSelectSection,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#12303C] flex flex-col antialiased">
      <DesignSystemHeader
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onToggleSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex">
        <DesignSystemSidebar
          activeSection={activeSection}
          onSelectSection={onSelectSection}
          isOpenMobile={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />

        <main className="flex-1 min-w-0 py-8 lg:px-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

