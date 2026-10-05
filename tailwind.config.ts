import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0457A8",
          "blue-hover": "#034383",
          "blue-light": "#EBF4FC",
          "blue-subtle": "#F0F7FF",
          navy: "#0B132B",
          dark: "#0F172A",
          gold: "#D6AF37",
          "gold-light": "#FDF9EE",
          green: "#22C35E",
          surface: "#F8FAFC",
          border: "#E2E8F0",
          card: "#FFFFFF",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
