import UserRepository from "Repository/UserRepository"

import { databaseError, fetchedSuccessfully } from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

interface ListUserDeps {
  UserRepo: UserRepository
}

export const ListUser: (
  deps: ListUserDeps
) => RouteHandler<Req> = ({ UserRepo }: ListUserDeps) => async (_, res) => {
  return UserRepo.listUsers()
    .then(users => fetchedSuccessfully(res, { users }))
    .catch((err) => databaseError(res, "Error trying to create user.", err))
  
}
export default ListUser
