import UserRepository from "Repository/UserRepository"

import {
  createdSuccessfully,
  badRequestError,
  databaseError,
} from "Utils/endpointReturns"
import { RouteHandler } from "Utils/routeHandler"
import { UploadFile } from "Utils/aws"
import { Req } from "Utils/request"

import { ParsedFiles } from "Middlewares/parseFiles"

import { UserRegister } from "@starter-project/entities"

type ReqBodyExtension = ParsedFiles<"profilePicture">
  & { user_info: UserRegister }

interface RegisterUserDeps {
  UserRepo: UserRepository
}

export const RegisterUser: (
  deps: RegisterUserDeps
) => RouteHandler<
  Req<{}, ReqBodyExtension>
> = ({ UserRepo }: RegisterUserDeps) => async (req, res) => {
  const { user_info, parsedFiles } = req
  const profilePictureFile = parsedFiles!.profilePicture[0]
  
  // semantic validation
  try {
    if (await UserRepo.userExistsWithEmail(user_info!.email))
      return badRequestError(res, "Email address already exists.")
  } catch (error) {
    return databaseError(res, "Database Error", { error })
  }
  
  // upload profile picture to s3 if user sent one
  const profilePictureUrl = !!profilePictureFile && await UploadFile(profilePictureFile)

  // create and return user
  return UserRepo.createUser(user_info!, profilePictureUrl)
    // .then((user) => { sendConfirmationEmail(user); return user })
    .then(user => createdSuccessfully(res, user))
    .catch(err => databaseError(res, "Error trying to create user.", err))
}

export default RegisterUser
