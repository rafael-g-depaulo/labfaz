import { strapi } from "Api";
import useFetchApi from "Hooks/useFetchApi";

export interface Homepage {
  course_presentation_title: string;
  course_presentation_first_text: string;
  course_presentation_second_text: string;
}

export const fetchHomepage: () => Promise<Homepage> = () =>
  strapi
    .get<Homepage>(`/homepage-text`)
    .then(({ data }) => data)
    .then(
      ({
        course_presentation_title,
        course_presentation_first_text,
        course_presentation_second_text,
      }) => ({
        course_presentation_title,
        course_presentation_first_text,
        course_presentation_second_text,
      })
    );

export const useHomepage = () =>
  useFetchApi<Homepage>(`/homepage-text`, fetchHomepage);

export interface HomePresentationInfo {
  Title: string
  SubTitle: string
  Video: string

}

export const fetchHomepagePresentationInfo = () => strapi
  .get<HomePresentationInfo>(`/home-presentation-info`)
  .then(({ data }) => data)

export const useHomepagePresentationInfo = () => useFetchApi<HomePresentationInfo>(`/home-presentation-info`, fetchHomepagePresentationInfo)
