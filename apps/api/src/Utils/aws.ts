import aws from "aws-sdk"
import { ManagedUpload, PutObjectRequest } from "aws-sdk/clients/s3"
import { Request } from "express"

aws.config.update({
  secretAccessKey: process.env.AWS_ACCESS_SECRET,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
})

export const s3 = new aws.S3()
export const s3UploadPromise = (params: PutObjectRequest) => new Promise<ManagedUpload.SendData>((resolve, reject) => {
  if (process.env.USE_AWS === "false")
    return resolve({ Location: "https://images-na.ssl-images-amazon.com/images/I/81BES%2BtsVvL.png", Bucket: "a", ETag: "", Key: "a"})

  s3.upload(params, (err, data) => err
    ? reject(err)
    : resolve(data)
  )
})

export const getFieldFiles = (req: Request, field: string) => {
  if (!req.files || Array.isArray(req.files)) return []
  return req.files[field] ?? []
}

export const getReqFiles = (req: Request) => {
  const files =
    !req.files ? [] :
    Array.isArray(req.files) ? req.files :
    Object.values(req.files).flat()

  return files
}

export interface UploadedFile {
  url: string
  fieldname: string
}
interface UploadFileConfig {
  folderPrefix?: string
  filePrefix?: string
}
const defaultConfig: UploadFileConfig = {
  filePrefix: "",
  folderPrefix: "",
}
export const UploadFile = (file: Express.Multer.File, config: UploadFileConfig = defaultConfig) => {
  const base64 = Buffer.from(file.buffer)
  const {
    filePrefix = "",
    folderPrefix = "",
  } = config

  const { extension, filename } = /(?<filename>.+)\.(?<extension>[\w\d]+)$/i.exec(file.originalname)?.groups ?? {}

  const params : PutObjectRequest = {
    ACL: "public-read",
    Bucket: process.env.AWS_BUCKET ?? "",
    Body: base64,
    Key: `apiFiles/${folderPrefix}${file.fieldname}/${filePrefix}${filename}-${new Date()}.${extension}`,
  }

  return s3UploadPromise(params)
    .then((data): UploadedFile => ({
      url: data.Location,
      fieldname: file.fieldname
    }))
}

export const UploadFiles = (files: Express.Multer.File[], config: UploadFileConfig = defaultConfig) => {
  return Promise.all(files.map(file => UploadFile(file, config)))
}
