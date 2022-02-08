import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"
import { Asset2Image, Image, Asset as StrapiAsset } from "@labfaz/strapi-utils"

interface StrapiAboutUsBannerInfo {
  title: string,
  subtitle: string,
  image: StrapiAsset | null,
}

export interface AboutUsBannerInfo {
  title: string,
  subtitle: string,
  image?: Image,
}

export const fetchAboutUsBannerInfo: () => Promise<AboutUsBannerInfo> = () => strapi
  .get<StrapiAboutUsBannerInfo>(`/about-us-banner-info`)
  .then(({ data }) => data)
  .then(({ title, subtitle, image }) => ({ title, subtitle, image: image ? Asset2Image(image) : undefined }))

export const useAboutUsBannerInfo = () => useFetchApi<AboutUsBannerInfo>(`/about-us-banner-info`, fetchAboutUsBannerInfo)
