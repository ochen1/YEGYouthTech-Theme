module.exports = {
  mode: "jit",
  content: ["./**/*.php", "./src/**/*.js", "./src/**/*.jsx"],
  plugins: [require("@tailwindcss/typography")]
}

