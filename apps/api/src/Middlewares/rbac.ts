import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"
import { AuthenticatedUser } from "Utils/reqBodyUser"
import getAc, { ResourceActionStr, Resources, Roles } from "@starter-project/permissions"


import { unauthorizedError } from "Utils/endpointReturns"

const rbac =
  (action: ResourceActionStr, resource: Resources): RouteHandler<Req<{}, { user?: AuthenticatedUser }>> =>
  (req, res, next) => {
  const role = req?.user?.role ?? Roles.NON_LOGGED_USER
  const permission = getAc().permission({ role, action, resource })

  if (!permission.granted)
    return unauthorizedError(res, `Permission for ${role} to "${action}" in resource "${resource}" not granted`)

  return next()
}

export default rbac
