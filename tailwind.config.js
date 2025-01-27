/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#8B5CF6', // Purple main color
        'primary-dark': '#7C3AED', // Darker purple
        'primary-light': '#A78BFA', // Lighter purple
        'secondary': '#4B5563', // Gray for text
        'background': '#F9FAFB', // Light background
      }
    }
  }
}
