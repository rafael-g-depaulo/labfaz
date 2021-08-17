import { createResponseMock, mockRouteHandler, createRequestMock, asMock } from "Utils/mockUtils"
import expectStatus from "Utils/expectStatus"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

import UserRepository from "Repository/UserRepository"
import User from "Entities/User"

import UpdateUser, { IUser } from "./UpdateUser"

describe('UpdateUser Route Handler', () => {

  let UserRepo: UserRepository
  let updateUserRoute: RouteHandler<Req<IUser>>
  let mockTable: User[] = []

  beforeAll(() => {
    UserRepo = new UserRepository()
    updateUserRoute = UpdateUser({ UserRepo })

    jest.spyOn(UserRepo, 'create').mockImplementation(info => {
      const user  = { ...info }  as User
      
      mockTable.push(user)

      return user
    })

    jest.spyOn(UserRepo, 'save').mockReturnValue(Promise.resolve({} as User))

    jest.spyOn(UserRepo, 'generateHash').mockImplementation(password => Promise.resolve(password))
    
    jest.spyOn(UserRepo, 'findByEmail').mockImplementation(email => 
      Promise.resolve(mockTable.find(findUser => findUser.email === email))
    )
    
    jest.spyOn(UserRepo, 'findById').mockImplementation(id => 
      Promise.resolve(mockTable.find(findUser => findUser.id === id))
    )

    jest.spyOn(UserRepo, 'compareHash').mockImplementation((old_password, user_password) => 
      Promise.resolve(old_password === user_password)
    )
  })

  beforeEach(() => {
    asMock(UserRepo.create).mockClear()
    asMock(UserRepo.save).mockClear()
    mockTable = [];
    
  })

  it.skip('should be able to update the user profile', async () => {

    // const user: IUser = {
    //   email: 'johndoe@gmail.com',
    //   id: '1'
    // }

    // UserRepo.create(user)

    // const userUpdated: IUser = {
    //   email: 'johnwick@gmail.com',
    //   id: '1'
    // }

    // const response = createResponseMock()
    // const request = createRequestMock(userUpdated, {}, { user: { id: '1' } })
      
    // await mockRouteHandler(updateUserRoute, request, response )

    // expect(UserRepo.save).toHaveBeenCalledTimes(1)
    // expect(UserRepo.save).toHaveBeenCalledWith(userUpdated)
  })

  it('should be able to update the user password', async () => {

    const user: IUser = {
      email: 'johndoe@gmail.com',
      password: '123456',
      id: '1'
    }

    UserRepo.create(user)

    const userUpdated: IUser = {
      email: 'johndoe@gmail.com',
      password: '654321',
      old_password: '123456',
      id: '1'
    }

    const response = createResponseMock()
    const request = createRequestMock(userUpdated, {}, { user: { id: '1' } })
      
    await mockRouteHandler(updateUserRoute, request, response )

    expect(UserRepo.save).toHaveBeenCalledTimes(1)
    expect(mockTable[0].password).toBe('654321')
  })

  it('should not be able to update password without old_password field', async () => {

    const user = {
      email: 'johndoe@email.com',
      password: '123456',
      id: '1'
    }

    UserRepo.create(user)

    const userUpdated: IUser = {
      email: 'johndoe@email.com',
      password: '654321',
      id: '1'
    }

    const response = createResponseMock()
    const request = createRequestMock(userUpdated, {}, { user: { id: '1' } })
      
    await mockRouteHandler(updateUserRoute, request, response )

    expectStatus(400, expect, response)
    expect(UserRepo.save).toHaveBeenCalledTimes(0)
    expect(mockTable[0].password).toBe('123456')
  })

  it('should not be able to update password with wrong old_password', async () => {

    const user = {
      email: 'johndoe@email.com',
      password: '123456',
      id: '1'
    }

    UserRepo.create(user)

    const userUpdated = {
      email: 'johndoe@email.com',
      password: '999999',
      old_password: '654321',
      id: '1'
    }

    const response = createResponseMock()
    const request = createRequestMock(userUpdated, {}, { user: { id: '2' } })
      
    await mockRouteHandler(updateUserRoute, request, response )

    expect(UserRepo.save).toHaveBeenCalledTimes(0)
    expect(mockTable[0].password).toBe('123456')
  })

  it('should not be able to update password same from the past', async () => {
    const user = {
      email: 'johndoe@gmail.com',
      password: '123456',
      id: '1'
    }

    UserRepo.create(user)

    const userUpdated = {
      email: 'johndoe@gmail.com',
      password: '123456',
      old_password: '123456',
      id: '1'
    }

    const response = createResponseMock()
    const request = createRequestMock(userUpdated, {}, { user: { id: '1' } })

    await mockRouteHandler(updateUserRoute, request, response)

    expectStatus(400, expect, response)
    expect(UserRepo.save).toHaveBeenCalledTimes(0)
  })
  
  it('should not be able to update profile unlogged on aplication', async () => {
    const user = {
      email: 'johndoe@email.com',
      password: '123456',
      id: '1'
    }

    UserRepo.create(user)

    const updateUser: Partial<IUser> = {
      email: 'test@gmail.com',
    }

    const response = createResponseMock()
    const request = createRequestMock(updateUser)
    
    await mockRouteHandler(updateUserRoute, request, response)

    expectStatus(401, expect, response)
    expect(UserRepo.save).toHaveBeenCalledTimes(0)
    expect(mockTable.length).toBe(1)
  })

  it('should not be able to update user with non existing user ', async () => {
    const user = {
      email: 'johndoe@gmail.com',
      password: '123456',
      id: '1'
    }

    UserRepo.create(user)

    const updateUser: Partial<IUser> = {
      email: 'test@gmail.com',
    }

    const response = createResponseMock()
    const request = createRequestMock(updateUser, {}, { user: { id: '2' } })
    
    await mockRouteHandler(updateUserRoute, request, response)

    expectStatus(404, expect, response)
    expect(UserRepo.save).toHaveBeenCalledTimes(0)
  })

})  
