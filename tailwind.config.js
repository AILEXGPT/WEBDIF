/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes').light,
          primary: 'blue',
          secondary: 'teal',
        },
      },
      'dark',
      'cupcake',
    ],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#111928',
          100: '#1F2A37',
          200: '#374151',
          300: '#6B7280',
          400: '#9CA3AF',
          500: '#D1D5DB',
          700: '#E5E7EB',
          800: '#F3F4F6',
          900: '#F9FAFB',
        },
        primary: {
          50: '#1A56DB',
          100: '#1C64F2',
          200: '#A4CAFE',
          300: '#C3DDFD',
          600: '#E1EFFE',
          700: '#EBF5FF',
        },
        blue: {
          500: '#1C64F2',
        },
        green: {
          50: '#03543F',
          100: '#DEF7EC',
          800: '#F3FAF7',
        },
        yellow: {
          100: '#723B13',
          800: '#FDF6B2',
        },
        purple: {
          50: '#444CE7',
        },
        indigo: {
          25: '#F5F8FF',
          100: '#E0EAFF',
          600: '#F6F5FF',
        },
      },
      screens: {
        mobile: '100px',
        tablet: '640px', // 391
        pc: '769px',
      },
    },
    darkSelector: '.dark', // Hinzugefügt, um das Dunkelmodus-Selektor zu aktivieren
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },

}
