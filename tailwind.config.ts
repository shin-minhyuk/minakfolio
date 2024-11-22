import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
        aggro: ['SB Aggro', 'sans-serif'],
        ghanachocolate: ['Ghanachocolate', 'sans-serif'],
      },
      keyframes: {
        'scroll-indicator': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '30%': { transform: 'translateY(1px)', opacity: '1' },
          '70%': { transform: 'translateY(4px)', opacity: '1' },
          '100%': { transform: 'translateY(4px)', opacity: '0' },
        },
      },
      animation: {
        'scroll-indicator': 'scroll-indicator 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
