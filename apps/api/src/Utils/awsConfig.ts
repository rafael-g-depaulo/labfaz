import aws from "aws-sdk";
import { PutObjectRequest } from "aws-sdk/clients/s3";
import { Request } from "express";

aws.config.update({
  secretAccessKey: process.env.AWS_ACCESS_SECRET,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
});

export const s3 = new aws.S3();

export const getReqFiles = (req: Request) => {
  const files =
    !req.files ? [] :
    Array.isArray(req.files) ? req.files :
    Object.values(req.files).flat()

  return files
}

const uploadFile = (file: Express.Multer.File) => {
  return new Promise<string>((resolve, reject) => {
    const base64 = Buffer.from(file.buffer);

    const { extension, filename } = /(?<filename>.+)\.(?<extension>[\w\d]+)$/i.exec(file.originalname)?.groups ?? {};
    
    const params : PutObjectRequest = {
      ACL: "public-read",
      Bucket: process.env.AWS_BUCKET ?? "",
      Body: base64,
      Key: `LabFazFiles/${file.fieldname}/${filename}-${new Date()}.${extension}`,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log("fuck", err)
        return reject(err);
      }
      resolve(data.Location);
    });
  });
};

export const UploadFiles = (files: Express.Multer.File[]) => {
  return Promise.all(files.map(uploadFile));
};
