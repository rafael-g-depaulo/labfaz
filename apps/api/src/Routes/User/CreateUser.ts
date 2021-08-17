// import { MailProvider, Addres } from "@labfaz/mail"
// import { getApiUrl } from "@labfaz/server-conn-info"

import UserRepository from "Repository/UserRepository"

import { createdSuccessfully, badRequestError } from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

import { ParsedUser } from "./ParseUser"

interface CreateUserDeps {
  UserRepo: UserRepository
}

export const CreateUser: (
  deps: CreateUserDeps
) => RouteHandler<Req<{}, ParsedUser>> = ({
  UserRepo,
}: CreateUserDeps) => async (req, res) => {
  const { artist, email, password } = req.user_info!

  const checkUserExists = await UserRepo.findByEmail(email)
  if (!!checkUserExists)
    return badRequestError(res, "Email address already exists.")

  const hashedPassword = await UserRepo.generateHash(password)

  // TODO: Fix user creation
  const user = await UserRepo.create({ artist, email, password: hashedPassword })

  // await UserRepo.save(user)

  // const mailer = new MailProvider()
  // const from: Addres = {
  //   name: "LabFaz",
  //   email: "noreply@labfaz.com.br",
  // }
  
  // mailer.sendEmail({
  //   to: {
  //     name: artist.name,
  //     email: email,
  //   },
  //   from: from,
  //   subject: "Confirmação de Email - Labfaz",
  //   html: `
  //     <div>
  //       <h1> Olá ${artist.name}, Bem Vindo ao Labfaz </h1>
  //       <a href='${getApiUrl()}/sessions/auth/account-verification/${
  //     user.id
  //   }'> Confirmar Email </a>
  //     </div>
  //   `,
  // })

  //remove password and id
  let userAsArray = Object.entries(user)
  let userWithoutPassword = userAsArray.filter(
    ([key, _]) => key !== "password" && key !== "id"
  )
  let newUser = Object.fromEntries(userWithoutPassword)

  return createdSuccessfully(res, { artist, email, password, newUser })
}

export default CreateUser
