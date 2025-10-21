/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          coral: '#F2A573',
          'coral-light': '#F7C5A0',
          'coral-dark': '#E88E4B',
          pink: '#F45A9B',
          'pink-light': '#F88BB4',
          'pink-dark': '#E03882',
          purple: '#7E80EE',
          'purple-light': '#A5A6F3',
          'purple-dark': '#5D5FD6',
          blue: '#1376BF',
          'blue-light': '#4A9BD9',
          'blue-dark': '#0D5A94',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#F45A9B',
          'secondary': '#7E80EE',
          'accent': '#F2A573',
          'neutral': '#2b2b2b',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#f3f4f6',
          'info': '#3abff8',
          'success': '#36d399',
          'warning': '#fbbd23',
          'error': '#f87272',
        },
        dark: {
          'primary': '#F45A9B',
          'secondary': '#7E80EE',
          'accent': '#F2A573',
          'neutral': '#1f2937',
          'base-100': '#111827',
          'base-200': '#1f2937',
          'base-300': '#374151',
          'info': '#3abff8',
          'success': '#36d399',
          'warning': '#fbbd23',
          'error': '#f87272',
        },
      },
    ],
  },
}
