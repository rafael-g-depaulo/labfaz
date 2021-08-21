import { unidentifiedError } from "Utils/endpointReturns"
import { RouteHandlerErr } from "Utils/routeHandler"

export const errorHandler: RouteHandlerErr = (error, _req, res, _next) => {
  return unidentifiedError(res, "Error", { error })
}
