import { api } from "Api"

import { useFetchApi } from "Hooks/useFetchApi"

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

export const askResetPassword: (email: string ) => Promise<AskResetPassResponseData> = (email) => api
.get<AskResetPassResponseData>('/sessions/ask-reset', {
  headers: headers,
  data: {
    email
  },
})
.then(({data}) => data)

export const useAskResetPassword = (email: string) => useFetchApi<AskResetPassResponseData>('/ask-reset', () => askResetPassword(email));


export const resetPassword: (password: string, token: string) => Promise<ResetPassData> = (password: string, token: string) => api
.post<ResetPassData>('/sessions/reset-password', {
    password: password,
    token: token
})
.then(({data}) => data)
.catch((error) => error)

export const useResetPassowrd = (password: string, token: string) => useFetchApi<ResetPassData>('/ask-reset', () => resetPassword(password, token));
