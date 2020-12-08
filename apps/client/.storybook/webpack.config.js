module.exports = ({ config }) => {
  config.resolve.modules.push(process.cwd() + "/node_modules")
  config.resolve.modules.push(process.cwd() + "/src")

  // this is needed for working w/ linked folders
  config.resolve.symlinks = false;

  return config
}
