<<<<<<< HEAD
import { getApiUrl } from "@labfaz/server-conn-info"

import  * as yup from "yup"
=======
import { DeepPartial } from "typeorm";
import { RequestHandler } from "Routes";
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)

import { MailProvider, Addres } from "@labfaz/mail/src";

<<<<<<< HEAD
import UserRepository from "Repository/UserRepository"
=======
import User from "Entities/User";
import UserRepository from "Repository/UserRepository";
import { getApiUrl } from "@labfaz/server-conn-info";
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)

<<<<<<< HEAD
import { Race, ShowName } from "Entities/Artist"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"
import { createdSuccessfully, badRequestError } from "Utils/endpointReturns"
=======
import { IUser } from "Entities/User";
import { IArtist } from "Entities/Artist";
>>>>>>> 641943b (🚧 WIP: Putting Routes to Artist in API)

interface CreateUserInterface {
  UserRepo: UserRepository;
}
<<<<<<< HEAD

<<<<<<< HEAD
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

<<<<<<< HEAD
export interface RequestBody {
  artist: IArtist;
  email: string;
  password: string;
=======
const mailer =  new MailProvider()
const from: Addres = {
  name: "LabFaz",
<<<<<<< HEAD
  email: "noreply.labfaz@gmail.com"
>>>>>>> a74ec09 (✨ add: noreply mailer sender)
=======
  email: "noreply@labfaz.com.br"
>>>>>>> 2b5b086 (✨ Feature: Mailer and changes in the backend done)
}

const reqSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  // artist: yup.object({
  //   photo_url: yup.string().required().url(),
  //   name: yup.string().required(),
  //   social_name: yup.string(),
  //   artistic_name: yup.string(),
  //   gender: yup.string().required(),
  //   cpf: yup.string().required().matches(/\d{3}\.\d{3}\.\d{3}-\d{2}/),
  //   birthday: yup.date().required(),
  //   rg: yup.string().required(),
  //   expedition_department: yup.string().required(),
  //   is_trans: yup.boolean().required(),
  //   race: yup.mixed<Race>().required().oneOf(Object.values(Race)),
  //   show_name: yup.string().required().oneOf(["artistic_name", "social_name", "name"]),
  // }),
})

interface UserInfo extends yup.Asserts<typeof reqSchema> {}


// type CreateUserReq = Req<UserInfo>

