import { Roles } from "@starter-project/permissions"
import { mixed, string } from "yup"
import { MixedSchema } from "yup/lib/mixed"
import { AnyObject } from "yup/lib/types"

import { maxProfilePictureSize } from "./constants"

// fields
export const id = string().required().min(10).max(10) //.uuid()
export const email = string().required().email()
export const password = string().required().min(6)
export const role = mixed<Roles>().required().oneOf(Object.values(Roles))
export const passwordConfirmation = string().required().test('passwords-match', 'Senhas não são iguais', function(value) {
  return this.parent.password === value
})
export const profilePictureFile: MixedSchema<File | undefined, AnyObject, File | undefined>
= mixed<File>()
  .test("fileSize", "File too Large", (value?: File) => (value?.size ?? 0) <= maxProfilePictureSize)
  .optional()

export const profilePictureUrl = string().optional().url()
