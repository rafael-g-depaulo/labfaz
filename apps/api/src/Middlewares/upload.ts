import multer from "multer";
import { Request } from "express";

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback 
) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype == "image/jpg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const MulterMiddleware = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb
  },
  fileFilter,
});

export default MulterMiddleware;
