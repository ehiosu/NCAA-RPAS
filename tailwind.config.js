/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    screens: {
      'xxs': '240px',
      'xs': '320px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
],

darkMode: 'media',
}