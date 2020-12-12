import express from "express"
import { Connection } from "typeorm"

import { Router } from "Routes"
import UserRepository from "Repository/UserRepository"

import CreateSession from "./CreateSession"

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
}

export default UserRouter
