/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                Montserrat: ["Montserrat", "sans-serif"],
            },
             backgroundImage:{
                login:"url('./assets/login_black_bg.svg')",
                ceqWhite:"url('./assets/login_white_bg.svg')",
                ceqWhiteLogo:"url('./assets/ceq_white.svg')",
                eandLogo:"url('./assets/eand.svg')",
                ceqLogin:"url('./assets/ceq_login.svg')",               
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
