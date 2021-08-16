import UserRepository from "Repository/UserRepository";
import { RouteHandler } from "Utils/routeHandler";
import { ParamsType, Req } from "Utils/request";

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
    return res.status(400).json({ error: "Incomplete request param" });
  }
  if (typeof id !== "string") {
    return res.status(400).json({ error: "Invalid request param" });
  }

  const user = await UserRepo.findById(id);

  if (!user) {
    return res.status(401).json({ error: "Not found user with that id" });
  }

  if (!user.active) {
    return res
      .status(401)
      .json({ error: "This user didn't confirm his account in the email!!" });
  }

  //remove password from usersFind
  const userAsArray = Object.entries(user);
  const userWithoutPassword = userAsArray.filter(
    ([key, _]) => key !== "password"
  );
  const userQueried = Object.fromEntries(userWithoutPassword);

  return res.status(201).json({ user: userQueried });
};

export default ShowUser;
