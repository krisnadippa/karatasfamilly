# Karatas Family Design System Specification

Panduan komprehensif sistem desain untuk standardisasi antarmuka pengguna, tata letak, warna, tipografi, dan komponen antarmuka Karatas Family. Dokumen ini dirancang sebagai acuan tunggal dalam pengembangan produk digital.

---

## 1. Palet Warna Korporat

Palet warna Karatas Family merefleksikan kedalaman spiritual, keharmonisan alam, kecerdasan digital, dan keunggulan ekosistem.

| Nama Warna | Kode HEX | Kode RGB | Penggunaan Utama | Rasio Kontras Minimum |
| :--- | :--- | :--- | :--- | :--- |
| **Midnight Blue** | `#12303C` | `rgb(18, 48, 60)` | Struktur utama, headline, teks kontras tinggi, navigasi primer, button utama. | 11.2:1 terhadap Cream |
| **Forest Green** | `#20463D` | `rgb(32, 70, 61)` | Tema alam, ketenangan, pilar sustainability, button sekunder. | 8.9:1 terhadap Cream |
| **Ocean Teal** | `#087FA0` | `rgb(8, 127, 160)` | Pendidikan, curiosity, digital accent, status interaktif, focus ring. | 4.6:1 terhadap White |
| **Bright Goldenrod** | `#EBCC3D` | `rgb(235, 204, 61)` | Highlight premium secukupnya, indikator aktif, aksen penting. | Teks gelap `#12303C` |
| **Muted Gold** | `#DFC54E` | `rgb(223, 197, 78)` | Aksen lembut, border hiasan, pembatas halus. | Elemen non-teks / border |
| **Cream** | `#FAF8F5` | `rgb(250, 248, 245)` | Latar belakang halaman utama, kanvas pembaca, whitespace. | Background |
| **White** | `#FFFFFF` | `rgb(255, 255, 255)` | Kartu konten, modul elevasi, kontainer formulir. | Surface |

### Palet Turunan dan Fungsional

- **Border Netral**: `#EAE5DC` (garis batas kartu, pemisah section halus)
- **Border Fokus**: `#087FA0` (ring fokus navigasi keyboard)
- **Teks Utama**: `#12303C` (headline, judul kartu, paragraf primer)
- **Teks Muted**: `#70695E` (deskripsi sekunder, metadata, tanggal)
- **Teks Terang**: `#FFFFFF` (di atas Midnight Blue, Forest Green, atau Ocean Teal)
- **Surface Hover**: `#F3EFE8` (latar interaksi saat kursor berada di atas elemen)

---

## 2. Tata Letak dan Batas Spasi (Layout & Rhythm)

Sistem tata letak menggunakan grid berbasis 8-point dan 4-point untuk konsistensi vertikal maupun horizontal.

### 2.1 Batas Kanan Kiri (Horizontal Page & Container Padding)

Batas horizontal menjamin konten tidak menempel ke tepi layar dan tetap terpusat secara proporsional.

| Viewport | Lebar Layar | Batas Kanan Kiri (Page Padding X) | Kelas Tailwind | Max Container Width |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile** | `< 640px` | `16px` | `px-4` | `100%` |
| **Tablet** | `640px - 1023px` | `24px` | `px-6` | `768px` |
| **Desktop** | `1024px - 1279px` | `48px` | `px-12` | `1200px` |
| **Wide Desktop** | `>= 1280px` | `64px` | `px-16` | `1400px` |

### 2.2 Batas Atas Bawah (Vertical Section Padding & Rhythm)

Batas vertikal menjaga pernapasan visual antar-section agar hirarki konten terbaca dengan tenang dan terstruktur.

| Tipe Section | Padding Atas & Bawah (Section Padding Y) | Kelas Tailwind | Penggunaan |
| :--- | :--- | :--- | :--- |
| **Compact** | `48px` (Mobile) / `64px` (Desktop) | `py-12 md:py-16` | Filter bar, breadcrumbs, banner pengumuman. |
| **Standard** | `64px` (Mobile) / `96px` (Desktop) | `py-16 md:py-24` | Section fitur umum, Four Pillars, galeri modul. |
| **Spacious** | `80px` (Mobile) / `128px` (Desktop) | `py-20 md:py-32` | Hero section, Ecosystem showcase, Philosophy section. |

