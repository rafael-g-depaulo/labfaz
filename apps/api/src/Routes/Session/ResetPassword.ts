<<<<<<< HEAD
import { verify } from "jsonwebtoken";

import { ITokenPayload } from "Middlewares/ensureAuthenticated";
import UserRepository from "Repository/UserRepository";
import authConfig from "Config/auth";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";
import { actionSuccessful, badRequestError, unauthenticatedError } from "Utils/endpointReturns";
=======
import { DeepPartial } from "typeorm";
import { RequestHandler } from "Routes";
import { verify } from "jsonwebtoken";

import { ITokenPayload } from "Middlewares/ensureAuthenticated";
import User from "Entities/User";
import UserRepository from "Repository/UserRepository";
import authConfig from "Config/auth";
>>>>>>> 040d905 (✨ Add: Reset Password with token)

interface ResetPasswordInterface {
  UserRepo: UserRepository;
}

interface ResetPasswordI {
  password: string;
  token: string;
}

export const ResetPassword: (
  deps: ResetPasswordInterface
<<<<<<< HEAD
) => RouteHandler<Req<ResetPasswordI>> = ({
  UserRepo,
}: ResetPasswordInterface) => async (req, res) => {
  const { password, token } = req.body

  if (!token || !password) {
    return badRequestError(res, "Incomplete request body!!")
  }

  if (typeof token !== "string" || typeof password !== "string") {
    return badRequestError(res, "Invalid request body!!")
  }

  const decoded = verify(token, authConfig.token.secret);
  // console.log(decoded);
=======
) => RequestHandler<DeepPartial<User>> = ({
  UserRepo,
}: ResetPasswordInterface) => async (req, res) => {
  const { password, token } = req.body as ResetPasswordI;

  if (!token || !password) {
    return res.status(400).json({ error: "Incomplete request body!!" });
  }

  if (typeof token !== "string" || typeof password !== "string") {
    return res.status(400).json({ error: "Invalid request body!!" });
  }

  const decoded = verify(token, authConfig.token.secret);
  console.log(decoded);
>>>>>>> 040d905 (✨ Add: Reset Password with token)
  const { id } = decoded as ITokenPayload;

  if (id) {
    const user = await UserRepo.findById(id);

    if (!user) {
<<<<<<< HEAD
      return badRequestError(res, "Esse usuário ainda não foi cadastrado!!")
=======
      return res
        .status(400)
        .json({ error: "Esse usuário ainda não foi cadastrado!!" });
>>>>>>> 040d905 (✨ Add: Reset Password with token)
    }

    const comparePassword = await UserRepo.compareHash(password, user.password);

    if (comparePassword) {
<<<<<<< HEAD
      return badRequestError(res, "Você não pode mudar para a mesma senha !!")
=======
      return res
        .status(400)
        .json({ error: "Você não pode mudar para a mesma senha !!" });
>>>>>>> 040d905 (✨ Add: Reset Password with token)
    }

    user.password = await UserRepo.generateHash(password);
    await UserRepo.save(user);
  } else {
<<<<<<< HEAD
    return unauthenticatedError(res, "Token is not valid!!")
  }

  return actionSuccessful(res, "Password Changed Sucessfully !!");
=======
    return res.status(400).json({ error: "Token is not valid!!" });
  }

  return res.status(200).json({ msg: "Password Changed Sucessfully !!" });
>>>>>>> 040d905 (✨ Add: Reset Password with token)
};

export default ResetPassword;
