import { strapi } from "Api";
import useFetchApi from "Hooks/useFetchApi";
import { Asset2Image, Image } from "Utils/Image";
import StrapiAsset from "Utils/StrapiAsset";

interface StrapiHomepageBannerInfo {
  title: string;
  subtitle: string;
  image: StrapiAsset | null;
}

export interface HomepageBannerInfo {
  title: string;
  subtitle: string;
  image: Image | null;
}

export const fetchHomepageBannerInfo: () => Promise<HomepageBannerInfo> = () =>
  strapi
    .get<StrapiHomepageBannerInfo>(`/homepage-banner-info`)
    .then(({ data }) => data)
    .then(({ title, subtitle, image }) => ({
      title,
      subtitle,
      image: image ? Asset2Image(image) : image,
    }));

export const useHomepageBannerInfo = () =>
  useFetchApi<HomepageBannerInfo>(
    `/homepage-banner-info`,
    fetchHomepageBannerInfo
  );
