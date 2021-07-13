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
  const users = await UserRepo.find();

  return res.status(201).json({ users });
};


export default GetAllUsers;
