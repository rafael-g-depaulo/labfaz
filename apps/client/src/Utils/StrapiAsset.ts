import { imageExtension, imageMime } from "./Image"

// the form of an asset from Strapi
//! this is the structure of image assets, video and file assets are different!!!
//  TODO: fix this
export interface StrapiAsset {
  id: number,
  name: string,
  alternativeText: string,
  caption: string,
  width: number,
  height: number,
  formats: {
    thumbnail: {
      ext: imageExtension,
      url: string,
      hash: string,
      mime: imageMime,
      name: string,
      path: null,
      size: number,
      width: number,
      height: number,
    },
  },
  hash: string,
  ext: imageExtension,
  mime: imageMime,
  size: number,
  url: string,
  previewUrl: null,
  provider: "aws-s3",
  provider_metadata: null,
  created_at: string,
  updated_at: string,
}

export default StrapiAsset