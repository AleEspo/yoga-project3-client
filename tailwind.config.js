module.exports = {
  mode: "jit",
  content: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
