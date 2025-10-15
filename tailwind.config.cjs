const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'primary': 'hsla(194, 62%, 42%, 1.00)',
        'secondary': '#b6deef',
        'tertiary': '#1393caff',
        'bg-blue': '#bce4f5',
        'light-blue': '#f0fbff'
      },
      fontFamily: {
        gothic: ["ms gothic",...defaultTheme.fontFamily.sans],
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
