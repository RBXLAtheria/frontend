/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        fontFamily: {
            balooBhaijaan2: ["Baloo Bhaijaan 2", "sans-serif"],
        },

        extend: {
            colors: {
                primary: {
                    DEFAULT: "#FFFFFF",
                    50: "#FFFFFF",
                    100: "#F9F9F9",
                    200: "#ECECEC",
                    300: "#DFDFDF",
                    400: "#D2D2D2",
                    500: "#C6C6C6",
                    600: "#B9B9B9",
                    700: "#ACACAC",
                    800: "#9F9F9F",
                    900: "#939393",
                    950: "#8C8C8C",
                },
                button: {
                    primary: "#000000",
                },
            },

            backgroundColor: {
                primary: "#050505",
                secondary: "#212121",
                button: {
                    primary: "#ff4747",
                    secondary: "#fff837",
                },
            },

            borderColor: {
                primary: "#212121",
            },

            borderWidth: {
                primary: "2px",
            },

            borderRadius: {
                primary: "10px",
                hover: "25px",
            },
        },
    },
    plugins: [],
};
