/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mint-green": "rgba(82, 183, 136, 1)",
      },
      width: {
        "[90%]": "90%",
      },
      maxWidth: {
        "[380px]": "380px",
      },

      ringColor: ["focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
