import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F4EEDF",
        creamAlt: "#EDE4CC",
        creamCard: "#FBF8F0",
        inkNavy: "#14181F",
        ink: "#1B1B18",
        inkSoft: "#3A3630",
        inkSecondary: "#8A8577",
        rule: "#E4DAC0",
        ruleAlt: "#DCCFA9",
        cobalt: "#2B4EA8",
        coral: "#E2492B",
        mustard: "#D9A62E",
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
