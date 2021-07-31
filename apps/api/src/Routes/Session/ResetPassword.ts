import { DeepPartial } from "typeorm";
import { RequestHandler } from "Routes";
import { verify } from "jsonwebtoken";

import { ITokenPayload } from "Middlewares/ensureAuthenticated";
import User from "Entities/User";
import UserRepository from "Repository/UserRepository";
import authConfig from "Config/auth";

interface ResetPasswordInterface {
  UserRepo: UserRepository;
}

interface ResetPasswordI {
  password: string;
  token: string;
}

export const ResetPassword: (
  deps: ResetPasswordInterface
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
  const { id } = decoded as ITokenPayload;

  if (id) {
    const user = await UserRepo.findById(id);

    if (!user) {
      return res
        .status(400)
        .json({ error: "Esse usuário ainda não foi cadastrado!!" });
    }

    const comparePassword = await UserRepo.compareHash(password, user.password);

    if (comparePassword) {
      return res
        .status(400)
        .json({ error: "Você não pode mudar para a mesma senha !!" });
    }

    user.password = await UserRepo.generateHash(password);
    await UserRepo.save(user);
  } else {
    return res.status(400).json({ error: "Token is not valid!!" });
  }

  return res.status(200).json({ msg: "Password Changed Sucessfully !!" });
};

export default ResetPassword;
