/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            oswald: "Oswald, sans-serif",
            urbanist: "Urbanist, sans-serif",
            roboto: "Roboto, sans-serif"

        },
        extend: {
            keyframes: {
                flickerAnimation: {
                    '0%': { opacity: 1 },
                    '50%': { opacity: 0 },
                    '100%': { opacity: 1 }
                }
            },
            animation: {
                'fade-infinite': 'flickerAnimation 1s infinite',
            }
        }
    },
    plugins: [],
};
