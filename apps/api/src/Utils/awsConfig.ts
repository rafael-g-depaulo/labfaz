import aws from "aws-sdk";
import { PutObjectRequest } from "aws-sdk/clients/s3";

aws.config.update({
  secretAccessKey: process.env.AWS_ACCESS_SECRET,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
});

export const s3 = new aws.S3();

const uploadFile = (file: File) => {
  return new Promise((resolve, reject) => {
    const base64 = Buffer.from(file.arrayBuffer);

    const extension = /\.{A-Za-z0-9}+$/i.exec(file.name)![0];

    const params : PutObjectRequest = {
      ACL: "public-read",
      Bucket: process.env.AWS_BUCKET ?? "",
      Body: base64,
      Key: `LabFazFiles/${file.name}-${new Date()}${extension}`,
    };

    s3.upload(params, (err, data) => {
      if (err) return reject(err);
      resolve(data.Location);
    });
  });
};

export const UploadFiles = (files: File[]) => {
  return Promise.all(files.map(uploadFile));
};
