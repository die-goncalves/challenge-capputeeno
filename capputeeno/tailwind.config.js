/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'skeleton': 'linear-gradient(90deg, #00000000 0%, #00000020 20%, #00000050 60%, #00000000 0%)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'shimmer': 'shimmer 1.2s infinite linear',
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
