import { Roles } from "@labfaz/permissions"

import { SerializedUser, userSchema } from "./serializedSchema"
import { Entity } from "../Entity"

export class User extends Entity<typeof userSchema, SerializedUser> implements SerializedUser {
  id!: string
  email!: string
  role!: Roles
  profilePictureUrl!: string | undefined
}
