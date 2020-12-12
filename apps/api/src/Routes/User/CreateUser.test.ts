import { createResponseMock, mockRouteHandler, createRequestMock } from "Utils/mockUtils"
import expectStatus from "Utils/expectStatus"

import getUserRepo from "Repository/UserRepository.mock"
import CreateUser from "./CreateUser"

describe('CreateUser Route Handler', () => {

  const [UserRepo, RepoConfig] = getUserRepo()
  const createUserRoute = CreateUser({ UserRepo })

  beforeEach(() => {
    RepoConfig.resetTable()
  })

  it('should saves the user given in the request body in the database table', async () => {

    const userInfo = {
      name: 'john doe',
      email: 'johndoe@hotmail.com',
      password: '123456'
    }

    const userEntity = UserRepo.create(userInfo)

    const response = createResponseMock()
    const request = createRequestMock(userInfo)

    await mockRouteHandler(createUserRoute, request, response)

    const UserTable = RepoConfig.table
    expect(UserTable.length).toBe(1)
    expect(UserTable[0]).toMatchObject(userEntity)
    expect(userEntity).toHaveProperty('id')
  })

  it('should not save the user request body in the database table', async () => {

    const userInfo = {
      name: 'john doe',
      email: 'johndoe@hotmail.com',
    }

    const response = createResponseMock()
    const request = createRequestMock(userInfo)

    await mockRouteHandler(createUserRoute, request, response)

    const UserTable = RepoConfig.table
    expect(UserTable.length).toBe(0)
    expect(UserTable[0]).toBeUndefined()

    expectStatus(401, expect, response)
  })

  it('should returns the new user in the response json', async () => {

    const userInfo = {
      name: 'john doe',
      email: 'johndoe@hotmail.com',
      password: '123456'
    }

    const userEntity = UserRepo.create(userInfo)

    const response = createResponseMock()
    const request = createRequestMock(userInfo)

    await mockRouteHandler(createUserRoute, request, response)

    const mockCalls = response.json.mock.calls

    expect(mockCalls.length).toBe(1)
    expect(mockCalls[0][0]).toMatchObject({ user: userEntity })

    expectStatus(201, expect, response)
  })
})  
