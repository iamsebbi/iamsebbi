/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 1. Fontul PRINCIPAL (Default) -> Clash Display
        // Orice text normal va folosi asta automat.
        sans: ['"Clash Display"', "sans-serif"],

        // 2. Fontul SECUNDAR (Accent) -> Source Serif 4
        // Îl vei folosi manual cu clasa 'font-serif'
        serif: ['"Source Serif 4"', "serif"],
      },
      fontSize: {
        // Fluid Typography using CSS custom properties with clamp()
        // These will automatically scale between min and max based on viewport
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
        "5xl": "var(--font-size-5xl)",
        "6xl": "var(--font-size-6xl)",
        "7xl": "var(--font-size-7xl)",
        "8xl": "var(--font-size-8xl)",
      },
      colors: {
        // Apple Color System (2025) - Light & Dark Mode
        background: {
          DEFAULT: "var(--color-background)",
          alt: "var(--color-background-alt)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          light: "var(--color-surface-light)",
          border: "var(--color-surface-border)",
        },
        text: {
          main: "var(--color-text-main)",
          muted: "var(--color-text-muted)",
          subtle: "var(--color-text-subtle)",
          inverse: "var(--color-text-inverse)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          active: "var(--color-accent-active)",
        },
      },
    },
  },
  plugins: [],
};
