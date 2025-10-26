/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b3d91',
        secondary: '#e9891a',
        accent: '#2e8540',
        'gov-midnight': '#112b3c',
        'gov-cream': '#f6f1e1',
        'gov-saffron': '#d97706',
        'gov-forest': '#1f5d47',
        'gov-sky': '#c7d9ff',
      },
      fontFamily: {
        sans: ['\"Noto Sans\"', 'Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['\"Merriweather\"', 'ui-serif', 'Georgia'],
      },
      boxShadow: {
        card: '0 18px 40px -24px rgba(17, 43, 60, 0.35)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
