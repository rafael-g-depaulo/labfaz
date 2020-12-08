import { DeepPartial } from "typeorm"
import { RequestHandler } from "Routes"

import AnimalExample from "Entities/AnimalExample"
import AnimalExampleRepository from "Repository/AnimalExampleRepository"

interface CreateAnimalInterface {
  AnimalExampleRepo: AnimalExampleRepository,
}

export const CreateAnimal: (deps: CreateAnimalInterface) => RequestHandler<DeepPartial<AnimalExample>> = ({
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
