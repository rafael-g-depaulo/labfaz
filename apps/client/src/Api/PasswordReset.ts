import { api, ErrorObject } from "Api"
import { useMutation } from "react-query"

interface AskResetPassResponseData {
  status: string,
  code: number,
}

interface ResetPassData {
  password: string,
  token: string
}

const headers = {
  "Content-Type": "application/json"
}

export const askResetPassword = (email: string) => api
  .post<AskResetPassResponseData>('/sessions/ask-reset', { email }, { headers })
  .then(({data}) => data)

export const resetPassword = (password: string, token: string) => api
  .post<ResetPassData>('/sessions/reset-password', { password, token })
  .then(({data}) => data)

export const useResetPassword = (token: string) =>
  useMutation<ResetPassData, ErrorObject, { password: string }>(`/sessions/reset-password/${token}/`, ({ password }) => resetPassword(password, token))
