import { fileParseError } from "Utils/endpointReturns"
import { RouteHandlerErr } from "Utils/routeHandler"

export const fileParseErrorHandler: RouteHandlerErr = (error, _req, res, next) => {
  if (error.name === "MulterError")
    return fileParseError(res, "Error when trying to parse file", { error })
  return next(error)
}
