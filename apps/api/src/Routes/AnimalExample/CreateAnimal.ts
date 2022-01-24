import { DeepPartial } from "typeorm"

import AnimalExample from "Entities/AnimalExample"
import AnimalExampleRepository from "Repository/AnimalExampleRepository"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

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
  if (!name || !rank) return res.status(400).json({ error: "Incomplete request body" })

  // if request body has wrong types
  if (typeof name !== 'string' || typeof rank !== 'number') return res.status(400).json({ error: "Invalid request body" })

  const animal = AnimalExampleRepo.create({ name, rank })
  await AnimalExampleRepo.save(animal)

  return res.status(201).json({ animal })
}

export default CreateAnimal
