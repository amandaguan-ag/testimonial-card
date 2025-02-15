/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        120: "120px",
        200: "200px",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
