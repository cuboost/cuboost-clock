/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-blue": "#05B7FE",
        "primary-blue": "#0564E6",
        "gray-blue": "#749bd6",
        "dark-blue": "#2A05E6",
        "primary-violet": "#7602FF",
      },
    },
  },
  plugins: [],
};
