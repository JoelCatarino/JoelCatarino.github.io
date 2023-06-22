/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dida: ["var(--font-didact)"],
        saira: ["var(--font-saira)"],
      },
    },
    colors: {
      red: "#CB7D71",
      "light-blue": "#BDE0FE",
      blue: "#0077b6",
      white: "#e1e8ef",
      black: "#252D38",
      transpa: "#252D3880",
      green: "#98C148",
      "dark-green": "#399C42"
    },
  },
  plugins: [],
};
