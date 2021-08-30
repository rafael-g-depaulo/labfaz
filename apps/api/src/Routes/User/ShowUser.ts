import UserRepository from "Repository/UserRepository";
import { RouteHandler } from "Utils/routeHandler";
import { ParamsType, Req } from "Utils/request";
import { createdSuccessfully, badRequestError, unauthenticatedError, unauthorizedError } from "Utils/endpointReturns";

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
    return badRequestError(res, "Incomplete request param");
  }
  if (typeof id !== "string") {
    return badRequestError(res, "Invalid request param");
  }

  const user = await UserRepo.findByIdWithAll(id);

  if (!user) {
    return unauthenticatedError(res, "Not found user with that id" );
  }

  if (!user.active) {
    return unauthorizedError(res, "This user didn't confirm his account in the email!!");
  }

  let { password: _, ...userQueried } = user;

  return createdSuccessfully(res, { user: userQueried })
};

export default ShowUser;
