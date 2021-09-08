import React, { FC, createContext, useMemo, useContext } from "react"

import useLocalStorage from 'Hooks/useLocalStorage'

export interface User {
  id: string
  email: string
  isVerified: boolean
  banned: boolean
  active: boolean
  updated_at: Date
  created_at: Date
}

export interface CurrentUser {
  user?: User
  setUser: (u: User) => void
  token?: string
  setToken: (t: string) => void
  isLoggedIn: boolean

}

export const CurrentUserContext = createContext<CurrentUser>({} as CurrentUser)
export const useCurrentUser = () => useContext(CurrentUserContext)

export const CurrentUserProvider: FC = ({
  children,
}) => {
  const [ user, setUser ] = useLocalStorage<User | undefined>('user', undefined)
  const [ token, setToken ] = useLocalStorage<string | undefined>('token', undefined)

  const currentUserValue = useMemo<CurrentUser>(() => ({
    user,
    setUser,
    token,
    setToken,
    isLoggedIn: !!token,
  }), [user, setUser, token, setToken])

  console.log("user context.", token, user, "cuv", currentUserValue)
  return (
    <CurrentUserContext.Provider value={currentUserValue}>
      {children}
    </CurrentUserContext.Provider>
  )
}
