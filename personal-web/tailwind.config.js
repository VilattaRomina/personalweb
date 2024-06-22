// tailwind.config.js

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#010100",
      medium: "#28282b",
      grey:"#707078",
      light: "#e8e9f7",
      textLight:"#f3f2f9",
      primary: "#a866d6",
      secondary: "#86c98e",
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    }
  },
  plugins: [
  ],
}
