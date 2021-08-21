const extensions = [
  "B",
  "KB",
  "MB",
  "GB",
  "TB",
]

const byteNumToString = (bytes: number) => {
  let order = 0
  while (bytes > 1024) {
    order++
    bytes /= 1024
  }

  return `${bytes.toFixed(2)} ${extensions[order]}`
}

export default byteNumToString
