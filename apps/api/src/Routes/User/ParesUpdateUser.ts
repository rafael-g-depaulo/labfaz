import { badRequestError } from "Utils/endpointReturns";
import { Req } from "Utils/request";
import { RouteHandler } from "Utils/routeHandler";
import userUpadeSchema, { UpdateInfo } from "./utils/updateUserReqSchema";

export interface ParsedUser {
  user_info: UpdateInfo;
}

export const ParseUpdateUser: RouteHandler<Req<UpdateInfo, ParsedUser>> = (
  req,
  res,
  next
) => {
  // validate user
  userUpadeSchema
    .validate(req.body, { stripUnknown: true, abortEarly: false })
    // if request body is good, go to next middleware
    .then((userInfo) => {
      req.user_info = userInfo;
      next();
    })
    // if bad request, return
    .catch((err) => badRequestError(res, "Bad request", err));
};
