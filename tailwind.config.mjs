/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-sea': '#0B192C',
        'midnight': '#1A2F4C',
        'fog-white': '#F8FAFC',
        'light-gray': '#E2E8F0',
        'cyan-blue': '#00A8E8',
        'coral': '#FF6B6B'
      }
    },
  },
  plugins: [],
}
