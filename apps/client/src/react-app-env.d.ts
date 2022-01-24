/// <reference types="react-scripts" />

type flagType = 'true' | 'false' | ''

declare namespace NodeJS {
  interface ProcessEnv {
    // node env
    NODE_ENV: 'development' | 'production' | 'test',
    
    // url of APIs used
    REACT_APP_STRAPI_URL?: string
    REACT_APP_API_URL?: string

    // feature flags
      // routes
      REACT_APP_SHOW_ROUTES: flagType,
      // tools
      REACT_APP_SHOW_RQUERY_DEVTOOLS: flagType

  }
}
