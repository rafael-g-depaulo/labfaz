import { api, SuccessObject } from "Api"
import { SerializedUser, User } from "@labfaz/entities"

export interface SessionReturn {
  token: string
  user: SerializedUser
}

export const login = (email: string, password: string) => api
  .post<SuccessObject<SessionReturn>>(`/sessions/create`, { email, password })
  .then(({ data }) => data.data)
  .then(({ token, user }) => ({ token, user: new User(user) }))
  .catch(err => Promise.reject(err.response.data))
