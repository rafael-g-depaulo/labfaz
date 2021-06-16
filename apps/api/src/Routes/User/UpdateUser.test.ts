import { createResponseMock, mockRouteHandler, createRequestMock } from "Utils/mockUtils"

import getUserRepo from "Repository/UserRepository.mock"
import CreateUser from "./CreateUser"
import UpdateUser from "./UpdateUser"

describe('UpdateUser Route Handler', () => {

  const [UserRepo, RepoConfig] = getUserRepo()
  const createUserRoute = CreateUser({ UserRepo })
  const updateUserRoute = UpdateUser({ UserRepo })

  beforeEach(() => {
    RepoConfig.resetTable()
  })


  it('should be able update the user profile', async () => {

    const userInfo = {
      name: 'john doe',
      email: 'johndoe@hotmail.com',
      password: '123456'
    }

    const user = UserRepo.create(userInfo)

    const response = createResponseMock()
    const request = createRequestMock(userInfo)

    await mockRouteHandler(createUserRoute, request, response)

    const updateRequest = createRequestMock({
      name: 'John Wick',
      email: 'johnwick@hotmail.com'
    })

    await mockRouteHandler(updateUserRoute, updateRequest, response)

    const UserTable = RepoConfig.table
    console.log(UserTable)
    expect(UserTable.length).toBe(1)
    expect(request.body?.name).toBe('John Wick')
    expect(request.body?.email).toBe('johnwick@hotmail.com')
  })

})  
