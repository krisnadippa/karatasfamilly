/**
 * Karatas Family Design System Tokens
 * Source of truth for color palette, layout spacing, typography, and component styling.
 */

export const corporateColors = {
  midnightBlue: {
    DEFAULT: "#12303C",
    hover: "#1A4252",
    active: "#0D222B",
    surface: "#EDF2F4",
    textContrast: "#FFFFFF",
    description: "Struktur utama, headline, teks kontras, dan elemen fondasi.",
  },
  forestGreen: {
    DEFAULT: "#20463D",
    hover: "#2B5D51",
    active: "#17342D",
    surface: "#EDF4F1",
    textContrast: "#FFFFFF",
    description: "Alam, ketenangan, sustainability, dan pertumbuhan regeneratif.",
  },
  oceanTeal: {
    DEFAULT: "#087FA0",
    hover: "#0B97BD",
    active: "#06627B",
    surface: "#E8F5F8",
    textContrast: "#FFFFFF",
    description: "Pendidikan, rasa ingin tahu, aksen digital, dan elemen interaktif.",
  },
  brightGoldenrod: {
    DEFAULT: "#EBCC3D",
    hover: "#F2D75C",
    active: "#D4B426",
    surface: "#FCF9E8",
    textContrast: "#12303C",
    description: "Highlight premium secukupnya, indikator status, dan fokus visual.",
  },
  mutedGold: {
    DEFAULT: "#DFC54E",
    hover: "#E7D16E",
    active: "#C8AD36",
    surface: "#FAF6E9",
    textContrast: "#12303C",
    description: "Aksen lembut, border elegan, dan ornamen pelengkap.",
  },
  cream: {
    DEFAULT: "#FAF8F5",
    muted: "#F3EFE8",
    surface: "#FFFFFF",
    border: "#EAE5DC",
    textContrast: "#12303C",
    description: "Latar belakang utama, whitespace, dan kanvas pembaca.",
  },
  neutral: {
    50: "#FAF9F7",
    100: "#F2EFEA",
    200: "#E5E0D8",
    300: "#D3CCC1",
    400: "#9E9689",
    500: "#70695E",
    600: "#4D463C",
    700: "#363028",
    800: "#241F1A",
    900: "#171411",
    950: "#0D0A08",
  },
} as const;

export const layoutTokens = {
  containerMaxWidth: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1400px",
    content: "1200px",
    reading: "760px",
  },
  pagePaddingX: {
    mobile: "16px", // px-4
    tablet: "24px", // px-6
    desktop: "48px", // px-12
    wide: "64px", // px-16
  },
  sectionPaddingY: {
    compact: "48px", // py-12
    standard: "80px", // py-20
    spacious: "112px", // py-28
  },
  sectionGap: {
    mobile: "32px", // gap-8
    tablet: "48px", // gap-12
    desktop: "64px", // gap-16
  },
  gridGutters: {
    tight: "12px", // gap-3
    standard: "20px", // gap-5
    relaxed: "28px", // gap-7
    spacious: "36px", // gap-9
  },
} as const;

export const typographyTokens = {
  fontFamily: {
    primary: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    serif: '"Newsreader", "Cormorant Garamond", Georgia, serif',
  },
  sizes: {
    display: {
      fontSize: "56px",
      lineHeight: "1.08",
      letterSpacing: "-0.035em",
      fontWeight: "900",
    },
    h1: {
      fontSize: "44px",
      lineHeight: "1.12",
      letterSpacing: "-0.03em",
      fontWeight: "800",
    },
    h2: {
      fontSize: "36px",
      lineHeight: "1.18",
      letterSpacing: "-0.025em",
      fontWeight: "800",
    },
    h3: {
      fontSize: "26px",
      lineHeight: "1.25",
      letterSpacing: "-0.02em",
      fontWeight: "700",
    },
    h4: {
      fontSize: "20px",
      lineHeight: "1.32",
      letterSpacing: "-0.015em",
      fontWeight: "700",
    },
    bodyLarge: {
      fontSize: "18px",
      lineHeight: "1.55",
      letterSpacing: "-0.01em",
      fontWeight: "400",
    },
    bodyDefault: {
      fontSize: "15px",
      lineHeight: "1.6",
      letterSpacing: "-0.005em",
      fontWeight: "400",
    },
    bodySmall: {
      fontSize: "13px",
      lineHeight: "1.55",
      letterSpacing: "0",
      fontWeight: "400",
    },
    caption: {
      fontSize: "12px",
      lineHeight: "1.45",
      letterSpacing: "0.01em",
      fontWeight: "500",
    },
    overline: {
      fontSize: "11px",
      lineHeight: "1.3",
      letterSpacing: "0.12em",
      fontWeight: "700",
      textTransform: "uppercase",
    },
  },
} as const;

export const radiiTokens = {
  none: "0px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "22px",
  "2xl": "28px",
  "3xl": "36px",
  full: "9999px",
} as const;

export const shadowTokens = {
  subtle: "0 1px 3px rgba(18, 48, 60, 0.05)",
  card: "0 4px 16px -2px rgba(18, 48, 60, 0.06)",
  elevated: "0 12px 32px -4px rgba(18, 48, 60, 0.10)",
  floating: "0 20px 48px -8px rgba(18, 48, 60, 0.16)",
  dropdown: "0 10px 30px -5px rgba(18, 48, 60, 0.12), 0 0 0 1px rgba(18, 48, 60, 0.06)",
} as const;

