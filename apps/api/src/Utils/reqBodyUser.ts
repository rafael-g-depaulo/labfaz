import { Roles } from "@labfaz/permissions"

export type AuthenticatedUser = {
  id: string
  role: Roles
}
