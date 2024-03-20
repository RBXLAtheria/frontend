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
                secondary: {
                    DEFAULT: "#212121",
                    50: "#474747",
                    100: "#454545",
                    200: "#404040",
                    300: "#3B3B3B",
                    400: "#353535",
                    500: "#303030",
                    600: "#2B2B2B",
                    700: "#262626",
                    800: "#212121",
                    900: "#191919",
                    950: "#161616",
                },
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

            transitionTimingFunction: {
                cubic: "cubic-bezier(0.65, 0, 0.35, 1)",
            },
        },
    },
    plugins: [],
};
