import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"
import { Asset2Image, Image, Asset as StrapiAsset } from "@labfaz/strapi-utils"

interface StrapiBlogBannerInfo {
  title: string,
  subtitle: string,
  image: StrapiAsset | null,
}

export interface BlogBannerInfo {
  title: string,
  subtitle: string,
  image?: Image,
}

export const fetchBlogBannerInfo: () => Promise<BlogBannerInfo> = () => strapi
  .get<StrapiBlogBannerInfo>(`/blog-banner-info`)
  .then(({ data }) => data)
  .then(({ title, subtitle, image }) => ({ title, subtitle, image: image ? Asset2Image(image) : undefined }))

export const useBlogBannerInfo = () => useFetchApi<BlogBannerInfo>(`/blog-banner-info`, fetchBlogBannerInfo)
