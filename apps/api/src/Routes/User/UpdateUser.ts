import { DeepPartial } from "typeorm"
import { RequestHandler } from "Routes"

import User from "Entities/User"
import UserRepository from "Repository/UserRepository"

interface CreateUserInterface {
  UserRepo: UserRepository,
}

interface IUser {
  id: string
  name: string
  email: string
  old_password?: string
  password?: string
}

export const UpdateUser: (deps: CreateUserInterface) => RequestHandler<DeepPartial<User>> = ({
  UserRepo,
}: CreateUserInterface) => async (req, res) => {

  const { name, email, password, old_password } = req.body as IUser

  const user = await UserRepo.findById(req.body.id)

  if (!user) {

    return res.json("User not found.")
  }

  const userWithUpdatedEmail = await UserRepo.findByEmail(email)

  if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {

    return res.status(401).json({ error: "E-mail already in use." })
  }

  user.name = name
  user.email = email

  if (password) {

    if (password && !old_password) {

      return res.status(401).json({ error: "You need to inform the old password to set a new password." })
    }

    if (!old_password) {
      return res.status(401).json({ error: "You need to inform the old password to set a new password." })
    }

    if (password === old_password) {

      return res.status(401).json({ error: "Cannot change password to old password" })
    }

    const checkOldPassword = await UserRepo.compareHash(old_password, user.password)

    if (!checkOldPassword) {

      return res.status(401).json({ error: "Old password does not match." })

    }

    user.password = await UserRepo.generateHash(password)
  }

  await UserRepo.save(user)

  return res.status(201).json({ user })
}

export default UpdateUser
