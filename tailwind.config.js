/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        corsiva: ["Licorice", "cursive"],
        cormorant: ["Cormorant Upright", "serif"],
      },
    },
  },
  plugins: [],
};
