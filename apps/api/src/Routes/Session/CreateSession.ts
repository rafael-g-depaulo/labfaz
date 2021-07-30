<<<<<<< HEAD
import UserRepository from "Repository/UserRepository";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";
import { actionSuccessful, badRequestError, unauthorizedError } from "Utils/endpointReturns";
=======
import { DeepPartial } from "typeorm";
import { RequestHandler } from "Routes";

import User from "Entities/User";
import UserRepository from "Repository/UserRepository";
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)

interface CreateSessionInterface {
  UserRepo: UserRepository;
}

interface IUser {
  email: string;
  password: string;
}

export const CreateSession: (
  deps: CreateSessionInterface
) => RouteHandler<Req<IUser>> = ({
  UserRepo,
}: CreateSessionInterface) => async (req, res) => {
  const { email, password } = req.body

  if (!email || !password)
    return badRequestError(res, "Incomplete request body");

  if (typeof email !== "string" || typeof password !== "string")
    return badRequestError(res, "Invalid request body");

  const userDB = await UserRepo.findByEmail(email);

  if (!userDB) {
<<<<<<< HEAD
    return unauthorizedError(res, "Incorrect email/password combination.");
=======
    return res
      .status(401)
      .json({ error: "Incorrect email/password combination." });
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
  }

  const passwordMatched = await UserRepo.compareHash(password, userDB.password);

  if (!passwordMatched) {
    return unauthorizedError(res, "Incorrect email/password combination.");
  }

  if (!userDB.active) {
<<<<<<< HEAD
    console.log("no user in DB")
    return unauthorizedError(res, "Email confimation needed");
=======
    return res.status(401).json({ error: "Email confimation needed" });
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
  }

  const token = await UserRepo.generateToken(email);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
  //remove password from user query
  const userAsArray = Object.entries(userDB);
  const userWithoutPassword = userAsArray.filter(
    ([key, _]) => key !== "password"
  );
  const user = Object.fromEntries(userWithoutPassword);

<<<<<<< HEAD
  return actionSuccessful(res, { token, user });
=======
=======
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
  return res.status(200).json({ token, user });
>>>>>>> 2b5b086 (✨ Feature: Mailer and changes in the backend done)
};

export default CreateSession;
