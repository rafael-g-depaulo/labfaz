import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"

import { AnimalRequest } from "./GetAnimalFromParams"

export const ShowAnimal: RouteHandler<Req<AnimalRequest>> = async (req, res) => {
  const { animal } = req.body
  res.json({ animal })
}

export default ShowAnimal
