import CourseRepository from "Repository/CourseRepository"
import { createdSuccessfully } from "Utils/endpointReturns";
import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"

interface GetAllCourserInterface {
  CourseRepo: CourseRepository
}

export const GetAllCourers: (
  deps: GetAllCourserInterface
) => RouteHandler<Req> = ({
  CourseRepo
}: GetAllCourserInterface) => async (_, res) => {
  const courses = await CourseRepo.find();

  // separate activities by type
  const activities = courses.reduce((acc, cur) => ({ ...acc, [cur.type]: cur}), {})

  return createdSuccessfully(res, activities)
}
