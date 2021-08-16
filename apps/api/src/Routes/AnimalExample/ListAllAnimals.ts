import AnimalExampleRepository from "Repository/AnimalExampleRepository"
import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"

interface CreateAnimalInterface {
  AnimalExampleRepo: AnimalExampleRepository,
}

export const ListAllAnimals: (deps: CreateAnimalInterface) => RouteHandler<Req> = ({
  AnimalExampleRepo,
}: CreateAnimalInterface) => async (_, res) => {
  const animals = await AnimalExampleRepo.find()

  res.json({ animals })
}

export default ListAllAnimals
