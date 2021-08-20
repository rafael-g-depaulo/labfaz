import { Connection } from "typeorm"
import { asMock } from "Utils/mockUtils"

import UserRepository from "Repository/UserRepository"

import UserRouterFactory from "./index"
import User from "Entities/User"
import createTestApp from "Utils/createTestApp"
import { ErrorObj } from "Utils/response"

describe('Session Router', () => {

  let UserRepo: UserRepository
  let mockTable: User[] = []

  UserRepo = new UserRepository()

  const conn = {} as Connection
  const UserRoutes = UserRouterFactory({ conn, UserRepo })
  const agent = createTestApp(UserRoutes, '/sessions')

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
    
    jest.spyOn(UserRepo, 'findOne').mockImplementation(() => 
      Promise.resolve(mockTable[0])
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

  describe('Create Session', () => {
    it('should 200 with a valid credentials in the request body', async (done) => {
      mockTable.push({
        email: 'johndoe@email.com',
        password: '123456',
        active: true,
        id: '1'
      } as unknown as User)

      const userInfo = {
        email: 'johndoe@email.com',
        password: '123456'
      }

      agent
        .post('/sessions/create')
        .send(userInfo)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(() => {
          expect(mockTable.length).toBe(1)
          done()
        })
    })

    it('should 400 with an incomplete User field in the request body', async (done) => {
      const emptyBody = agent
        .post('/sessions/create')
        .send({})
        .expect('Content-Type', /json/ )
        .expect(400, ErrorObj(400, 'Incomplete request body' ))

      const onlyEmail = agent
        .post('/sessions/create')
        .send({ email: 'johndoe@email.com' })
        .expect('Content-Type', /json/ )
        .expect(400, ErrorObj(400, 'Incomplete request body' ))

      const onlyPassword = agent
        .post('/sessions/create')
        .send({ password: '123456' })
        .expect('Content-Type', /json/ )
        .expect(400, ErrorObj(400, 'Incomplete request body' ))

        Promise
          .all([ emptyBody, onlyEmail, onlyPassword ])
          .then(() => expect(mockTable).toHaveLength(0))
          .then(() => done())
    })

    it('should 400 with a request body containing invalid information', async (done) => {
      agent
        .post('/sessions/create')
        .send({ email: 'johndoe@email.com', password: true })
        .expect('Content-Type', /json/ )
        .expect(400, ErrorObj(400, 'Invalid request body'))
        .then(() => {
          done()
        })
    })

    it('should 401 with non existing user', async (done) => {

      UserRepo.create({
        name: 'John Doe',
        email: 'test@email.com',
        password: '123456'
      } as unknown as User)

      agent
        .post('/sessions/create')
        .send({ email: 'johndoe@email.com', password: '123456' })
        .expect('Content-Type', /json/ )
        .expect(401, ErrorObj(401, 'Incorrect email/password combination.'))
        .then(() => {
          done()
        })
      
    })

    it('should 401 with wrong password information', async (done) => {

      UserRepo.create({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '123456'
      } as unknown as User)

      agent
        .post('/sessions/create')
        .send({ name: 'John Doe', email: 'johndoe@email.com', password: '654321' })
        .expect('Content-Type', /json/ )
        .expect(401, ErrorObj(401, 'Incorrect email/password combination.'))
        .then(() => {
          done()
        })
    })
  })
})
