import CourseRepository from "Repository/CourseRepository"
import { fetchedSuccessfully, notFoundError } from "Utils/endpointReturns";
import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"

interface GetAllCourserInterface {
  CourseRepo: CourseRepository
}

export const ShowCourse: (
  deps: GetAllCourserInterface
) => RouteHandler<Req<{}, {}, { course_id: string }>> = ({
  CourseRepo
}: GetAllCourserInterface) => async (req, res) => {
  const course = await CourseRepo.findById(req.params.course_id);
  if (!course) return notFoundError(res, "No course found with that id")
  return fetchedSuccessfully(res, CourseRepo.serialize(course))
}

export default ShowCourse
