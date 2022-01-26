import express from "express"
import { Connection } from "typeorm"
import { Router } from "Routes"

import UserRepository from "Repository/UserRepository"

import { FileType, parseFiles } from "Middlewares/parseFiles"
import ensureAuthenticated from "Middlewares/ensureAuthenticated"

import ShowUser from "./ShowUser"
import UpdateUser from "./UpdateUser"
import SearchUsers from "./SearchUsers"
import { CreateUser } from "./CreateUser"
import ShowCurrentUser from "./ShowCurrentUser"
import ResendEmail from "./ResendEmail"
import ParseBody from "Middlewares/parseBody"
import { registerUserSchema, updateUserSchema } from "@labfaz/entities"

type UserDeps = {
  conn: Connection
  UserRepo?: UserRepository
}

const UserRouter: Router<UserDeps> = (deps, options) => {
  const { conn, UserRepo = conn.getCustomRepository(UserRepository) } = deps

  return express
    .Router(options)
    .post(
      "/create",
      parseFiles([
        { fieldName: "profilePicture", type: FileType.image, max: 1, min: 1, maxSize: 15 * 1024 * 1024 },
        { fieldName: "curriculum", type: FileType.pdf , max: 1, min: 0, maxSize: 20 * 1024 * 1024 },
      ]),
      ParseBody(registerUserSchema, "user_info"),
      CreateUser({ UserRepo })
    )
    .put(
      "/update",
      parseFiles([
        { fieldName: "profilePicture", type: FileType.image, max: 1, min: 0, maxSize: 15 * 1024 * 1024 },
        { fieldName: "curriculum", type: FileType.pdf , max: 1, min: 0, maxSize: 20 * 1024 * 1024 },
      ]),
      ensureAuthenticated,
      ParseBody(updateUserSchema, "user_info"),
      UpdateUser({ UserRepo })
    )
    .get("/search", SearchUsers({ UserRepo }))
    .get("/me", ensureAuthenticated, ShowCurrentUser({ UserRepo }))
    .get("/:id", ShowUser({ UserRepo }))
    .post("/confirm-mail", ResendEmail({ UserRepo }))
}

export default UserRouter
