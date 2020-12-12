import { createResponseMock, mockRouteHandler, createRequestMock } from "Utils/mockUtils"
import expectStatus from "Utils/expectStatus"

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
    const updatedUser = createRequestMock({
      user_id: user.id,
      name: 'John Wick',
      email: 'johnwick@hotmail.com'
    })

    await mockRouteHandler(updateUserRoute, updatedUser, response)

    const UserTable = RepoConfig.table

    expect(UserTable.length).toBe(1)
    expect(updatedUser.body?.name).toBe('John Wick')
    expect(updatedUser.body?.email).toBe('johnwick@hotmail.com')
  })

})  
