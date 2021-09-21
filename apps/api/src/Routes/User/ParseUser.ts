import { badRequestError } from "Utils/endpointReturns"
import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"
import userSchema, { UserInfo } from "./utils/userReqSchema"
import { ValidationError } from "yup"

export interface ParsedUser {
  user_info: UserInfo
}

export const ParseUser: RouteHandler<Req<UserInfo, ParsedUser>> = (req, res, next) => {
  // validate user
  userSchema.validate(req.body, { stripUnknown: true, abortEarly: false })
    // if request body is good, go to next middleware
    .then(userInfo => {
      req.user_info = userInfo
      next()
    })
    // if bad request, return
    .catch((err: ValidationError) => badRequestError(res, err.message, err))
}
