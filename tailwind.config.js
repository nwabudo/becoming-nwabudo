/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './src/*.{js,jsx,ts,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '8px',
        md: '8px',
        lg: '16px',
        xl: '12px',
        '2xl': '12px',
      },
    },
    extend: {
      fontFamily: {
        sans: ["Times New Roman, Times, serif", ...defaultTheme.fontFamily.sans],
        rusilla: ["var(--font-rusilla)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "sm-15": "0.9375rem", //15px
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textColor: "var(--text-color)",
      },
    },
  },
  plugins: [],
};
