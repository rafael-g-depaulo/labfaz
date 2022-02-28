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
import rbac from "Middlewares/rbac"
import { Resources } from "@labfaz/permissions"

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
      rbac("create:own", Resources.ACCOUNT),
      parseFiles([
        { fieldName: "profilePicture", type: FileType.image, max: 1, min: 1, maxSize: 15 * 1024 * 1024 },
        { fieldName: "curriculum", type: FileType.pdf , max: 1, min: 0, maxSize: 20 * 1024 * 1024 },
      ]),
      ParseBody(registerUserSchema, "user_info"),
      CreateUser({ UserRepo })
    )
    .put(
      "/update",
      ensureAuthenticated,
      rbac("update:own", Resources.ACCOUNT),
      parseFiles([
        { fieldName: "profilePicture", type: FileType.image, max: 1, min: 0, maxSize: 15 * 1024 * 1024 },
        { fieldName: "curriculum", type: FileType.pdf , max: 1, min: 0, maxSize: 20 * 1024 * 1024 },
      ]),
      ParseBody(updateUserSchema, "user_info"),
      UpdateUser({ UserRepo })
    )
    .get("/search", rbac("read:any", Resources.ACCOUNT), SearchUsers({ UserRepo }))
    .get("/me", ensureAuthenticated, rbac("read:own", Resources.ACCOUNT), ShowCurrentUser({ UserRepo }))
    .get("/:id", rbac("read:any", Resources.ACCOUNT), ShowUser({ UserRepo }))
    .post("/confirm-mail", ResendEmail({ UserRepo }))
}

export default UserRouter
