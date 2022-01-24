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

  // for test reports
  // TODO: chose between one of them
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Test Report",
        // append: true,
        outputPath: "./coverage/jest-html-reporter/test-report.html",
      },
    ],
    [
      "jest-stare",
      {
        resultDir: "./coverage/jest-stare",
        reportTitle: "jest-stare!",
        additionalResultsProcessors: [
          "jest-junit",
        ],
        coverageLink: "../lcov-report/index.html",
        jestStareConfigJson: "jest-stare.json",
        jestGlobalConfigJson: "globalStuff.json",
      },
    ],
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
