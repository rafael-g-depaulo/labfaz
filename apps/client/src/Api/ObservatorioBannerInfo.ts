import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"
import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

interface StrapiObservatorioBannerInfo {
  title: string,
  subtitle: string,
  image: StrapiAsset | null,
}

export interface ObservatorioBannerInfo {
  title: string,
  subtitle: string,
  image?: Image,
}

export const fetchObservatorioBannerInfo: () => Promise<ObservatorioBannerInfo> = () => strapi
  .get<StrapiObservatorioBannerInfo>(`/observatorio-banner-info`)
  .then(({ data }) => data)
  .then(({ title, subtitle, image }) => ({ title, subtitle, image: image ? Asset2Image(image) : undefined }))

export const useObservatorioBannerInfo = () => useFetchApi<ObservatorioBannerInfo>(`/observatorio-banner-info`, fetchObservatorioBannerInfo)
