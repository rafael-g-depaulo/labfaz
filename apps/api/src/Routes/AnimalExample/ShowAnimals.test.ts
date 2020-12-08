import { createResponseMock, mockRouteHandler } from "Utils/mockUtils"
import expectStatus from "Utils/expectStatus"

import AnimalExample from "Entities/AnimalExample"
import ShowAnimalRoute from "./ShowAnimal"

describe('ShowAnimal Route Handler', () => {
  
  // create sample animals for tests
  const camel = {
    id: "coolerId",
    name: "Camel",
    rank: 82,
  } as AnimalExample

  it('works', async () => {
    const response = createResponseMock()
    const request = {
      body: {
        animal: camel
      }
    }

    await mockRouteHandler(ShowAnimalRoute, request, response)

    expectStatus(200, expect, response)
    expect(response.json).toBeCalledTimes(1)
    expect(response.json.mock.calls[0][0]).toMatchObject({ animal: camel })
  })
})
