const path = require("path")

module.exports = {
  entry: "./src/main.js", // Entry point for the extension
  output: {
    filename: "main.js", // Output file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  mode: "production", // Minifies output
}
