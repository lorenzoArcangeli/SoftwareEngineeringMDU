/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffd233',
        primaryhover: "#cca828",
        complementary: '#E6E6E6',
        front: '#ffffff',
        back: '#f1f2f5',
        textlight: '#ffffff',
        textdark: '#000000',
        textgray: '#767676',
        selected: '#d9ebfe',
        accepted: '#00aa0d',
        rejected: '#e01a22',
        idle: '#3b82f6',
        available: '#d9ebfe',
        unavailable: '#fab2b2',
        whitebackground: '#ffffff',
        blackbackground: '#000000',
        offer: '#BA3E26',
        request: '#2D4AA3'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      aspectRatio: {
        'card': '4 / 6'
      }
    },
  },
  plugins: [],
}