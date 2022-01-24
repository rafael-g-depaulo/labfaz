# Ragan's Starter Project for a web infrastructure full-typescript monorepo with React/Express


# TODO: document this whole thing

# Instalation/Environment Setup

## Node version
If you use nvm, you can just run `nvm use` here on the project's root, and that will install and use the version from .nvmrc

## Api

### Postgres:
  - install it and have the process running
  - add the credentials to api .env

### AWS:
  - add credentials to api .env

## Client

### Cypress:
  - run `sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb` on linux (or check [the oficiel docks](https://docs.cypress.io/guides/getting-started/installing-cypress) otherwise)
  - if on WSL on Windows 10, google how to run linux GUI apps on WSL.

# Tools:

## syncpack
We use syncpack to ensure that packages use the same version of shared dependencies (yup, typescript, jest, etc.). We do this by running ```yarn dlx syncpack fix-mismatches --filter "typescript|yup|jest"```. TODO: Add this as a githook before every commit


# Workflows

## Releasing
When ready for a release, run `yarn workspaces foreach version major|minor|patch -d`, followed by `yarn version apply --all`, or `yarn workspaces foreach version major|minor|patch -i`. the -d (--deferred) flag means that changes only happen after `yarn version apply --all` is run, while the -i (--immediate) flag makes things happen immediately.

Use either "major", "minor" or "patch" to signal what semver change you're making.

`yarn version check -i` should be used instead if you don't plan to update all of the packages.

Also when committing remember to `git tag vX.X.X`.
