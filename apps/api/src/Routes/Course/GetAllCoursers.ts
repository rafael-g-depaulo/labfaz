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
  let coursesFound = await CourseRepo.find();

  console.log(coursesFound)

  //remove password from usersFind
  const couresrs = coursesFound.map((course: any) => {
    const courseAsArray = Object.entries(course);
    const courseWithoutPassword = courseAsArray.filter(([key, _]) => key !== 'password')
    const newCourse = Object.fromEntries(courseWithoutPassword);
    return newCourse;    
  })

  return createdSuccessfully(res, { couresrs })
}
