import { api, SuccessObject } from "Api";
import useFetchApi from "Hooks/useFetchApi";
import { useMutation } from "react-query";

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
  class_dates: string[];
  link: string;
}

export interface CourseData {
  status: string;
  code: number;
  data: Course;
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

export interface SubscriptionDeps {
  status: string;
  code: number;
  data:
    | {
        exists: boolean;
        request: {
          id: string;
          status: "accepted" | "pending" | "denied";
        };
      }
    | undefined;
}

export interface ExistsSubscription {
  exists: boolean;
  request: {
    id: string;
    status: "accepted" | "pending" | "denied";
  }
}

export const subscribeToCourse = (
  courseId: string,
  userToken: string | undefined
) => api
  .post<SubscriptionDeps>(
    `/courses/${courseId}/subscribe`,
    {},
    {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    }
  )
  .then(({ data }) => data)

export const useSubscribeToCouse = (courseId: string, userToken?: string) => useMutation(
  [`/courses/${courseId}/subscribe`, userToken],
  () => subscribeToCourse(courseId, userToken),
)

export const checkSubscription = (
  courseId: string,
  userToken: string | undefined
) => api
  .get<SuccessObject<ExistsSubscription>>(`/courses/${courseId}/subscription`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  })
  .then(({ data }) => data.data)

export const useSubscription = (courseId: string, userToken?: string) => useFetchApi(`/courses/${courseId}/subscription/${userToken}`, () => checkSubscription(courseId, userToken))


export const fetchCourse = (id: string) => api
  .get<CourseData>(`/courses/${id}`)
  .then(({ data }) => data)
  .then(({ status, data, code }) => ({
    status,
    data,
    code,
  }))

export const useCourse = (id: string) =>
  useFetchApi<CourseData>(`/courses/${id}`, () => fetchCourse(id));

export const fetchCourses = () => api
  .get<Courses>(`/courses`)
  .then(({ data }) => data)
  .then(({ status, data, code }) => ({
    status,
    data,
    code,
  }))

export const useCourses = () =>
  useFetchApi<Courses>(`/courses`, () => fetchCourses());
