module.exports = {
  projects: [
    "<rootDir>/libs/*",
    "<rootDir>/apps/*",
  ],
  
  displayName: {
    name: 'ROOT PROJECT',
    color: 'grey',
  },
  
  coveragePathIgnorePatterns: [
    "jest.config.{js,ts}",
    "/node_modules/",
    "/dist/",
],

  testPathIgnorePatterns: [
    "<rootDir>",
    "\\/node_modules\\/",
    "\\/dist\\/",
    "\\*\\*\\/dist\\/",
    "<rootDir>\\/\\*\\*\\/dist\\/",
    "<rootDir>\\/libs\\/\\*\\/dist\\/",
    "<rootDir>\\/apps\\/\\*\\/dist\\/",
  ],
}
