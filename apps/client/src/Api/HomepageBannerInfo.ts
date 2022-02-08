import { strapi } from "Api";
import useFetchApi from "Hooks/useFetchApi";
import { Asset2Image, Image, Asset } from "@labfaz/strapi-utils";
import { extractStrapiData } from "Utils/handleApiResponse";

interface StrapiHomepageBannerInfo {
  title: string;
  subtitle: string;
  image: Asset | null;
}

export interface HomepageBannerInfo {
  title: string;
  subtitle: string;
  image: Image | null;
}

const deserializeHomepageBannerInfo = ({
  title,
  subtitle,
  image,
}: StrapiHomepageBannerInfo): HomepageBannerInfo => ({
  title,
  subtitle,
  image: !image ? image : Asset2Image(image),
})

export const fetchHomepageBannerInfo: () => Promise<HomepageBannerInfo> = () => strapi
  .get<StrapiHomepageBannerInfo>(`/homepage-banner-info`)
  .then(extractStrapiData)
  .then(deserializeHomepageBannerInfo)

export const useHomepageBannerInfo = () =>
  useFetchApi<HomepageBannerInfo>(
    `/homepage-banner-info`,
    fetchHomepageBannerInfo
  );
