import UserRepository from "Repository/UserRepository"

import {
  badRequestError,
  databaseError,
  failedLoginError,
  loggedInSuccessfully,
} from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

import { UserLogin } from "@starter-project/entities"

interface LoginUserDeps {
  UserRepo: UserRepository
}

export const LoginUser = ({ UserRepo }: LoginUserDeps): RouteHandler<Req<UserLogin>> => async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) return badRequestError(res, "Missing information for user creation.")

  return UserRepo.checkCredentials(email, password)
    .then(user => {
      if (!user) return failedLoginError(res, "Login errado")
      const token = UserRepo.generateToken(user)
      return loggedInSuccessfully(res, { token })
    })
    .catch(err => databaseError(res, "Error trying to create user.", err as object))

}
export default LoginUser
