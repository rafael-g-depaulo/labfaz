import UserRepository from "Repository/UserRepository"

import { UploadFiles } from "Utils/aws"

import {
  createdSuccessfully,
  badRequestError,
  databaseError,
} from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"

import { ParsedFiles } from "Middlewares/parseFiles"
import { removeCircularity } from "Utils/stringifyCircular"
import { sendConfirmationEmail } from "Mailer/emailConfirmation"
import { RegisterUser } from "@labfaz/entities"

interface CreateUserDeps {
  UserRepo: UserRepository
}

type ReqBodyExtension = ParsedFiles<"profilePicture" | "curriculum">
  & { user_info: RegisterUser }

export const CreateUser: (
  deps: CreateUserDeps
) => RouteHandler<Req<{}, ReqBodyExtension>> = ({ UserRepo }: CreateUserDeps) => async (req, res) => {
  const { email, artist, password } = req.user_info! ?? {}

  const checkUserExists = await UserRepo.findByEmail(email)
  if (!!checkUserExists)
    return badRequestError(res, "Email address already exists.")

  try {
    const curriculum = req.parsedFiles?.curriculum ?? []
    const profilePicture = req.parsedFiles?.profilePicture ?? []
    const files = await UploadFiles([...curriculum, ...profilePicture])

    const artistCurriculum = files.find(
      (file) => file.fieldname === "curriculum"
    )!
    const artistProfilePicture = files.find(
      (file) => file.fieldname === "profilePicture"
    )!

    return UserRepo.createUser(
      email,
      password,
      artist,
      artistCurriculum,
      artistProfilePicture
    )
     .then((user) => {
        sendConfirmationEmail(user)
        return user
      })
      .then((user) => {
        // remove password and send user back
        let { password: _, ...newUser } = user
        return createdSuccessfully(res, removeCircularity(newUser))
      })
      .catch((err) => databaseError(res, "Error trying to create user.", err))
  } catch (error) {
    return badRequestError(
      res,
      "Error trying to create curriculum or profilePicture",
      { error }
    )
  }
}
export default CreateUser
