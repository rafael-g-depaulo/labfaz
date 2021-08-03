const path = require("path")

module.exports = {
  name: 'api',
  displayName: {
    name: 'API',
    color: 'yellow',
  },

  // 5s timeout for async tests. if you need to, increase this
  testTimeout: 5 * 1000,

  moduleDirectories: ["node_modules", path.join(__dirname, "src")],
  testPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/node_modules/"
  ],

}
