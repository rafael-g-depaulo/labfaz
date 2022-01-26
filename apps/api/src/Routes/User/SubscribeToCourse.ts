import CourseRepository from "Repository/CourseRepository";

import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";
import UserRepository from "Repository/UserRepository";
import { badRequestError, createdSuccessfully } from "Utils/endpointReturns";
import RequestRepository from "Repository/RequestRepository";
import { SerializedUser } from "@labfaz/entities";

interface CreateSubscriptionRelation {
  CourseRepo: CourseRepository,
  UserRepo: UserRepository,
  RequestRepo: RequestRepository
}

interface  subscriptionBody {
  userId: string,
  courseId: string
}

export const subscribeToCourse: (
  deps: CreateSubscriptionRelation
) => RouteHandler<Req<subscriptionBody, SerializedUser>> = ({
  CourseRepo,
  UserRepo,
  RequestRepo
}: CreateSubscriptionRelation) => async (req, res) => {
  const { userId, courseId } = req.body
  let newRequest

  const user = await UserRepo.findById(userId)
  const course = await CourseRepo.findById(courseId)


  if(user && course) {
    newRequest = RequestRepo.createRequest(user, course)
  }

  if(newRequest) {
    createdSuccessfully(res, newRequest)
  } else {
    badRequestError(res, res.statusMessage, {newRequest})
  }
}

export default subscribeToCourse
