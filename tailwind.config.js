import colors from "tailwindcss/colors"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      cyan: colors.cyan,
      red : colors.red,
   },
  },
  plugins: [],
}