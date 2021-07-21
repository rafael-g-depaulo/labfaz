import { strapi } from "Api";
import useFetchApi from "Hooks/useFetchApi";
import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

export interface CoursePresentation {
  title: string;
  subtitle: string;
  description: string;
  finish_date: string;
  banner_image: Image;
  finished: boolean;
}

interface StrapiCoursePresentation {
  title: string;
  subtitle: string;
  description: string;
  finish_date: string;
  banner_image: StrapiAsset;
  finished: boolean;
}

export const fetchCoursePresentation: (id: number) => Promise<CoursePresentation> = (id: number) =>
  strapi
    .get<StrapiCoursePresentation>(`/course-presentations/${id}`)
    .then(({ data }) => data)
    .then(
      ({
        title,
        subtitle,
        description,
        finish_date,
        banner_image,
        finished,
      }) => ({
        title,
        subtitle,
        description,
        finish_date,
        banner_image: Asset2Image(banner_image),
        finished,
      })
    );

export const useCoursePresentation = (id: number) =>
  useFetchApi<CoursePresentation>(`/course-presentations/${id}`, () =>
    fetchCoursePresentation(id)
  );

export const fetchCoursePresentations: () => Promise<CoursePresentation[]> = () =>
  strapi
    .get<StrapiCoursePresentation[]>(`/course-presentations`)
    .then(({ data }) => data)
    .then((courses) =>
      courses.map(
        ({
          title,
          subtitle,
          description,
          finish_date,
          banner_image,
          finished,
        }) => ({
          title,
          subtitle,
          description,
          finish_date,
          banner_image: Asset2Image(banner_image),
          finished,
        })
      )
    );

export const useCoursePresentations = () =>
  useFetchApi<CoursePresentation[]>(
    `/course-presentations`,
    fetchCoursePresentations
  );
