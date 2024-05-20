import colors from "tailwindcss/colors"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      gray: colors.gray,
      cyan: colors.cyan,
      red : colors.red,
   },
  },
  plugins: [],
}