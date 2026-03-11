/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
        },
        accent: {
          500: "#f59e0b",
          600: "#d97706",
        }
      },
      fontFamily: {
        "sans": ["Inter", "system-ui", "sans-serif"],
        "display": ["Playfair Display", "serif"],
      },
      animation: {
        "gradient": "gradient 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "blob": "blob 7s infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blob: {
        "0%": { transform: "translate(0px, 0px) scale(1)" },
        "33%": { transform: "translate(30px, -50px) scale(1.1)" },
        "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
}