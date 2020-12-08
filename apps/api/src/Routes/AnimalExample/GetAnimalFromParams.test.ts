import { createResponseMock, mockRouteHandler, createRequestMock } from "Utils/mockUtils"
import expectStatus from "Utils/expectStatus"

import AnimalExample from "Entities/AnimalExample"
import getAnimalExampleRepo from "Repository/AnimalExampleRepository.mock"
import GetAnimalFromParams, { AnimalRequest, AnimalIdParams } from "./GetAnimalFromParams"

describe('CreateAnimal Route Handler', () => {
  
  // create Repo and Route, inject dependencies
  const [ AnimalExampleRepo, RepoConfig ] = getAnimalExampleRepo()
  const GetAnimalFromParamsRoute = GetAnimalFromParams({ AnimalExampleRepo })

  // create sample animals for tests
  const snake = {
    id: "cool_id",
    name: "Snake",
    rank: 12,
  } as AnimalExample
  const camel = {
    id: "coolerId",
    name: "Camel",
    rank: 82,
  } as AnimalExample
  
  // reset route and db between tests
  beforeEach(() => {
    RepoConfig.resetTable()
  })

  it('correctly fetches animal from BD if it exists', async () => {
    // create table
    RepoConfig.table = [
      snake,
      camel,
    ]

    // create mocks
    const request = createRequestMock<AnimalRequest | undefined, AnimalIdParams>(undefined, {
      id: snake.id,
    })
    const response = createResponseMock()
    const next = jest.fn()

    // call route handler
    await mockRouteHandler(GetAnimalFromParamsRoute, request, response, next)

    
    // response.json should not be called
    const jsonCalls = response.json.mock.calls
    expect(jsonCalls.length).toBe(0)

    // next should be called once
    const nextCalls = next.mock.calls
    expect(nextCalls.length).toBe(1)
    // next should be called without any arguments
    expect(nextCalls[0].length).toBe(0)
    // and the retrieved animal should be in the request body
    expect(request.body!.animal).toMatchObject(snake)
    // if status is called, it should be called once with 200
    expectStatus(200, expect, response)

  })

  it('returns a 400 if there is no id field in body', async () => {
    // empty table
    RepoConfig.table = []

    const request = {}
    const response = createResponseMock()
    const next = jest.fn()

    // call route handler (won't find anything, because table is empty)
    await mockRouteHandler(GetAnimalFromParamsRoute, request, response, next)

    expect(response.status).toBeCalledTimes(1)
    expect(response.status).toBeCalledWith(400)

    expect(next).not.toBeCalled()
    
    expect(response.json).toBeCalledTimes(1)
    const jsonResponse = response.json.mock.calls[0][0]
    expect(jsonResponse).toMatchObject({ error: "Id not present in route params" })
  })

  it("returns a 404 if the id doesn't correspond to an animal", async () => {
    const request = createRequestMock(undefined, { id: "wrong id" })
    const response = createResponseMock()
    const next = jest.fn()

    // call route handler
    await mockRouteHandler(GetAnimalFromParamsRoute, request, response, next)

    expect(response.status).toBeCalledTimes(1)
    expect(response.status).toBeCalledWith(404)
    
    expect(next).not.toBeCalled()
    
    expect(response.json).toBeCalledTimes(1)
    const jsonResponse = response.json.mock.calls[0][0]
    expect(jsonResponse).toMatchObject({ error: "Animal not found!" })
  })
})
