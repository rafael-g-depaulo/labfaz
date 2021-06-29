import { createResponseMock, mockRouteHandler, createRequestMock, asMock } from "Utils/mockUtils"
import expectStatus from "Utils/expectStatus"

import UserRepository from "Repository/UserRepository"
import User from "Entities/User"
import UpdateUser from "./UpdateUser"
import { RequestHandler } from "express"
import { DeepPartial } from "typeorm"

describe('UpdateUser Route Handler', () => {

  let UserRepo: UserRepository
  let updateUserRoute: RequestHandler<DeepPartial<User>>
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

    jest.spyOn(UserRepo, 'generateHash').mockImplementation(password => password)
    
    jest.spyOn(UserRepo, 'findByEmail').mockImplementation(email => 
      Promise.resolve(mockTable.find(findUser => findUser.email === email))
    )
    
    jest.spyOn(UserRepo, 'findById').mockImplementation(id => 
      Promise.resolve(mockTable.find(findUser => findUser.id === id))
    )

    jest.spyOn(UserRepo, 'compareHash').mockImplementation((old_password, user_password) => 
      old_password === user_password
    )
  })

  beforeEach(() => {
    asMock(UserRepo.create).mockClear()
    asMock(UserRepo.save).mockClear()
    mockTable = [];
    
  })

  it('should be able to update the user profile', async () => {

    const user = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      id: '1'
    }

    UserRepo.create(user)

    const userUpdated = {
      name: 'John Wick',
      email: 'johnwick@email.com',
      id: '1'
    }

    const response = createResponseMock()
    const request = createRequestMock(userUpdated, {}, { id: '1'})
      
    await mockRouteHandler(updateUserRoute, request, response )

    expect(UserRepo.save).toHaveBeenCalledTimes(1)
    expect(mockTable[0].name).toBe('John Wick')
    expect(mockTable[0].email).toBe('johnwick@email.com')

  })

  it('should be able to update the user password', async () => {

    const user = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
      id: '1'
    }

    UserRepo.create(user)

    const userUpdated = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '654321',
      old_password: '123456',
      id: '1'
    }

    const response = createResponseMock()
    const request = createRequestMock(userUpdated, {}, { id: '1'})
      
    await mockRouteHandler(updateUserRoute, request, response )

    expect(UserRepo.save).toHaveBeenCalledTimes(1)
    expect(mockTable[0].password).toBe('654321')
  })

  it('should not be able to update password without old_password field', async () => {

    const user = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
      id: '1'
    }

    UserRepo.create(user)

    const userUpdated = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '654321',
      id: '1'
    }

    const response = createResponseMock()
    const request = createRequestMock(userUpdated, {}, { id: '1'})
      
    await mockRouteHandler(updateUserRoute, request, response )

    expectStatus(401, expect, response)
    expect(UserRepo.save).toHaveBeenCalledTimes(0)
    expect(mockTable[0].password).toBe('123456')
  })

  it('should not be able to update password with wrong old_password', async () => {

    const user = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
      id: '1'
    }

    UserRepo.create(user)

    const userUpdated = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '999999',
      old_password: '654321',
      id: '1'
    }

    const response = createResponseMock()
    const request = createRequestMock(userUpdated, {}, { id: '1'})
      
    await mockRouteHandler(updateUserRoute, request, response )

    expect(UserRepo.save).toHaveBeenCalledTimes(0)
    expect(mockTable[0].password).toBe('123456')
  })

  it('should not be able to update password same from the past', async () => {
    const user = {
      name: 'John Doe',
      email: 'JohnDoe@email.com',
      password: '123456',
      id: '1'
    }

    UserRepo.create(user)

    const userUpdated = {
      name: 'John Doe',
      email: 'JohnDoe@email.com',
      password: '123456',
      old_password: '123456',
      id: '1'
    }

    const response = createResponseMock()
    const request = createRequestMock(userUpdated, {}, { id: '1' })

    await mockRouteHandler(updateUserRoute, request, response)

    expectStatus(401, expect, response)
    expect(UserRepo.save).toHaveBeenCalledTimes(0)
  })

  it('should not be able to update email with the same email from another', async () => {

    const user = {
      name: 'John Doe',
      email: 'Johndoe@email.com',
      id: '1'
    }

    const user_2 = {
      name: 'test',
      email: 'test@email.com',
      id: '2'
    }

    const updateUser_2 = {
      name: 'John Doe',
      email: 'Johndoe@email.com',
      id: '2'
    }
    
    UserRepo.create(user)
    UserRepo.create(user_2)

    const response = createResponseMock()
    const request = createRequestMock(updateUser_2, {}, { id: '2' })

    await mockRouteHandler(updateUserRoute, updatedUser, response)

    expectStatus(401, expect, response)
    expect(UserRepo.save).toHaveBeenCalledTimes(0)
    expect(mockTable.length).toBe(2)
  }) 
  
  it('should not be able to update profile unlogged on aplication', async () => {
    const user = {
      name: 'john doe',
      email: 'johndoe@email.com',
      password: '123456',
      id: '1'
    }

    UserRepo.create(user)

    const updateUser = {
      name: 'test',
      email: 'johndoe@email.com',
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
      name: 'john doe',
      email: 'johndoe@email.com',
      password: '123456',
      id: '1'
    }

    UserRepo.create(user)

    const updateUser = {
      name: 'test',
      email: 'johndoe@email.com',
    }

    const response = createResponseMock()
    const request = createRequestMock(updateUser, {}, { id: '2' })
    
    await mockRouteHandler(updateUserRoute, request, response)

    expectStatus(404, expect, response)
    expect(UserRepo.save).toHaveBeenCalledTimes(0)
  })

})  
