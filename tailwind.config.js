/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#ebebff",
          200: "#3a1b48",
          300: "#6f3789",
          400: "#1f002a",
        },
        red: {
          100: "#d91248",
          200: "#da2053",
          300: "#d80940",
          400: "#c05757",
        },
        green: {
          100: "#2da555",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
