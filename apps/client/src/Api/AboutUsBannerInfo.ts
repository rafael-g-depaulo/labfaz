import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"
import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

interface StrapiAboutUsBannerInfo {
  title: string,
  subtitle: string,
  image: StrapiAsset,
}

export interface AboutUsBannerInfo {
  title: string,
  subtitle: string,
  image: Image,
}

export const fetchAboutUsBannerInfo: () => Promise<AboutUsBannerInfo> = () => strapi
  .get<StrapiAboutUsBannerInfo>(`/about-us-banner-info`)
  .then(({ data }) => data)
  .then(({ title, subtitle, image }) => ({ title, subtitle, image: Asset2Image(image) }))

export const useAboutUsBannerInfo = () => useFetchApi<AboutUsBannerInfo>(`/about-us-banner-info`, fetchAboutUsBannerInfo)
