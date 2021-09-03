import aws from "aws-sdk"
import { ManagedUpload, PutObjectRequest } from "aws-sdk/clients/s3"
import { Request } from "express"

aws.config.update({
  secretAccessKey: process.env.AWS_ACCESS_SECRET,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
});

export const s3 = new aws.S3();
export const s3UploadPromise = (params: PutObjectRequest) => new Promise<ManagedUpload.SendData>((resolve, reject) => {
  s3.upload(params, (err, data) => {
    if (err) return reject(err)
    return resolve(data)
  })
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

const uploadFile = (file: Express.Multer.File) => {
  const base64 = Buffer.from(file.buffer);

  const { extension, filename } = /(?<filename>.+)\.(?<extension>[\w\d]+)$/i.exec(file.originalname)?.groups ?? {};
  
  const params : PutObjectRequest = {
    ACL: "public-read",
    Bucket: process.env.AWS_BUCKET ?? "",
    Body: base64,
    Key: `LabFazFiles/${file.fieldname}/${filename}-${new Date()}.${extension}`,
  }

  return s3UploadPromise(params)
    .then(data => ({
      url: data.Location,
      fieldname: file.fieldname
    }))
}

export const UploadFiles = (files: Express.Multer.File[]) => {
  return Promise.all(files.map(uploadFile))
}