const mailer = new MailProvider();
const from: Addres = {
  name: "LabFaz",
=======
interface IUser {
  name: string;
  email: string;
  password: string;
=======
interface IReq {
  user: IUser;
  artist: IArtist;
>>>>>>> 641943b (🚧 WIP: Putting Routes to Artist in API)
}

<<<<<<< HEAD
const mailer = new MailProvider();
const from: Addres = {
  name: "LabFaz",
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
  email: "noreply@labfaz.com.br",
};
=======
  const mailer = new MailProvider();
  const from: Addres = {
    name: "LabFaz",
    email: "noreply@labfaz.com.br",
  };
>>>>>>> 040d905 (✨ Add: Reset Password with token)

export const CreateUser: (
  deps: CreateUserInterface
<<<<<<< HEAD
) => RouteHandler<Req<RequestBody>> = ({
  UserRepo,
}: CreateUserInterface) => async (req, res) => {
<<<<<<< HEAD
  const { artist, email, password } = req.body

  if (!artist || !email || !password)
    return badRequestError(res, "Incomplete request body")

  if (typeof email !== "string" || typeof password !== "string")
    return badRequestError(res, "Invalid request body")

  // try {  
  //   const result = await reqSchema.validate(req.body)
  //   console.log("resultado foi", result)
  // } catch (e) {
  //   return syntaticErrorReturn(res, "mensagem de erro ruim que deu. request feio", { e })
  // }

  const checkUserExists = await UserRepo.findByEmail(email);

  if (checkUserExists) {
    return badRequestError(res, "Email address already exists.");
  }

<<<<<<< HEAD
  const hashedPassword = await UserRepo.generateHash(password);

  const user = await UserRepo.create({ artist, email, password: hashedPassword });

  await UserRepo.save(user);
=======
  const hashedPassword = await UserRepo.generateHash(password)
  
  const user = await UserRepo.create({ name, email, password: hashedPassword })
  
  await UserRepo.save(user)
  
<<<<<<< HEAD
  user.token = userToken
>>>>>>> ce8e28f (🐛 fix: removed bug from update user)

  console.log(mailer);

=======
>>>>>>> 2b5b086 (✨ Feature: Mailer and changes in the backend done)
  mailer.sendEmail({
    to: {
      name: artist.name,
=======
) => RequestHandler<DeepPartial<User>> = ({
  UserRepo,
}: CreateUserInterface) => async (req, res) => {
  const { name, email, password } = req.body as IUser;

  if (!name || !email || !password)
    return res.status(400).json({ error: "Incomplete request body" });

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  )
    return res.status(400).json({ error: "Invalid request body" });
=======
  const { user, artist } = req.body as IReq;

  if (!user || !artist)
    return res.status(400).json({ error: "Incomplete request body" });

  if (
    typeof user.email !== "string" &&
    typeof user.password !== "string"
  ) {
    return res
      .status(400)
      .json({ error: "User param request has not valid types!!" });
  }

  if (
    typeof artist.cpf !== "string" &&
    typeof artist.expedition_department !== "string" &&
    typeof artist.gender !== "string" &&
    typeof artist.is_trans !== "boolean" &&
    typeof artist.name !== "string" &&
    typeof artist.photo_url !== "string" &&
    typeof artist.rg !== "string" &&
    typeof artist.social_name !== "string" &&
    typeof artist.artistic_name !== "string" &&
    typeof artist.birthday !== "string"
  ) {
    return res
      .status(400)
      .json({ error: "Artist param request has not valid types!!" });
  }
>>>>>>> 641943b (🚧 WIP: Putting Routes to Artist in API)

  const checkUserExists = await UserRepo.findByEmail(user.email);

  if (checkUserExists) {
    return res.status(401).json({ error: "Email address already exists." });
  }

  const hashedPassword = await UserRepo.generateHash(user.password);

  const userData = await UserRepo.create({
    email: user.email,
    password: hashedPassword,
    artist,
  });

<<<<<<< HEAD
  const user = await UserRepo.create({ name, email, password: hashedPassword });
=======
  console.log(userData);
>>>>>>> 641943b (🚧 WIP: Putting Routes to Artist in API)

  await UserRepo.save(userData);

  mailer.sendEmail({
    to: {
<<<<<<< HEAD
      name: name,
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
      email: email,
=======
      name: artist.name,
      email: user.email,
>>>>>>> 641943b (🚧 WIP: Putting Routes to Artist in API)
    },
    from: from,
    subject: "Confirmação de Email - Labfaz",
    html: `
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <h1> Olá ${artist.name}, Bem Vindo ao Labfaz </h1>
=======
        <h1> Olá ${user.email}, Bem Vindo ao Labfaz </h1>
>>>>>>> 641943b (🚧 WIP: Putting Routes to Artist in API)
        <a href='${getApiUrl()}/sessions/auth/account-verification/${
      userData.id
    }'> Confirmar Email </a>
=======
        <h1> Olá ${name}, Bem Vindo ao Labfaz </h1>
<<<<<<< HEAD
<<<<<<< HEAD
        <a href='http://localhost:5430/sessions/auth/account-verification/${user.id}/${userToken}'> Confirmar Email </a>
>>>>>>> a74ec09 (✨ add: noreply mailer sender)
=======
        <a href='http://localhost:5000/sessions/auth/account-verification/${user.id}'> Confirmar Email </a>
>>>>>>> 2b5b086 (✨ Feature: Mailer and changes in the backend done)
=======
        <a href='${getApiUrl()}/sessions/auth/account-verification/${
      user.id
    }'> Confirmar Email </a>
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
      </div>
    `,
  });

<<<<<<< HEAD
  //remove password and id
=======
  //remove password and id 
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
  let userAsArray = Object.entries(user);
  let userWithoutPassword = userAsArray.filter(
    ([key, _]) => key !== "password" && key !== "id"
  );
  let newUser = Object.fromEntries(userWithoutPassword);

<<<<<<< HEAD
  return createdSuccessfully(res, { newUser })
=======
  return res.status(201).json({ newUser });
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)
};

export default CreateUser;
