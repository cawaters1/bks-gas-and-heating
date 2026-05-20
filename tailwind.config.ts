import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand:        "#0D1F5C",
        "brand-mid":  "#162966",
        "brand-light":"#1D3A8A",
        accent:       "#2563EB",
        offwhite:     "#F7F8FC",
        steel:        "#E4E8F0",
      },
    },
  },
  plugins: [],
};

export default config;
