import { Asserts, object } from "yup"

import { email, password } from "../schemaFields"

// login
export interface UserLogin extends Asserts<typeof loginUserSchema> {}
export const loginUserSchema = object({
  email,
  password,
})

export interface UserLoginReturn {
  token: string
}
