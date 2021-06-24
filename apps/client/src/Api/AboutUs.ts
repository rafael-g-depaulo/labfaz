import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"

export interface AboutUsData {
  banner_data: string,
  welcome_data: DataObject,
  about_us_data: DataObject[]
}

export interface DataObject {
  id: number,
  img: ImgObject,
  text: string
}

export interface ImgObject {
  name: string,
  url: string,
  img: any 
}

export const fetchAboutUsData = () => strapi
  .get<AboutUsData[]>("/about-uses")
  .then(({ data }) => data[0])
  .then(({ banner_data, welcome_data, about_us_data }) => ({
    banner_data,
    welcome_data,
    about_us_data
  }) )

export const useAboutUsdata = () => useFetchApi<AboutUsData>('/about-us', fetchAboutUsData)
