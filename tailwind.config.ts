
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#9b87f5",
        secondary: "#1A1F2C",
        accent: "#F97316",
        "light-purple": "#E5DEFF",
        "warm-yellow": "#FFD166",
        "warm-green": "#06D6A0",
        "dark-bg": "#0D1117",
        "dark-card": "#161B22",
        "dark-border": "#30363D",
        "dark-text": "#F0F6FC",
        "dark-text-muted": "#8B949E",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lato: ["Lato", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(155, 135, 245, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(155, 135, 245, 0.6)" },
        },
      },
      backgroundImage: {
        'emotion-pattern': "url('/lovable-uploads/05470c85-6955-42a1-be81-c0f45a0616e3.png')",
        'dark-gradient': "linear-gradient(to bottom, rgba(13, 17, 23, 0.8), rgba(13, 17, 23, 1))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
