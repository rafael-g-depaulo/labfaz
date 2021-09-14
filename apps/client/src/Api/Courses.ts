import { api } from "Api";
import useFetchApi from "Hooks/useFetchApi";

export interface Course {
  id: string;
  name: string;
  teacher: string[];
  type: string;
  tags: string[];
  detail: string[];
  fonte: string[];
  short_description: string;
  about: string;
  requirements: string;
  available: boolean;
  banner: string;
  has_subscription: boolean;
  subscription_start_date: string;
  subscription_finish_date: string;
  classes_dates: string[];
  link: string;
}

export interface Courses {
  status: string;
  data: {
    Curso: [];
    Live: [];
    Oficina: [];
    "Roda de conversa": [];
  };
  code: number;
}

export const fetchCourse = (id: string) =>
  api
    .get<Course>(`/courses/${id}`)
    .then(({ data }) => data)
    .then(
      ({
        id,
        name,
        teacher,
        type,
        tags,
        detail,
        fonte,
        short_description,
        about,
        requirements,
        available,
        banner,
        has_subscription,
        subscription_start_date,
        subscription_finish_date,
        classes_dates,
        link,
      }) => ({
        id,
        name,
        teacher,
        type,
        tags,
        detail,
        fonte,
        short_description,
        about,
        requirements,
        available,
        banner,
        has_subscription,
        subscription_start_date,
        subscription_finish_date,
        classes_dates,
        link,
      })
    );

export const useCourse = (id: string) =>
  useFetchApi<Course>(`/courses/${id}`, () => fetchCourse(id));

export const fetchCourses = () =>
  api
    .get<Courses>(`/courses`)
    .then(({ data }) => data)
    .then(({ status, data, code }) => ({
      status,
      data,
      code,
    }));

export const useCourses = () =>
  useFetchApi<Courses>(`/courses`, () => fetchCourses());
