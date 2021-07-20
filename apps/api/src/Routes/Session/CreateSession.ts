import { DeepPartial } from "typeorm";
import { sign } from "jsonwebtoken";
import { RequestHandler } from "Routes";

import User from "Entities/User";
import UserRepository from "Repository/UserRepository";
import authConfig from "Config/auth";

interface CreateSessionInterface {
  UserRepo: UserRepository;
}

interface IUser {
  email: string;
  password: string;
}

export const CreateSession: (
  deps: CreateSessionInterface
) => RequestHandler<DeepPartial<User>> = ({
  UserRepo,
}: CreateSessionInterface) => async (req, res) => {
  const { email, password } = req.body as IUser;

  if (!email || !password)
    return res.status(400).json({ error: "Incomplete request body" });

  if (typeof email !== "string" || typeof password !== "string")
    return res.status(400).json({ error: "Invalid request body" });

  const user = await UserRepo.findByEmail(email);

  if (!user) {
    return res
      .status(401)
      .json({ error: "Incorrect email/password combination." });
  }

  const passwordMatched = await UserRepo.compareHash(password, user.password);

  if (!passwordMatched) {
    return res
      .status(401)
      .json({ error: "Incorrect email/password combination." });
  }

  if (!user.active) {
    return res.status(401).json({ error: "Email confimation needed" });
  }

  const token = await UserRepo.generateToken(email);

  return res.status(200).json({ token, user });
};

export default CreateSession;
