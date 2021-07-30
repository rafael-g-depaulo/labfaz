<<<<<<< HEAD
import UserRepository from "Repository/UserRepository";
import { RouteHandler } from "Utils/routeHandler";
import { ParamsType, Req } from "Utils/request";
import { createdSuccessfully, badRequestError, unauthenticatedError, unauthorizedError } from "Utils/endpointReturns";
=======
import { RequestHandler } from "express";
import UserRepository from "Repository/UserRepository";
import { DeepPartial } from "typeorm";
import User from "Entities/User";
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)

interface ShowUserInterface {
  UserRepo: UserRepository;
}

<<<<<<< HEAD
interface IShow extends ParamsType{
=======
interface IShow {
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
  id: string;
}

export const ShowUser: (
  deps: ShowUserInterface
<<<<<<< HEAD
) => RouteHandler<Req<{}, {}, IShow>> = ({
  UserRepo,
}: ShowUserInterface) => async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return badRequestError(res, "Incomplete request param");
  }
  if (typeof id !== "string") {
    return badRequestError(res, "Invalid request param");
=======
) => RequestHandler<DeepPartial<User>> = ({
  UserRepo,
}: ShowUserInterface) => async (req, res) => {
  const { id } = req.params as IShow;

  if (!id) {
    return res.status(400).json({ error: "Incomplete request param" });
  }
  if (typeof id !== "string") {
    return res.status(400).json({ error: "Invalid request param" });
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
  }

  const user = await UserRepo.findById(id);

  if (!user) {
<<<<<<< HEAD
    return unauthenticatedError(res, "Not found user with that id" );
  }

  if (!user.active) {
    return unauthorizedError(res, "This user didn't confirm his account in the email!!");
=======
    return res.status(401).json({ error: "Not found user with that id" });
  }

  if (!user.active) {
    return res
      .status(401)
      .json({ error: "This user didn't confirm his account in the email!!" });
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
  }

  //remove password from usersFind
  const userAsArray = Object.entries(user);
  const userWithoutPassword = userAsArray.filter(
    ([key, _]) => key !== "password"
  );
  const userQueried = Object.fromEntries(userWithoutPassword);

<<<<<<< HEAD
  return createdSuccessfully(res, { user: userQueried })
=======
  return res.status(201).json({ user: userQueried });
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
};

export default ShowUser;
