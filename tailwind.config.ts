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
        forest: {
          DEFAULT: "#2E7D32",
          50: "#EAF4EA",
          100: "#CFE6D0",
          600: "#2E7D32",
          700: "#256428",
          900: "#12310F",
        },
        cream: {
          DEFAULT: "#F8F5E9",
          50: "#FDFCF8",
          100: "#F8F5E9",
          200: "#F0EAD4",
        },
        gold: {
          DEFAULT: "#C9A227",
          400: "#D9BB5C",
          500: "#C9A227",
          600: "#A9861B",
        },
        ink: "#1F2937",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "leaf-noise":
          "radial-gradient(circle at 20% 20%, rgba(201,162,39,0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(46,125,50,0.10), transparent 45%)",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(31, 41, 55, 0.18)",
        gold: "0 8px 30px -8px rgba(201, 162, 39, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(6deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(-4deg)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.45" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
        ripple: "ripple 0.6s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
