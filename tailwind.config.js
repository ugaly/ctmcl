/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#354a43',
          dark: '#2a3b35',
          light: '#4a6359',
          muted: '#eef2f1',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(15, 23, 42, 0.08), 0 12px 48px -16px rgba(15, 23, 42, 0.06)',
        card: '0 1px 3px rgba(15, 23, 42, 0.04), 0 10px 40px -20px rgba(15, 23, 42, 0.1)',
      },
    },
  },
  plugins: [],
};
