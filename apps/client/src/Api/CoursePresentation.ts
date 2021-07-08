import { strapi } from "Api";
import useFetchApi from "Hooks/useFetchApi";

export interface CoursePresentation {
  title: string;
  subtitle: string;
  description: string;
  finish_date: string;
  banner_image: any;
  finished: boolean;
}

export const fetchCoursePresentation = (id: number) =>
  strapi
    .get<CoursePresentation>(`/course-presentations/${id}`)
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
        banner_image,
        finished,
      })
    );

export const useCoursePresentation = (id: number) =>
  useFetchApi<CoursePresentation>(`/course-presentations/${id}`, () =>
    fetchCoursePresentation(id)
  );

export const fetchCoursePresentations = () =>
  strapi
    .get<CoursePresentation[]>(`/course-presentations`)
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
          banner_image,
          finished,
        })
      )
    );

export const useCoursePresentations = () =>
  useFetchApi<CoursePresentation[]>(
    `/course-presentations`,
    fetchCoursePresentations
  );
