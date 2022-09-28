/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5CB8E4",
          secondary: "#F2F2F2",
          accent: "#7f5dfc",
          neutral: "#1B1E23",
          "base-100": "#F8F9FB",
          info: "#8758FF",
          success: "#24C6B6",
          warning: "#F4CD1F",
          error: "#E12349",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
