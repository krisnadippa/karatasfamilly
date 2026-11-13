"use client";

import React, { useState } from "react";
import {
  Sparkles,
  HelpCircle,
  Layers,
  ShieldCheck,
  ChevronDown,
  User,
  BookOpen,
  Settings,
  LogOut,
  Download,
  Share2,
  Trash2,
  Filter,
  MoreVertical,
  Check,
} from "lucide-react";
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
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "../component-preview";

export const OverlaysSection: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string>("Belum ada");

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

  const dropdownCode = `<DropdownMenu
  triggerText="Menu Akun & Koleksi"
  align="left"
  items={[
    { id: "profile", label: "Profil Keluarga", icon: <User className="w-4 h-4" />, onClick: () => {} },
    { id: "books", label: "Rak Buku Saya", icon: <BookOpen className="w-4 h-4" />, badge: "4 Buku", onClick: () => {} },
    { id: "settings", label: "Pengaturan Akun", icon: <Settings className="w-4 h-4" />, onClick: () => {} },
    { id: "logout", label: "Keluar Akun", icon: <LogOut className="w-4 h-4" />, destructive: true, onClick: () => {} },
  ]}
/>`;

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
          Dropdowns, Dialogs & Tooltip Overlays
        </h2>
        <p className="text-sm text-[#12303C]/70 mt-1 max-w-2xl leading-relaxed">
          Komponen pelapis di atas konten utama: Dropdown menu interaktif dengan item badge & status destruktif, modal dialog konfirmasi dengan penanganan tombol ESC, dan directional tooltips.
        </p>
      </div>

      {/* 1. Dropdown Menus Showcase */}
      <ComponentPreview
        title="1. Interactive Dropdown Menus (shadcn Pattern)"
        description="Menu tarik-turun (dropdown) dengan deteksi klik di luar (outside-click), animasi transisi, icon slot, status destruktif, dan badge."
        code={dropdownCode}
      >
        <div className="w-full flex flex-wrap items-center justify-center gap-6 py-4">
          {/* User Account Dropdown */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[11px] font-semibold text-[#12303C]/60 uppercase tracking-wider">
              Akun & Profil
            </span>
            <DropdownMenu
              triggerText="Menu Akun Saya"
              items={[
                {
                  id: "profile",
                  label: "Profil Keluarga",
                  icon: <User className="w-4 h-4" />,
                  onClick: () => setSelectedAction("Buka Profil Keluarga"),
                },
                {
                  id: "books",
                  label: "Rak Buku Saya",
                  icon: <BookOpen className="w-4 h-4" />,
                  badge: "4 Buku",
                  onClick: () => setSelectedAction("Buka Rak Buku Saya"),
                },
                {
                  id: "settings",
                  label: "Pengaturan Akun",
                  icon: <Settings className="w-4 h-4" />,
                  onClick: () => setSelectedAction("Buka Pengaturan"),
                },
                {
                  id: "logout",
                  label: "Keluar Akun",
                  icon: <LogOut className="w-4 h-4" />,
                  destructive: true,
                  onClick: () => setSelectedAction("Klik Keluar Akun"),
                },
              ]}
            />
          </div>

          {/* Action / Context Menu */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[11px] font-semibold text-[#12303C]/60 uppercase tracking-wider">
              Aksi Buku
            </span>
            <DropdownMenu
              triggerText="Opsi Buku"
              items={[
                {
                  id: "download",
                  label: "Unduh PDF E-Book",
                  icon: <Download className="w-4 h-4" />,
                  onClick: () => setSelectedAction("Unduh PDF"),
                },
                {
                  id: "share",
                  label: "Bagikan Judul",
                  icon: <Share2 className="w-4 h-4" />,
                  onClick: () => setSelectedAction("Bagikan Judul"),
                },
                {
                  id: "archive",
                  label: "Arsipkan dari Rak",
                  icon: <Trash2 className="w-4 h-4" />,
                  destructive: true,
                  onClick: () => setSelectedAction("Arsipkan Buku"),
                },
              ]}
            />
          </div>

          {/* Custom Trigger (Icon Button) */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[11px] font-semibold text-[#12303C]/60 uppercase tracking-wider">
              Icon Trigger
            </span>
            <DropdownMenu
              trigger={
                <Button variant="outline" size="icon" title="Opsi Cepat">
                  <MoreVertical className="w-4 h-4 text-[#12303C]" />
                </Button>
              }
              items={[
                {
                  id: "sort-new",
                  label: "Urutkan Terbaru",
                  onClick: () => setSelectedAction("Urutkan Terbaru"),
                },
                {
                  id: "sort-title",
                  label: "Urutkan Abjad (A-Z)",
                  onClick: () => setSelectedAction("Urutkan A-Z"),
                },
                {
                  id: "filter-kidstory",
                  label: "Hanya Kidstory",
                  badge: "Filter",
                  onClick: () => setSelectedAction("Filter Kidstory"),
                },
              ]}
            />
          </div>
        </div>

        <div className="w-full text-center mt-2">
          <span className="text-xs text-[#087FA0] font-mono bg-[#087FA0]/5 px-3 py-1 rounded-full border border-[#087FA0]/20">
            Aksi yang dipilih: <strong>{selectedAction}</strong>
          </span>
        </div>
      </ComponentPreview>

      {/* 2. Dialog & Tooltips in 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Modal Dialog */}
        <ComponentPreview
          title="2. Modal Dialog"
          description="Jendela fokus dengan latar blur (backdrop), penanganan tombol ESC, dan pemisah aksi."
          code={dialogCode}
          hideDeviceSwitcher
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
          title="3. Directional Tooltips"
          description="Petunjuk mikro kontekstual yang muncul saat hover atau keyboard focus di 4 arah mata angin."
          code={tooltipCode}
          hideDeviceSwitcher
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
