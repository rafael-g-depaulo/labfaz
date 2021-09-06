import UserRepository from "Repository/UserRepository";

import { fetchedSuccessfully } from "Utils/endpointReturns";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";

import { Formation } from "Entities/Technical";

interface GetAllUsersInterface {
  UserRepo: UserRepository;
}

export const GetAllUsers: (deps: GetAllUsersInterface) => RouteHandler<Req> = ({
  UserRepo,
}: GetAllUsersInterface) => async (_, res) => {
  let usersFind = await UserRepo.find({ where: {
    banned: false,
    active: true,
  }})

  // remove password from usersFind
  const users = usersFind
    // filter users without experience
    .filter(user => user.artist.technical.profession !== null && user.artist.technical.formation !== Formation.NO)
    // remove password hash
    .map((user) => {
      let { password: _, ...newUser } = user
      return newUser
    })

  return fetchedSuccessfully(res, { users });
};

export default GetAllUsers;
