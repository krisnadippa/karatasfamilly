"use client";

import React, { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Spinner, Skeleton, CardSkeleton, ProgressBar, Alert, AlertVariant } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ComponentPreview } from "../component-preview";

export const FeedbackSection: React.FC = () => {
  // Loading simulation state
  const [isSimulating, setIsSimulating] = useState(false);
  const [progressVal, setProgressVal] = useState(68);
  const [activeAlert, setActiveAlert] = useState<AlertVariant | null>("info");

  const handleTriggerSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 2000);
  };

  const spinnerCode = `<div className="flex items-center gap-4">
  <Spinner size="sm" color="midnight" />
  <Spinner size="md" color="teal" />
  <Spinner size="lg" color="forest" />
</div>`;

  const skeletonCode = `{isLoading ? (
  <CardSkeleton />
) : (
  <Card>...</Card>
)}`;

  const progressCode = `<ProgressBar progress={${progressVal}} color="teal" />`;

  const alertCode = `<Alert
  variant="info"
  title="Pemberitahuan Sistem"
  description="Dokumentasi design system terintegrasi ke dalam Next.js App Router."
  onClose={() => console.log("Closed")}
/>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          System Feedback
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Feedback & Loading States
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Komponen status asinkron, skeleton placeholder, indikator progres, dan alert banner untuk kenyamanan pengguna saat memuat data.
        </p>
      </div>

      {/* Spinners & Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ComponentPreview
          title="Spinner Indicators"
          description="Indikator berputar CSS halus dengan opsi ukuran (sm, md, lg) dan warna tema."
          code={spinnerCode}
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" color="midnight" />
              <span className="text-[11px] font-mono text-[#12303C]/60">sm / midnight</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="md" color="teal" />
              <span className="text-[11px] font-mono text-[#12303C]/60">md / teal</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" color="forest" />
              <span className="text-[11px] font-mono text-[#12303C]/60">lg / forest</span>
            </div>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Progress Bar"
          description="Batang progres linear dengan animasi transisi lebar."
          code={progressCode}
          controls={
            <div className="w-full">
              <Slider
                label="Sesuaikan Nilai Progres"
                min={0}
                max={100}
                value={progressVal}
                valueSuffix="%"
                onChange={(e) => setProgressVal(Number(e.target.value))}
              />
            </div>
          }
        >
          <div className="w-full max-w-md flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-semibold text-[#12303C]">
              <span>Progres Sinkronisasi Nilai</span>
              <span className="font-mono text-[#087FA0]">{progressVal}%</span>
            </div>
            <ProgressBar progress={progressVal} color="teal" />
          </div>
        </ComponentPreview>
      </div>

      {/* Skeletons Placeholder */}
      <ComponentPreview
        title="Skeleton Placeholder"
        description="Pola pemuatan berdenyut untuk mengurangi pergeseran layout (CLS)."
        code={skeletonCode}
        controls={
          <Button
            variant="outline"
            size="sm"
            onClick={handleTriggerSimulate}
            isLoading={isSimulating}
            leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
          >
            {isSimulating ? "Memuat..." : "Simulasikan Re-fetch (2 Detik)"}
          </Button>
        }
      >
        <div className="w-full max-w-md">
          {isSimulating ? (
            <CardSkeleton />
          ) : (
            <div className="p-6 bg-white rounded-2xl border border-[#EAE5DC] flex flex-col gap-2">
              <span className="text-xs font-bold text-[#087FA0] uppercase">Data Siap</span>
              <h4 className="text-base font-bold text-[#12303C]">Pilar Keluarga Karatas</h4>
              <p className="text-xs text-[#12303C]/75 leading-relaxed">
                Konten berhasil dimuat tanpa pergeseran layout. Struktur skeleton mencerminkan bentuk kartu asli secara proporsional.
              </p>
            </div>
          )}
        </div>
      </ComponentPreview>

      {/* Alert Banners */}
      <ComponentPreview
        title="Alert Banners"
        description="Notifikasi kontekstual dengan icon status (Info, Success, Warning, Error) tanpa emoji."
        code={alertCode}
      >
        <div className="flex flex-col gap-3 w-full max-w-lg">
          <Alert
            variant="info"
            title="Sistem Siap"
            description="Arsitektur design system Next.js App Router telah aktif dan modular."
          />
          <Alert
            variant="success"
            title="Berhasil Disimpan"
            description="Konfigurasi komponen tersinkronisasi tanpa error build."
          />
          <Alert
            variant="warning"
            title="Peringatan Kapasitas"
            description="Pastikan palet korporat diterapkan secara konsisten di setiap section."
          />
          <Alert
            variant="error"
            title="Batas Akses"
            description="Autentikasi diperlukan untuk mengubah konfigurasi root repository."
          />
        </div>
      </ComponentPreview>
    </div>
  );
};
