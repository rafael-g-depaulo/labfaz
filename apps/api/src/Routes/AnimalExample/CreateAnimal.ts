import { DeepPartial } from "typeorm"

import AnimalExample from "Entities/AnimalExample"
import AnimalExampleRepository from "Repository/AnimalExampleRepository"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"
import { createdSuccessfullyReturn, syntaticErrorReturn } from "Utils/endpointReturns"

interface CreateAnimalInterface {
  AnimalExampleRepo: AnimalExampleRepository,
}

export const CreateAnimal: (deps: CreateAnimalInterface) => RouteHandler<Req<DeepPartial<AnimalExample>>> = ({
  AnimalExampleRepo,
}: CreateAnimalInterface) => async (req, res) => {
  const {
    name,
    rank,
  } = req.body

  // if request body not complete, return 400
  if (!name || !rank) return syntaticErrorReturn(res, "Incomplete request body")

  // if request body has wrong types
  if (typeof name !== 'string' || typeof rank !== 'number') return syntaticErrorReturn(res, "Invalid request body")

  const animal = AnimalExampleRepo.create({ name, rank })
  await AnimalExampleRepo.save(animal)

  return createdSuccessfullyReturn(res, { animal })
}

export default CreateAnimal
