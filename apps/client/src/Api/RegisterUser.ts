import { RegisterUser, RegisterUserReturn } from "@labfaz/entities"

import { api, SuccessObject } from "Api"
import { useMutateApi } from "Hooks/useMutateApi"

import { extractApiData, throwApiError } from "Utils/handleApiResponse"
import { multipartForm } from "Utils/axiosMultipartForm"

export const Signup = (userInfo: RegisterUser) => api
  .post<SuccessObject<RegisterUserReturn>>("/users/register", ...multipartForm(userInfo))
  .then(extractApiData)
  .catch(throwApiError)

export const useSignup = () => useMutateApi("/users/register", Signup)
