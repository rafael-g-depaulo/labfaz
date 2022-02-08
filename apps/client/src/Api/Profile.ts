import { api, ErrorObject, SuccessObject } from "Api"
import { AxiosError } from "axios"
import { SerializedUser, User } from "@labfaz/entities"
import useFetchApi from "Hooks/useFetchApi"
import { extractApiData } from "Utils/handleApiResponse"

export const fetchUser = (id: string) => api
  .get<SuccessObject<SerializedUser>>(`user/${id}`)
  .then(extractApiData)
  .then((user) => new User(user))

export const useUser = (id: string) => 
  useFetchApi<User, AxiosError<ErrorObject>>(`user/${id}`, () => fetchUser(id))

export const fetchCurrentUser = (token: string) => api
  .get<SuccessObject<SerializedUser>>(`user/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(extractApiData)
  .then(user => new User(user))

export const useCurrentUser = (token: string) => useFetchApi<User, AxiosError<ErrorObject>>(`user/me`, () => fetchCurrentUser(token))
