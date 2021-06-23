import { api } from "Api"
import useFetchApi from "Hooks/useFetchApi"

export interface AboutUsData {
  bannerData: string,
  welcomeData: DataObject,
  aboutUsData: DataObject[]
}

export interface DataObject {
  img: string,
  txt: string
}

export const fetchAboutUsData = () => api
  .get<AboutUsData>("/about-us")
  .then(({ data }) => data)

export const useAboutUsdata = () => useFetchApi<AboutUsData>('/about-us', fetchAboutUsData)
