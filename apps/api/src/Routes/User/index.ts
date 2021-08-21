import express from "express";
import { Connection } from "typeorm";

import { Router } from "Routes";
import UserRepository from "Repository/UserRepository";
import ensureAuthenticated from "Middlewares/ensureAuthenticated";

import GetAllUsers from "./GetAllUser";
import { CreateUser } from "./CreateUser";
import ShowUser from "./ShowUser";
import UpdateUser from "./UpdateUser";
import { ParseUser } from "./ParseUser";

import MulterMiddleware from "Middlewares/upload";
import { getReqFiles, UploadFiles } from "Utils/awsConfig";

type UserDeps = {
  conn: Connection;
  UserRepo?: UserRepository;
};

const UserRouter: Router<UserDeps> = (deps, options) => {
  const { conn, UserRepo = conn.getCustomRepository(UserRepository) } = deps;

  return express
    .Router(options)
    .get("/", GetAllUsers({ UserRepo }))
    .get("/:id", ensureAuthenticated, ShowUser({ UserRepo }))
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
      MulterMiddleware.fields([
        { name: "profilePicture", maxCount: 1 },
        { name: "curriculum", maxCount: 1 },
      ]),
      (req, res) => {
        UploadFiles(getReqFiles(req))
          .then(files => res.json({ message: "here's your files, sir", files }))
          .catch(errors => res.status(500).json({ errors }))
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
    );
};

export default UserRouter;
