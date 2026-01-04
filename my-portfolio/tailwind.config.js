/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                iron: {
                    red: "#590d0d",
                    redHover: "#7a1a1a",
                    gold: "#d4af37",
                    goldHover: "#f2c744",
                    arc: "#00f3ff",
                    dark: "#0a0a0a",
                    panel: "rgba(20, 20, 20, 0.8)",
                },
            },
            fontFamily: {
                hud: ['"Orbitron"', "sans-serif"],
                body: ['"Rajdhani"', "sans-serif"],
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'flash': 'flash 0.5s',
            },
            keyframes: {
                flash: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                }
            },
            backgroundImage: {
                'hud-grid': "radial-gradient(circle, rgba(0, 243, 255, 0.1) 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}
