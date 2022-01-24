import { Roles } from "@starter-project/permissions"

export type AuthenticatedUser = {
  id: string
  role: Roles
}
