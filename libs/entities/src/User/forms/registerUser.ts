import { Asserts, object } from "yup"
import { artistSchema } from ".."

import { curriculumFile, email, password, passwordConfirmation, profilePictureFile } from "../schemaFields"
import { SerializedUser } from "../serializedSchema"

// register
export interface RegisterUser extends Asserts<typeof registerUserSchema> {}
export const registerUserSchema = object({
  email,
  password,
  passwordConfirmation,
  profilePicture: profilePictureFile,
  curriculum: curriculumFile,
  artist: artistSchema.required(),
})

export interface RegisterUserReturn extends SerializedUser {}
