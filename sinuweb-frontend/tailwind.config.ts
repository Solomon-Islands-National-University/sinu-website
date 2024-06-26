import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'title': '3rem',
        'huge': '4rem',
        'massive': '6rem',
      },
      height: {
        'screen-minus-11rem': 'calc(100vh - 11rem)',
        'screen-minus-6rem': 'calc(100vh - 6rem)',
      },
      colors: {
        'sinu-yellow': '#F2E43A',
        'sinu-dark-green': '#1C3E49',
        'sinu-light-dark-green': '#137797',
        'sinu-menu-green': '#1F4754',
        'bright-blue': '#00A9DF',
        'sinu-blue': "#1DB0DF",
      },
      backgroundColor: {
        'blue-opaque': 'var(--blue-opaque)',
      },
      backgroundImage: {
        'blue-gradient': 'var(--blue-gradient)',
        'hero-image': "url('../assets/hero-bg.jpg')",
      },
      borderWidth: {
        'thin': '1px',
      },
      boxShadow: {
        'custom-shadow': '0 5px 20px rgba(6, 39, 50, .5)',
      },
      keyframes: {
        'move-up': {
          "0%": {
            bottom: "-80px",
         },
         "100%": {
            bottom: "0",
         },
        }
      },
      animation: {
        'move-up': 'move-up 2s ',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      '2lg': '1192px',
      '3lg': '1398px',
      'xl': '1440px',
      '2xl': '1536px',
      '3xl': '1836px',
    }
  },
  plugins: [],
};
export default config;
