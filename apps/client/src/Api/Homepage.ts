import { strapi } from "Api";
import useFetchApi from "Hooks/useFetchApi";
import { extractStrapiData } from "Utils/handleApiResponse";

export interface Homepage {
  course_presentation_title: string;
  course_presentation_first_text: string;
  course_presentation_second_text: string;
}

const deserializeHomePage = ({
  course_presentation_title,
  course_presentation_first_text,
  course_presentation_second_text,

}: Homepage): Homepage => ({
  course_presentation_title,
  course_presentation_first_text,
  course_presentation_second_text,
})

export const fetchHomepage: () => Promise<Homepage> = () => strapi
  .get<Homepage>(`/homepage-text`)
  .then(extractStrapiData)
  .then(deserializeHomePage)

export const useHomepage = () =>
  useFetchApi<Homepage>(`/homepage-text`, fetchHomepage);

export interface HomePresentationInfo {
  Title: string
  SubTitle: string
  Video: string

}

export const fetchHomepagePresentationInfo = () => strapi
  .get<HomePresentationInfo>(`/home-presentation-info`)
  .then(extractStrapiData)

export const useHomepagePresentationInfo = () => useFetchApi<HomePresentationInfo>(`/home-presentation-info`, fetchHomepagePresentationInfo)
