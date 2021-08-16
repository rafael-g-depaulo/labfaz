import AnimalExampleRepository from "Repository/AnimalExampleRepository"
import { updatedSuccessfullyReturn } from "Utils/endpointReturns"
import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"

interface CreateAnimalInterface {
  AnimalExampleRepo: AnimalExampleRepository,
}

export const ListAllAnimals: (deps: CreateAnimalInterface) => RouteHandler<Req> = ({
  AnimalExampleRepo,
}: CreateAnimalInterface) => async (_, res) => {
  const animals = await AnimalExampleRepo.find()

  updatedSuccessfullyReturn(res, { animals })
}

export default ListAllAnimals
