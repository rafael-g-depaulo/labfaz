import { Asserts, object, string } from "yup"
import { artistSchema } from ".."

import { curriculumFile, email, password, passwordConfirmation, profilePictureFile } from "../schemaFields"
import { SerializedUser } from "../serializedSchema"

export interface UpdateUser extends Asserts<typeof updateUserSchema> {}
export const updateUserSchema = object({
  email,
  password,
  oldpassword: string().min(6),
  passwordConfirmation,
  profilePicture: profilePictureFile,
  curriculum: curriculumFile,
  artist: artistSchema,
})

export interface UpdateUserReturn extends SerializedUser {}
