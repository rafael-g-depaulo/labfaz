import AnimalExample from "Entities/AnimalExample"
import createMockRepo, { Create, Find, FindOne, MockRepo, Remove, Save } from "Utils/createMockRepo"
import AnimalExampleRepository from "./AnimalExampleRepository"

// mock function to create animal
const create: Create<AnimalExample> = () => jest.fn(({ name = "", rank = 0 }) =>
  ({ name, rank, id: `${name}.${rank}` }) as AnimalExample
)

// mock function to save animal to table
const save: Save<AnimalExample> = repoConfig => jest.fn(animal => repoConfig.table.push(animal))

// mock function to remove animal from table
const remove: Remove<AnimalExample> = repoConfig => jest.fn(animal => {
  // keep all animals except any with the same id as the given animal to remove
  repoConfig.table = repoConfig.table.filter(({ id }) => id !== animal.id)
  // return given animal
  return Promise.resolve(animal)
})

// mock function to find a number of animals from table
const find: Find<AnimalExample> = repoConfig => jest.fn( ({ id } = {}) => {
  if (!!id) return Promise.resolve(repoConfig.table.filter(animal => animal.id === id))
  // if no condition, return all
  return Promise.resolve(repoConfig.table)
})

// mock function to find a single animal from table
const findOne: FindOne<AnimalExample> = repoConfig => jest.fn(cond => find(repoConfig)(cond).then(results => results[0]))

export const CreateAnimalExampleRepo: MockRepo<AnimalExample, AnimalExampleRepository> = createMockRepo({
  create,
  save,
  remove,
  find,
  findOne,
})

export default CreateAnimalExampleRepo
