"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({
  className,
  ...props
}) => (
  <div className="w-full overflow-x-auto rounded-xl border border-[#EAE5DC] bg-white">
    <table
      className={cn("w-full caption-bottom text-sm text-left", className)}
      {...props}
    />
  </div>
);

export const TableHeader: React.FC<
  React.HTMLAttributes<HTMLTableSectionElement>
> = ({ className, ...props }) => (
  <thead
    className={cn("bg-[#FAF8F5] border-b border-[#EAE5DC]", className)}
    {...props}
  />
);

export const TableBody: React.FC<
  React.HTMLAttributes<HTMLTableSectionElement>
> = ({ className, ...props }) => (
  <tbody className={cn("divide-y divide-[#EAE5DC]/60", className)} {...props} />
);

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({
  className,
  ...props
}) => (
  <tr
    className={cn(
      "transition-colors hover:bg-[#FAF8F5]/60 data-[state=selected]:bg-[#FAF8F5]",
      className
    )}
    {...props}
  />
);

export const TableHead: React.FC<
  React.ThHTMLAttributes<HTMLTableCellElement>
> = ({ className, ...props }) => (
  <th
    className={cn(
      "h-11 px-4 text-xs font-semibold uppercase tracking-wider text-[#12303C]/70 align-middle",
      className
    )}
    {...props}
  />
);

export const TableCell: React.FC<
  React.TdHTMLAttributes<HTMLTableCellElement>
> = ({ className, ...props }) => (
  <td className={cn("p-4 align-middle text-[#12303C]", className)} {...props} />
);

