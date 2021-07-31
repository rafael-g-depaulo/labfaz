import { DeepPartial } from "typeorm";
<<<<<<< HEAD

import { MailProvider, Addres } from "@labfaz/mail";

import User from "Entities/User";
import UserRepository from "Repository/UserRepository";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";
import { actionSuccessful, badRequestError } from "Utils/endpointReturns";
=======
import { RequestHandler } from "Routes";

import { MailProvider, Addres } from "@labfaz/mail/src";

import User from "Entities/User";
import UserRepository from "Repository/UserRepository";
>>>>>>> 040d905 (✨ Add: Reset Password with token)

interface AskResetInterface {
  UserRepo: UserRepository;
}

interface AskResetI {
  email: string;
}

const mailer = new MailProvider();
const from: Addres = {
  name: "LabFaz",
  email: "noreply@labfaz.com.br",
};

export const AskReset: (
  deps: AskResetInterface
<<<<<<< HEAD
) => RouteHandler<Req<DeepPartial<User>>> = ({ UserRepo }: AskResetInterface) => async (
=======
) => RequestHandler<DeepPartial<User>> = ({ UserRepo }: AskResetInterface) => async (
>>>>>>> 040d905 (✨ Add: Reset Password with token)
  req,
  res
) => {
  const { email } = req.body as AskResetI;

  if (!email) {
<<<<<<< HEAD
    return badRequestError(res, "Incomplete request body!!")
  }

  if (typeof email !== "string") {
    return badRequestError(res, "Invalid request body!!" );
=======
    return res.status(400).json({ error: "Incomplete request body!!" });
  }

  if (typeof email !== "string") {
    return res.status(400).json({ error: "Invalid request body!!" });
>>>>>>> 040d905 (✨ Add: Reset Password with token)
  }

  const checkUserExists = await UserRepo.findByEmail(email);

  if (!checkUserExists) {
<<<<<<< HEAD
    return badRequestError(res, "Esse email ainda não foi cadastrado!!" )
=======
    return res
      .status(400)
      .json({ error: "Esse email ainda não foi cadastrado!!" });
>>>>>>> 040d905 (✨ Add: Reset Password with token)
  }

  const token = await UserRepo.generateResetPasswordToken(email);

  mailer.sendEmail({
    to: {
      name: checkUserExists.name,
      email: email,
    },
    from: from,
    subject: "Reset de Senha - Labfaz",
    html:`
    <div>
      <h1> Olá ${checkUserExists.name}, você pediu um reset de senha</h1>
      <p>Esse é o token para utilizar na página <b>${token}</b></p>
    </div>
    `,
  })

<<<<<<< HEAD
  return actionSuccessful(res, "Reset token sent to email!!");
=======
  return res.status(200).json({ msg: "Reset token sent to email!!" });
>>>>>>> 040d905 (✨ Add: Reset Password with token)
};

export default AskReset;
