/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          start: '#ef116f',
          end: '#fe6407',
          DEFAULT: '#ef116f'
        },
        accent: {
          100: '#fc4c2c',
          200: '#fc4d24',
          300: '#fc541a',
          400: '#f94132',
          500: '#fc610c',
          600: '#f43445',
          700: '#f42c4c',
          800: '#f42754',
          900: '#f4245c',
          1000: '#f0136d'
        },
        light: {
          100: '#ffffff',
          200: '#ffefec',
          300: '#feded9',
          400: '#fecec5',
          500: '#febeb2',
          600: '#feae9f',
          700: '#fd9d8c',
          800: '#fd8d79',
          900: '#fd7d66',
          1000: '#fd6d52'
        },
        dark: {
          100: '#000000',
          200: '#170704',
          300: '#2e0e08',
          400: '#45150c',
          500: '#5c1c10',
          600: '#732314',
          700: '#892918',
          800: '#a0301c',
          900: '#b73720',
          1000: '#ce3e24'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  plugins: []
};