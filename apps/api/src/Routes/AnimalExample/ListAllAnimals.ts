import { RequestHandler } from "Routes"

import AnimalExampleRepository from "Repository/AnimalExampleRepository"

interface CreateAnimalInterface {
  AnimalExampleRepo: AnimalExampleRepository,
}

export const ListAllAnimals: (deps: CreateAnimalInterface) => RequestHandler = ({
  AnimalExampleRepo,
}: CreateAnimalInterface) => async (_, res) => {

  const animals = await AnimalExampleRepo.find()

  res.json({ animals })
}

export default ListAllAnimals
