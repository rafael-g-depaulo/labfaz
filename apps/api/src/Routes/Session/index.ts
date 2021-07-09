import express from "express"
import { Connection } from "typeorm"

import { Router } from "Routes"
import UserRepository from "Repository/UserRepository"

import CreateSession from "./CreateSession"
import EmailConfirmation from "./EmailConfirmation"

type UserDeps = {
  conn: Connection,
  UserRepo?: UserRepository
}

const UserRouter: Router<UserDeps> = (deps, options) => {
  const {
    conn,
    UserRepo = conn.getCustomRepository(UserRepository),
  } = deps

  return express.Router(options)
    .post("/", CreateSession({ UserRepo }))
    .post("/auth/account-verification/:userId/:userToken", EmailConfirmation({ UserRepo }))
  }

export default UserRouter
