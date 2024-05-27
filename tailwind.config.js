/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        bodyColor: "#0B3321",
        lightText: "#d4dfdd",
        boxBg: "linear-gradient(145deg, #1e2024, #34272c)",
        designColor: "#bb014f",
      },
      boxShadow: {
        shadowOne: "8px 10px 19px #030712, -10px -10px 19px #0f172a",
      },
    },
  },
  plugins: [],
};
