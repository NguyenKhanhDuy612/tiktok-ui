/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "480px",
          md: "768px",
          lg: "976px",
          xl: "1190px",
        },
      },
    },
  },
  plugins: [],
};
