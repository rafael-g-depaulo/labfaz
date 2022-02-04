import UserRepository from "Repository/UserRepository"
import { RouteHandler } from "Utils/routeHandler"
import { Req } from "Utils/request"
import {
  updatedSuccessfully,
  notFoundError,
  badRequestError,
  unauthenticatedError,
  databaseError,
} from "Utils/endpointReturns"
import { removeCircularity } from "Utils/stringifyCircular"
import { UploadFiles } from "Utils/aws"

import { UserJWTPayload } from "Middlewares/ensureAuthenticated"
import { ParsedFiles } from "Middlewares/parseFiles"

import { UpdateUser as UpdateUserI } from "@labfaz/entities"

interface UpdateUserDeps {
  UserRepo: UserRepository
}

type ReqBodyExtension = UserJWTPayload
  & { user_info: UpdateUserI }
  & ParsedFiles<"profilePicture" | "curriculum">

export const UpdateUser: (
  deps: UpdateUserDeps
) => RouteHandler<Req<
  {},
  ReqBodyExtension
>> = ({ UserRepo }: UpdateUserDeps) => async (req, res) => {
  const { id } = req.user ?? { id: "" }

  const { password, artist, oldpassword } = req.user_info! ?? {}

  if (!req.user) {
    return unauthenticatedError(res, "User need to be loged")
  }

  const user = await UserRepo.findById(id)

  if (!user) {
    return notFoundError(res, "User not found.")
  }

  if (password) {
    if (!oldpassword) {
     return badRequestError(res, "Should inform old password to change to a new password!!")
    }

    if (password === oldpassword) {
     return badRequestError(res, "New password should be different from the old one!!")
    }

    const checkOldPassword = await UserRepo.compareHash(
      oldpassword,
      user.password
    )

    if (!checkOldPassword) {
     return badRequestError(res, "Your old password isn't correct!!")
    }
  }


  try {
    const curriculum = req.parsedFiles?.curriculum ?? []
    const profilePicture = req.parsedFiles?.profilePicture ?? []
    const files = await UploadFiles([...curriculum, ...profilePicture])

    const artistCurriculum = files.find(
      (file) => file.fieldname === "curriculum"
    )
    const artistProfilePicture = files.find(
      (file) => file.fieldname === "profilePicture"
    )

    return UserRepo.updateUser(
      user,
      artist,
      password,
      artistCurriculum,
      artistProfilePicture
    )
      .then((user) => {
        // remove password and send user back
        let { password: _, ...newUser } = user
        return updatedSuccessfully(res, removeCircularity(newUser))
      })
      .catch((err) => databaseError(res, "Error trying to update user.", err))
  } catch {
    return badRequestError(
      res,
      "Error trying to create curriculum or profilePicture"
    )
  }
}

export default UpdateUser
