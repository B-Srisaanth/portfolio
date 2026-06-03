export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            boxShadow: {
                glow: '0 24px 70px rgba(8, 15, 37, 0.3)',
            },
            backgroundImage: {
                'hero-gradient': 'radial-gradient(circle at top, rgba(16, 185, 129, 0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(251, 191, 36, 0.14), transparent 30%)',
            },
        },
    },
    plugins: [],
};
