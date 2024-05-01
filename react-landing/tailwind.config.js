/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "680px",
      lg: "990px",
      xl: "1024px",
      "2xl": "1280px",
    },
    extend: {
      fontFamily: {
        sans: ["Hind", "sans-serif"],
      },
      colors: {
        "main-violet": "#4f46e5",
        "main-violet-hover": "#5d55ea",
      },
    },
  },
  plugins: [],
};
