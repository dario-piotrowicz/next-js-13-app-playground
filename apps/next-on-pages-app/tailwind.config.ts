import baseConfig from 'nextjs-app-shared/configs/tailwind.config';
import { Config } from 'tailwindcss';

export default {
  ...baseConfig,
  content: [
    '../../packages/nextjs-app-shared/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ]
} as Config;
