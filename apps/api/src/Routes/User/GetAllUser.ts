<<<<<<< HEAD
import UserRepository from "Repository/UserRepository";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";
import { createdSuccessfully } from "Utils/endpointReturns";
=======
import { RequestHandler } from "express";
import UserRepository from "Repository/UserRepository";
import { DeepPartial } from "typeorm";
import User from "Entities/User";
>>>>>>> ce8e28f (🐛 fix: removed bug from update user)

interface GetAllUsersInterface {
  UserRepo: UserRepository;
}

export const GetAllUsers: (
  deps: GetAllUsersInterface
<<<<<<< HEAD
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

  return createdSuccessfully(res, { users });
=======
) => RequestHandler<DeepPartial<User>> = ({
  UserRepo,
}: GetAllUsersInterface) => async (_, res) => {
  const users = await UserRepo.find();

  return res.status(201).json({ users });
>>>>>>> ce8e28f (🐛 fix: removed bug from update user)
};


export default GetAllUsers;
