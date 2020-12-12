import User from "Entities/User"
import createMockRepo, { Create, Find, FindOne, MockRepo, Remove, Save } from "Utils/createMockRepo"
import UserRepository from "./UserRepository"

const create: Create<User> = () => jest.fn(({ name = "", email = "", password = "" }) =>
  ({ name, email, password, id: `${name}.${password}` }) as User
)

const save: Save<User> = repoConfig => jest.fn(user => repoConfig.table.push(user))

const remove: Remove<User> = repoConfig => jest.fn(user => {

  repoConfig.table = repoConfig.table.filter(({ id }) => id !== user.id)

  return Promise.resolve(user)
})

const find: Find<User> = repoConfig => jest.fn(({ id } = {}) => {
  if (!!id) return Promise.resolve(repoConfig.table.filter(user => user.id === id))

  return Promise.resolve(repoConfig.table)
})

const findOne: FindOne<User> = repoConfig => jest.fn(cond => find(repoConfig)(cond).then(results => results[0]))

export const CreateUserRepo: MockRepo<User, UserRepository> = createMockRepo({
  create,
  save,
  remove,
  find,
  findOne,
})

export default CreateUserRepo
