import { DeepPartial } from "typeorm";

import { MailProvider, Addres } from "@labfaz/mail";

import User from "Entities/User";
import UserRepository from "Repository/UserRepository";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";
import { actionSuccessful, badRequestError } from "Utils/endpointReturns";

interface AskResetInterface {
  UserRepo: UserRepository;
}

// interface AskResetI {
//   email: string;
// }

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
  const { email } = req.body

  if (!email) {
    return badRequestError(res, "Incomplete request body!!")
  }

  if (typeof email !== "string") {
    return badRequestError(res, "Invalid request body!!" );
  }

  const checkUserExists = await UserRepo.findByEmail(email);

  if (!checkUserExists) {
    return badRequestError(res, "Esse email ainda não foi cadastrado!!" )
  }

  const token = await UserRepo.generateResetPasswordToken(email);

  //! tem que trocar {{nome}} por ${checkUserExists.artist.name} depois
  // TODO: usar o mailer de verdade
  // TODO: não enviar o text e html na resposta
  const text = `Olá {{nome}}, você pediu um reset de senha. Esse é o token para utilizar na página ${token}.`
  const html = `
  <div>
    <h1> Olá {{nome}}, você pediu um reset de senha</h1>
    <p>Esse é o token para utilizar na página <b>${token}</b></p>
  </div>
  `
  // mailer.sendEmail({
  //   to: {
  //     name: checkUserExists.artist.name,
  //     email: email,
  //   },
  //   from: from,
  //   subject: "Reset de Senha - Labfaz",
  //   html,
  //   text,
  // })

  return actionSuccessful(res, { message: "Reset token sent to email!!", text, html });
};

export default AskReset;
