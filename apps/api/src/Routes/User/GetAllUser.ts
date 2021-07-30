import { RequestHandler } from "express";
import UserRepository from "Repository/UserRepository";
import { DeepPartial } from "typeorm";
import User from "Entities/User";

interface GetAllUsersInterface {
  UserRepo: UserRepository;
}

export const GetAllUsers: (
  deps: GetAllUsersInterface
) => RequestHandler<DeepPartial<User>> = ({
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

  return res.status(201).json({ users });
};


export default GetAllUsers;