### 2.3 Jarak Antar-Section (Section Gap)

Jarak terpisah antar-kontainer section dalam satu halaman:
- Mobile: `32px` (`gap-8`)
- Tablet: `48px` (`gap-12`)
- Desktop: `64px` (`gap-16`)

### 2.4 Grid Gutter dan Spasi Antar-Kartu

- **Tight**: `12px` (`gap-3`) untuk navigasi tag dan filter kecil.
- **Standard**: `20px` (`gap-5`) untuk kartu bento 3-kolom dan 4-kolom.
- **Relaxed**: `28px` (`gap-7`) untuk kartu showcase besar.

---

## 3. Sistem Tipografi

Tipografi menggunakan **Plus Jakarta Sans** sebagai font sans-serif modern berdaya baca tinggi, dipadukan dengan **Newsreader** untuk kutipan editorial buku bila diperlukan.

| Level Hirarki | Ukuran Font | Line Height | Letter Spacing (Tracking) | Font Weight | Contoh Penerapan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `56px` | `1.08` | `-0.035em` | `900` (Black) | Headline hero utama |
| **Heading 1 (H1)** | `44px` | `1.12` | `-0.030em` | `800` (Extrabold) | Judul halaman primer |
| **Heading 2 (H2)** | `36px` | `1.18` | `-0.025em` | `800` (Extrabold) | Judul section utama |
| **Heading 3 (H3)** | `26px` | `1.25` | `-0.020em` | `700` (Bold) | Judul modul, nama pilar |
| **Heading 4 (H4)** | `20px` | `1.32` | `-0.015em` | `700` (Bold) | Sub-judul kartu, heading dropdown |
| **Body Large** | `18px` | `1.55` | `-0.010em` | `400` / `500` | Lead paragraph, intro section |
| **Body Default** | `15px` | `1.60` | `-0.005em` | `400` (Normal) | Teks isi deskripsi standar |
| **Body Small** | `13px` | `1.55` | `0` | `400` / `500` | Keterangan sekunder kartu |
| **Caption** | `12px` | `1.45` | `+0.010em` | `500` (Medium) | Label form, tanggal, footer legal |
| **Overline / Badge** | `11px` | `1.30` | `+0.120em` | `700` (Bold) | Badge kategori, label uppercase |

### Format Dua Nada (Two-Tone Headline)

Untuk judul section utama, gunakan formula dua baris:
- **Baris 1**: `font-extrabold text-[#12303C]` (teks penegas)
- **Baris 2**: `font-light text-neutral-400` (teks penyeimbang puitis)

---

## 4. Spesifikasi Komponen

### 4.1 Tombol (Button)

Komponen tombol mendukung 7 varian fungsional, 4 ukuran standar, dan seluruh status interaksi.

#### Varian Tombol

1. **Primary (`variant="primary"`)**
   - Latar: `#12303C` (Midnight Blue)
   - Teks: `#FFFFFF`
   - Hover: `#1A4252`
   - Active: `#0D222B`
   - Penggunaan: Aksi utama halaman, navigasi primer, konfirmasi transaksi.

2. **Secondary (`variant="secondary"`)**
   - Latar: `#20463D` (Forest Green)
   - Teks: `#FFFFFF`
   - Hover: `#2B5D51`
   - Active: `#17342D`
   - Penggunaan: Aksi berkelanjutan, filter tema, tautan ekosistem alam.

3. **Teal Accent (`variant="teal"`)**
   - Latar: `#087FA0` (Ocean Teal)
   - Teks: `#FFFFFF`
   - Hover: `#0B97BD`
   - Active: `#06627B`
   - Penggunaan: Akses modul pembelajaran, riset, aktivasi interaktif.

4. **Goldenrod (`variant="goldenrod"`)**
   - Latar: `#EBCC3D` (Bright Goldenrod)
   - Teks: `#12303C` (Midnight Blue)
   - Hover: `#F2D75C`
   - Active: `#D4B426`
   - Penggunaan: Call-to-action promosi khusus, status membership eksklusif.

5. **Outline (`variant="outline"`)**
   - Latar: `transparent`
   - Border: `1px solid rgba(18, 48, 60, 0.2)`
   - Teks: `#12303C`
   - Hover: Border `#12303C`, latar `rgba(18, 48, 60, 0.05)`
   - Penggunaan: Aksi sekunder, tombol filter netral.

