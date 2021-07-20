import { getApiUrl } from "@labfaz/server-conn-info"

import  * as yup from "yup"

import { MailProvider, Addres } from "@labfaz/mail/src"

import UserRepository from "Repository/UserRepository"

import { Race, ShowName } from "Entities/Artist"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"
import { createdSuccessfully, badRequestError } from "Utils/endpointReturns"

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
  email: "noreply@labfaz.com.br",
};

export const CreateUser: (
  deps: CreateUserInterface
) => RouteHandler<Req<RequestBody>> = ({
  UserRepo,
}: CreateUserInterface) => async (req, res) => {
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
      email: email,
    },
    from: from,
    subject: "Confirmação de Email - Labfaz",
    html: `
      <div>
<<<<<<< HEAD
        <h1> Olá ${artist.name}, Bem Vindo ao Labfaz </h1>
        <a href='${getApiUrl()}/sessions/auth/account-verification/${
      user.id
    }'> Confirmar Email </a>
=======
        <h1> Olá ${name}, Bem Vindo ao Labfaz </h1>
<<<<<<< HEAD
        <a href='http://localhost:5430/sessions/auth/account-verification/${user.id}/${userToken}'> Confirmar Email </a>
>>>>>>> a74ec09 (✨ add: noreply mailer sender)
=======
        <a href='http://localhost:5000/sessions/auth/account-verification/${user.id}'> Confirmar Email </a>
>>>>>>> 2b5b086 (✨ Feature: Mailer and changes in the backend done)
      </div>
    `,
  });

  //remove password and id
  let userAsArray = Object.entries(user);
  let userWithoutPassword = userAsArray.filter(
    ([key, _]) => key !== "password" && key !== "id"
  );
  let newUser = Object.fromEntries(userWithoutPassword);

  return createdSuccessfully(res, { newUser })
};

export default CreateUser;
