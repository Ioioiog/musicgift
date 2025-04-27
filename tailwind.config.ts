
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
        accent: "#F97316", // Orange accent
        "light-purple": "#E5DEFF",
        "warm-yellow": "#FFD166", // Warm yellow accent
        "warm-green": "#06D6A0", // Warm green accent
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
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
      },
      backgroundImage: {
        'emotion-pattern': "url('/lovable-uploads/05470c85-6955-42a1-be81-c0f45a0616e3.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
