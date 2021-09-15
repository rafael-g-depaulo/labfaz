import { 
  badRequestError,
  fetchedSuccessfully,
  unidentifiedError
} from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { ParamsType, Req } from "Utils/request"

import { UserJWTPayload } from "Middlewares/ensureAuthenticated"

import RequestRepository from "Repository/RequestRepository"

interface CreateSubscritpionDeps {
  RequestRepo: RequestRepository,
}

interface ICourse extends ParamsType {
  course_id: string
}

export type DataReturn = {
  request: Request
  exists: true
} | {
  request: undefined
  exists: false
}

export const GetSubscriptionIfExists: (
  deps: CreateSubscritpionDeps
) => RouteHandler<Req<{}, UserJWTPayload, ICourse>> = ({ RequestRepo }: CreateSubscritpionDeps) => async (req, res) => {
  const { id } = req.user ?? {}
  const { course_id } = req.params

  if (!id) return badRequestError(res, "user id missing")
  if (!course_id) return badRequestError(res, "course id missing")

  return RequestRepo.getRequest({ userId: id, courseId: course_id })
    .then(request => fetchedSuccessfully(res, { request, exists: !!request }))
    .catch(error => unidentifiedError(res, "unknown server error", { error }))
}

export default GetSubscriptionIfExists
