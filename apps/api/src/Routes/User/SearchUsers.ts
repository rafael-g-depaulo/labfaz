import { Formation } from "@labfaz/entities";

import UserRepository from "Repository/UserRepository";

import { fetchedSuccessfully } from "Utils/endpointReturns";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";

interface UserSearchInterface {
  UserRepo: UserRepository;
}

export const UserSearch: (deps: UserSearchInterface) => RouteHandler<Req> = ({
  UserRepo,
}: UserSearchInterface) => async (_, res) => {
  let usersFind = await UserRepo.find({ where: {
    banned: false,
    active: true,
  }})

  // remove password from usersFind
  const users = usersFind
    // filter users without experience
    .filter(user => user.artist.technical.profession !== null && user.artist.technical.formation !== Formation.NO)
    // filter banned users
    .filter(user => !user.banned)
    // remove password hash
    .map((user) => {
      let { password: _, ...newUser } = user
      return newUser
    })

  return fetchedSuccessfully(res, { users });
};

export default UserSearch;
