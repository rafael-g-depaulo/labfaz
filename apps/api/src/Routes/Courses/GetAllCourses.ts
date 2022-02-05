import CourseRepository from "Repository/CourseRepository"
import { fetchedSuccessfully } from "Utils/endpointReturns";
import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"

import { ActivityType, GetCoursesByTypeReturn } from "@labfaz/entities"

interface GetAllCourserInterface {
  CourseRepo: CourseRepository
}

export const GetAllCourses: (
  deps: GetAllCourserInterface
) => RouteHandler<Req> = ({
  CourseRepo
}: GetAllCourserInterface) => async (_, res) => {
  const courses = await CourseRepo.find({
    loadEagerRelations: false,
  })

  // separate activities by type
  const initial = Object
    .values(ActivityType)
    .reduce((acc, type) => ({ ...acc, [type]: [] }), {}) as GetCoursesByTypeReturn

  const activities = courses.reduce((acc, cur) => ({
    ...acc,
    [cur.type]: [...acc[cur.type], CourseRepo.serialize(cur)],
  }), initial)

  return fetchedSuccessfully(res, activities)
}

export default GetAllCourses
