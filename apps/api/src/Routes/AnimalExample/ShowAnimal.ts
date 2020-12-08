import { RequestHandler } from "Routes"

import { AnimalRequest } from "./GetAnimalFromParams"

export const ShowAnimal: RequestHandler<AnimalRequest> = async (req, res) => {
  const { animal } = req.body
  res.json({ animal })
}

export default ShowAnimal
