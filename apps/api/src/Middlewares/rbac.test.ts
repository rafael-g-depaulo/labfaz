import { Resources, Roles } from "@starter-project/permissions"

import { Req } from "Utils/request"
import { ErrorObj } from "Utils/responseObj"
import { AuthenticatedUser } from "Utils/reqBodyUser"
import { createResponseMock, mockRouteHandler } from "Utils/mockUtils"

import rbac from "./rbac"

describe("rbac middleware", () => {

  it('allows access when the permission is granted', async () => {
    const response = createResponseMock()
    const request: Req<{}, {user?: AuthenticatedUser}> = {
      user: {
        id: "asdk1324",
        role: Roles.LOGGED_USER,
      }
    } as Req<{}, {user?: AuthenticatedUser}>

    const nextFn = jest.fn()

    await mockRouteHandler(rbac("delete:own", Resources.ACCOUNT), request, response, nextFn)
    
    expect(response.json).not.toBeCalled()
    expect(nextFn).toBeCalledTimes(1)
  })

  it("doesn't allow access when the permission isn't granted", async () => {
    const response = createResponseMock()
    const request: Req<{}, {user?: AuthenticatedUser}> = {
      user: {
        id: "asdk1324",
        role: Roles.LOGGED_USER,
      }
    } as Req<{}, {user?: AuthenticatedUser}>

    const nextFn = jest.fn()

    await mockRouteHandler(rbac("create:own", Resources.ACCOUNT), request, response, nextFn)
    
    expect(response.json).toBeCalledTimes(1)
    expect(response.json).toBeCalledWith(ErrorObj(401, `Permission for ${Roles.LOGGED_USER} to "create:own" in resource "${Resources.ACCOUNT}" not granted`))
    expect(nextFn).not.toBeCalled()
  })

  it("correctly assumes NON_LOGGED_USER if no user object is present in request", async () => {
    let response = createResponseMock()
    let nextFn = jest.fn()

    await mockRouteHandler(rbac("delete:own", Resources.ACCOUNT), {}, response, nextFn)

    expect(response.json).toBeCalledTimes(1)
    expect(response.json).toBeCalledWith(ErrorObj(401, `Permission for ${Roles.NON_LOGGED_USER} to "delete:own" in resource "${Resources.ACCOUNT}" not granted`))
    expect(nextFn).not.toBeCalled()

    response = createResponseMock()
    nextFn = jest.fn()

    await mockRouteHandler(rbac("create:own", Resources.ACCOUNT), {}, response, nextFn)

    expect(response.json).not.toBeCalled()
    expect(nextFn).toBeCalledTimes(1)
  })
})
