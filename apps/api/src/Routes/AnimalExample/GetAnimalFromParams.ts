import { RequestHandler } from "Routes"

import AnimalExample from "Entities/AnimalExample"
import AnimalExampleRepository from "Repository/AnimalExampleRepository"

interface GetAnimalDeps {
  AnimalExampleRepo: AnimalExampleRepository,
}

export interface AnimalRequest {
  animal: AnimalExample
}

export interface AnimalIdParams {
  id: string,
}

export const GetAnimalFromParams: (deps: GetAnimalDeps) => RequestHandler<AnimalRequest | undefined, AnimalIdParams> = ({
  AnimalExampleRepo,
}) => async (req, res, next) => {

  const { id } = req.params ?? {}

  // return an error if id not in params
  if (!id) return res.status(400).json({ error: "Id not present in route params" })

  const animal = await AnimalExampleRepo.findOne({ id })

  // if id doesnt correspont to an animal
  if (!animal) return res.status(404).json({ error: "Animal not found!" })

  // add animal to body
  req.body = { animal }

  // go to next middleware
  return next && next()
}

export default GetAnimalFromParams
