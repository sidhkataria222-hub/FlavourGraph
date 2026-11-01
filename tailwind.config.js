/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          850: '#14532d',
          900: '#0f3d20',
          950: '#0a2614',
        },
        lime: {
          accent: '#84cc16',
          bright: '#a3e635',
          dark: '#65a30d',
          soft: '#ecfccb',
        },
        warm: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#eae2d3',
          300: '#dcd1bd',
          400: '#b7a489',
          500: '#8f7b5f',
          600: '#6d5a42',
          700: '#4e3e2b',
          800: '#34291c',
          900: '#1e160e',
        },
        surface: {
          light: '#ffffff',
          card: '#fcfbf9',
          cardDark: '#132319',
          dark: '#0c1a11',
          border: '#e4dfd5',
          borderDark: '#1f3828',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-lime': '0 0 20px -3px rgba(163, 230, 53, 0.25)',
        'glow-forest': '0 0 25px -4px rgba(22, 101, 52, 0.35)',
        'card-soft': '0 4px 20px -2px rgba(15, 61, 32, 0.05)',
      }
    },
  },
  plugins: [],
}
