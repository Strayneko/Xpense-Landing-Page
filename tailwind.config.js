/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Hind Siliguri"
      },
      colors: {
        primary: "#FF7235",
        dark: "#292830;",
        muted: "#BDBDBD"
      },
      screens: {
        sm: "360px"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          xl: "0",
          lg: "0"
        },
        screens: {
          xl: "1110px"
        }
      }
    }
  },
  plugins: []
};
