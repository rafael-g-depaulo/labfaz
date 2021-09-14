import { strapi } from "Api";
import { Asset2Image, Image } from "Utils/Image";
import useFetchApi from "Hooks/useFetchApi";
import StrapiAsset from "Utils/StrapiAsset";

export interface ApiStayTuned {
  title: string;
  description: string;
  image: Image;
  link: string;
}

export interface StrapiStayTuned {
  title: string;
  description: string;
  image: StrapiAsset;
  link: string;
}

export const fetchStayTuned: () => Promise<ApiStayTuned> = () =>
  strapi
    .get<StrapiStayTuned>(`/stay-tuned`)
    .then(({ data }) => data)
    .then(({ title, description, image, link }) => ({
      title,
      description,
      image: Asset2Image(image),
      link,
    }));

export const useStayTuned = () =>
  useFetchApi<ApiStayTuned>(`/stay-tuned`, fetchStayTuned);
