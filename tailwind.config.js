/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'facultyofbusiness1': "url('/src/assets/facultyofbusiness1.png')",
        'facultyofbusiness2': "url('/src/assets/facultyofbusiness2.png')",
        'mdarj1': "url('/src/assets/mdarj1.png')",
        'mdarj2': "url('/src/assets/mdarj2.png')",
        'miza1': "url('/src/assets/miza1.png')",
        'miza2': "url('/src/assets/miza2.png')",
        'arabisk1': "url('/src/assets/arabisk1.png')",
        'arabisk2': "url('/src/assets/arabisk2.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'ellipse-1': "url('/src/assets/Ellipse142.png')",
        'ellipse-2': "url('/src/assets/Ellipse143.png')"

      },
      keyframes: {
        'fade-in': {
           'from': {
              opacity: '0'
           },
           'to': {
              opacity: '1'
           },
        },
     },
     animation: {
        'fade-in': 'fade-in ease-in-out'
     }
    },
  },
  plugins: [],
}