6. **Ghost (`variant="ghost"`)**
   - Latar: `transparent`
   - Teks: `#12303C`
   - Hover: Latar `rgba(18, 48, 60, 0.05)`
   - Penggunaan: Tombol navigasi bar, aksi inline tanpa batas visual tegas.

7. **Cream (`variant="cream"`)**
   - Latar: `#FAF8F5`
   - Border: `1px solid #EAE5DC`
   - Teks: `#12303C`
   - Hover: Latar `#F3EFE8`
   - Penggunaan: Tombol utilitas pada permukaan kartu putih.

#### Ukuran Tombol

- **Small (`size="sm"`)**: Tinggi `36px`, padding horizontal `14px`, teks `12px`, radius `full`.
- **Medium (`size="md"`)**: Tinggi `44px`, padding horizontal `20px`, teks `14px`, radius `full`.
- **Large (`size="lg"`)**: Tinggi `52px`, padding horizontal `28px`, teks `16px`, radius `full`.
- **Icon (`size="icon"`)**: Dimensi persegi `40px x 40px`, padding `0`, radius `full`.

#### Status Tombol

- **Default**: Kontras warna sesuai varian.
- **Hover**: Penyesuaian saturasi latar belakang sebesar 8-12%.
- **Active / Pressed**: Penurunan saturasi atau peredupan 15%.
- **Focus-Visible**: Ring outline `2px` warna Ocean Teal (`#087FA0`) dengan offset `2px`.
- **Disabled**: Opasitas `50%`, kursor `not-allowed`, aksi dinonaktifkan.
- **Loading**: Teks digantikan dengan SVG spinner monokrom tanpa emoji.

---

### 4.2 Dropdown Menu

Komponen dropdown menyajikan daftar pilihan terstruktur dengan aksesibilitas keyboard penuh.

#### Struktur Visual Dropdown

- **Trigger**: Tombol atau elemen pembuka dengan atribut `aria-haspopup="menu"` dan `aria-expanded`.
- **Menu Container**:
  - Latar: `#FFFFFF`
  - Border: `1px solid #EAE5DC`
  - Shadow: `0 12px 36px -4px rgba(18, 48, 60, 0.14)`
  - Radius: `16px` (`rounded-2xl`)
  - Padding internal: `6px`
  - Posisi: Offset vertikal `8px` dari trigger, dukungan penataan `left`, `right`, atau `center`.

#### Status Item Dropdown

- **Default Item**: Teks `#12303C`, ukuran font `14px`, padding `10px 12px`, radius `12px`.
- **Hover / Keyboard Focus**: Latar `#FAF8F5`, teks `#12303C`.
- **Selected Item**: Latar `rgba(18, 48, 60, 0.08)`, teks `#12303C` dengan bobot `font-semibold`.
- **Disabled Item**: Opasitas `40%`, kursor `not-allowed`.
- **Divider**: Garis pemisah tinggi `1px`, warna `#EAE5DC`, margin vertikal `4px`.
- **Badge Aksesoris**: Pill kecil latar `rgba(18, 48, 60, 0.05)`, teks `10px font-bold`.

#### Navigasi Keyboard

- `Enter` / `Spasi`: Membuka menu atau memilih item yang sedang disorot.
- `ArrowDown`: Memindahkan fokus ke item berikutnya secara sirkular.
- `ArrowUp`: Memindahkan fokus ke item sebelumnya.
- `Escape`: Menutup dropdown dan mengembalikan fokus ke tombol trigger.
- `Click Outside`: Menutup dropdown seketika.

---

### 4.3 Kartu Konten (Cards)

- **Latar Kartu**: Putih (`#FFFFFF`) atau Soft Tint (`#E0EBD6`, `#EBF2FA`, `#FDEED9`, `#FAF8F5`).
- **Radius Sudut**: `26px` hingga `30px` untuk keanggunan modern.
- **Border**: `1px solid rgba(18, 48, 60, 0.08)` pada latar terang.
- **Padding Internal**: `24px` (Mobile) hingga `32px` (Desktop).
- **Shadow**: `0 4px 16px -2px rgba(18, 48, 60, 0.06)` dengan transisi halus saat hover.

