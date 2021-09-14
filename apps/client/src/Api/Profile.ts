import { api } from "Api"
import { User } from "Context/CurrentUser"
import useFetchApi from "Hooks/useFetchApi"

export const fetchUserProfile: (id: string, token: string) => Promise<User> = (id: string, token: string) => 
  api
    .get(`user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }})
    .then(({ data }) => data)
    .then(({ data }) => data)
    .then(({ user }) => user)


export const useProfile = (id: string, token: string) => 
  useFetchApi<User>(`user/${id}`, () => fetchUserProfile(id, token))
