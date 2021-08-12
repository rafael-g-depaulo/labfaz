import { createResponseMock, mockRouteHandler, createRequestMock, asMock } from "Utils/mockUtils"
import expectStatus from "Utils/expectStatus"

import UserRepository from "Repository/UserRepository"
import User from "Entities/User"
import CreateSession from "./CreateSession"
import { RequestHandler } from "express"
import { DeepPartial } from "typeorm"

describe('CreateSession Route Handler', () => {

  let UserRepo: UserRepository
  let createSessionRoute: RequestHandler<DeepPartial<User>>
  let mockTable: User[] = []

  beforeAll(() => {
    UserRepo = new UserRepository()
    createSessionRoute = CreateSession({ UserRepo })

    jest.spyOn(UserRepo, 'create').mockImplementation(info => {
      const user = { ...info, id: `${info.name}.${info.password}`} as User
      
      mockTable.push(user)

      return user
    })

    jest.spyOn(UserRepo, 'save').mockReturnValue(Promise.resolve({} as User))

    jest.spyOn(UserRepo, 'generateHash').mockImplementation(password => Promise.resolve(password))

    jest.spyOn(UserRepo, 'findByEmail').mockImplementation(email => 
      Promise.resolve(mockTable.find(findUser => findUser.email === email))
    )
    
    jest.spyOn(UserRepo, 'findOne').mockImplementation(({ where }: any) =>
      Promise.resolve(mockTable.find(findUser => findUser.email === where.email))
    )

    jest.spyOn(UserRepo, 'compareHash').mockImplementation((password, user_password) => 
      Promise.resolve(password === user_password)
    )
  })

  beforeEach(() => {
    asMock(UserRepo.create).mockClear()
    asMock(UserRepo.save).mockClear()
    mockTable = [];
  })

  it('should be able to authenticate', async () => {
    UserRepo.create({
      email: 'johndoe@email.com',
      password: '123456',
      active: true,
    })

    const user = {
      email: 'johndoe@email.com',
      password: '123456'
    }

    const response = createResponseMock()
    const request = createRequestMock(user)
      
    await mockRouteHandler(createSessionRoute, request, response )

    expectStatus(200, expect, response)
  })

  it('should not be able to authenticate missing some field in request body', async () => {

    const userInfo = {
      email: 'johndoe@hotmail.com',
    }

    const response = createResponseMock()
    const request = createRequestMock(userInfo)

    await mockRouteHandler(createSessionRoute, request, response)

    expectStatus(400, expect, response)
  })

  it('should not be able to authenticate with wrong field types', async () => {

    const user = {
      email: 'johndoe@email.com',
      password: true,
    }

    const request = createRequestMock(user)
    const response = createResponseMock()

    await mockRouteHandler(createSessionRoute, request, response)

    expectStatus(400, expect, response)
    expect(UserRepo.create).toHaveBeenCalledTimes(0)
    expect(mockTable.length).toBe(0)
  })

  it('should not be able to authenticate with non existing user', async () => {

    const user = {
      email: 'johndoe@email.com',
      password: '123456'
    }

    const response = createResponseMock()
    const request = createRequestMock(user)
      
    await mockRouteHandler(createSessionRoute, request, response )

    expectStatus(401, expect, response)
  })

  it('should not be able to authenticate with wrong password', async () => {

    UserRepo.create({
      email: 'johndoe@email.com',
      password: '654321'
    })

    const user = {
      email: 'johndoe@email.com',
      password: '123456',
    }

    const response = createResponseMock()
    const request = createRequestMock(user)
      
    await mockRouteHandler(createSessionRoute, request, response )

    expectStatus(401, expect, response)
  })
})  
