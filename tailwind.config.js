/** @type {import('tailwindcss').Config} */

// import daisyPlugin from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // safelist: [
  //   {
  //     pattern: /./,
  //     variants: ['md', 'lg', 'xl'] // you can add your variants here
  //   }
  // ],
  theme: {
    extend: {}
  }
  // plugins: [daisyPlugin],
  // daisyui: {
  //   themes: ['light', 'dark', 'cupcake']
  // }
}
