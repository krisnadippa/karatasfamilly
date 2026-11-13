/**
 * K4Family Design System Tokens — Developer Brief V04
 * Single source of truth for color scales, typography, brand identities, and layout bounds.
 */

export const corporateColors = {
  midnightBlue: {
    DEFAULT: "#12303C",
    50: "#F0F4F7",
    100: "#D9E3E8",
    200: "#B3C7D1",
    300: "#8DABBA",
    400: "#4D7A94",
    500: "#1E4C60",
    600: "#173C4D",
    700: "#12303C", // Official Primary HEX
    800: "#0D222B",
    900: "#08151B",
    usage: "Header, heading, struktur utama, teks kontras tinggi.",
  },
  forestGreen: {
    DEFAULT: "#20463D",
    50: "#F0F5F4",
    100: "#DCE7E4",
    200: "#B9D0CA",
    300: "#96B8AF",
    400: "#508A7C",
    500: "#2B5D51",
    600: "#20463D", // Official Primary HEX
    700: "#17342D",
    800: "#10231E",
    900: "#0A1713",
    usage: "Natural elements, sustainability, pertumbuhan harmonis.",
  },
  oceanTeal: {
    DEFAULT: "#087FA0",
    50: "#EAF6F9",
    100: "#CAECF4",
    200: "#95D9E9",
    300: "#60C6DE",
    400: "#24AED0",
    500: "#0A95BC",
    600: "#087FA0", // Official Primary HEX
    700: "#06627C",
    800: "#044658",
    900: "#022B36",
    usage: "Education, digital accent, interaktivitas dan navigasi fokus.",
  },
  brightGoldenrod: {
    DEFAULT: "#EBCC3D",
    50: "#FCF9E8",
    100: "#F9F3C6",
    200: "#F3E78D",
    300: "#EDDB55",
    400: "#EBCC3D", // Official Primary HEX
    500: "#D4B426",
    600: "#B0951C",
    700: "#8C7614",
    800: "#69580D",
    900: "#453A07",
    usage: "Highlight premium secukupnya, badge spesial, indikator penting.",
  },
  mutedGold: {
    DEFAULT: "#DFC54E",
    50: "#FAF7EA",
    100: "#F4ECC9",
    200: "#E9DA94",
    300: "#DFC54E", // Official Primary HEX
    400: "#C8AD36",
    500: "#A9922A",
    600: "#8B7720",
    700: "#6C5C17",
    800: "#4D410F",
    900: "#2F2708",
    usage: "Aksen lembut, garis batas halus, ornamen visual editorial.",
  },
  cream: {
    DEFAULT: "#FBF8F0",
    50: "#FFFFFF",
    100: "#FBF8F0", // Official Primary HEX
    200: "#F5EFE0",
    300: "#EFE5CE",
    400: "#E2D3B3",
    500: "#D2BF96",
    usage: "Latar utama halaman (background), whitespace nyaman baca.",
  },
  white: {
    DEFAULT: "#FFFFFF",
    usage: "Surface kartu, modal container, kontras bersih.",
  },
  softGray: {
    DEFAULT: "#F4F6F5",
    50: "#FAFBFA",
    100: "#F4F6F5", // Official Primary HEX
    200: "#E6ECE9",
    300: "#D4DED9",
    400: "#A7B8B0",
    500: "#7A9287",
    usage: "Secondary background, bar filter, kontainer sekunder.",
  },
};

/**
 * 9 Business Lines of the K4Family Ecosystem
 */
export interface K4Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: "Active Phase 1" | "Akan Datang";
  visualStyle: string;
  accentColor: string;
  badgeVariant: "teal" | "forest" | "midnight" | "goldenrod" | "gold" | "cream" | "outline";
}

