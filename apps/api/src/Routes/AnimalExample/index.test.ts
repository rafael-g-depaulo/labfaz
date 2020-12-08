import { Connection } from "typeorm"
import CreateAnimalExampleRepo from "Repository/AnimalExampleRepository.mock"

import AnimalExampleRouterFactory from "./index"
import createTestApp from "Utils/createTestApp"

describe('AnimalExample Router', () => {

  // inject dependencies and create router and app
  const conn = {} as Connection
  const [AnimalExampleRepo, RepoConfig] = CreateAnimalExampleRepo()
  const AnimalExampleRoutes = AnimalExampleRouterFactory({ conn, AnimalExampleRepo })
  const agent = createTestApp(AnimalExampleRoutes, "/animal-example")

  // create sample animals for tests
  const snakeInfo = {
    name: "Snake",
    rank: 12,
  }
  const snake = AnimalExampleRepo.create(snakeInfo)
  const camelInfo = {
    name: "Camel",
    rank: 82,
  }
  const camel = AnimalExampleRepo.create(camelInfo)
  const dogInfo = {
    name: "Dog",
    rank: 3,
  }
  const dog = AnimalExampleRepo.create(dogInfo)
  
  // reset route and db between tests
  beforeEach(() => {
    RepoConfig.resetTable()
  })
  
  describe('AnimalExample Creation', () => {
    it("should 201 with a valid AnimalExample in the request body", async (done) => {
      agent
        .post("/animal-example/create")
        .send(dogInfo)
        .expect('Content-Type', /json/)
        .expect(201, { animal: dog })
        .then(() => {
          expect(RepoConfig.table.length).toBe(1)
          expect(RepoConfig.table[0]).toMatchObject(dog)
          done()
        })
    })
    it("should 400 with an incomplete AnimalExample in the request body", async (done) => {
      const emptyBody = agent
        .post("/animal-example/create")
        .send({})   // send incomplete request body
        .expect('Content-Type', /json/)
        .expect(400, { error: "Incomplete request body" })
        // .then(() => expect(RepoConfig.table.length).toBe(0))

      const onlyName = agent
        .post("/animal-example/create")
        .send({ name: "incomplete" })   // send incomplete request body
        .expect('Content-Type', /json/)
        .expect(400, { error: "Incomplete request body" })
        // .then(() => expect(RepoConfig.table.length).toBe(0))

      const onlyRank = agent
        .post("/animal-example/create")
        .send({ rank: 12 })   // send incomplete request body
        .expect('Content-Type', /json/)
        .expect(400, { error: "Incomplete request body" })
        // .then(() => expect(RepoConfig.table.length).toBe(0))
        
      // end test after all tests are done
      Promise.all([ emptyBody, onlyName, onlyRank ])
        .then(() => expect(RepoConfig.table).toHaveLength(0))
        .then(() => done())
    })

    it("should 400 with a request body containing invalid information", async (done) => {
      agent
        .post("/animal-example/create")
        .send({ name: 12, rank: true })
        .expect('Content-Type', /json/)
        .expect(400, { error: "Invalid request body" })
        .then(() => expect(RepoConfig.table).toHaveLength(0))
        .then(() => done())
    })

    // it("should 503 if database can't be reached", async (done) => {
    // TODO: add a way to mock this and test it
    // })
  })

  describe('List All AnimalExamples', () => {

    it("should 200 if everything's ok", async (done) => {
      RepoConfig.table = [snake, camel]
      agent
        .get("/animal-example")
        .expect('Content-Type', /json/)
        .expect(200, { animals: [snake, camel] })
        .then(() => done())
    })

    // it("should 503 if database can't be reached", async (done) => {
    // TODO: add a way to mock this and test it
    // })
  })
  
  describe('Show single AnimalExample', () => {
    it("should 200 if the provided id is valid", async (done) => {
      RepoConfig.table = [snake]
      agent
        .get(`/animal-example/${snake.id}`)
        .expect('Content-Type', /json/)
        .expect(200, { animal: snake })
        .then(() => done())
    })

    it("should 404 if the id is invalid", async (done) => {
      RepoConfig.table = [camel]
      agent
        .get(`/animal-example/invalid-id`)
        .expect('Content-Type', /json/)
        .expect(404)
        .then(() => done())
    })

    // it("should 503 if database can't be reached", async (done) => {
    // TODO: add a way to mock this and test it
    // })
  })

  describe('Delete single AnimalExample', () => {
    it("should 200 if the provided id is valid", async (done) => {
      RepoConfig.table = [snake, dog]
      agent
        .delete(`/animal-example/${dog.id}`)
        .expect('Content-Type', /json/)
        .expect(200, { animal: dog })
        .then(() => {
          expect(RepoConfig.table.length).toBe(1)
          expect(RepoConfig.table.indexOf(dog)).toBe(-1)
          done()
        })
    })
    it("should 404 if the id is invalid", async (done) => {
      
      RepoConfig.table = [snake, dog]
      agent
        .delete(`/animal-example/23wrong_id`)
        .expect('Content-Type', /json/)
        .expect(404)
        .then(() => done())
    })
    // it("should 503 if database can't be reached", async (done) => {
    // TODO: add a way to mock this and test it
    // })
  })

  describe('AnimalExample CRUD Lifecycle', () => {

    it('should work', async (done) => {      
      // create animals
      await agent
        .post("/animal-example/create")
        .send(dogInfo)
        .expect(201, { animal: dog })
      await agent
        .post("/animal-example/create")
        .send(snakeInfo)
        .expect(201, { animal: snake })
      
      // get single animal
      await agent
        .get(`/animal-example/${snake.id}`)
        .expect(200, { animal: snake })
      
      // get all animals
      await agent
        .get("/animal-example")
        .expect(200)
        .then(({ body }) => expect(body.animals).toEqual(expect.arrayContaining([snake, dog])))
      
      // delete a single animal
      await agent
        .delete(`/animal-example/${snake.id}`)
        .expect(200, { animal: snake })
      
      expect(RepoConfig.table).toEqual([dog])
      done()

    })
  })
})
