export enum Roles {
  NON_LOGGED_USER = 'non-logged-user',
  LOGGED_USER = 'logged-user',
}

export enum Resources {
  ACCOUNT = 'account'
}

type Action = 'create' | 'read' | 'update' | 'delete'
type Subject = 'any' | 'own'
export type ResourceActionStr = `${Action}:${Subject}`

export type GrantConfig = {
  [role in Roles]: {
    [resource in Resources]: {
      [action in ResourceActionStr]?: string[]
    }
  }
}
