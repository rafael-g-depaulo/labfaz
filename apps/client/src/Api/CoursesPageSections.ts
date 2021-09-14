import { strapi } from "Api";
import useFetchApi from "Hooks/useFetchApi";

export interface CoursesPageSections {
  first_title: string;
  first_subtitle: string;
  second_title: string;
  second_subtitle: string;
  third_title: string;
  third_subtitle: string;
  fourth_title: string;
  fourth_subtitle: string;
}

export const fetchCoursesPageSections: () => Promise<
  CoursesPageSections
> = () =>
  strapi
    .get<CoursesPageSections>(`/courses-page-sections`)
    .then(({ data }) => data)
    .then(
      ({
        first_title,
        first_subtitle,
        second_title,
        second_subtitle,
        third_title,
        third_subtitle,
        fourth_title,
        fourth_subtitle,
      }) => ({
        first_title,
        first_subtitle,
        second_title,
        second_subtitle,
        third_title,
        third_subtitle,
        fourth_title,
        fourth_subtitle,
      })
    );

export const useCoursesPageSections = () =>
  useFetchApi<CoursesPageSections>(
    `/courses-page-sections`,
    fetchCoursesPageSections
  );
