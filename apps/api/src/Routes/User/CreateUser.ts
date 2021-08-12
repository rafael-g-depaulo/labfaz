import { DeepPartial } from "typeorm";
import { RequestHandler } from "Routes";

import { MailProvider, Addres } from "@labfaz/mail";

import User from "Entities/User";
import UserRepository from "Repository/UserRepository";
import { getApiUrl } from "@labfaz/server-conn-info";

import { Race, ShowName } from "Entities/Artist";

interface CreateUserInterface {
  UserRepo: UserRepository;
}

interface IArtist {
  photo_url: string;
  name: string;
  social_name: string;
  artistic_name: string;
  gender: string;
  cpf: string;
  birthday: Date;
  rg: string;
  expedition_department: string;
  is_trans: boolean;
  race: Race;
  show_name: ShowName;
}

export interface IReq {
  artist: IArtist;
  email: string;
  password: string;
}

const mailer = new MailProvider();
const from: Addres = {
  name: "LabFaz",
  email: "noreply@labfaz.com.br",
};

export const CreateUser: (
  deps: CreateUserInterface
) => RequestHandler<DeepPartial<User>> = ({
  UserRepo,
}: CreateUserInterface) => async (req, res) => {
  const { artist, email, password } = req.body as IReq;

  if (!artist || !email || !password)
    return res.status(400).json({ error: "Incomplete request body" });

  if (typeof email !== "string" || typeof password !== "string")
    return res.status(400).json({ error: "Invalid request body" });

  const checkUserExists = await UserRepo.findByEmail(email);

  if (checkUserExists) {
    return res.status(400).json({ error: "Email address already exists." });
  }

  const hashedPassword = await UserRepo.generateHash(password);

  const user = await UserRepo.create({ artist, email, password: hashedPassword });

  await UserRepo.save(user);

  mailer.sendEmail({
    to: {
      name: artist.name,
      email: email,
    },
    from: from,
    subject: "Confirmação de Email - Labfaz",
    html: `
      <div>
        <h1> Olá ${artist.name}, Bem Vindo ao Labfaz </h1>
        <a href='${getApiUrl()}/sessions/auth/account-verification/${
      user.id
    }'> Confirmar Email </a>
      </div>
    `,
  });

  //remove password and id
  let userAsArray = Object.entries(user);
  let userWithoutPassword = userAsArray.filter(
    ([key, _]) => key !== "password" && key !== "id"
  );
  let newUser = Object.fromEntries(userWithoutPassword);

  return res.status(201).json({ newUser });
};

export default CreateUser;
