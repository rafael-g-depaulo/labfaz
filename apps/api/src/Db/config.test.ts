import { resetTestEnv } from "Utils/resetTestEnv"
import { getDbConnConfig, getTypeOrmConfig } from "./config"

describe('TypeORM config', () => {

  // reset env between tests
  resetTestEnv()

  describe('Db connection', () => {
    
    it('works with DATABASE_URL env var', () => {
      const db_url = "postgres://username:password@host:5432/database"
      process.env.DATABASE_URL = db_url
      const origins = getDbConnConfig()

      expect(origins.url).toEqual(db_url)
      
      expect(getDbConnConfig()).toMatchObject({
        type: "postgres",
        url: "postgres://username:password@host:5432/database",
      })
    })

    it('works with DB_* env vars', () => {
      
      process.env.DB_HOST = "localhost"
      process.env.DB_PORT = "5431"
      process.env.DB_USER = "user"
      process.env.DB_PASS = "PASSWORD_HERE"
      process.env.DB_NAME = "test"

      delete process.env.DATABASE_URL

      expect(getDbConnConfig()).toMatchObject({
        type: "postgres",
        host: "localhost",
        port: 5431,
        username: "user",
        password: "PASSWORD_HERE",
        database: "test",
      })
    })

    it('thows if db env vars not available', () => {
      delete process.env.DB_HOST
      delete process.env.DB_PORT
      delete process.env.DB_USER
      delete process.env.DB_PASS
      delete process.env.DB_NAME
      delete process.env.DATABASE_URL
      
      expect(getDbConnConfig).toThrow("Invalid DB config. Check environment variables")
    })
  })

  describe('Typeorm specific config', () => {
    
    // base for a regex for the location of files in the project
    const fileRegexBase = "^BASE_FOLDER\\/FOLDER_NAME\\/\\*\\*\\/\\*\\.{ts,js}$"
    // base regex for the folders where the files are to be inserted
    const dirRegexBase = "^BASE_FOLDER\\/FOLDER_NAME$"

    it('works for Development env', () => {

      // setup dev env vars
      process.env.NODE_ENV = "development"
      process.env.IS_SERVING_BUNDLE = "false"

      const devFileRegexBase = fileRegexBase.replace("BASE_FOLDER", "src")

      const entitiesRegex     = new RegExp(devFileRegexBase.replace("FOLDER_NAME", "Entities"))
      const migrationsRegex   = new RegExp(devFileRegexBase.replace("FOLDER_NAME", "Migrations"))
      const subscribersRegex  = new RegExp(devFileRegexBase.replace("FOLDER_NAME", "Subscribers"))

      const config = getTypeOrmConfig()

      // test that config matches this project's structure
      expect(config.entities[0]).toMatch(entitiesRegex)
      expect(config.migrations[0]).toMatch(migrationsRegex)
      expect(config.subscribers[0]).toMatch(subscribersRegex)

      // test that the cli dirs are properly setup
      const devFoldersRegexBase = dirRegexBase.replace("BASE_FOLDER", "src")

      const entitiesDirRegex = new RegExp(devFoldersRegexBase.replace("FOLDER_NAME", "Entities"))
      const migrationsDirRegex = new RegExp(devFoldersRegexBase.replace("FOLDER_NAME", "Migrations"))
      const subscribersDirRegex = new RegExp(devFoldersRegexBase.replace("FOLDER_NAME", "Subscribers"))

      // test that config matches this project's structure
      expect(config.cli.entitiesDir).toMatch(entitiesDirRegex)
      expect(config.cli.migrationsDir).toMatch(migrationsDirRegex)
      expect(config.cli.subscribersDir).toMatch(subscribersDirRegex)
    })

    it('works for Production env', () => {
  
      // setup production env vars
      process.env.NODE_ENV = "production"
      process.env.IS_SERVING_BUNDLE = "true"

      const prodFileRegexBase = fileRegexBase.replace("BASE_FOLDER", "dist")

      const entitiesRegex     = new RegExp(prodFileRegexBase.replace("FOLDER_NAME", "Entities"))
      const migrationsRegex   = new RegExp(prodFileRegexBase.replace("FOLDER_NAME", "Migrations"))
      const subscribersRegex  = new RegExp(prodFileRegexBase.replace("FOLDER_NAME", "Subscribers"))

      const config = getTypeOrmConfig()

      // test that config matches this project's structure
      expect(config.entities[0]).toMatch(entitiesRegex)
      expect(config.migrations[0]).toMatch(migrationsRegex)
      expect(config.subscribers[0]).toMatch(subscribersRegex)

      // test that the cli dirs are properly setup
      const prodFoldersRegexBase = dirRegexBase.replace("BASE_FOLDER", "dist")

      const entitiesDirRegex = new RegExp(prodFoldersRegexBase.replace("FOLDER_NAME", "Entities"))
      const migrationsDirRegex = new RegExp(prodFoldersRegexBase.replace("FOLDER_NAME", "Migrations"))
      const subscribersDirRegex = new RegExp(prodFoldersRegexBase.replace("FOLDER_NAME", "Subscribers"))

      // test that config matches this project's structure
      expect(config.cli.entitiesDir).toMatch(entitiesDirRegex)
      expect(config.cli.migrationsDir).toMatch(migrationsDirRegex)
      expect(config.cli.subscribersDir).toMatch(subscribersDirRegex)
    })
  })
})
