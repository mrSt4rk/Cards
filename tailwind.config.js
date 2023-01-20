/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js,tsx}',
    './components/*.{html,js,tsx}',
    './pages/**/*.{html,js,tsx}',
    './pages/*.{html,js,tsx}'],
  theme: {
    screens: {
      xss: '360px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '4px',
      '5': '32px',
      '6': '48px',
      '250': '250px',
      '200': '200px',
      '150': '150px',
    },
    fontFamily: {
      'dancing': 'Dancing Script',
      'raleway': 'Raleway'
    },
    extend: {
      colors: {
        "lightbg": "#E5E5E5",
        "text-color": "#373737",
        "disabled-color": "#817F7F",
        "card-left": "#00CBA0",
        "card-right": "#FDC448",
        "white": "#ffffff",
        "red": "crimson",
        "black": "#000"
      }
    },
  },
  plugins: [],
}
