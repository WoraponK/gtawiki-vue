/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        }
      },
      animation: {
        zoom: 'zoom 8s ease-in-out infinite'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0F0F0F",

          "secondary": "#FF0F2F",

          "accent": "#f4273b",

          "neutral": "#272727",

          "base-100": "#ffffff",

          "info": "#00c3ff",

          "success": "#148100",

          "warning": "#ffcd00",

          "error": "#d30044",
        },
      },
    ],
  },
}