import UserRepository from "Repository/UserRepository"

import { databaseError, fetchedSuccessfully } from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"
import { UserJWTPayload } from "Middlewares/ensureAuthenticated"

interface ShowCurrentUserDeps {
  UserRepo: UserRepository
}

export const ShowCurrentUser: (
  deps: ShowCurrentUserDeps
) => RouteHandler<Req<{}, UserJWTPayload>> = ({ UserRepo }: ShowCurrentUserDeps) => async (req, res) => {
  const userId = req.user!.id
  return UserRepo.findById(userId)
    .then(user => {
      if (!user) throw new Error(`No user found with id ${userId}`)
      return UserRepo.serialize(user)
    })
    .then(user => fetchedSuccessfully(res, { user }))
    .catch(err => databaseError(res, "Error trying to fetch user.", err))
  
}
export default ShowCurrentUser
