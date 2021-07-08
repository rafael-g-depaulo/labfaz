import { DeepPartial } from "typeorm"
import UserRepository from "Repository/UserRepository"
import User from "Entities/User"
import { RequestHandler } from "Routes"

import bcryptjs from "bcryptjs"


interface LogInUserInterface {
  UserRepo: UserRepository
}

interface IUser {
  name: string
  email: string
  password: string
}

export const LogInUser: (deps: LogInUserInterface) => RequestHandler<DeepPartial<User>> = ({
  UserRepo
}: LogInUserInterface) => async (req, res) => {

  const {
    name,
    email,
    password
  } = req.body as IUser

  if (!name || !email || !password) return res.status(400).json({ error: "Incomplete request body" })

  const user = await UserRepo.findByEmail(email)
  

  if(!user) {
    res.status(401)
  }
  
  const checkPassword = await UserRepo.compareHash(password, user?.password)

  if(!checkPassword){
    res.status(401)
  }

  if(!user?.active) {
    res.status(401).json("Email verification needed")
  }

  const token = await UserRepo.generateToken(user?.email)

  delete user?.password

  return res.json({
    user,
    token
  })
}
