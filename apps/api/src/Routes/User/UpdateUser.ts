import { RequestHandler } from "Routes"

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

export const UpdateUser: (deps: CreateUserInterface) => RequestHandler<IUser> = ({
  UserRepo,
}: CreateUserInterface) => async (req, res) => {

  const { name, password, old_password } = req.body

  
  if ( !req.user ) {
    return res.status(401).json({error: 'User need to be loged'})
  }

  const user = await UserRepo.findById(req.user?.id)

  if (!user) {

    return res.status(404).json("User not found.")
  }

  user.name = name

  if (password) {

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
