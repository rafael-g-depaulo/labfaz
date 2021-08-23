import { api } from "Api"

import { useFetchApi } from "Hooks/useFetchApi"


interface AskResetPassData {
  email: string
}

interface AskResetPassResponseData {
  status: string,
  code: number,
}

interface ResetPassData {
  password: string,
  token: string
}


export const askResetPassword: ({ email }: AskResetPassData) => Promise<AskResetPassResponseData> = ({ email }) => api
.get<AskResetPassResponseData>('/ask-reset', { params: { email: email }})
.then(({data}) => data)

export const useAskResetPassword = () => useFetchApi<AskResetPassResponseData>('/ask-reset', askResetPassword);


export const resetPassword: () => Promise<ResetPassData> = () => api
.get<ResetPassData>('/ask-reset')
.then(({data}) => data)

export const useResetPassowrd = () => useFetchApi<ResetPassData>('/ask-reset', resetPassword);
