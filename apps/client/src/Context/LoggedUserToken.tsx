import { FC, createContext, useMemo, useContext, useCallback } from "react"

import useLocalStorage from 'Hooks/useLocalStorage'

type baseFunctions = {
  login: (token: string) => void
  logout: () => void
}

type notLoggedIn = {
  token: undefined
  isLoggedIn: false
}

type loggedIn = {
  token: string
  isLoggedIn: true
}

export type CurrentUser = baseFunctions & (notLoggedIn | loggedIn)

export const CurrentUserContext = createContext<CurrentUser>({} as CurrentUser)
export const useCurrentUser = () => useContext(CurrentUserContext)

export const CurrentUserProvider: FC = ({
  children,
}) => {
  const [ token, setToken ] = useLocalStorage<string | undefined>('token', undefined)

  const login = useCallback((token: string) => setToken(token), [setToken])
  const logout = useCallback(() => setToken(undefined), [setToken])

  const currentUserValue = useMemo<CurrentUser>(() => ({
      token,
      login,
      logout,
      isLoggedIn: !!token,
    }) as CurrentUser
    , [token, login, logout])

  // if (process.env.NODE_ENV === 'development') console.log("user context.", currentUserValue)

  return (
    <CurrentUserContext.Provider value={currentUserValue}>
      {children}
    </CurrentUserContext.Provider>
  )
}
