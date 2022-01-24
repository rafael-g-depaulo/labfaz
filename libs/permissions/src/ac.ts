import { AccessControl } from 'accesscontrol'
import { GrantConfig, Roles } from './types'

export const acConfig: GrantConfig = {
  [Roles.NON_LOGGED_USER]: {
    account: {
      "create:own": ['*']
    }
  },
  [Roles.LOGGED_USER]: {
    account: {
      "delete:own": ['*']
    }
  },
}

export const getAc = () => {
  const ac = new AccessControl(acConfig)
  ac.lock()
  
  return ac
}

const localAc = getAc()

export const can = (role: Roles) => localAc.can(role)

export default getAc
