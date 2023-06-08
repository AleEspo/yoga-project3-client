module.exports = {
  mode: "jit",
  content: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    // fontFamily: {
    //   sans: ['"Nunito"', 'sans-serif'],
    //   serif: ['"Lustria"', 'serif']
    // },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
