import { 
  badRequestError, 
  createdSuccessfully, 
  notFoundError, 
  unauthenticatedError, 
  unauthorizedError, 
  unidentifiedError
} from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { ParamsType, Req } from "Utils/request"
import UserRepository from "Repository/UserRepository"
import RequestRepository from "Repository/RequestRepository"
import CourseRepository from "Repository/CourseRepository"
import { UserJWTPayload } from "Middlewares/ensureAuthenticated"

interface CreateSubscritpionDeps {
  UserRepo: UserRepository,
  RequestRepo: RequestRepository,
  CourseRepo: CourseRepository
}

interface ICourse extends ParamsType {
  courseId: string
}

export const SubscribeToCourse: (
  deps: CreateSubscritpionDeps
) => RouteHandler<Req<{}, UserJWTPayload, ICourse>> = ({ UserRepo, RequestRepo, CourseRepo }: CreateSubscritpionDeps) => async (req, res) => {
  const { id } = req.user?? {}
  const { courseId } = req.params
  const user = await UserRepo.findById(id ?? "")
  const course = await CourseRepo.findById(courseId ?? "")


  if(!id) {
    return badRequestError(res, "user id missing");
  }

  if(!courseId) {
    return badRequestError(res, "course id missing");
  }

  if (!user) {
    return unauthenticatedError(res, "Not found user with that id" );
  }

  if(!course) {
    return notFoundError(res, 'Course not found')
  }

  if (!user.active) {
    return unauthorizedError(res, "This user didn't confirm his account in the email!!");
  }

  if(user.banned) {
    return unauthorizedError(res, "This user is banned")
  }

  const request = await RequestRepo.createRequest(user, course)

  if(request) {
    createdSuccessfully(res, "Request Created")
  }

  return unidentifiedError(res, "Something wrong happend")
}

export default SubscribeToCourse
