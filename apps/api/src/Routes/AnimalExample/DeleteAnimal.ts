import { RequestHandler } from "Routes"

import AnimalExampleRepository from "Repository/AnimalExampleRepository"
import { AnimalRequest } from "./GetAnimalFromParams"

interface DeleteAnimalDeps {
  AnimalExampleRepo: AnimalExampleRepository
}

export const DeleteAnimal: (deps: DeleteAnimalDeps) => RequestHandler<AnimalRequest> = ({
  AnimalExampleRepo,
}) => async (req, res) => {
  
  // get animal
  const { animal } = req.body

  // delete animal
  await AnimalExampleRepo.remove(animal)

  return res.json({ animal })
}

export default DeleteAnimal
