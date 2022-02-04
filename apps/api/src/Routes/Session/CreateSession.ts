import UserRepository from "Repository/UserRepository"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"
import { actionSuccessful, badRequestError, unauthorizedError } from "Utils/endpointReturns"

import { CreateSession as CreateSessionType, CreateSessionReturn } from "@labfaz/entities"

interface CreateSessionDeps {
  UserRepo: UserRepository
}

export const CreateSession: (
  deps: CreateSessionDeps
) => RouteHandler<Req<CreateSessionType>> = ({
  UserRepo,
}: CreateSessionDeps) => async (req, res) => {
  const { email, password } = req.body

  if (!email || !password)
    return badRequestError(res, "Incomplete request body")

  if (typeof email !== "string" || typeof password !== "string")
    return badRequestError(res, "Invalid request body")

  const userDB = await UserRepo.findByEmail(email)

  if (!userDB) {
    return unauthorizedError(res, "Incorrect email/password combination.")
  }

  const passwordMatched = await UserRepo.compareHash(password, userDB.password)

  if (!passwordMatched) {
    return unauthorizedError(res, "Incorrect email/password combination.")
  }

  if (!userDB.active) {
    return unauthorizedError(res, "Email confimation needed")
  }

  const token = await UserRepo.generateToken(userDB)

  const returnValue: CreateSessionReturn = {
    token,
    user: UserRepo.serialize(userDB),
  }

  return actionSuccessful(res, returnValue)
}

export default CreateSession
