import AnimalExampleRepository from "Repository/AnimalExampleRepository"
import { RouteHandler } from "Utils/routeHandler"

interface CreateAnimalInterface {
  AnimalExampleRepo: AnimalExampleRepository,
}

export const ListAllAnimals: (deps: CreateAnimalInterface) => RouteHandler = ({
  AnimalExampleRepo,
}: CreateAnimalInterface) => async (_, res) => {

  const animals = await AnimalExampleRepo.find()

  res.json({ animals })
}

export default ListAllAnimals
