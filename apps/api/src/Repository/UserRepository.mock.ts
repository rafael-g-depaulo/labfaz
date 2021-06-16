import User from "Entities/User"
import createMockRepo, { Create, Find, FindOne, Remove, Save } from "Utils/createMockRepo"
import UserRepository from "./UserRepository"

const create: Create<User, UserRepository> = () => ({ name = "", email = "", password = "" }) =>
  ({ name, email, password, id: `${name}.${password}` }) as User

const save: Save<User, UserRepository> = repoConfig => user => repoConfig.table.push(user)

const remove: Remove<User, UserRepository> = repoConfig => user => {
  repoConfig.table = repoConfig.table.filter(({ id }) => id !== user.id)
  return Promise.resolve(user)
}

const find: Find<User, UserRepository> = repoConfig => ({ id } = {}) => {
  if (!!id) return Promise.resolve(repoConfig.table.filter(user => user.id === id))
  return Promise.resolve(repoConfig.table)
}

const findOne: FindOne<User, UserRepository> = repoConfig => ({ id } = {}) => {
  if (!!id) return Promise.resolve(repoConfig.table.filter(user => user.id === id)[0])
  return Promise.resolve(repoConfig.table[0])
}

export const CreateUserRepo = createMockRepo(() => new UserRepository(), {
  create,
  save,
  remove,
  find,
  findOne,
})

export default CreateUserRepo
