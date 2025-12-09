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
    },
  },
  plugins: [],
};
