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
    setTimeout(() => setActiveToast(null), 3500);
  };

  const transactionStatuses = [
    {
      status: "Paid",
      badgeVariant: "forest" as const,
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      desc: "Pembayaran terverifikasi via payment gateway resmi. Buku digital langsung aktif di Library akun.",
    },
    {
      status: "Pending",
      badgeVariant: "goldenrod" as const,
      icon: <Clock className="w-5 h-5 text-[#EBCC3D]" />,
      desc: "Menunggu penyelesaian transfer atau QRIS. Akses buku belum dibuka sebelum ada konfirmasi webhook.",
    },
    {
      status: "Failed",
      badgeVariant: "destructive" as const,
      icon: <AlertCircle className="w-5 h-5 text-red-600" />,
      desc: "Transaksi ditolak atau kedaluwarsa. Redirect URL bukan bukti pembayaran berhasil.",
    },
    {
      status: "Cancelled",
      badgeVariant: "outline" as const,
      icon: <XCircle className="w-5 h-5 text-[#12303C]/60" />,
      desc: "Pesanan dibatalkan oleh pengguna sebelum proses pembayaran diproses.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FA0]/10 text-[#087FA0] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>System Feedback</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#12303C] tracking-tight font-montserrat">
          Feedback System & Transaction States
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl leading-relaxed">
          Komponen status asinkron, notifikasi toast, banner alert, dan pembedaan status transaksi kritis (Paid, Pending, Failed, Cancelled) sesuai panduan Developer Brief V04.
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
              className="p-5 rounded-2xl border border-[#EAE5DC] bg-white flex items-start gap-3.5 shadow-xs hover:shadow-sm transition-all"
            >
              <div className="mt-0.5 shrink-0">{ts.icon}</div>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#12303C] uppercase tracking-wider font-montserrat">
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

      {/* 2. Alert Banners & Interactive Toast */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs space-y-4">
          <h4 className="font-bold text-sm text-[#12303C] font-montserrat">Contextual Alert Banners</h4>
          <div className="space-y-3">
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
        </div>

        {/* 3. Toast Simulation */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#EAE5DC] shadow-xs space-y-5 flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#12303C] font-montserrat">Interactive Toast Notifications</h4>
            <p className="text-xs text-[#12303C]/70 leading-relaxed">
              Tekan tombol pemicu untuk melihat notifikasi aksi mengambang non-intrusif yang otomatis hilang setelah beberapa detik.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
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
                onClick={() => triggerToast("Permintaan kurasi buku telah terkirim.")}
              >
                Pemicu: Request Terkirim
              </Button>
            </div>
          </div>

          {activeToast && (
            <div className="p-4 bg-[#12303C] text-white text-xs rounded-xl shadow-xl flex items-center justify-between animate-in fade-in-0 duration-200 border border-white/10">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EBCC3D] shrink-0" />
                <span className="font-medium">{activeToast}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveToast(null)}
                className="text-white/60 hover:text-white text-xs ml-3 font-semibold cursor-pointer"
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
