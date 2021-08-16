import { createResponseMock, mockRouteHandler, createRequestMock, asMock } from "Utils/mockUtils"
import expectStatus from "Utils/expectStatus"

import { AnimalExampleRepository } from "Repository/AnimalExampleRepository"
import AnimalExample from "Entities/AnimalExample"
import CreateAnimal from "./CreateAnimal"
import { DeepPartial } from "typeorm"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

describe('CreateAnimal Route Handler', () => {

  let AnimalExampleRepo: AnimalExampleRepository
  let createAnimalRoute: RouteHandler<Req<DeepPartial<AnimalExample>>>

  beforeAll(() => {
    AnimalExampleRepo = new AnimalExampleRepository()
    createAnimalRoute = CreateAnimal({ AnimalExampleRepo })
    jest.spyOn(AnimalExampleRepo, 'create')
      .mockImplementation(info => info as AnimalExample)
      // .mockImplementation((info) => { console.log("created animal", info); return {...info, id: "2"} as AnimalExample })
      // .mockReturnValue({  name: "dog" } as AnimalExample)
    jest.spyOn(AnimalExampleRepo, 'save').mockReturnValue(Promise.resolve({} as AnimalExample))
  })

  beforeEach(() => {
    asMock(AnimalExampleRepo.create).mockClear()
    asMock(AnimalExampleRepo.save).mockClear()
  })

  it('correctly saves the animal given in the request body in the database', async () => {
    const catInfo: DeepPartial<AnimalExample> = {
      name: "Cat",
      rank: 5
    }
    const response = createResponseMock()
    const request = createRequestMock(catInfo)

    // call route
    await mockRouteHandler(createAnimalRoute, request, response)

    // expect new cat to be saved
    expect(AnimalExampleRepo.create).toHaveBeenCalledWith(catInfo)
    const createResult = asMock(AnimalExampleRepo.create).mock.results[0].value
    expect(AnimalExampleRepo.save).toHaveBeenCalledWith(createResult)
  })

  it('correctly returns the new animal in the response json', async () => {
    const dogInfo: DeepPartial<AnimalExample> = {
      name: "Cat",
      rank: 25
    }

    // mock response and request objects
    const response = createResponseMock()
    const request = createRequestMock(dogInfo)

    // call route
    await mockRouteHandler(createAnimalRoute, request, response)

    // expect newly created animal to be sent to client in response json
    const mockCalls = response.json.mock.calls
    expect(mockCalls.length).toBe(1)
    const createResult = asMock(AnimalExampleRepo.create).mock.results[0].value
    expect(mockCalls[0][0]).toMatchObject({ animal: createResult })

    // if status is called, it should be called once with 201
    expectStatus(201, expect, response)
  })
})
