import { createResponseMock, mockRouteHandler, createRequestMock } from "Utils/mockUtils"
import expectStatus from "Utils/expectStatus"

import getAnimalExampleRepo from "Repository/AnimalExampleRepository.mock"
import CreateAnimal from "./CreateAnimal"

describe('CreateAnimal Route Handler', () => {

  const [ AnimalExampleRepo, RepoConfig ] = getAnimalExampleRepo()
  const createAnimalRoute = CreateAnimal({ AnimalExampleRepo })
  
  // reset route and db between tests
  beforeEach(() => {
    RepoConfig.resetTable()
  })

  it('correctly saves the animal given in the request body in the database table', async () => {
    
    const catInfo = {
      name: "Cat",
      rank: 5
    }
    const catEntity = AnimalExampleRepo.create(catInfo)

    // mock response and request objects
    const response = createResponseMock()
    const request = createRequestMock(catInfo)

    // call route
    await mockRouteHandler(createAnimalRoute, request, response)

    // expect new dog to be saved to table
    const AnimalExampleTable = RepoConfig.table
    expect(AnimalExampleTable.length).toBe(1)
    expect(AnimalExampleTable[0]).toMatchObject(catEntity)
    
  })

  it('correctly returns the new animal in the response json', async () => {

    const dogInfo = {
      name: "Cat",
      rank: 25
    }
    const dogEntity = AnimalExampleRepo.create(dogInfo)

    // mock response and request objects
    const response = createResponseMock()
    const request = createRequestMock(dogInfo)

    // call route
    await mockRouteHandler(createAnimalRoute, request, response)

    // expect newly created animal to be sent to client in response json
    const mockCalls = response.json.mock.calls
    expect(mockCalls.length).toBe(1)  // expect to be called 1 time
    expect(mockCalls[0][0]).toMatchObject({ animal: dogEntity })

    // if status is called, it should be called once with 200
    expectStatus(201, expect, response)
  })
})
