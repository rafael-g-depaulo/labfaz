import { strapi } from "Api";
import useFetchApi from "Hooks/useFetchApi";

export interface CoursePresentation {
  title: string;
  description: string;
  date: string;
  banner_image: any;
}

export const fetchCoursePresentation = (id: number) =>
  strapi
    .get<CoursePresentation>(`/course-presentations/${id}`)
    .then(({ data }) => data)
    .then(({ title, description, date, banner_image }) => ({
      title,
      description,
      date,
      banner_image,
    }));

export const useCoursePresentation = (id: number) =>
  useFetchApi<CoursePresentation>(`/course-presentations/${id}`, () =>
    fetchCoursePresentation(id)
  );

export const fetchCoursePresentations = () =>
  strapi
    .get<CoursePresentation[]>(`/course-presentations`)
    .then(({ data }) => data)
    .then((courses) =>
      courses.map(({ title, description, date, banner_image }) => ({
        title,
        description,
        date,
        banner_image,
      }))
    );

export const useCoursePresentations = () =>
  useFetchApi<CoursePresentation[]>(
    `/course-presentations`,
    fetchCoursePresentations
  );
