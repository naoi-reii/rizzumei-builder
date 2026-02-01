/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2563EB', // Blue 600
                secondary: '#4F46E5', // Indigo 600
                accent: '#F59E0B', // Amber 500
                dark: '#1F2937', // Gray 800
                light: '#F3F4F6', // Gray 100
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            },
        },
    },
    plugins: [],
}
