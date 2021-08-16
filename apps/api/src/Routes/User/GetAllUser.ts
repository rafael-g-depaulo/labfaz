import UserRepository from "Repository/UserRepository";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";
import { createdSuccessfullyReturn } from "Utils/endpointReturns";

interface GetAllUsersInterface {
  UserRepo: UserRepository;
}

export const GetAllUsers: (
  deps: GetAllUsersInterface
) => RouteHandler<Req> = ({
  UserRepo,
}: GetAllUsersInterface) => async (_, res) => {
  let usersFind = await UserRepo.find();

  //remove password from usersFind
  const users = usersFind.map((user: any) => {
    const userAsArray = Object.entries(user);
    const userWithoutPassword = userAsArray.filter(([key, _]) => key !== 'password')
    const newUser = Object.fromEntries(userWithoutPassword);
    return newUser;    
  })

  return createdSuccessfullyReturn(res, { users });
};


export default GetAllUsers;
