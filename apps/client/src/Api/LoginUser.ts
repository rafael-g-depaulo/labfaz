import { UserLoginReturn, UserLogin } from "@starter-project/entities"

import { api, SuccessObject } from "Api"
import { useMutateApi } from "Hooks/useMutateApi"
import { extractApiData, throwApiError } from "Utils/handleApiResponse"

export const Login = (userInfo: UserLogin) => api
  .post<SuccessObject<UserLoginReturn>>("/users/login", userInfo)
  .then(extractApiData)
  .catch(throwApiError)

export const useLogin = () => useMutateApi("/users/login", Login)
