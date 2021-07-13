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
  email: string
  old_password?: string
  password?: string
}

export const UpdateUser: (deps: CreateUserInterface) => RouteHandler<Req<IUser, UserJWTPayload>> = ({
  UserRepo,
}: CreateUserInterface) => async (req, res) => {

<<<<<<< HEAD
  const { password, old_password } = req.body

=======
  const { name, password, old_password } = req.body

  
>>>>>>> ce8e28f (🐛 fix: removed bug from update user)
  if ( !req.user ) {
    return unauthenticatedError(res, 'User need to be loged')
  }

  const user = await UserRepo.findById(req.user?.id)

  if (!user) {
<<<<<<< HEAD
    return notFoundError(res, "User not found.")
  }

=======

    return res.status(404).json("User not found.")
  }

  user.name = name

>>>>>>> ce8e28f (🐛 fix: removed bug from update user)
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
