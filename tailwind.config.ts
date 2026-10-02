import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050507",
        ink: "#f3eee4",
        mute: "#8d8880",
        gold: {
          DEFAULT: "#d4b36a",
          25: "rgba(212, 179, 106, 0.25)",
          50: "rgba(212, 179, 106, 0.5)",
        },
        aqua: {
          DEFAULT: "#7ebfb8",
          20: "rgba(126, 191, 184, 0.2)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        logo: ["var(--font-logo)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        glow: "0 0 20px rgba(212, 179, 106, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
