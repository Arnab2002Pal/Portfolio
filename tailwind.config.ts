const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        softCircle: '0px 20px 50px -10px rgba(0, 0, 0, 0.1)', // Adjust the values as needed
        'inner-glow': `inset 0px -4px 8px rgba(255, 255, 255, 0.2),
                       inset 0px -8px 16px rgba(255, 255, 255, 0.15),
                       inset 0px -12px 24px rgba(255, 255, 255, 0.1)`,
      },
      fontFamily: {
        mon: ["var(--font-montserrat)"],
        lora: ["var(--font-lora)"],
        hindMadurai: ["var(--font-hind-madurai)"],
        courgette: ["var(--font-courgette)"]
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
