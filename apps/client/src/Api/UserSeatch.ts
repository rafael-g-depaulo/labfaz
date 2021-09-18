import { api } from "Api"
import { User } from "Context/LoggedUserToken"
import useFetchApi from "Hooks/useFetchApi"

export interface UsersList {
  users: User[]
}

export const fetchUsersList = () => api
  .get<UsersList>(`/users/list`)
  .then(({ data }) => data)

export const useUsersList = () => useFetchApi(`/users/list`, fetchUsersList, { enabled: false })
