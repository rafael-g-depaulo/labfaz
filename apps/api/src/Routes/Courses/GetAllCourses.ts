import Course, { ActivityType } from "Entities/Courses";
import CourseRepository from "Repository/CourseRepository"
import { fetchedSuccessfully } from "Utils/endpointReturns";
import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"

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
  });

  // separate activities by type
  const initial = Object
    .values(ActivityType)
    .reduce((acc, type) => ({ ...acc, [type]: [] }), {}) as {[k in ActivityType]: Course[]}
  const activities = courses.reduce((acc, cur) => ({ ...acc, [cur.type]: [...acc[cur.type], cur]}), initial)

  return fetchedSuccessfully(res, activities)
}

export default GetAllCourses
