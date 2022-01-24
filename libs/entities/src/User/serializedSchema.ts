import { Asserts, object } from "yup"

import { email, id, role, profilePictureUrl } from "./schemaFields"

// serialized user
export interface SerializedUser extends Asserts<typeof userSchema> {}
export const userSchema = object({
  id,
  email,
  role,
  profilePictureUrl,
})
