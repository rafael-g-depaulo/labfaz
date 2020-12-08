/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    // node env
    NODE_ENV: 'development' | 'production' | 'test',

    // feature flags
    REACT_APP_SHOW_ROUTES: 'true' | 'false' | '',

    // url of APIs used
    REACT_APP_STRAPI_URL: string
    REACT_APP_API_URL: string
  }
}
