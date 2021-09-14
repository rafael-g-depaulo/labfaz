import { api } from "Api"
import { User } from "Context/LoggedUserToken"
import useFetchApi from "Hooks/useFetchApi"

export interface ApiUser {
  data: {
    user: User
  }
}

export const fetchUser = (id: string, token: string) => api
  .get<ApiUser>(`user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(({ data }) => data)
  .then(({ data }) => data)
  .then(({ user }) => user)

export const useUser = (id: string, token: string) => 
  useFetchApi<User>(`user/${id}`, () => fetchUser(id, token))

export const fetchCurrentUser = (token: string) => api
  .get<ApiUser>(`user/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(({ data }) => data.data)
  .then(({ user }) => user)

export const useCurrentUser = (token: string) => useFetchApi<User>(`user/me`, () => fetchCurrentUser(token))
