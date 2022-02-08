import { strapi } from "Api";
import { Asset2Image, Image, Asset as StrapiAsset } from "@labfaz/strapi-utils"
import useFetchApi from "Hooks/useFetchApi";

export interface CoursesPageIntroduction {
  title: string;
  description: string;
  image: Image;
}

export interface StrapiCoursesPageIntroduction {
  title: string;
  description: string;
  image: StrapiAsset;
}

export const fetchCoursesPageIntroduction: () => Promise<
  CoursesPageIntroduction
> = () =>
  strapi
    .get<StrapiCoursesPageIntroduction>(`/courses-page-introduction`)
    .then(({ data }) => data)
    .then(({ title, description, image }) => ({
      title,
      description,
      image: Asset2Image(image),
    }));

export const useCoursesPageIntroduction = () =>
  useFetchApi<CoursesPageIntroduction>(
    `/courses-page-introduction`,
    fetchCoursesPageIntroduction
  );
