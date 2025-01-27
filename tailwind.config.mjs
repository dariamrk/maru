/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'theme-primary': '#545E6C',
        'theme-secondary': '#6B7988',
        'theme-heading': '#434E5E',
        'theme-accent': '#8051A9',
        'theme-accent-light': '#9B75D0',
        'theme-background': '#F5F5F5',
        'theme-text': '#4B5354'
      }
    }
  },
  plugins: [],
}
