import { DeepPartial } from "typeorm";

import { MailProvider, Addres } from "@labfaz/mail";

import User from "Entities/User";
import UserRepository from "Repository/UserRepository";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";
import { actionSuccessful, badRequestError } from "Utils/endpointReturns";
import { getClientUrl } from "@labfaz/server-conn-info";

interface AskResetInterface {
  UserRepo: UserRepository;
}

const sendResetEmail = (user: User, token: string) => {
  
  const mailer = new MailProvider()
  const from: Addres = {
    name: "LabFaz",
    email: "noreply@labfaz.com.br",
  }

  const frontendLink = `${getClientUrl()}/criar-nova-senha?token=${token}`
  const text = `Olá ${user.artist.name}, você pediu um reset de senha. Para criar uma senha nova, vá em ${frontendLink}.`
  const html = `
  <div>
    <h1>Olá ${user.artist.name}, você pediu um reset de senha</h1>
    <p>Para criar uma nova senha, <a href="${frontendLink}">clique aqui</p>
    <p>TESTE: Esse é o token para utilizar na página <b>${token}</b></p>
  </div>
  `
  mailer.sendEmail({
    to: {
      name: user.artist.name,
      email: user.email,
    },
    from: from,
    subject: "Reset de Senha - Labfaz",
    html,
    text,
  })
}

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

  const user = await UserRepo.findByEmail(email);

  if (!user) {
    return badRequestError(res, "Esse email ainda não foi cadastrado!!" )
  }

  const token = await UserRepo.generateResetPasswordToken(email);

  // TODO: não enviar o text e html na resposta
  sendResetEmail(user, token)

  return actionSuccessful(res, { message: "Reset token sent to email!!", token });
};

export default AskReset;
