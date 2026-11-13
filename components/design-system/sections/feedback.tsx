"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, RefreshCw, XCircle, Clock } from "lucide-react";
import { Spinner, Skeleton, CardSkeleton, ProgressBar, Alert } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "../component-preview";

export const FeedbackSection: React.FC = () => {
  const [activeToast, setActiveToast] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setActiveToast(msg);
    setTimeout(() => setActiveToast(null), 3000);
  };

  const transactionStatuses = [
    {
      status: "Paid",
      badgeVariant: "forest" as const,
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
      desc: "Pembayaran terverifikasi via payment gateway resmi. Buku masuk ke Library.",
    },
    {
      status: "Pending",
      badgeVariant: "goldenrod" as const,
      icon: <Clock className="w-4 h-4 text-[#EBCC3D]" />,
      desc: "Menunggu penyelesaian transfer bank atau QRIS. Akses belum diberikan.",
    },
    {
      status: "Failed",
      badgeVariant: "outline" as const,
      icon: <AlertCircle className="w-4 h-4 text-red-600" />,
      desc: "Transaksi ditolak atau kedaluwarsa. Redirect URL bukan bukti pembayaran.",
    },
    {
      status: "Cancelled",
      badgeVariant: "cream" as const,
      icon: <XCircle className="w-4 h-4 text-[#12303C]/60" />,
      desc: "Pesanan dibatalkan oleh pembeli sebelum proses pembayaran selesai.",
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          System Feedback & States
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Feedback System & Transaction States
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Komponen status asinkron, notifikasi toast, banner alert, dan pembedaan status transaksi kritis (Paid, Pending, Failed, Cancelled) sesuai Developer Brief V04.
        </p>
      </div>

      {/* 1. Transaction Status Indicators */}
      <ComponentPreview
        title="Validasi Status Transaksi K4Book (Developer Brief V04)"
        description="Aturan ketat: Redirect halaman bukan bukti transaksi berhasil. Hanya status 'Paid' yang mengizinkan akses ke Library digital."
        code={`<Badge variant="forest" dot>Paid</Badge>
<Badge variant="goldenrod" dot>Pending</Badge>
<Badge variant="destructive" dot>Failed</Badge>
<Badge variant="outline" dot>Cancelled</Badge>`}
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {transactionStatuses.map((ts) => (
            <div
              key={ts.status}
              className="p-4 rounded-xl border border-[#EAE5DC] bg-white flex items-start gap-3 shadow-xs"
            >
              <div className="mt-0.5">{ts.icon}</div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#12303C] uppercase tracking-wider">
                    Status: {ts.status}
                  </span>
                  <Badge variant={ts.badgeVariant} size="sm" dot>
                    {ts.status}
                  </Badge>
                </div>
                <p className="text-xs text-[#12303C]/75 leading-relaxed">{ts.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ComponentPreview>

      {/* 2. Alert Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-[#12303C]">Contextual Alert Banners</h4>
          <Alert
            variant="info"
            title="Informasi Rilis"
            description="K4Book Kidstory fase 1 mencakup 3 rentang usia: 0–18m, 18m–3y, dan 3–5y."
          />
          <Alert
            variant="success"
            title="Transaksi Berhasil (Paid)"
            description="Buku digital 'Petualangan Bintang Kecil' telah ditambahkan ke Library Anda."
          />
          <Alert
            variant="warning"
            title="Review Pending"
            description="Artikel RANI sedang ditinjau dewan kurasi sebelum dipublikasikan."
          />
          <Alert
            variant="error"
            title="Otorisasi Gagal"
            description="Kredensial tidak valid. Harap periksa email dan kata sandi."
          />
        </div>

        {/* 3. Toast Simulation */}
        <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC] space-y-4">
          <h4 className="font-bold text-sm text-[#12303C]">Interactive Toast Notification</h4>
          <p className="text-xs text-[#12303C]/70">
            Tekan tombol di bawah untuk menguji notifikasi toast mengambang non-intrusif.
          </p>

          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => triggerToast("Buku berhasil disimpan ke rak bacaan!")}
            >
              Pemicu: Buku Disimpan
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => triggerToast("Permintaan kurasi telah terkirim.")}
            >
              Pemicu: Request Terkirim
            </Button>
          </div>

          {activeToast && (
            <div className="p-3 bg-[#12303C] text-white text-xs rounded-xl shadow-lg flex items-center justify-between animate-in fade-in-0 duration-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#EBCC3D]" />
                <span>{activeToast}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveToast(null)}
                className="text-white/60 hover:text-white text-xs ml-3"
              >
                Tutup
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
