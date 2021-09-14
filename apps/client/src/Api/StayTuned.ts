import { strapi } from "Api";
import { Asset2Image, Image } from "Utils/Image";
import useFetchApi from "Hooks/useFetchApi";
import StrapiAsset from "Utils/StrapiAsset";

export interface ApiStayTuned {
  description: string;
  image: Image;
}

export interface StrapiStayTuned {
  description: string;
  image: StrapiAsset;
}

export const fetchStayTuned: () => Promise<ApiStayTuned> = () =>
  strapi
    .get<StrapiStayTuned>(`/stay-tuned`)
    .then(({ data }) => data)
    .then(({ description, image }) => ({
      description,
      image: Asset2Image(image),
    }));

export const useStayTuned = () =>
  useFetchApi<ApiStayTuned>(`/stay-tuned`, fetchStayTuned);
