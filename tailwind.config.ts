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
        pretendard: ['Pretendard-Regular', 'sans-serif'],
        aggro: ['SB Aggro', 'sans-serif'],
        ghanachocolate: ['Ghanachocolate', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
