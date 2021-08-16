import UserRepository from "Repository/UserRepository"
import { RouteHandler } from "Utils/routeHandler"
import { ParamsType, Req } from "Utils/request"

interface ConfirmEmailInterface {
  UserRepo: UserRepository
}

interface IUser extends ParamsType {
  userId: string
  userToken: string
}

export const EmailConfirmation: (deps: ConfirmEmailInterface) => RouteHandler<Req<{}, {}, IUser>> = ({
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
