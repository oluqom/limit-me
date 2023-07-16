/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        128: "32rem",
        mainScreen: "calc(100vh - 296px)",
      },
    },
  },
  plugins: [require("daisyui")],
};
