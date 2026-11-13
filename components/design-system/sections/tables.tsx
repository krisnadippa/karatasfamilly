"use client";

import React, { useState } from "react";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "../component-preview";

export const TablesSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"products" | "orders" | "articles">("products");

  const demoProducts = [
    { id: "KB-01", title: "Petualangan Bintang Kecil", category: "Kidstory", age: "3–5 tahun", format: "Digital", status: "Active" },
    { id: "KB-02", title: "Suara Pagi Pertama", category: "Kidstory", age: "0–18 bulan", format: "Digital", status: "Active" },
    { id: "KB-03", title: "Kamus Tawa Kantor", category: "HumOR", age: "Dewasa", format: "Digital", status: "Active" },
    { id: "KB-04", title: "Senja di Lembah Nilai", category: "Novel", age: "Semua Usia", format: "Digital", status: "In Review" },
  ];

  const demoOrders = [
    { id: "ORD-9821", customer: "Keluarga Rahman", items: "1 Buku (Kidstory)", total: "IDR 45.000 (DEMO)", status: "Paid" },
    { id: "ORD-9822", customer: "Ibu Dian", items: "2 Buku (HumOR & Novel)", total: "IDR 90.000 (DEMO)", status: "Pending" },
    { id: "ORD-9823", customer: "Bpk. Hendra", items: "1 Buku (Kidstory)", total: "IDR 45.000 (DEMO)", status: "Failed" },
  ];

  const demoArticles = [
    { id: "ART-101", title: "Mendengar dengan Hati: Seni Komunikasi Anak", category: "Parenting", reads: "1.2k (DEMO)", status: "Published" },
    { id: "ART-102", title: "Menemani Ledakan Emosi Balita dengan Tenang", category: "Psikologi", reads: "850 (DEMO)", status: "Published" },
    { id: "ART-103", title: "Membangun Rutinitas Membaca Sebelum Tidur", category: "Literasi", reads: "0 (DEMO)", status: "Draft" },
  ];

  const tableCode = `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>ID (DEMO)</TableHead>
      <TableHead>Judul Produk</TableHead>
      <TableHead>Lini / Kategori</TableHead>
      <TableHead>Kelompok Usia</TableHead>
      <TableHead>Format</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {demoProducts.map((p) => (
      <TableRow key={p.id}>
        <TableCell className="font-mono text-xs">{p.id}</TableCell>
        <TableCell className="font-semibold">{p.title}</TableCell>
        <TableCell><Badge variant="teal">{p.category}</Badge></TableCell>
        <TableCell>{p.age}</TableCell>
        <TableCell>{p.format}</TableCell>
        <TableCell><Badge variant="forest" dot>{p.status}</Badge></TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`;

  return (
    <div className="space-y-12">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Structured Tabular Data
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Data Table System (Admin & Catalog)
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Tabel data terstruktur responsif untuk manajemen produk K4Book, daftar pesanan pembayaran, dan review artikel RANI. Seluruh data berlabel <strong>DEMO</strong> sesuai ketentuan brief.
        </p>
      </div>

      <ComponentPreview
        title="K4Family Ecosystem Admin Tables (DEMO DATA)"
        description="Ganti tab untuk melihat tabel Produk K4Book, Pesanan Pelanggan, atau Daftar Artikel RANI."
        code={tableCode}
        controls={
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#12303C]">Dataset DEMO:</span>
            <button
              type="button"
              onClick={() => setSelectedTab("products")}
              className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                selectedTab === "products" ? "bg-[#12303C] text-white" : "bg-[#FBF8F0] text-[#12303C]/70"
              }`}
            >
              Produk K4Book
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab("orders")}
              className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                selectedTab === "orders" ? "bg-[#12303C] text-white" : "bg-[#FBF8F0] text-[#12303C]/70"
              }`}
            >
              Pesanan Pelanggan
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab("articles")}
              className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                selectedTab === "articles" ? "bg-[#12303C] text-white" : "bg-[#FBF8F0] text-[#12303C]/70"
              }`}
            >
              Artikel RANI
            </button>
          </div>
        }
      >
        <div className="w-full">
          {selectedTab === "products" && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kode (DEMO)</TableHead>
                  <TableHead>Judul Buku</TableHead>
                  <TableHead>Lini / Seri</TableHead>
                  <TableHead>Kelompok Usia</TableHead>
                  <TableHead>Format</TableHead>
                  <TableHead>Status Rilis</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {demoProducts.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-mono text-xs text-[#087FA0] font-bold">{p.id}</TableCell>
                    <TableCell className="font-semibold text-xs text-[#12303C]">{p.title}</TableCell>
                    <TableCell>
                      <Badge variant="teal" size="sm">{p.category}</Badge>
                    </TableCell>
                    <TableCell className="text-xs text-[#12303C]/70">{p.age}</TableCell>
                    <TableCell className="text-xs text-[#12303C]/70">{p.format}</TableCell>
                    <TableCell>
                      <Badge variant={p.status === "Active" ? "forest" : "goldenrod"} size="sm" dot>
                        {p.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {selectedTab === "orders" && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>No. Pesanan (DEMO)</TableHead>
                  <TableHead>Nama Pelanggan</TableHead>
                  <TableHead>Item Pesanan</TableHead>
                  <TableHead>Total (DEMO)</TableHead>
                  <TableHead>Status Transaksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {demoOrders.map((o) => (
                  <TableRow key={o.id}>
                    <TableCell className="font-mono text-xs text-[#12303C] font-bold">{o.id}</TableCell>
                    <TableCell className="font-semibold text-xs text-[#12303C]">{o.customer}</TableCell>
                    <TableCell className="text-xs text-[#12303C]/70">{o.items}</TableCell>
                    <TableCell className="font-mono text-xs text-[#12303C]">{o.total}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          o.status === "Paid" ? "forest" : o.status === "Pending" ? "goldenrod" : "outline"
                        }
                        size="sm"
                        dot
                      >
                        {o.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {selectedTab === "articles" && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID (DEMO)</TableHead>
                  <TableHead>Judul Artikel Edukasi</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Pembaca (DEMO)</TableHead>
                  <TableHead>Status Artikel</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {demoArticles.map((a) => (
                  <TableRow key={a.id}>
                    <TableCell className="font-mono text-xs text-[#20463D] font-bold">{a.id}</TableCell>
                    <TableCell className="font-semibold text-xs text-[#12303C]">{a.title}</TableCell>
                    <TableCell>
                      <Badge variant="forest" size="sm">{a.category}</Badge>
                    </TableCell>
                    <TableCell className="font-mono text-xs text-[#12303C]/70">{a.reads}</TableCell>
                    <TableCell>
                      <Badge
                        variant={a.status === "Published" ? "forest" : "outline"}
                        size="sm"
                        dot
                      >
                        {a.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </ComponentPreview>
    </div>
  );
};
