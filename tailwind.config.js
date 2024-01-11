/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121"
        }
      },
      fontFamily: {
        primary: ['Ubuntu', 'sans-serif'],
        secondary: ['Shantell Sans', 'serif'],
        tertiary:['Roboto', 'sans-serif']
      },
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        background: '#1d1d1d',
        navbar: '#181818',
        goldcolor: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/bg-site.svg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}