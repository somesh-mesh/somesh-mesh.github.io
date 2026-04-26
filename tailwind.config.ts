import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#06070a",
          900: "#0b0d12",
          850: "#11141b",
          800: "#151923",
          700: "#1d2330",
          600: "#2b3447"
        },
        cyan: {
          300: "#79f2ff",
          400: "#42d8f8",
          500: "#16b8d9"
        }
      },
      fontFamily: {
        sans: ["Manrope", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Space Grotesk", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0, 0, 0, 0.35)",
        glow: "0 0 40px rgba(66, 216, 248, 0.18)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
