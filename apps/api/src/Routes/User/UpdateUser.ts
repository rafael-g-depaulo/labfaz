import UserRepository from "Repository/UserRepository"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"
import { createdSuccessfully, notFoundError, badRequestError, unauthenticatedError } from "Utils/endpointReturns"
import { UserJWTPayload } from "Middlewares/ensureAuthenticated"

interface CreateUserInterface {
  UserRepo: UserRepository,
}

export interface IUser {
  id: string
  name: string
  email: string
  old_password?: string
  password?: string
}

export const UpdateUser: (deps: CreateUserInterface) => RouteHandler<Req<IUser, UserJWTPayload>> = ({
  UserRepo,
}: CreateUserInterface) => async (req, res) => {

  const { name, password, old_password } = req.body

  if ( !req.user ) {
    return unauthenticatedError(res, 'User need to be loged')
  }

  const user = await UserRepo.findById(req.user?.id)

  if (!user) {
    return notFoundError(res, "User not found.")
  }

  user.name = name

  if (password) {

    if (!old_password) {
      return badRequestError(res, "You need to inform the old password to set a new password." )
    }

    if (password === old_password) {
      return badRequestError(res, "Cannot change password to old password")
    }

    const checkOldPassword = await UserRepo.compareHash(old_password, user.password)

    if (!checkOldPassword) {
      return badRequestError(res, "Old password does not match.")
    }

    user.password = await UserRepo.generateHash(password)
  }

  await UserRepo.save(user)

  return createdSuccessfully(res, { user })
}

export default UpdateUser
