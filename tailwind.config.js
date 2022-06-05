const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./index.html"],
    theme: {
        backgroundPosition: {
            left: "0.5rem",
        },
        extend: {
            width: {
                800: "800px",
                100: "110px",
            },
            fontFamily: {
                mono: ["'Space Mono', monospace"],
            },
        },
        colors: {
            "strong-cyan": "hsl(172, 67%, 45%)",
            "very-dark-cyan": "hsl(183, 100%, 15%)",
            "dark-grayish-cyan": "hsl(186, 14%, 43%)",
            "grayish-cyan": "hsl(184, 14%, 56%)",
            "light-grayish-cyan": "hsl(185, 41%, 84%)",
            "very-light-grayish": "hsl(189, 41%, 97%)",
            white: colors.white,
            colors,
        },
        backgroundImage: {
            "icon-dollar": "url('/img/icon-dollar.svg')",
            "icon-person": "url('/img/icon-person.svg')",
        },
    },
    plugins: [],
};