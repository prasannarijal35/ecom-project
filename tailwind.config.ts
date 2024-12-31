import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b5644c",
        secondary: "#86949c",
      },
      boxShadow: {
        custom: "0 0 10px 0 rgba(0,0,0,0.1)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1em",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
