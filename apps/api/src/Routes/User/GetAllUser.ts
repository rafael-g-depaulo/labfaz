import UserRepository from "Repository/UserRepository";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";
import { createdSuccessfully } from "Utils/endpointReturns";

interface GetAllUsersInterface {
  UserRepo: UserRepository;
}

export const GetAllUsers: (deps: GetAllUsersInterface) => RouteHandler<Req> = ({
  UserRepo,
}: GetAllUsersInterface) => async (_, res) => {
  let usersFind = await UserRepo.find();

  //remove password from usersFind
  const users = usersFind.map((user: any) => {
    let { password: _, ...newUser } = user;
    return newUser;
  });

  return createdSuccessfully(res, { users });
};

export default GetAllUsers;
