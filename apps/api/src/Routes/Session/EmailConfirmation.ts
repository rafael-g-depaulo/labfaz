import { DeepPartial } from "typeorm"
import { RequestHandler } from "Routes"


import User from "Entities/User"
import UserRepository from "Repository/UserRepository"

interface ConfirmEmailInterface {
  UserRepo: UserRepository
}

interface IUser {
  userId: string
  userToken: string
}

export const EmailConfirmation: (deps: ConfirmEmailInterface) => RequestHandler<DeepPartial<User>> = ({
  UserRepo
}: ConfirmEmailInterface) => async (req, res) => {

  const { userId } = req.params as IUser

  
  const user = await UserRepo.findById(userId)

  
  if(!user){
    return res.status(400).json({ error: "Invalid user" })
  }
  
  user.active = true
  
  await UserRepo.save(user)

  return res.status(200).json({message: "Email Confirmado!!"});
}

export default EmailConfirmation
