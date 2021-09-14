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

type notLoggedIn = {
  setToken: (t: string) => void
  token: undefined
  isLoggedIn: false
}

type loggedIn = {
  setToken: (t: string) => void
  token: string
  isLoggedIn: true
}
export type CurrentUserToken = notLoggedIn | loggedIn

export const CurrentUserTokenContext = createContext<CurrentUserToken>({} as CurrentUserToken)
export const useCurrentUserToken = () => useContext(CurrentUserTokenContext)

export const CurrentUserProvider: FC = ({
  children,
}) => {
  const [ token, setToken ] = useLocalStorage<string | undefined>('token', undefined)

  const currentUserValue = useMemo<CurrentUserToken>(() => ({
    token,
    setToken,
    isLoggedIn: !!token,
  } as CurrentUserToken), [token, setToken])

  if (process.env.NODE_ENV === 'development') console.log("user context.", currentUserValue)

  return (
    <CurrentUserTokenContext.Provider value={currentUserValue}>
      {children}
    </CurrentUserTokenContext.Provider>
  )
}
