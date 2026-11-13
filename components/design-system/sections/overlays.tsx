"use client";

import React, { useState } from "react";
import { Sparkles, HelpCircle, Layers, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogCloseButton,
} from "@/components/ui/dialog";
import { Tooltip } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "../component-preview";

export const OverlaysSection: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dialogCode = `<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  <DialogHeader>
    <div className="flex items-center justify-between w-full">
      <DialogTitle>Konfirmasi Komitmen Nilai K4Family</DialogTitle>
      <DialogCloseButton onClick={() => setIsDialogOpen(false)} />
    </div>
    <DialogDescription>
      Tindakan ini akan mencatat pilihan kurasi Anda ke dalam ekosistem.
    </DialogDescription>
  </DialogHeader>
  <DialogContent>
    <p>
      Setiap inisiatif K4Family dibangun atas integritas, keterbukaan, dan tanggung jawab antargenerasi.
    </p>
  </DialogContent>
  <DialogFooter>
    <Button variant="ghost" size="sm" onClick={() => setIsDialogOpen(false)}>Batal</Button>
    <Button variant="teal" size="sm" onClick={() => setIsDialogOpen(false)}>Setujui & Lanjutkan</Button>
  </DialogFooter>
</Dialog>`;

  const tooltipCode = `<Tooltip content="Warna korporat Ocean Teal melambangkan pendidikan dan eksplorasi digital" position="top">
  <Button variant="outline" size="sm">Arahkan Kursor ke Sini</Button>
</Tooltip>`;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087FA0]/10 text-[#087FA0] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>Overlays & Dialogs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#12303C] tracking-tight font-montserrat">
          Dialogs & Tooltip Overlays
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl leading-relaxed">
          Komponen pelapis di atas konten utama untuk konfirmasi kritis, dialog formulir, dan petunjuk ringkas (tooltip) dengan penanganan fokus keyboard dan tombol ESC.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Modal Dialog */}
        <ComponentPreview
          title="Modal Dialog"
          description="Jendela fokus dengan latar blur (backdrop), penanganan tombol ESC, dan pemisah aksi."
          code={dialogCode}
        >
          <div className="flex flex-col items-center gap-3 py-4">
            <Button
              variant="teal"
              size="md"
              onClick={() => setIsDialogOpen(true)}
              leftIcon={<Layers className="w-4 h-4" />}
            >
              Buka Modal Konfirmasi
            </Button>
            <span className="text-xs text-[#12303C]/60 font-mono">
              Klik tombol untuk menguji backdrop & interaksi keyboard ESC
            </span>

            {/* Actual Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogHeader>
                <div className="flex items-center justify-between w-full">
                  <DialogTitle className="font-montserrat">Konfirmasi Komitmen Nilai K4Family</DialogTitle>
                  <DialogCloseButton onClick={() => setIsDialogOpen(false)} />
                </div>
                <DialogDescription>
                  Tindakan ini akan mencatat pilihan kurasi Anda ke dalam ekosistem.
                </DialogDescription>
              </DialogHeader>
              <DialogContent>
                <p className="leading-relaxed text-xs text-[#12303C]/80">
                  Setiap inisiatif K4Family dibangun atas integritas, keterbukaan, dan tanggung jawab antargenerasi. Apakah Anda siap melanjutkan implementasi pada akun Library?
                </p>
              </DialogContent>
              <DialogFooter>
                <Button variant="ghost" size="sm" onClick={() => setIsDialogOpen(false)}>
                  Batal
                </Button>
                <Button variant="teal" size="sm" onClick={() => setIsDialogOpen(false)}>
                  Setujui & Lanjutkan
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </ComponentPreview>

        {/* Tooltips */}
        <ComponentPreview
          title="Directional Tooltips"
          description="Petunjuk mikro kontekstual yang muncul saat hover atau keyboard focus."
          code={tooltipCode}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 py-6">
            <Tooltip content="Tooltip Atas (Top Position)" position="top">
              <Button variant="outline" size="sm">
                Hover Top
              </Button>
            </Tooltip>

            <Tooltip content="Tooltip Bawah (Bottom Position)" position="bottom">
              <Button variant="outline" size="sm">
                Hover Bottom
              </Button>
            </Tooltip>

            <Tooltip content="Ocean Teal: #087FA0" position="left">
              <Button variant="teal" size="sm">
                Hover Left
              </Button>
            </Tooltip>

            <Tooltip content="Goldenrod: #EBCC3D" position="right">
              <Button variant="warning" size="sm">
                Hover Right
              </Button>
            </Tooltip>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
};
