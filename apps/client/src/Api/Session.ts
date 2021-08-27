import { api, SuccessObject } from "Api"
import { User } from "Context/CurrentUser"

export interface SessionReturn {
  token: string
  user: fetchedUser
}

type Override<T, O> = Omit<T, keyof O> & O

export type fetchedUser = Override<User, {
  updated_at: string
  created_at: string
}>

const parseUser = (fUser: fetchedUser): User => {
  const updated_at = new Date(fUser.updated_at)
  const created_at = new Date(fUser.created_at)

  return { ...fUser, updated_at, created_at }
}

export const login = (email: string, password: string) => api
  .post<SuccessObject<SessionReturn>>(`/sessions/create`, { email, password })
  .then(({ data }) => data.data)
  .then(({ token, user }) => ({ token, user: parseUser(user) }))
