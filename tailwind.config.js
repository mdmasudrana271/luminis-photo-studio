/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('/public/young-woman-black-t-shirt-with-camera (1).jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}
