import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand:       "#2828D4",
        "brand-dark":  "#1E1EAA",
        "brand-light": "#3D3DEF",
        offwhite:    "#F4F5FF",
        steel:       "#E8EAF6",
      },
    },
  },
  plugins: [],
};

export default config;
