import { Connection } from "typeorm"
import { asMock } from "Utils/mockUtils"

import UserRepository from "Repository/UserRepository"

import UserRouterFactory from "./index"
import User from "Entities/User"
import createTestApp from "Utils/createTestApp"

describe('User Router', () => {

  let UserRepo: UserRepository
  let mockTable: User[] = []

  UserRepo = new UserRepository()

  const conn = {} as Connection
  const UserRoutes = UserRouterFactory({ conn, UserRepo })
  const agent = createTestApp(UserRoutes, '/user')

  beforeAll(() => {

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
    mockTable = []
  })
  
  describe('Create User', () => {

    it('should 201 with a valid User in the request body', async (done) => {

      const userInfo = {
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '123456'
      }

      agent
        .post('/user')
        .send(userInfo)
        .expect('Content-Type', /json/)
        .expect(201, { user: userInfo })
        .then(() => {
          expect(mockTable.length).toBe(1)
          expect(mockTable[0]).toMatchObject(userInfo)
          done()
        })
    })

    it('should 400 with an incomplete User field in the request body', async (done) => {
      const emptyBody = agent
        .post('/user')
        .send({})
        .expect('Content-Type', /json/ )
        .expect(400, { error: 'Incomplete request body' })

      const onlyName = agent
        .post('/user')
        .send({ name: 'John Doe' })
        .expect('Content-Type', /json/ )
        .expect(400, { error: 'Incomplete request body' })

      const onlyEmail = agent
        .post('/user')
        .send({ email: 'johndoe@email.com' })
        .expect('Content-Type', /json/ )
        .expect(400, { error: 'Incomplete request body' })

      const onlyPassword = agent
        .post('/user')
        .send({ password: '123456' })
        .expect('Content-Type', /json/ )
        .expect(400, { error: 'Incomplete request body' })

        Promise.all([ emptyBody, onlyName, onlyEmail, onlyPassword ])
        .then(() => expect(mockTable).toHaveLength(0))
        .then(() => done())
    })

    it('should 400 with already email existing', async (done) => {

      UserRepo.create({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '123456'
      })

      agent
        .post('/user')
        .send({ name: 'Name', email: 'johndoe@email.com', password: '654321' })
        .expect('Content-Type', /json/ )
        .expect(401, { error: 'Email address already exists.' })
        .then(() => {
          expect(mockTable.length).toBe(1)
          done()
        })
      
    })

    it('should 400 with a request body containing invalid information', async (done) => {
      agent
        .post('/user')
        .send({ name: 123, email: 'johndoe@email.com', password: true })
        .expect('Content-Type', /json/ )
        .expect(400, { error: 'Invalid request body' })
        .then(() => {
          expect(mockTable.length).toBe(0)
          done()
        })
    })
  })

  // describe('Update User', () => {

  //   it('should 201 with a valid fields in the request body', async (done) => {
      
  //     UserRepo.create({
  //       name: 'John Doe',
  //       email: 'johndoe@email.com',
  //       password: '123456',
  //       id: '1'
  //     })

  //     const userUpdated = { 
  //       name: 'Name test', 
  //       email: 'test@email.com',
  //       id: '1'
  //     }

  //     agent
  //       .put('/user')
  //       .expect('Content-type', /json/ )
  //       .set('Authorization', 'Bearer 1234')
  //       .send(userUpdated)
  //       .expect(201, { user: userUpdated })
  //       .then(() => {
  //         expect(mockTable[0]).toMatchObject(userUpdated)
  //         done()
  //       })
  //   })
  // })
})
