import React, { FC, createContext, useState, useMemo } from "react"

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
  loginToken?: string
  setToken: (t: string) => void
}

export const CurrentUserContext = createContext<CurrentUser>({} as CurrentUser)

export const CurrentUserProvider: FC = ({
  children,
}) => {
  const [ user, setUser] = useState<User | undefined>(undefined)
  const [ token, setToken] = useState<string | undefined>(undefined)

  const currentUserValue = useMemo<CurrentUser>(() => ({
    user,
    setUser,
    token,
    setToken,
  }), [user, setUser, token, setToken])

  console.log("user context.", token, user, "cuv", currentUserValue)
  return (
    <CurrentUserContext.Provider value={currentUserValue}>
      {children}
    </CurrentUserContext.Provider>
  )
}
