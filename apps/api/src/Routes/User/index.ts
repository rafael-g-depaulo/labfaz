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
        const files = [...(req.files["profilePicture"] ?? [])]
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
