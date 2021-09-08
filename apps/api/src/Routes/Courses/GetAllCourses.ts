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
  const courses = await CourseRepo.find();

  // separate activities by type
  const initial: {[k in ActivityType]: Course[]} = {
    [ActivityType.CURSO]: [],
    [ActivityType.LIVE]: [],
    [ActivityType.OFICINA]: [],
    [ActivityType.RODA_DE_CONVERSA]: [],
  }
  const activities = courses.reduce((acc, cur) => ({ ...acc, [cur.type]: [...acc[cur.type], cur]}), initial)

  return fetchedSuccessfully(res, activities)
}

export default GetAllCourses
