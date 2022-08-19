module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  content: [
    './pages/**/*.{js,jsx,md,mdx}',
    './components/**/*.{js,jsx,md,mdx}',
  ],
  theme: {},
  plugins: [],
};
