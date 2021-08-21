import { NextFunction, Response } from "express"

import { badRequestError } from "Utils/endpointReturns"
import { getFieldFiles } from "Utils/awsConfig"
import { Req } from "Utils/request"
import MulterMiddleware from "./upload"

export type ParsedFiles<T extends string> = {
  parsedFiles: {
    [key in T]: Express.Multer.File[]
  }
}

export type fileFieldParseConfig = {
  fieldName: string
  min?: number
  max?: number
  maxSize?: number
}

export const parseMultedFiles =
  (filesConfig: fileFieldParseConfig[]) =>
<T extends string> (req: Req<{}, ParsedFiles<T>>, res: Response, next: NextFunction) => {
  // create dictionary of files if it doesn't already exist
  req.parsedFiles ??= {} as ParsedFiles<T>["parsedFiles"]

  // iterate on each file and parse them. return early if any errors are present
  for (const fileConfig of filesConfig) {
    const {
      fieldName,
      min = 0,
      max = Math.max(),
      maxSize = Math.max(),
    } = fileConfig
    
    const fieldFiles = getFieldFiles(req, fieldName)
    if (fieldFiles.length < min)
      return badRequestError(res, `Needed at least ${min} files for ${fieldName} field`)

    if (fieldFiles.length > max)
      return badRequestError(res, `Too many files sent for ${fieldName} field`)

    if (fieldFiles.some(file => file.size > maxSize))
      return badRequestError(res, `File too big for ${fieldName} field. Maximum file size is ${maxSize} bytes`)

    req.parsedFiles![fieldName as T] = fieldFiles
  }

  return next()
}

export const parseFiles = (filesConfig: fileFieldParseConfig[]) => {
  const multerConfig = filesConfig
    .map(({ fieldName, max }) => ({ name: fieldName, maxCount: max }))
  
  return [
    MulterMiddleware.fields(multerConfig),
    parseMultedFiles(filesConfig),
  ]
}
