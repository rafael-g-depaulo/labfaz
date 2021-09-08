import React, { FC, createContext, useState, useMemo, useContext } from "react"
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
  storedUser?: User,
  setStoredUser:  (p: string, u: User) => void
  storedToken?: string,
  setStoredToken:  (p: string, u: string) => void

}

export const CurrentUserContext = createContext<CurrentUser>({} as CurrentUser)
export const useCurrentUser = () => useContext(CurrentUserContext)

export const CurrentUserProvider: FC = ({
  children,
}) => {
  const [ user, setUser] = useState<User | undefined>(undefined)
  const [ token, setToken] = useState<string | undefined>(undefined)
  const [storedUser, setStoredUser] = useLocalStorage('user', user)
  const [storedToken, setStoredToken] = useLocalStorage('token', token)

  const currentUserValue = useMemo<CurrentUser>(() => ({
    user,
    setUser,
    token,
    setToken,
    isLoggedIn: !!token,
    storedUser,
    setStoredUser,
    storedToken,
    setStoredToken
  }), [user, setUser, token, setToken])

  console.log("user context.", token, user, "cuv", currentUserValue)
  return (
    <CurrentUserContext.Provider value={currentUserValue}>
      {children}
    </CurrentUserContext.Provider>
  )
}
