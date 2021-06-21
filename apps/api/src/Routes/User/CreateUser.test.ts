import { createResponseMock, mockRouteHandler, createRequestMock, asMock } from "Utils/mockUtils"
import expectStatus from "Utils/expectStatus"

import UserRepository from "Repository/UserRepository"
import User from "Entities/User"
import CreateUser from "./CreateUser"
import { RequestHandler } from "express"
import { DeepPartial } from "typeorm"

describe('CreateUser Route Handler', () => {

  let UserRepo: UserRepository
  let createUserRoute: RequestHandler<DeepPartial<User>>
  let mockTable: any

  beforeAll(() => {
    UserRepo = new UserRepository()
    createUserRoute = CreateUser({ UserRepo })

    jest.spyOn(UserRepo, 'create').mockImplementation(info => mockTable.push({ ...info, id: `${info.name}.${info.password}`}) )
    jest.spyOn(UserRepo, 'save').mockReturnValue(Promise.resolve({} as User))
    jest.spyOn(UserRepo, 'generateHash').mockImplementation(password => password)
    jest.spyOn(UserRepo, 'findByEmail').mockImplementation(email => mockTable.find(findUser => findUser.email === email))
  })

  beforeEach(() => {
    asMock(UserRepo.create).mockClear()
    asMock(UserRepo.save).mockClear()
    mockTable = [];
  })

  it('it should be able to create a new user in the database table', async () => {

    const userInfo = {
      name: 'john doe',
      email: 'johndoe@hotmail.com',
      password: '123456'
    }

    const response = createResponseMock()
    const request = createRequestMock(userInfo)
  
    await mockRouteHandler(createUserRoute, request, response)

    expect(UserRepo.create).toHaveBeenCalledWith(userInfo)
    expect(mockTable.length).toBe(1)
    expect(mockTable[0]).toMatchObject(userInfo)
  })

  it('should not be able to create a new user in the database table missing some field in request body', async () => {

    const userInfo = {
      name: 'john doe',
      email: 'johndoe@hotmail.com',
    }

    const response = createResponseMock()
    const request = createRequestMock(userInfo)

    await mockRouteHandler(createUserRoute, request, response)

    expect(mockTable.length).toBe(0)
    expectStatus(401, expect, response)
  })

  it('should not be able to create in the database table a user with same email from another', async () => {

    const user = {
      name: 'john doe',
      email: 'johndoe@hotmail.com',
      password: '123456'
    }  
    
    let response = createResponseMock()
    let request = createRequestMock(user)

    await mockRouteHandler(createUserRoute, request, response)
    
    const newUser = {
      name: 'FakeName',
      email: 'johndoe@hotmail.com',
      password: '123456'
    }

    request = createRequestMock(newUser)
    response = createResponseMock()

    await mockRouteHandler(createUserRoute, request, response)

    expect(mockTable.length).toBe(1)
    expectStatus(401, expect, response)
  })
})  
