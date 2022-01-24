// the object form of an image to be used by visual components

import { Asset } from "./Asset"

export type imageExtension = string
export type imageMime = string

export interface Image {
  url: string,
  alternativeText: string,
  caption: string,
  width: number,
  height: number,
  ext: imageExtension
}

// transform a strapi asset object into an image object (remove unecessary info)
export const Asset2Image = ({
  url,
  alternativeText,
  caption,
  width,
  height,
  ext
}: Asset): Image => ({
  url, alternativeText, caption, width, height, ext,
})

// utility function to mock image object
export const mockImage: (img: Partial<Image>) => Image = (img = {}) => ({
  url: "#",
  alternativeText: "",
  caption: "",
  width: 0,
  height: 0,
  ext: "jpg",
  ...img,
})
