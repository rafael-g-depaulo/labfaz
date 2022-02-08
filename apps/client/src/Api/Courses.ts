import { SuccessObject } from "@labfaz/server-conn-info";
import { api } from "Api";
import useFetchApi from "Hooks/useFetchApi";
import { useMutation, useQuery } from "react-query";

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
    Curso: Course[];
    Live: Course[];
    Oficina: Course[];
    "Roda de conversa": Course[];
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

export const useSubscription = (courseId: string, userToken?: string) => useQuery(`/courses/${courseId}/subscription/${userToken}`, () => checkSubscription(courseId, userToken))


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

const now = (new Date()).getTime()
const isAvailable = ({ subscription_finish_date, subscription_start_date, has_subscription, class_dates, available }: Course) => {
  // const date = !!subscription_finish_date && !!subscription_start_date && new Date(subscription_finish_date)
  // const difference = !!date && timeDifference(date, actualDate)
  // return has_subscription && available && !!difference && difference < 1
  const lastClassDate = class_dates?.length > 0 ? (new Date(class_dates[class_dates.length-1])).getTime() : -Infinity
  const subscriptionStart = new Date(subscription_start_date).getTime()
  const subscriptionFinish = new Date(subscription_finish_date).getTime()

  return available && (
    (!has_subscription && lastClassDate > now) ||
    (has_subscription && subscriptionStart < now && now < subscriptionFinish)
  )
}

const sortCourses = (a: Course, b: Course) => {
  const a_available = isAvailable(a)
  const b_available = isAvailable(b)
  if (a_available && !b_available) return -1
  if (b_available && !a_available) return 1

  const a_first_class_time = a.class_dates?.length > 0 ? (new Date(a.class_dates[0])).getTime() : Infinity
  const b_first_class_time = b.class_dates?.length > 0 ? (new Date(b.class_dates[0])).getTime() : Infinity
  return a_first_class_time - b_first_class_time
}

export const fetchCourses = () => api
  .get<Courses>(`/courses`)
  .then(({ data }) => data)
  .then(({ status, data, code }) => {
    const orderedData: Courses["data"] = {
      "Roda de conversa": data["Roda de conversa"].sort(sortCourses),
      Curso: data.Curso.sort(sortCourses),
      Live: data.Live.sort(sortCourses),
      Oficina: data.Oficina.sort(sortCourses),
    }
    // Object.fromEntries(Object.entries(data)
    //   .map(([name, entries]) => [name, entries.])
    // ) as Courses["data"]

    return ({
      status,
      data: orderedData,
      code,
    })
  })

export const useCourses = () =>
  useFetchApi<Courses>(`/courses`, () => fetchCourses());
