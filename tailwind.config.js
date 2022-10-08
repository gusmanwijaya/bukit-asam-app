/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        yellow1: "#FFC40C",
        redPTBA: "#CD4147",
        blue1: "#364384",
        redMindID: "#ED1C24",
        gray1: "#828282",
        gray2: "#3F3B3B",
        gray3: "#292D32",
        gray4: "#F4F4F4",
        gray5: "#272727",
        gray6: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
