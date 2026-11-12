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
        stoneGround: "#F4F2ED",
        stoneWarm: "#EAE6DF",
        ink: "#111110",
        obsidian: "#0B0C0E",
        obsidianCard: "#14161A",
        emeraldSignal: {
          DEFAULT: "#10B981",
          hover: "#059669",
          light: "#ECFDF5",
          border: "#A7F3D0",
        },
        whatsapp: {
          green: "#25D366",
          darkHeader: "#075E54",
          bubbleOut: "#D9FDD3",
          bubbleDarkOut: "#005C4B",
          chatBg: "#EFEAE2",
        },
        nequi: "#E6007E",
        bancolombia: "#FDDA24",
      },
      fontFamily: {
        mali: ["'Mali'", "cursive", "sans-serif"],
        inter: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Mali'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.038em",
      },
      boxShadow: {
        "optical-sm":
          "0 1px 2px rgba(17, 17, 16, 0.04), 0 0 0 1px rgba(17, 17, 16, 0.06)",
        "optical-md":
          "0 2px 4px rgba(17, 17, 16, 0.04), 0 12px 32px -6px rgba(17, 17, 16, 0.07), 0 0 0 1px rgba(17, 17, 16, 0.06)",
        "optical-lg":
          "0 4px 10px rgba(17, 17, 16, 0.05), 0 24px 56px -12px rgba(17, 17, 16, 0.14), 0 0 0 1px rgba(17, 17, 16, 0.07)",
        "device-shell":
          "0 24px 60px -12px rgba(9, 10, 15, 0.28), 0 4px 16px rgba(9, 10, 15, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.22)",
        "dark-card":
          "0 20px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
