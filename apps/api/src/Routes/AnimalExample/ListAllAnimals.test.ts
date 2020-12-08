import { createResponseMock, mockRouteHandler } from "Utils/mockUtils"
import expectStatus from "Utils/expectStatus"

import AnimalExample from "Entities/AnimalExample"
import getAnimalExampleRepo from "Repository/AnimalExampleRepository.mock"
import ListAllAnimals from "./ListAllAnimals"

describe('ListAllAnimals Route Handler', () => {
  
  // create Repo and Route, inject dependencies
  const [ AnimalExampleRepo, RepoConfig ] = getAnimalExampleRepo()
  const ListAllAnimaleRoute = ListAllAnimals({ AnimalExampleRepo })

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

  it('works with an empty table of animals', async () => {
    RepoConfig.table = []

    // create response mock
    const response = createResponseMock()

    // call route handler
    // await ListAllAnimaleRoute({}, response)
    await mockRouteHandler(ListAllAnimaleRoute, {}, response)

    // expect empty array in response
    expect(response.json).toBeCalledTimes(1)
    expect(response.json).toBeCalledWith({ animals: [] })

    // if status is called, it should be called once with 200
    const statusCalledTimes = response.status.mock.calls.length
    expect(statusCalledTimes).toBeLessThanOrEqual(1)
    expect(statusCalledTimes).toBeGreaterThanOrEqual(0)
    if (statusCalledTimes === 1)
      expect(response.status.mock).toBeCalledWith(200)
  })

  it('works with a non-empty table of animals', async () => {
    RepoConfig.table = [
      snake,
      camel,
    ]

    // create response mock
    const response = createResponseMock()

    // call route handler
    await mockRouteHandler(ListAllAnimaleRoute, {}, response)

    // expect empty array in response
    expect(response.json).toBeCalledTimes(1)
    expect(response.json).toBeCalledWith({ animals: [snake, camel] })

    // if status is called, it should be called once with 200
    expectStatus(200, expect, response)
  })

})
