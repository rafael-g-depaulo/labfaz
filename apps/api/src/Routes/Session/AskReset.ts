import { DeepPartial } from "typeorm";

import { MailProvider, Addres } from "@labfaz/mail";

import User from "Entities/User";
import UserRepository from "Repository/UserRepository";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";
import { actionSuccessfulReturn, syntaticErrorReturn } from "Utils/endpointReturns";

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
) => RouteHandler<Req<DeepPartial<User>>> = ({ UserRepo }: AskResetInterface) => async (
  req,
  res
) => {
  const { email } = req.body as AskResetI;

  if (!email) {
    return syntaticErrorReturn(res, "Incomplete request body!!")
  }

  if (typeof email !== "string") {
    return syntaticErrorReturn(res, "Invalid request body!!" );
  }

  const checkUserExists = await UserRepo.findByEmail(email);

  if (!checkUserExists) {
    return syntaticErrorReturn(res, "Esse email ainda não foi cadastrado!!" )
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

  return actionSuccessfulReturn(res, "Reset token sent to email!!");
};

export default AskReset;
