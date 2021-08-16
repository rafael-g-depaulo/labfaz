import UserRepository from "Repository/UserRepository";
import { RouteHandler } from "Utils/routeHandler";
import { ParamsType, Req } from "Utils/request";
import { createdSuccessfullyReturn, syntaticErrorReturn, unauthenticatedErrorReturn, unauthorizedErrorReturn } from "Utils/endpointReturns";

interface ShowUserInterface {
  UserRepo: UserRepository;
}

interface IShow extends ParamsType{
  id: string;
}

export const ShowUser: (
  deps: ShowUserInterface
) => RouteHandler<Req<{}, {}, IShow>> = ({
  UserRepo,
}: ShowUserInterface) => async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return syntaticErrorReturn(res, "Incomplete request param");
  }
  if (typeof id !== "string") {
    return syntaticErrorReturn(res, "Invalid request param");
  }

  const user = await UserRepo.findById(id);

  if (!user) {
    return unauthenticatedErrorReturn(res, "Not found user with that id" );
  }

  if (!user.active) {
    return unauthorizedErrorReturn(res, "This user didn't confirm his account in the email!!");
  }

  //remove password from usersFind
  const userAsArray = Object.entries(user);
  const userWithoutPassword = userAsArray.filter(
    ([key, _]) => key !== "password"
  );
  const userQueried = Object.fromEntries(userWithoutPassword);

  return createdSuccessfullyReturn(res, { user: userQueried })
};

export default ShowUser;
