/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Raleway', 'sans-serif'],
        body: ['openSans', 'sans-serif']
      },
      colors: {
        primary: '#ff5a60',
        secondary: '#222222',
        tertiary: '#B0B0B0',
      },
      flex: {
        'nav-flex-width': '1 0 140px',
        'nav-flex-width-responsive': '0 0 auto'
      },
      screens: {
        'medium': '830px'
      }
    },
  },
  plugins: [],
}


