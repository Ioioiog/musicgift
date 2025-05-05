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
        border: "#333333",
        input: "#333333",
        ring: "#8A5CFF",
        background: "#000000",
        foreground: "#FFFFFF",
        primary: "#8A5CFF",
        secondary: "#000000",
        accent: "#FF6B00",
        "light-purple": "#E5DEFF",
        "warm-yellow": "#FFD166",
        "warm-green": "#06D6A0",
        "dark-bg": "#000000",
        "dark-card": "#000000",
        "dark-border": "#333333",
        "dark-text": "#FFFFFF",
        "dark-text-muted": "#FFFFFF",
        "secondary-accent": "#F9A8D4",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"], // Heading font
        lato: ["Lato", "sans-serif"], // Body text font
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        'h1': '32px',
        'h2': '24px',
        'body': '16px',
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
          "0%": { boxShadow: "0 0 5px rgba(138, 92, 255, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(138, 92, 255, 0.6)" },
        },
      },
      backgroundImage: {
        'emotion-pattern': "url('/lovable-uploads/05470c85-6955-42a1-be81-c0f45a0616e3.png')",
        'dark-gradient': "linear-gradient(to bottom, rgba(13, 17, 23, 0.8), rgba(13, 17, 23, 1))",
        'primary-gradient': "linear-gradient(135deg, #8A5CFF 0%, #FF6B00 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
