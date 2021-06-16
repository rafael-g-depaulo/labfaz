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

  it('it should be able to create a new user in the database table', async () => {

    const userInfo = {
      name: 'Icaro Rodrigues',
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
  })

  // it('should not be able to create a new user in the database table missing some field in request body', async () => {

  //   const userInfo = {
  //     name: 'john doe',
  //     email: 'johndoe@hotmail.com',
  //   }

  //   const response = createResponseMock()
  //   const request = createRequestMock(userInfo)

  //   await mockRouteHandler(createUserRoute, request, response)

  //   const UserTable = RepoConfig.table
  //   expect(UserTable.length).toBe(0)

  //   expectStatus(401, expect, response)
  // })

  // it('it should not be able to create in the database table a user with same email from another', async () => {

  //   const user = UserRepo.create({
  //       name: 'john doe',
  //       email: 'johndoe@hotmail.com',
  //       password: '123456'
  //   })  
    
  //   const response = createResponseMock()
  //   const request = createRequestMock(user)

  //   await mockRouteHandler(createUserRoute, request, response)
    
  //   expect(UserRepo.create({
  //       name: 'john doe',
  //       email: 'johndoe@hotmail.com',
  //       password: '123456'
  //   })).toBeInstanceOf(Error)
    
  //   expectStatus(401, expect, response)

    
  // })
})  
