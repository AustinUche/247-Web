/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                darkBg: '#070b14',
                lightBg: '#111820',
                textColor: '#fefefe',
                lightBlue: '#6672fb',
                darkBlue: '#4f5df5',
                grayWhite: '#dedddd'
            }
        }
    },
    plugins: [require('tailwind-scrollbar')]
}
