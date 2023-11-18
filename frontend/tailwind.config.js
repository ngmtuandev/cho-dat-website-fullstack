/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bg-brown-main-50": "#8B7D6B",
        "bg-brown-main-100": "#CDB79E",
        "bg-brown-main-200": "#EED5B7",
        "bg-brown-main-300": "#FFE4C4",
        "bg-brown-support-300": "#FFF8DC",
        "bg-gray-support-400": "#CDC1C5",
        "bg-gray-support-500": "#8B8386",
        "bg-brown-bold-100": "#FFE7BA",
        "bg-brown-bold-200": "#EED8AE",
      },
      colors: {},
      width: {
        main: "1400px",
      },
    },
  },
  plugins: [require("daisyui")],
});
