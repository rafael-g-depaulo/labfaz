import AnimalExampleRepository from "Repository/AnimalExampleRepository"

import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"

import { AnimalRequest } from "./GetAnimalFromParams"

interface DeleteAnimalDeps {
  AnimalExampleRepo: AnimalExampleRepository
}

export const DeleteAnimal: (deps: DeleteAnimalDeps) => RouteHandler<Req<AnimalRequest>> = ({
  AnimalExampleRepo,
}) => async (req, res) => {
  
  // get animal
  const { animal } = req.body

  // delete animal
  await AnimalExampleRepo.remove(animal)

  return res.json({ animal })
}

export default DeleteAnimal
