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

export interface RequestBody {
  artist: IArtist;
  email: string;
  password: string;
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
  
  const userToken = UserRepo.generateEmailToken(email)
  
  const user = UserRepo.create({ name, email, password: hashedPassword, token: userToken })
  
  await UserRepo.save(user)
>>>>>>> 4e66f8a (✨ Add email confimation logic)

  user.token = userToken

  mailer.sendEmail({
    to: {
      name: artist.name,
      email: email,
    },
    from: from,
<<<<<<< HEAD
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

  return createdSuccessfully(res, { newUser })
};

export default CreateUser;
=======
    subject: "Email confirmation",
    html: `
      <div>
        <h1> Hello ${name}, welcome to labfaz </h1>
        <a href='http://localhost:5430/sessions/auth/account-verification/${user.id}/${userToken}'> Confirm Email </a>
      </div>
    `
  })

  return res.status(201).json({ user })
}

export default CreateUser
>>>>>>> a7a7f88 (🔥 ♻️ Remove unecessary login and update session)
