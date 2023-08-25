/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "375px",
        xs: "425px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundColor: {
        primary: "#171819",
        secondary: "#0E0D0C",
        accent: "#E4C590",
        neutral: "#fff",
      },
      textColor: {
        primary: "#E4C590",
        secondary: "#FFBF3B",
        neutral: "#fff",
        darkTextColor: "#f3c26b",
      },
      borderColor: {
        primary: "#E4C590",
        secondary: "#FFBF3B",
        neutral: "#fff",
      },
    },
  },
  plugins: [],
};
