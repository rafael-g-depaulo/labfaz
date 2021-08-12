module.exports = {
  babelrcRoots: [
    ".",
    "libs/*",
    "apps/*",
  ],  
  
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  
  plugins: [
    'babel-plugin-styled-components',
    [
      "module-resolver",
      {
        "root": ["."],
        "alias": {
          "^@labfaz\/([^/]+)\/(.+)$": "./libs/\\1/dist/\\2"
        }
      }
    ],
  ],
};
