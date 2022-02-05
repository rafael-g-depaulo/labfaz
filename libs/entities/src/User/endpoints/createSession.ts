import { Asserts, object } from "yup"

import { SerializedUser } from "../serializedSchema"
import { email, password } from "../schemaFields"

export interface CreateSession extends Asserts<typeof createSessionSchema> {}
export const createSessionSchema = object({
  email,
  password,
})

export interface CreateSessionReturn {
  token: string,
  user: SerializedUser,
}
