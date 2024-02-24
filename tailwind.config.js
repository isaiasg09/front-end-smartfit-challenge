/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Gotham", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        "dark-grey": "#333333",
        "light-grey": "#808080",
        yellow: "#FFB612",
        red: "#dc0a17",
        green: "#2FC022",
      },
    },
  },
  plugins: [],
};
