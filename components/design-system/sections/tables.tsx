"use client";

import React from "react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "../component-preview";

export const TablesSection: React.FC = () => {
  const tableData = [
    {
      color: "Midnight Blue",
      hex: "#12303C",
      variable: "--color-corporate-midnight",
      usage: "Struktur utama, headline, teks kontras",
      badge: "midnight",
      status: "Active",
    },
    {
      color: "Forest Green",
      hex: "#20463D",
      variable: "--color-corporate-forest",
      usage: "Alam, ketenangan, sustainability",
      badge: "forest",
      status: "Active",
    },
    {
      color: "Ocean Teal",
      hex: "#087FA0",
      variable: "--color-corporate-teal",
      usage: "Pendidikan, curiosity, digital accent",
      badge: "teal",
      status: "Active",
    },
    {
      color: "Bright Goldenrod",
      hex: "#EBCC3D",
      variable: "--color-corporate-goldenrod",
      usage: "Highlight premium secukupnya",
      badge: "goldenrod",
      status: "Highlight",
    },
    {
      color: "Muted Gold",
      hex: "#DFC54E",
      variable: "--color-corporate-gold-muted",
      usage: "Aksen lembut",
      badge: "gold",
      status: "Accent",
    },
    {
      color: "Cream / White",
      hex: "#FAF8F5 / #FFF",
      variable: "--color-corporate-cream",
      usage: "Latar dan whitespace, tetap penuhi kontras",
      badge: "cream",
      status: "Base",
    },
  ];

  const tableCode = `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Nama Warna</TableHead>
      <TableHead>HEX</TableHead>
      <TableHead>CSS Variable</TableHead>
      <TableHead>Penggunaan</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {rows.map((row) => (
      <TableRow key={row.color}>
        <TableCell className="font-semibold">{row.color}</TableCell>
        <TableCell><code className="font-mono text-xs">{row.hex}</code></TableCell>
        <TableCell><code className="font-mono text-xs text-[#087FA0]">{row.variable}</code></TableCell>
        <TableCell className="text-xs">{row.usage}</TableCell>
        <TableCell><Badge variant={row.badge} dot>{row.status}</Badge></TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Structured Tabular Data
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Data Tables
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Tabel data responsif untuk menyajikan spesifikasi token, hak akses pengguna, atau inventaris nilai secara jelas dan teratur.
        </p>
      </div>

      <ComponentPreview
        title="Corporate Color Tokens Table"
        description="Penyajian tabel matriks warna korporat lengkap dengan kode CSS variable dan peruntukan."
        code={tableCode}
      >
        <div className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Warna</TableHead>
                <TableHead>HEX</TableHead>
                <TableHead>CSS Variable</TableHead>
                <TableHead>Penggunaan</TableHead>
                <TableHead>Status Token</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.color}>
                  <TableCell className="font-bold text-xs">{row.color}</TableCell>
                  <TableCell>
                    <code className="font-mono text-xs bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EAE5DC]">
                      {row.hex}
                    </code>
                  </TableCell>
                  <TableCell>
                    <code className="font-mono text-xs text-[#087FA0]">{row.variable}</code>
                  </TableCell>
                  <TableCell className="text-xs text-[#12303C]/75">{row.usage}</TableCell>
                  <TableCell>
                    <Badge variant={row.badge as any} size="sm" dot>
                      {row.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ComponentPreview>
    </div>
  );
};
