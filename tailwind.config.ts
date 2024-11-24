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
        scrollIndicator: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '30%': { transform: 'translateY(1px)', opacity: '1' },
          '70%': { transform: 'translateY(4px)', opacity: '1' },
          '100%': { transform: 'translateY(4px)', opacity: '0' },
        },
        shake: {
          '0%': { transform: 'rotate(0deg)' },
          '33%': { transform: 'rotate(20deg)' },
          '66%': { transform: 'rotate(-20deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        stretchFromCenter: {
          '0%': { width: '0' },
          '100%': { width: '70dvw' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translate(-50%, -20px)' },
          '100%': { opacity: '1', transform: 'translate(-50%, 0)' },
        },
        slideUp: {
          '0%': { opacity: '1', transform: 'translate(-50%, 0)' },
          '100%': { opacity: '0', transform: 'translate(-50%, -20px)' },
        },
        scrollBackground: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-3200px)' }, // 총 길이와 동일
        },
      },
      animation: {
        scrollIndicator: 'scrollIndicator 1.5s ease-in-out infinite',
        shake: 'shake 0.5s ease-in-out',
        stretchFromCenter: 'stretchFromCenter 2s 4s forwards',
        fadeIn: 'fadeIn 1s 5.5s forwards',
        slideDown: 'slideDown 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-in',
        scrollBackground: 'scrollBackground 32s linear infinite',
      },
      boxShadow: {
        card: '10px 10px 0 0',
      },
    },
  },
  plugins: [],
};
export default config;
