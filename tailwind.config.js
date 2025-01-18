/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                amber: {
                    100: '#fef3c7',
                    600: '#d97706',
                    700: '#b45309',
                },
                orange: {
                    100: '#ffedd5',
                    600: '#ea580c',
                },
                gray: {
                    100: '#f3f4f6',
                    600: '#4b5563',
                    900: '#111827',
                },
            },
        },
    },
    plugins: [],
}