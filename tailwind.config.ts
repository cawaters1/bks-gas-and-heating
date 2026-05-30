import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand:           "#2355A0",
        "brand-mid":     "#1A4080",
        "brand-dark":    "#0F2A5C",
        "brand-light":   "#3A6FBF",
        gold:            "#C9A55A",
        "gold-light":    "#DFC07A",
        bg:              "#0C0E14",
        surface:         "#131720",
        elevated:        "#1C2030",
        ink:             "#E4E0D6",
        steel:           "#8B8FA0",
        "steel-muted":   "#5A5F70",
        "border-dark":   "#232735",
        "border-emphasis":"#2E3345",
        offwhite:        "#F4F2EE",
        "gas-safe":      "#00A651",
        whatsapp:        "#25D366",
      },
    },
  },
  plugins: [],
};

export default config;
