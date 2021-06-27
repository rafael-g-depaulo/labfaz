import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"
import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

interface StrapiBlogBannerInfo {
  title: string,
  subtitle: string,
  image: StrapiAsset,
}

export interface BlogBannerInfo {
  title: string,
  subtitle: string,
  image: Image,
}

export const fetchBlogBannerInfo: () => Promise<BlogBannerInfo> = () => strapi
  .get<StrapiBlogBannerInfo>(`/blog-banner-info`)
  .then(({ data }) => data)
  .then(({ title, subtitle, image }) => ({ title, subtitle, image: Asset2Image(image) }))

export const useBlogBannerInfo = () => useFetchApi<BlogBannerInfo>(`/blog-banner-info`, fetchBlogBannerInfo)
