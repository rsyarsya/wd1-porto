// tailwind.config.mjs
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',

      // custom (kebab-case)
      'light-hover': '#fcf4ff',
      'dark-hover': '#2a004a',
      'dark-theme': '#11001F',
    },
    extend: {
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
