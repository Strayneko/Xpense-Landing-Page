/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1110px",
        },
      },
    },
  },
  plugins: [],
};
