/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1.75rem",
        md: "0",
      },
    },
    colors: {
      blue: {
        DEFAULT: "hsl(223, 87%, 63%)",
        pale: "hsl(223, 100%, 88%)",
        dark: "hsl(209, 33%, 12%)",
      },
      red: "hsl(354, 100%, 66%)",
      gray: "hsl(0, 0%, 59%)",
    },
  },
  plugins: [],
};
