import { resetTestEnv } from "Utils/resetTestEnv"
import { setupAllowedOrigins, CorsCallback, originChecker } from "./cors"

describe('Middleware cors', () => {

  // resets process.env inbetween tests
  resetTestEnv()

  describe('setupAllowedOrigins', () => {

    it('correctly extracts the origins from CORS_REGEX', () => {
      process.env.CORS_REGEX = `teste\\.herokuapp\\.com`
      process.env.CORS_REGEX_FLAGS = "ig"
      const origins = setupAllowedOrigins()
      
      expect(origins).toContainEqual(/teste\.herokuapp\.com/ig)
    })

    it('adds localhost as an allowed origin in non-production env', () => {
      process.env.NODE_ENV = "development"
      expect(setupAllowedOrigins()).toContainEqual(/localhost/)
    })

    it('doesn\'t accept localhost as a valid origin in production env', () => {
      process.env.NODE_ENV = "production"
      expect(setupAllowedOrigins()).not.toContainEqual(/localhost/)
    })
  })

  describe('originChecker', () => {

    
    it('accepts requests without origin', () => {

      // mock callback
      const mockCallback = jest.fn()

      // construct origin checker with no origins
      const checker = originChecker([])

      // check empty origin
      checker(undefined, mockCallback)

      // check that mockCallback was called and origin was allowed
      expect(mockCallback).toBeCalledWith(null, true)
    })

    it('accepts requests with an origin that matches CORS_REGEX', () => {

      // setup request origin
      const origin = `https://starter-project-client-dev.herokuapp.com`
      process.env.CORS_REGEX = `starter-project-client-dev\\.herokuapp\\.com`
      process.env.CORS_REGEX_FLAGS = "ig"

      // setup allowed origins
      const origins = setupAllowedOrigins()

      // mock callback function
      const mockCallback = jest.fn((() => {}) as CorsCallback)

      // construct origin checker with above origins
      const checker = originChecker(origins)

      // check if origin is allowed
      checker(origin, mockCallback)

      // expect cors to be allowed
      expect(mockCallback).toBeCalledWith(null, true)
    })
  })
})