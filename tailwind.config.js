/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {backgroundImage: {
      'hero': "url('../src/assets/hero.png')",
      'book': "url('../src/assets/book/book.png')",
      'small':"url('../src/assets/hero pics/small.png')"
    },colors: {
      custom: '#FFF7E2', 
      green: '#3A643B',
      footer: '#C9D6CE',
      element:'#FFF1CF',
      footertext:'#474747',
    },
    fontFamily: {
      nexa: ['Nexa Light', 'sans-serif'], 
      din: ['DinPro','sans-serif']
    },
    padding: {
      '5px': '5px',
    }},
    
  },
  plugins: [],
};
