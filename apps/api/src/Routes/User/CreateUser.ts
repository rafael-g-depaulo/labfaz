import { DeepPartial } from "typeorm"
import { RequestHandler } from "Routes"

import User from "Entities/User"
import UserRepository from "Repository/UserRepository"

interface CreateUserInterface {
  UserRepo: UserRepository,
}

interface IUser {
  name: string
  email: string
  password: string
}

export const CreateUser: (deps: CreateUserInterface) => RequestHandler<DeepPartial<User>> = ({
  UserRepo,
}: CreateUserInterface) => async (req, res) => {

  const {
    name,
    email,
    password
  } = req.body as IUser

  if (!name || !email || !password) return res.status(400).json({ error: "Incomplete request body" })

  if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') return res.status(400).json({ error: "Invalid request body" })

  const checkUserExists = await UserRepo.findByEmail(email)

  if (checkUserExists) {

    return res.status(401).json({ error: "Email address already exists." })
  }

  const hashedPassword = await UserRepo.generateHash(password)

  const user = UserRepo.create({ name, email, password: hashedPassword })

  await UserRepo.save(user)

  return res.status(201).json({ user })
}

export default CreateUser
