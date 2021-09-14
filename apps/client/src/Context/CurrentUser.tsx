import React, { FC, createContext, useMemo, useContext } from "react"

import useLocalStorage from 'Hooks/useLocalStorage'

export interface IAddress {
  cep: string
  city: string
  complement: string
  neighbourhood: string
  number: number
  residency: string
  state: string
}

export interface IContact {
  facebook: string
  instagram: string
  linkedin: string
  tiktok: string
  twitter: string
  whatsapp: string
  youtube: string
}

export interface ITechnicalIdioms {
  name: string
}

export interface ITechnical {
  ceac: string
  cnpj: string
  cnpj_type: string
  drt: string
  is_ceac: boolean
  is_cnpj: boolean
  is_drt: boolean
  name_enterprise: string
  profession: string
  formation: string
  idiom: ITechnicalIdioms[]
  area: ITechnicalArea[]
}

export interface ITechnicalAreaCertificate {
  name: string
}
export interface ITechnicalArea {
  describe: string
  name: string
  started_year: string
  technical_formation: string
  certificate: ITechnicalAreaCertificate[]
}

export interface IArtist {
  name: string
  artistic_name: string
  social_name: string
  show_name: string
  birthday: Date
  photo_url: string
  curriculum: string
  cpf: string
  rg: string
  sexual_orientation: string
  gender: string
  race: string
  gender_specifics: string
  expedition_department: string
  address: IAddress
  contact: IContact
  technical: ITechnical
}
export interface User {
  id: string
  email: string
  isVerified: boolean
  banned: boolean
  active: boolean
  updated_at: Date
  created_at: Date
  artist: IArtist
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

  if (process.env.NODE_ENV === 'development') console.log("user context.", token, user, "cuv", currentUserValue)
  return (
    <CurrentUserContext.Provider value={currentUserValue}>
      {children}
    </CurrentUserContext.Provider>
  )
}
