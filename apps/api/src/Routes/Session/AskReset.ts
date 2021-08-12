import { DeepPartial } from "typeorm";
import { RequestHandler } from "Routes";

import { MailProvider, Addres } from "@labfaz/mail";

import User from "Entities/User";
import UserRepository from "Repository/UserRepository";

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
) => RequestHandler<DeepPartial<User>> = ({ UserRepo }: AskResetInterface) => async (
  req,
  res
) => {
  const { email } = req.body as AskResetI;

  if (!email) {
    return res.status(400).json({ error: "Incomplete request body!!" });
  }

  if (typeof email !== "string") {
    return res.status(400).json({ error: "Invalid request body!!" });
  }

  const checkUserExists = await UserRepo.findByEmail(email);

  if (!checkUserExists) {
    return res
      .status(400)
      .json({ error: "Esse email ainda não foi cadastrado!!" });
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

  return res.status(200).json({ msg: "Reset token sent to email!!" });
};

export default AskReset;
