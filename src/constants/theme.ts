/**
 * ═══════════════════════════════════════════════════════════════════
 * ZEESHAN METAL RECYCLING — THEME TOKENS (TypeScript)
 * Single source of truth for JS-side theme consumption.
 * All values mirror the CSS custom properties in globals.css.
 * ═══════════════════════════════════════════════════════════════════
 */

// ── Brand Colors ────────────────────────────────────────────────────
export const colors = {
  brand: {
    navy: "#0F172A",
    navyLight: "#1E293B",
    navyDark: "#020617",
    copper: "#B87333",
    copperLight: "#D4945A",
    copperDark: "#8B5A2B",
    steel: "#6B7280",
    steelLight: "#9CA3AF",
    steelDark: "#4B5563",
  },

  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
    950: "#030712",
  },

  semantic: {
    background: "#FFFFFF",
    foreground: "#111827",
    primary: "#0F172A",
    primaryForeground: "#FFFFFF",
    secondary: "#B87333",
    secondaryForeground: "#FFFFFF",
    accent: "#6B7280",
    accentForeground: "#FFFFFF",
    muted: "#F3F4F6",
    mutedForeground: "#6B7280",
    destructive: "#DC2626",
    border: "#E5E7EB",
    input: "#E5E7EB",
    ring: "#B87333",
  },

  surface: {
    elevated: "#FFFFFF",
    sunken: "#F9FAFB",
    overlay: "rgba(15, 23, 42, 0.6)",
  },
} as const;

// ── Typography ──────────────────────────────────────────────────────
export const typography = {
  fontFamily: {
    sans: '"DM Sans", ui-sans-serif, system-ui, -apple-system, sans-serif',
    heading: '"DM Serif Display", ui-serif, Georgia, serif',
    mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace',
  },

  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.25rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.125rem", { lineHeight: "1.75rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
    "5xl": ["3rem", { lineHeight: "1.15" }],
    "6xl": ["3.75rem", { lineHeight: "1.1" }],
    "7xl": ["4.5rem", { lineHeight: "1.05" }],
    "8xl": ["6rem", { lineHeight: "1" }],
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  letterSpacing: {
    tighter: "-0.04em",
    tight: "-0.02em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

// ── Spacing (8px base grid) ─────────────────────────────────────────
export const spacing = {
  0: "0",
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",

  /** Semantic section spacing */
  section: {
    sm: "4rem",
    DEFAULT: "6rem",
    lg: "8rem",
    xl: "10rem",
  },

  /** Container max-widths */
  container: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
    "2xl": "90rem",
  },
} as const;

// ── Border Radius ───────────────────────────────────────────────────
export const borderRadius = {
  none: "0",
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.375rem",
  DEFAULT: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  full: "9999px",
} as const;

// ── Shadows ─────────────────────────────────────────────────────────
export const shadows = {
  xs: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
  sm: "0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.06)",
  md: "0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)",
  DEFAULT: "0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)",
  lg: "0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.05)",
  xl: "0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.06)",
  "2xl": "0 25px 50px -12px rgba(15, 23, 42, 0.2)",
  inner: "inset 0 2px 4px 0 rgba(15, 23, 42, 0.05)",
  copper: "0 4px 14px -2px rgba(184, 115, 51, 0.25)",
  navy: "0 4px 14px -2px rgba(15, 23, 42, 0.35)",
  elevated: "0 12px 40px -8px rgba(15, 23, 42, 0.12), 0 4px 12px -4px rgba(15, 23, 42, 0.06)",
  none: "none",
} as const;

// ── Transitions ─────────────────────────────────────────────────────
export const transitions = {
  fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
  base: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  slow: "350ms cubic-bezier(0.4, 0, 0.2, 1)",
  spring: "500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

// ── Z-Index Scale ───────────────────────────────────────────────────
export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const;

// ── Breakpoints ─────────────────────────────────────────────────────
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// ── Framer Motion Presets ───────────────────────────────────────────
export const motionPresets = {
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4, ease: "easeOut" },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -32 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  slideInRight: {
    initial: { opacity: 0, x: 32 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  staggerChildren: {
    animate: { transition: { staggerChildren: 0.08 } },
  },
} as const;

// ── Full Theme Export ───────────────────────────────────────────────
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  zIndex,
  breakpoints,
  motionPresets,
} as const;

export default theme;
