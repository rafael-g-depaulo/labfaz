import AnimalExample from "Entities/AnimalExample"
import { DeepPartial, FindConditions } from "typeorm"
import { Create, createRepoMock, Find, FindOne, Remove, Save } from "Utils/createMockRepo"
import AnimalExampleRepository from "./AnimalExampleRepository"

// implementation for CRUD operations
const createImpl: Create<AnimalExample, AnimalExampleRepository> = () => ({ name = "", rank = 0 }) => ({ name, rank, id: `${name}.${rank}` }) as AnimalExample

const saveImpl: Save<AnimalExample, AnimalExampleRepository> = (repoConfig) => ({ name = "", rank = 0, id }: DeepPartial<AnimalExample>) => {
  repoConfig.table
    .push({ name, rank, id } as AnimalExample)
  return Promise.resolve(repoConfig.table[repoConfig.table.length-1])
}

const removeImpl: Remove<AnimalExample, AnimalExampleRepository> = (repoConfig) => (animal: AnimalExample) => {
  repoConfig.table = repoConfig.table.filter(({ id }) => id !== animal.id)
  return Promise.resolve(animal)
}

const findImpl: Find<AnimalExample, AnimalExampleRepository> = (repoConfig) => (animal?: FindConditions<AnimalExample>) => {
  const id = animal?.id
  if (!!id) return Promise.resolve(repoConfig.table.filter(animal => animal.id === id))
  return Promise.resolve(repoConfig.table)
}

const findOneImpl: FindOne<AnimalExample, AnimalExampleRepository> = (repoConfig) => (animal?: FindConditions<AnimalExample>) => {
  const id = animal?.id
  if (!!id) return Promise.resolve(repoConfig.table.filter(animal => animal.id === id)[0])
  return Promise.resolve(repoConfig.table[0])
}

// create repository mock
export const mockAnimalRepo = createRepoMock(() => new AnimalExampleRepository(), {
  create:  createImpl,
  save:    saveImpl,
  remove:  removeImpl,
  find:    findImpl,
  findOne: findOneImpl,
})

export default mockAnimalRepo
