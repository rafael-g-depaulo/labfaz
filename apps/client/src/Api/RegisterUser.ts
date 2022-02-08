import { RegisterUser, RegisterUserReturn } from "@labfaz/entities"

import { api } from "Api"
import { useMutateApi } from "Hooks/useMutateApi"

import { extractApiData, throwApiError } from "Utils/handleApiResponse"
import { multipartForm } from "Utils/axiosMultipartForm"
import { SuccessObject } from "@labfaz/server-conn-info"

export const Signup = (userInfo: RegisterUser) => api
  .post<SuccessObject<RegisterUserReturn>>("/users/register", ...multipartForm(userInfo))
  .then(extractApiData)
  .catch(throwApiError)

export const useSignup = () => useMutateApi("/users/register", Signup)
