import { UserLoginReturn, UserLogin } from "@labfaz/entities"
import { SuccessObject } from "@labfaz/server-conn-info"

import { api } from "Api"
import { useMutateApi } from "Hooks/useMutateApi"
import { extractApiData, throwApiError } from "Utils/handleApiResponse"

export const Login = (userInfo: UserLogin) => api
  .post<SuccessObject<UserLoginReturn>>("/users/login", userInfo)
  .then(extractApiData)
  .catch(throwApiError)

export const useLogin = () => useMutateApi("/users/login", Login)