export const k4Brands: K4Brand[] = [
  {
    id: "k4family",
    name: "K4Family",
    tagline: "Inspire the Young — Learn, Grow, Lead",
    description: "Corporate Ecosystem yang memayungi seluruh inisiatif nilai, keluarga, dan kepemimpinan generasi muda.",
    status: "Active Phase 1",
    visualStyle: "Warm, structured, Cream/White canvas, Midnight Blue, Forest Green, Ocean Teal, Gold accents.",
    accentColor: "#12303C",
    badgeVariant: "midnight",
  },
  {
    id: "k4book",
    name: "K4Book",
    tagline: "Digital Publishing & Book Commerce",
    description: "Penerbitan buku cerita anak, literatur kepemimpinan, dan komersialisasi karya keluarga bermutu tinggi.",
    status: "Active Phase 1",
    visualStyle: "Editorial book publishing, watercolor storybook (Kidstory), flat-vector HR (HumOR), literary cinematic (Novel).",
    accentColor: "#087FA0",
    badgeVariant: "teal",
  },
  {
    id: "rani",
    name: "RANI",
    tagline: "Family Education Articles",
    description: "Kanal artikel edukasi keluarga, parenting empatik, psikologi perkembangan, dan refleksi hidup.",
    status: "Active Phase 1",
    visualStyle: "Soft Editorial Gouache, empatik, hangat, tenang, faceless-first (tidak menggunakan foto founder).",
    accentColor: "#20463D",
    badgeVariant: "forest",
  },
  {
    id: "k4craft",
    name: "K4Craft",
    tagline: "Functional Products & Woodcraft",
    description: "Kriya kayu fungsional, produk kerajinan tangan presisi, dan estetika perabot keluarga alami.",
    status: "Akan Datang",
    visualStyle: "Functional/isometric, woodcraft craftsmanship, industrial yet warm tactile finishes.",
    accentColor: "#8C5E38",
    badgeVariant: "outline",
  },
  {
    id: "k4studio",
    name: "K4Studio",
    tagline: "Creative Production",
    description: "Studio produksi kreatif terpadu untuk konten visual, audio, animasi edukasi, dan dokumentasi ekosistem.",
    status: "Akan Datang",
    visualStyle: "Creative editorial, cinematic framing, production-oriented aesthetic.",
    accentColor: "#2A4B7C",
    badgeVariant: "outline",
  },
  {
    id: "k4farm",
    name: "K4Farm",
    tagline: "Family Agriculture",
    description: "Pertanian keluarga berkelanjutan, ketahanan pangan lokal, dan edukasi budidaya alami regeneratif.",
    status: "Akan Datang",
    visualStyle: "Rustic, hand-painted botanical, natural earth textures and organic simplicity.",
    accentColor: "#3B6939",
    badgeVariant: "outline",
  },
  {
    id: "k4health",
    name: "K4Health",
    tagline: "Wellness & Botanical Knowledge",
    description: "Literasi kesehatan holistik berbasis tanaman herbal nusantara, kebugaran keluarga, dan sains botani terapan.",
    status: "Akan Datang",
    visualStyle: "Scientific botanical illustration, informative, higienis tanpa menimbulkan kesan klinik dingin.",
    accentColor: "#1B7A68",
    badgeVariant: "outline",
  },
  {
    id: "k4academy",
    name: "K4Academy",
    tagline: "Early Years Education",
    description: "Pendidikan anak usia dini berbasis kurikulum holistik yang menstimulasi rasa ingin tahu dan kepemimpinan.",
    status: "Akan Datang",
    visualStyle: "Playful learning graphics, inclusive, clear readable shapes and cheerful warmth.",
    accentColor: "#EB963D",
    badgeVariant: "outline",
  },
  {
    id: "warunk",
    name: "WarunK",
    tagline: "Culinary Concept",
    description: "Konsep kuliner hangat berbasis resep autentik keluarga, bahan segar lokal, dan atmosfer kebersamaan santap.",
    status: "Akan Datang",
    visualStyle: "Culinary journal style, hand-painted food illustrations, artisanal rustic charm.",
    accentColor: "#B54D35",
    badgeVariant: "outline",
  },
];

/**
 * Kidstory Age Groups (Strictly per Developer Brief V04)
 */
export const kidstoryAgeGroups = [
  { id: "0-18m", label: "0–18 bulan", description: "Buku sensori, pengenalan rima suara, kontras visual awal." },
  { id: "18m-3y", label: "18 bulan–3 tahun", description: "Eksplorasi kata pertama, emosi dasar, dan kebiasaan baik." },
  { id: "3-5y", label: "3–5 tahun", description: "Kemandirian, imajinasi kreatif, cerita empati persahabatan." },
];

/**
 * Official Tagline
 */
export const OFFICIAL_TAGLINE = "Inspire the Young — Learn, Grow, Lead";

/**
 * Official Logo Placeholder Label
 */
export const OFFICIAL_LOGO_PLACEHOLDER = "Official Logo Placeholder";
