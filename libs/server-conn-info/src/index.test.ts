import { getApiPort, getApiUrl, defaultApiUrl, defaultStrapiHost, getStrapiPort, getStrapiUrl } from "."

// reset test env inbetween tests
const resetTestEnv : () => NodeJS.ProcessEnv = () => {
  
  // make copy of old env
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules() // most important - it clears the cache
    process.env = { ...OLD_ENV } // make a copy
  })

  afterAll(() => {
    process.env = OLD_ENV // restore old env
  })

  return OLD_ENV
}

describe('server-conn-info', () => {
  resetTestEnv()
  
  describe('api port', () => {
    
    test('works by default', () => {
      process.env.PORT = ""
      expect(getApiPort()).toBe(5000)

      delete process.env.PORT
      expect(getApiPort()).toBe(5000)

    })

    test('works with PORT env var', () => {
      process.env.PORT = "1234"
      expect(getApiPort()).toBe(1234)
    })

    test('throws if PORT env var is present but not a number', () => {
      process.env.PORT = "123 !"
      expect(getApiPort).toThrowError("PORT environment variable present, but not a number")
    })

  })

  describe('api url', () => {

    test('works on production with API_URL emv var (and REACT_APP_*)', () => {
      process.env.NODE_ENV = "production"

      process.env.API_URL = "https://www.google.com/"
      delete process.env.REACT_APP_API_URL

      expect(getApiUrl()).toBe(process.env.API_URL)

      delete process.env.API_URL
      process.env.REACT_APP_API_URL = "https://www.google.com/"

      expect(getApiUrl()).toBe(process.env.REACT_APP_API_URL)
    })
    
    test('works on production withouth env vars', () => {
      process.env.NODE_ENV = "production"

      delete process.env.REACT_APP_API_URL
      delete process.env.API_URL

      expect(getApiUrl()).toBe(defaultApiUrl)
    })

    test('works on dev mode', () => {
      process.env.NODE_ENV = "develop"

      const port = getApiPort()

      expect(getApiUrl()).toBe(`http://0.0.0.0:${port}`)
    })
  })

  describe('strapi url', () => {

    test('works on production with STRAPI_URL emv var (and REACT_APP_*)', () => {
      process.env.NODE_ENV = "production"

      process.env.STRAPI_URL = "https://www.google.com/"
      delete process.env.REACT_APP_STRAPI_URL

      expect(getStrapiUrl()).toBe(process.env.STRAPI_URL)

      delete process.env.STRAPI_URL
      process.env.REACT_APP_STRAPI_URL = "https://www.google.com/"

      expect(getStrapiUrl()).toBe(process.env.REACT_APP_STRAPI_URL)
    })
    
    test('works on production withouth env vars', () => {
      process.env.NODE_ENV = "production"

      delete process.env.REACT_APP_STRAPI_URL
      delete process.env.STRAPI_URL

      expect(getStrapiUrl()).toBe(defaultStrapiHost)
    })

    test('works on dev mode', () => {
      process.env.NODE_ENV = "develop"
      const port = getStrapiPort()

      expect(getStrapiUrl()).toBe(`http://0.0.0.0:${port}`)
    })
  })

})
