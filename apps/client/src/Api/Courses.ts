import { api } from "Api";
import useFetchApi from "Hooks/useFetchApi";

export interface Course {
  status: string;
  code: number;
  data: {
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
  };
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
  status: string,
  code: number,
  data: {
    exists: boolean,
    request: {
      id: string,
      status: 'accepted' | 'pending' | 'denied'
    }
  } | undefined
}

export const subscribeToCourse = (courseId: string, userToken: string | undefined ) => 
  api
    .post<SubscriptionDeps>(`/courses/${courseId}/subscribe`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    .then(({data}) => data)



export const checkSubscription = (courseId: string, userToken: string | undefined) => 
  api
    .get<SubscriptionDeps>(`/courses/${courseId}/subscription`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    .then(({data}) => data)
    .then(({ status, code, data }) => ({
      status,
      code,
      data
    }))

export const fetchCourse = (id: string) =>
  api
    .get<Course>(`/courses/${id}`)
    .then(({ data }) => data)
    .then(({ status, data, code }) => ({
      status,
      data,
      code,
    }));

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
