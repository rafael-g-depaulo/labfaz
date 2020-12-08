export const resetTestEnv : () => NodeJS.ProcessEnv = () => {
  
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
