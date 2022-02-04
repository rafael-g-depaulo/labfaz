import { Asserts, object } from "yup"

import { email } from "../schemaFields"

export interface AskPasswordReset extends Asserts<typeof askPasswordResetSchema> {}
export const askPasswordResetSchema = object({
  email
})

export interface AskPasswordResetReturn {
  token: string
}
