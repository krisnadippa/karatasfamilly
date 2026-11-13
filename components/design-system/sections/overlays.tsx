"use client";

import React, { useState } from "react";
import { Sparkles, HelpCircle, Layers } from "lucide-react";
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
import { ComponentPreview } from "../component-preview";

export const OverlaysSection: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dialogCode = `<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  <DialogHeader>
    <div className="flex items-center justify-between w-full">
      <DialogTitle>Konfirmasi Prinsip Karatas</DialogTitle>
      <DialogCloseButton onClick={() => setIsDialogOpen(false)} />
    </div>
    <DialogDescription>
      Tindakan ini akan mencatat komitmen kepemimpinan Anda ke dalam sistem.
    </DialogDescription>
  </DialogHeader>
  <DialogContent>
    <p>
      Setiap keputusan dibangun atas empat pilar: Faith, Family, Freedom, dan Future.
    </p>
  </DialogContent>
  <DialogFooter>
    <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>Batal</Button>
    <Button variant="primary" onClick={() => setIsDialogOpen(false)}>Setujui & Lanjutkan</Button>
  </DialogFooter>
</Dialog>`;

  const tooltipCode = `<Tooltip content="Warna korporat Ocean Teal melambangkan pendidikan" position="top">
  <Button variant="outline" size="sm">Arahkan Kursor ke Sini</Button>
</Tooltip>`;

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold text-[#087FA0] uppercase tracking-wider">
          Overlays & Modals
        </span>
        <h2 className="text-2xl font-bold text-[#12303C] tracking-tight mt-1">
          Dialogs & Tooltips
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl">
          Komponen pelapis di atas konten utama untuk konfirmasi kritis, dialog formulir, dan petunjuk ringkas (tooltip).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Modal Dialog */}
        <ComponentPreview
          title="Modal Dialog"
          description="Jendela fokus dengan latar blur (backdrop), penanganan tombol ESC, dan pemisah aksi."
          code={dialogCode}
        >
          <div className="flex flex-col items-center gap-3">
            <Button
              variant="primary"
              onClick={() => setIsDialogOpen(true)}
              leftIcon={<Layers className="w-4 h-4" />}
            >
              Buka Modal Dialog
            </Button>
            <span className="text-xs text-[#12303C]/60">
              Klik untuk menguji backdrop & interaksi keyboard ESC
            </span>

            {/* Actual Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogHeader>
                <div className="flex items-center justify-between w-full">
                  <DialogTitle>Konfirmasi Prinsip Karatas</DialogTitle>
                  <DialogCloseButton onClick={() => setIsDialogOpen(false)} />
                </div>
                <DialogDescription>
                  Tindakan ini mencatat komitmen kepemimpinan Anda ke dalam sistem.
                </DialogDescription>
              </DialogHeader>
              <DialogContent>
                <p className="leading-relaxed">
                  Setiap keputusan organisasi dan karya dibangun atas empat pilar kokoh: 
                  <strong> Faith, Family, Freedom, dan Future</strong>. Apakah Anda siap melanjutkan implementasi?
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
          title="Tooltips"
          description="Petunjuk mikro yang muncul saat hover atau keyboard focus."
          code={tooltipCode}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 py-4">
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
              <Button variant="goldenrod" size="sm">
                Hover Right
              </Button>
            </Tooltip>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
};

