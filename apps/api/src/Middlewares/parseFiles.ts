
import { NextFunction, Request, Response } from "express"

import { badRequestError } from "Utils/endpointReturns"
import byteNumToString from "Utils/byteNumToString"
import { Req } from "Utils/request"

import MulterMiddleware from "./multer"
import { RouteHandler } from "Utils/routeHandler"

export enum FileType {
  image = "IMAGE FILE",
  pdf = "PDF FILE",
  any = "ANY FILE"
}


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
  type?: FileType
}

const getFieldFiles = (req: Request, field: string) => {
  if (!req.files || Array.isArray(req.files)) return []
  return req.files[field] ?? []
}

const fileIsOfType = (file: Express.Multer.File, type: FileType) => {
  const { mimetype } = file
  if (type === FileType.any) return true
  if (type === FileType.image) return /image\/.+$/.test(mimetype)
  if (type === FileType.pdf) return /application\/pdf$/.test(mimetype)

  return false
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

      type = FileType.any,
    } = fileConfig
    
    const fieldFiles = getFieldFiles(req, fieldName)
    if (fieldFiles.length < min)
      return badRequestError(res, `Needed at least ${min} files for ${fieldName} field`)

    if (fieldFiles.length > max)
      return badRequestError(res, `Too many files sent for ${fieldName} field`)

    if (fieldFiles.some(file => file.size > maxSize))
      return badRequestError(res, `File too big for ${fieldName} field. Maximum file size is ${byteNumToString(maxSize)}`)

    if (fieldFiles.some(file => !fileIsOfType(file, type)))
      return badRequestError(res, `Incorrect filetype for ${fieldName} field`)

    req.parsedFiles[fieldName as T] = fieldFiles
  }

  return next()
}

export const parseFiles = (filesConfig: fileFieldParseConfig[]) => {
  const multerConfig = filesConfig
    .map(({ fieldName, max }) => ({ name: fieldName, maxCount: max }))
  
  return [
    MulterMiddleware.fields(multerConfig),
    parseMultedFiles(filesConfig),
  ] as RouteHandler[]
}
