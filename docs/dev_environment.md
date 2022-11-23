# How to run

## Comments

Make sure to run node v12.x, and yarn v1.x

## Initial setup (once after clone)

Add a .env file to apps/api, containing (substitute necessary info):

```bash
# node environment
# JWT secret for user auth
JWT_SECRET=secret_here

# cors config
CORS_REGEX=localhost(?:\:\d{4})?$
CORS_REGEX_FLAGS=

### typeorm config
DB_CLIENT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=DB_NAME_HERE
DB_USER=DB_USER_HERE
DB_PASS=INSERT_PASSWORD_HERE
# If you get a "Error: The server does not support SSL connections" error, uncomment the next line
# DB_SSL=false

# wether the aws shortcircuit should be used (pretend to upload but don't really)
USE_AWS=false

AWS_ACCESS_KEY_ID=KEY_HERE
AWS_ACCESS_SECRET=SECRET_HERE
AWS_REGION=sa-east-1
AWS_BUCKET=AWS_BUCKET_HERE

# Nodemailer config
HOST=gmail
EMAIL=youremail@gmail.com
APPPASS=gmailgeneratedpass

# Admin credentials
ADMIN_EMAIL=mail@mail.com
ADMIN_PASSWORD=123456
COOKIE_SECRET=strongsecret
COOKIE_PASSWORD=strongpassword
```

Add a .env file to apps/strapi, containing (substitute necessary info):

```bash
# DB env vars
DB_HOST=localhost
DB_PORT=5432
DB_NAME=DB_NAME_HERE
DB_USER=DB_USER_HERE
DB_PASS=INSERT_PASSWORD_HERE

# JWT secret
JWT_SECRET=ENTER_JWT_SECRET_HERE

# AWS setup
AWS_ACCESS_KEY_ID=ENTER_ACCESS_KEY_ID_HERE
AWS_ACCESS_SECRET=ENTER_ACCESS_SECRET_HERE
AWS_REGION=sa-east-1
AWS_BUCKET=ENTER_BUCKET_NAME_HERE

STRAPI_SEED_DB=false
```

## Install deps

`yarn install && yarn build:libs` at project root.

## Run

### Libs (only necessary when editing lib code)

`yarn build:libs:watch` at project root

### Strapi

at project root, run `cd apps/strapi && yarn develop` or `yarn start:dev:strapi`

### Api

at project root, run `yarn start:api`

### Client

at project root, run `yarn start:client`
