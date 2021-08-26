import express, { Response } from "express"
import { Connection } from "typeorm"
import { Router } from "Routes"

import { UploadFiles } from "Utils/awsConfig"
import { Req } from "Utils/request"

import UserRepository from "Repository/UserRepository"

import { FileType, ParsedFiles, parseFiles } from "Middlewares/parseFiles"
import ensureAuthenticated from "Middlewares/ensureAuthenticated"
import MulterMiddleware from "Middlewares/upload"

import ShowUser from "./ShowUser"
import UpdateUser from "./UpdateUser"
import GetAllUsers from "./GetAllUser"
import { ParseUser } from "./ParseUser"
import { CreateUser } from "./CreateUser"
import ShowCurrentUser from "./ShowCurrentUser"


type UserDeps = {
  conn: Connection;
  UserRepo?: UserRepository;
};

const UserRouter: Router<UserDeps> = (deps, options) => {
  const { conn, UserRepo = conn.getCustomRepository(UserRepository) } = deps;

  return express
    .Router(options)
    .post(
      "/create",
      MulterMiddleware.fields([
        { name: "profilePicture", maxCount: 1 },
        { name: "curriculum", maxCount: 1 },
      ]),
      ParseUser,
      CreateUser({ UserRepo })
    )
    .post(
      "/upload_teste",
      parseFiles([
        { fieldName: "profilePicture", type: FileType.image, max: 1, min: 1, maxSize: 100 * 1024 },
        { fieldName: "curriculum", type: FileType.pdf , max: 1, min: 0, maxSize: 100 * 1024 },
      ]),
      (req: Req<{}, ParsedFiles<"profilePicture" | "curriculum">>, res: Response) => {
        const curriculum = req.parsedFiles?.curriculum ?? []
        const profilePicture = req.parsedFiles?.profilePicture ?? []
        
        return UploadFiles([...curriculum, ...profilePicture ])
          .then(files => res.json({ message: "here's your files, sir", files }))
          .catch(errors => res.status(500).json(errors))
      }
    )
    .put(
      "/update",
      MulterMiddleware.fields([
        { name: "profilePicture", maxCount: 1 },
        { name: "curriculum", maxCount: 1 },
      ]),
      ensureAuthenticated,
      UpdateUser({ UserRepo })
    )
    .get("/me", ensureAuthenticated, ShowCurrentUser({ UserRepo }))
    .get("/:id", ensureAuthenticated, ShowUser({ UserRepo }))
    .get("/", GetAllUsers({ UserRepo }))
};

export default UserRouter;
