import multer from "multer"

const MulterMiddleware = multer({
  storage: multer.memoryStorage(),
  limits: {
    // absolute limit of 15mb for files
    fileSize: 15 * 1024 * 1024,
  },
})

export default MulterMiddleware
