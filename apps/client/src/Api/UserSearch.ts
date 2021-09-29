import { api, ErrorObject, SuccessObject } from "Api"
import { GenderSpecific, User } from "Context/LoggedUserToken"
import { useEffect } from "react"
import { useQuery } from "react-query"
import { getUserName } from "Utils/userUtils"

export interface UsersList {
  users: User[]
}

export const fetchUsersList = () => api
  .get<SuccessObject<UsersList>>(`/user/search`)
  .then(({ data }) => data.data)

export const useUsersList = () => useQuery<UsersList, ErrorObject>(`/users/list`, fetchUsersList, { enabled: false })

export const useUsersListOnce = () => {
  const usersList = useUsersList()

  // make only 1 fetch per visit, as this is a heavy one
  useEffect(() => {
    if (!usersList.data) usersList.refetch()
  }, [usersList, usersList.refetch, usersList.data])

  return usersList
}

export interface UserSearchParams {
  nameOrProfession: string
  city: string
  area: string
  nonMenOnly: boolean
  LBTQOnly: boolean
  drtOnly: boolean
  cpnjOnly: boolean
  ceacOnly: boolean
  meiOnly: boolean
  // nrOnly: boolean
  showNothing?: boolean
}

export type UserSearchResults =
  {
    users: undefined
    isLoading: true
    error: undefined
  } | {
    users: undefined
    isLoading: false
    error: ErrorObject
  } | {
    users: User[]
    isLoading: false
    error: undefined
  }

export const useUserSearch = (params: UserSearchParams): UserSearchResults => {
  // get users
  const { data, error, isLoading } = useUsersListOnce()
  if (params.showNothing) return { isLoading: false, users: [], error: undefined }
  
  // pass errors forward, if they exist
  if (error) return { isLoading: false, error: error!, users: undefined }

  // if loading, pass it forward
  if (isLoading || !data) return { isLoading: true, users: undefined, error: undefined }
  
  // prepare data
  const users = data!.users
    // remove all users that don't fit the criteria
    .filter(filterUser(params))
    // sort the ones left
    .sort(sortUsers)

  return { isLoading: false, users, error: undefined }
}

const isPrefiroNao = (str: string) => /prefiro n/i.test(str)

const filterUser = ({
  LBTQOnly,
  cpnjOnly,
  drtOnly,
  ceacOnly,
  meiOnly,
  nonMenOnly,
  // nrOnly,
  area,
  city,
  nameOrProfession,
}: UserSearchParams) => (user: User): boolean => {

  // if a *_filer value is true, the user passes the filter
  const LGBTQ_filter      = !LBTQOnly   || isLGBTQ(user)
  const nonMenOnly_filter = !nonMenOnly || isMale(user)
  const cpnj_filter       = !cpnjOnly   || isCpnj(user)
  const drt_filter        = !drtOnly    || isDrt(user)
  const ceact_filter      = !ceacOnly   || isCeac(user)
  const mei_filter        = !meiOnly    || isMei(user)
  // const nr_filter = !nrOnly || isNr(user)

  const area_filter = area === "" || isInArea(user, area)
  const city_filter = city === "" || isInCity(user, city)
  const nameOrProfession_filter = nameOrProfession === "" || hasNameOrProfession(user, nameOrProfession)

  return (
    LGBTQ_filter && nonMenOnly_filter &&
    cpnj_filter  && drt_filter &&
    ceact_filter && mei_filter &&
    area_filter  && city_filter &&
    nameOrProfession_filter
  )
}

// reminder:
//   - if return > 0, b is before a
//   - if return < 0, a is before b
const sortUsers = (userA: User, userB: User): number => {
  // check if one of the users is verified
  if (userA.isVerified && !userB.isVerified) return -1
  if (userB.isVerified && !userA.isVerified) return 1

  // check if one of the users has a curriculum
  if (hasCurriculum(userA) && !hasCurriculum(userB)) return -1
  if (hasCurriculum(userB) && !hasCurriculum(userA)) return 1

  // if user has more contact information
  if (socialAmmount(userA) > socialAmmount(userB)) return -1
  if (socialAmmount(userB) > socialAmmount(userA)) return 1

  // else, return alfabetic order by name
  const aName = getUserName(userA)
  const bName = getUserName(userB)
  return aName.toLowerCase().localeCompare(bName.toLowerCase());
}

// utility functions for filter
const isLGBTQ = (user: User) => 
  !(user.artist.gender_specifics === GenderSpecific.CIS || user.artist.gender_specifics === GenderSpecific.NONE) ||
  !(user.artist.sexual_orientation === "heterosexual" || isPrefiroNao(user.artist.sexual_orientation))
const isMale = (user: User) => !(user.artist.gender === "masculino" || isPrefiroNao(user.artist.gender))
const isCpnj = (user: User) => user.artist?.technical?.is_cnpj
const isDrt = (user: User) => user.artist?.technical?.is_drt
const isCeac = (user: User) => user.artist?.technical?.is_ceac
// const isNrt = (user: User) => user.artist?.technical?.??????
const isMei = (user: User) => /mei/i.test(user.artist?.technical?.cnpj_type)

const compareStrings = (real: string, filterStr: string) => {
  const processedRead = real.trim().toLocaleLowerCase()
  const processedFilter = filterStr.trim().toLocaleLowerCase()
  return processedRead.includes(processedFilter)
}
const isInArea = (user: User, area: string) => compareStrings(user.artist?.technical?.area[0]?.name, area)
const isInCity = (user: User, city: string) => compareStrings(user.artist.address.city, city)
const hasNameOrProfession = (user: User, nameOrProfession: string) =>
  compareStrings(getUserName(user), nameOrProfession) ||
  compareStrings(user.artist.artistic_name, nameOrProfession) ||
  compareStrings(user.artist.technical.profession, nameOrProfession)

const hasCurriculum = (user: User) => !!user.artist.curriculum && user.artist.curriculum !== ""
const socialAmmount = (user: User) => Object.keys(user.artist.contact).filter(contact => !!contact && contact !== "").length
