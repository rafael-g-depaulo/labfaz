const path = require("path")

module.exports = {
  name: 'strapi',
  displayName: {
    name: 'STRAPI',
    color: 'yellow',
  },
  testPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/.cache/",
    "<rootDir>/node_modules/"
  ]
}
