
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
        ring: "#7652e0",
        background: "#000000",
        foreground: "#FFFFFF",
        primary: "#7652e0",
        secondary: "#000000",
        accent: "#ff8a5b",
        "light-purple": "#E5DEFF",
        "warm-yellow": "#FFD166",
        "warm-green": "#06D6A0",
        "dark-bg": "#000000",
        "dark-card": "#000000",
        "dark-border": "#333333",
        "dark-text": "#FFFFFF",
        "dark-text-muted": "#FFFFFF",
        "secondary-accent": "#F9A8D4",
        // Adding colors from your CSS
        "css-primary": "#7652e0",
        "css-secondary": "#ff8a5b",
        "css-dark": "#333333",
        "css-light": "#f8f9fa",
        "css-text": "#444444",
        "css-border": "#e0e0e0",
        "css-success": "#28a745",
        "css-error": "#dc3545",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lato: ["Lato", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '24px',
        'body': '16px',
        'lg-body': '18px',
        'xl-body': '20px',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "modal": "modalAnimation 0.3s ease",
        "bounce-slow": "bounce 3s infinite",
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
          "0%": { boxShadow: "0 0 5px rgba(118, 82, 224, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(118, 82, 224, 0.6)" },
        },
        modalAnimation: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        'emotion-pattern': "url('/lovable-uploads/05470c85-6955-42a1-be81-c0f45a0616e3.png')",
        'dark-gradient': "linear-gradient(to bottom, rgba(13, 17, 23, 0.8), rgba(13, 17, 23, 1))",
        'primary-gradient': "linear-gradient(135deg, #7652e0 0%, #ff8a5b 100%)",
        'hero-gradient': "linear-gradient(135deg, #f6f8ff 0%, #e9eeff 100%)",
      },
      boxShadow: {
        'custom': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 10px 20px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(118, 82, 224, 0.2)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
