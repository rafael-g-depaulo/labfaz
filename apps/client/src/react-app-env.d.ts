/// <reference types="react-scripts" />

type flagType = 'true' | 'false' | ''
// type flagType = boolean

declare namespace NodeJS {
  interface ProcessEnv {
    // node env
    NODE_ENV: 'development' | 'production' | 'test',

    // feature flags
    REACT_APP_SHOW_ROUTES: flagType,

    // url of APIs used
    REACT_APP_STRAPI_URL: string
    REACT_APP_API_URL: string
    REACT_APP_SHOW_HOME: string
    REACT_APP_SHOW_BLOG: string
    REACT_APP_SHOW_ABOUT_US: string
  }
}
