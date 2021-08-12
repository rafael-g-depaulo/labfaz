module.exports = {
  projects: [
    "<rootDir>/libs/adder",
    "<rootDir>/apps/*",
  ],
  
  testPathIgnorePatterns: [
    "<rootDir>",
    "/node_modules/",
    "/dist/",
  ],

  collectCoverageFrom: [
    "**/src/**/*.{ts,tsx}",
    "!<rootDir>/node_modules/",
    "!**/src/**/*.stories.{ts,tsx}"
  ],

  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./coverage/jest-html-reporters",
        filename: "report.html",
        expand: true,
      },
    ],
  ],

}
