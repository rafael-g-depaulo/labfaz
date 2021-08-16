import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"

import { AnimalRequestBody } from "./GetAnimalFromParams"

export const ShowAnimal: RouteHandler<Req<AnimalRequestBody>> = async (req, res) => {
  const { animal } = req.body
  res.json({ animal })
}

export default ShowAnimal
