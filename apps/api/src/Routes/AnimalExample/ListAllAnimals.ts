import AnimalExampleRepository from "Repository/AnimalExampleRepository"
import { updatedSuccessfully } from "Utils/endpointReturns"
import { Req } from "Utils/request"
import { RouteHandler } from "Utils/routeHandler"

interface CreateAnimalInterface {
  AnimalExampleRepo: AnimalExampleRepository,
}

export const ListAllAnimals: (deps: CreateAnimalInterface) => RouteHandler<Req> = ({
  AnimalExampleRepo,
}: CreateAnimalInterface) => async (_, res) => {
  const animals = await AnimalExampleRepo.find()

  updatedSuccessfully(res, { animals })
}

export default ListAllAnimals
