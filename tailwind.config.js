/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  darkMode: "class", // class or media
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,jsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,jsx}",
  ],
  //Customize attribute
  theme: {
    extend: {
      colors: {
        main: "#ee3131",
        primaryBlue: "#007BFF",
        secondaryBlue: "#0077F6",
        primaryGreen: "#28A745",
        secondaryGreen: "#25A142",
        primaryRed: "#DC3545",
        secondaryRed: "#D53443"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bungee: ['Bungee Spice', 'cursive']
      },
      width: {
        main: '1220px'
      },
      backgroundColor: {
        main: "#ee3131"
      }
    },
  },
  plugins: [],
});

