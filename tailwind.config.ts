import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-custom': ['var(--font-playfair)', 'Georgia', 'serif'],
        'sans-custom': ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#252b44',      // logo navy - professional & trustworthy
        'accent': '#b6a48e',       // logo warm beige
        'warm-bg': '#FAF9F6',      // clean warm off-white
        'text-dark': '#252b44',
        'text-muted': '#6B7280',
      }
    },
  },
  plugins: [],
};
export default config;
