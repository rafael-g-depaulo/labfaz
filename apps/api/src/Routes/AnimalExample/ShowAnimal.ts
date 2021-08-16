import { updatedSuccessfully } from "Utils/endpointReturns"
import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"

import { AnimalRequestBody } from "./GetAnimalFromParams"

export const ShowAnimal: RouteHandler<Req<AnimalRequestBody>> = async (req, res) => {
  const { animal } = req.body
  return updatedSuccessfully(res, { animal })
}

export default ShowAnimal
