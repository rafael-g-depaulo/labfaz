import { ConnectionOptions } from "typeorm"
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions"

const getDbFoldersRoot = () => process.env.IS_SERVING_BUNDLE === "true"
  ? `dist`
  : `src`

export const getDbConnConfig: () => PostgresConnectionOptions = () => {
  const baseConfig: { type: "postgres" } = {
    type: "postgres",
  }

  // if DATABASE_URL provided
  if (process.env.DATABASE_URL)
  return {
    ...baseConfig,
    url: process.env.DATABASE_URL,
  }

  // if DB_* provided
  if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASS && process.env.DB_NAME)
  return {
    ...baseConfig,
    host:     process.env.DB_HOST,
    port:     Number(process.env.DB_PORT ?? 5432) || undefined,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  }

  // else, throw
  throw new Error("Invalid DB config. Check environment variables")
}

export const getTypeOrmConfig = () => {
  const dbFoldersRoot = getDbFoldersRoot()

  return {
    synchronize: process.env.IS_SERVING_BUNDLE !== "true" && process.env.NODE_ENV !== "production",
    logging: false,

    migrations: [
      `${dbFoldersRoot}/Migrations/**/*.{ts,js}`,
    ],
    subscribers: [
      `${dbFoldersRoot}/Subscribers/**/*.{ts,js}`,
    ],
    cli: {
      entitiesDir: `${dbFoldersRoot}/Entities`,
      migrationsDir: `${dbFoldersRoot}/Migrations`,
      subscribersDir: `${dbFoldersRoot}/Subscribers`,
    },

    entities: [
      `${dbFoldersRoot}/Entities/**/*.{ts,js}`,
    ],

    entitiesDir: `${dbFoldersRoot}/Entities`,
    migrationsDir: `${dbFoldersRoot}/Migrations`,
    subscribersDir: `${dbFoldersRoot}/Subscribers`,

    migrationsTableName: "migrations",
  }
}

export const getConfig: () => ConnectionOptions = () => ({
  ...getDbConnConfig(),
  ...getTypeOrmConfig(),
})

export default getConfig
