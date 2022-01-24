export enum Roles {
  NON_LOGGED_USER = 'non-logged-user',
  LOGGED_USER = 'logged-user',
}

export enum Resources {
  ACCOUNT = 'account'
}

export type ResourceActionStr = `${'create' | 'read' | 'update' | 'delete'}:${'any' | 'own'}`

export type GrantConfig = {
  [role in Roles]: {
    [resource in Resources]: {
      [action in ResourceActionStr]?: string[]
    }
  }
}
