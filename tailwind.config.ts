import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B2B5B",
        blue: "#154F8B",
        yellow: "#F4B942",
        surface: "#FAFBFD",
        ink: "#1A1A1A",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        industrial: "0 14px 36px rgba(11, 43, 91, 0.09)",
      },
    },
  },
  plugins: [],
};

export default config;