---

## 5. Radius Sudut dan Bayangan (Elevation & Radii)

### Skala Radius

- `xs`: `4px` (input kecil, tag mini)
- `sm`: `8px` (elemen sekunder, tooltip)
- `md`: `12px` (item dropdown, input standar)
- `lg`: `16px` (kontainer dropdown, modal kecil)
- `xl`: `22px` (gambar dalam kartu)
- `2xl`: `28px` (kartu section standar)
- `3xl`: `36px` (kartu section besar / hero wrapper)
- `full`: `9999px` (tombol pill, badge overline, search bar)

### Skala Elevasi Bayangan

- **Subtle**: `0 1px 3px rgba(18, 48, 60, 0.05)`
- **Card**: `0 4px 16px -2px rgba(18, 48, 60, 0.06)`
- **Elevated**: `0 12px 32px -4px rgba(18, 48, 60, 0.10)`
- **Dropdown / Floating**: `0 12px 36px -4px rgba(18, 48, 60, 0.14), 0 0 0 1px rgba(18, 48, 60, 0.06)`

---

## 6. Lokasi Berkas dan Panduan Penggunaan Kode

Kode implementasi telah dipisahkan secara modular agar mudah ditelusuri dan digunakan kembali:

1. **Tokens TypeScript**:
   `lib/design-system/tokens.ts`
   Berisi seluruh konstanta warna, tipografi, batas spasi, dan radius sebagai sumber data TypeScript.

2. **Tailwind CSS Theme Variables**:
   `app/globals.css`
   Mendaftarkan warna korporat di bawah direktif `@theme` sehingga dapat langsung digunakan melalui utility class:
   - `bg-corporate-midnight`, `text-corporate-midnight`
   - `bg-corporate-forest`, `text-corporate-forest`
   - `bg-corporate-teal`, `text-corporate-teal`
   - `bg-corporate-goldenrod`, `text-corporate-goldenrod`
   - `bg-corporate-gold-muted`, `text-corporate-gold-muted`
   - `bg-corporate-cream`, `bg-corporate-white`, `border-corporate-border`

3. **Komponen Tombol**:
   `components/ui/button.tsx`
   Contoh penggunaan:
   ```tsx
   import { Button } from "@/components/ui/button";

   // Varian Midnight Blue
   <Button variant="primary" size="md">Eksplorasi Ekosistem</Button>

   // Varian Forest Green dengan Tautan
   <Button variant="secondary" size="lg" href="/k4book">Buka K4Book</Button>

   // Varian Outline dengan Ikon
   <Button variant="outline" size="sm">Pelajari Nilai</Button>
   ```

4. **Komponen Dropdown**:
   `components/ui/dropdown.tsx`
   Contoh penggunaan:
   ```tsx
   import { Dropdown, DropdownItem } from "@/components/ui/dropdown";
   import { Button } from "@/components/ui/button";

   const menuItems: DropdownItem[] = [
     { id: "faith", label: "Faith", description: "Fondasi nilai dan spiritualitas" },
     { id: "family", label: "Family", description: "Koneksi keluarga bermakna" },
     { id: "divider-1", label: "", isDivider: true },
     { id: "k4book", label: "K4Book Sanctuary", badge: "Live", href: "/k4book" },
   ];

   <Dropdown
     trigger={<Button variant="outline" size="sm">Pilih Pilar</Button>}
     items={menuItems}
     align="left"
   />
   ```

---

## 7. Prinsip Desain Karatas Family

1. **Kejelasan Tanpa Distraksi**: Utamakan ruang kosong (whitespace), kontras tajam, dan pembagian porsi warna yang seimbang.
2. **Harmoni Material dan Digital**: Sentuhan warna Cream (`#FAF8F5`) dan Midnight Blue (`#12303C`) menghadirkan keseimbangan antara kehangatan kertas fisik dan kecanggihan teknologi modern.
3. **Aksen Terukur**: Warna Bright Goldenrod (`#EBCC3D`) dan Ocean Teal (`#087FA0`) hanya diaplikasikan pada titik fokus yang membutuhkan atensi pengguna, tidak mendominasi ruang utama.
4. **Bebas Elemen Informal**: Seluruh teks, label, dan ikon disajikan secara profesional tanpa menggunakan emoji.

