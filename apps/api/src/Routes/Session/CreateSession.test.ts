import { createResponseMock, mockRouteHandler, createRequestMock, asMock } from "Utils/mockUtils"
import expectStatus from "Utils/expectStatus"

import UserRepository from "Repository/UserRepository"
import User from "Entities/User"
import CreateUser from "../User/CreateUser"
import CreateSession from "./CreateSession"
import { RequestHandler } from "express"
import { DeepPartial } from "typeorm"

describe('CreateSession Route Handler', () => {

  let UserRepo: UserRepository
  let createUserRoute: RequestHandler<DeepPartial<User>>
  let createSessionRoute: RequestHandler<DeepPartial<User>>
  let mockTable: any

  beforeAll(() => {
    UserRepo = new UserRepository()
    createUserRoute = CreateUser({ UserRepo })
    createSessionRoute = CreateSession({ UserRepo })

    jest.spyOn(UserRepo, 'create').mockImplementation(info => mockTable.push({ ...info, id: `${info.name}.${info.password}`}) )
    jest.spyOn(UserRepo, 'save').mockReturnValue(Promise.resolve({} as User))
    jest.spyOn(UserRepo, 'generateHash').mockImplementation(password => password)
    jest.spyOn(UserRepo, 'findByEmail').mockImplementation(email => mockTable.find(findUser => findUser.email === email))
    jest.spyOn(UserRepo, 'compareHash').mockImplementation((password, hashed) => password === hashed)
  })

  beforeEach(() => {
    asMock(UserRepo.create).mockClear()
    asMock(UserRepo.save).mockClear()
    mockTable = [];
  })

  it('it should be able to authenticate', async () => {

    const userInfo = {
      name: 'john doe',
      email: 'johndoe@hotmail.com',
      password: '123456'
    }

    let response = createResponseMock()
    let request = createRequestMock(userInfo)
  
    await mockRouteHandler(createUserRoute, request, response)
    
    const userSession = {
      email: 'icaro@hotmail.com',
      password: '123456'
    }

    response = createResponseMock()
    let newRequest = createRequestMock(userSession)

    await mockRouteHandler(createSessionRoute, newRequest, response)

    expect(mockTable.length).toBe(1)
    expect(mockTable[0]).toMatchObject(userInfo)
  })
})  
