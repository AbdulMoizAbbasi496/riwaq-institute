// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"]
      },
      colors: {
        emerald: {
          950: "#0e241d",
          500: "#006644"
        },
        gold: {
          500: "#c79a4b",
          400: "#d9b66d"
        },
        ivory: {
          50: "#fbf8ef"
        },
        cream: {
          100: "#f3ecdc"
        }
      }
    }
  },
  plugins: []
};
