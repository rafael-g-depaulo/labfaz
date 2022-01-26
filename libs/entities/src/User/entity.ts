import { Roles } from "@labfaz/permissions"

import { SerializedUser, userSchema, SerializedArtist } from "./serializedSchema"
import { Entity } from "../Entity"

export class User extends Entity<typeof userSchema, SerializedUser> implements SerializedUser {
  id!: string
  email!: string
  role!: Roles
  profilePictureUrl!: string | undefined
  artist!: SerializedArtist
}
