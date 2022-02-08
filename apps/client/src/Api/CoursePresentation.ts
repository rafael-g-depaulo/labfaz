import { strapi } from "Api";
import useFetchApi from "Hooks/useFetchApi";
import { extractStrapiData } from "Utils/handleApiResponse";
import { Asset2Image, Image, Asset } from "@labfaz/strapi-utils"

export interface CoursePresentation {
  title: string;
  subtitle: string;
  description: string;
  finish_date: Date;
  banner_image: Image;
  finished: boolean;
}

interface StrapiCoursePresentation {
  title: string;
  subtitle: string;
  description: string;
  finish_date: string;
  banner_image: Asset;
  finished: boolean;
}

const deserializeCoursePresentation = ({
  title,
  subtitle,
  description,
  finish_date,
  banner_image,
  finished,
}: StrapiCoursePresentation): CoursePresentation => ({
  title,
  subtitle,
  description,
  // finish_date,
  finish_date: new Date(finish_date),
  banner_image: Asset2Image(banner_image),
  finished,
})

export const fetchCoursePresentation = (id: number) =>
  strapi
    .get<StrapiCoursePresentation>(`/course-presentations/${id}`)
    .then(extractStrapiData)
    .then(deserializeCoursePresentation)

export const useCoursePresentation = (id: number) =>
  useFetchApi<CoursePresentation>(`/course-presentations/${id}`, () =>
    fetchCoursePresentation(id)
  );

export const fetchCoursePresentations = () =>
  strapi
    .get<StrapiCoursePresentation[]>(`/course-presentations`)
    .then(extractStrapiData)
    .then((courses) => courses.map(deserializeCoursePresentation))

export const useCoursePresentations = () =>
  useFetchApi<CoursePresentation[]>(
    `/course-presentations`,
    fetchCoursePresentations,
  );
