import express from "express";
import { Connection } from "typeorm";

import { Router } from "Routes";
import UserRepository from "Repository/UserRepository";
import ensureAuthenticated from "Middlewares/ensureAuthenticated";

import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import GetAllUser from "./GetAllUser";
import ShowUser from "./ShowUser";

type UserDeps = {
  conn: Connection;
  UserRepo?: UserRepository;
};

const UserRouter: Router<UserDeps> = (deps, options) => {
  const { conn, UserRepo = conn.getCustomRepository(UserRepository) } = deps;

  return express
    .Router(options)
    .get("/", GetAllUser({ UserRepo }))
    .get("/:id", ensureAuthenticated, ShowUser({ UserRepo }))
    .post("/", CreateUser({ UserRepo }))
    .put("/", ensureAuthenticated, UpdateUser({ UserRepo }));
};

export default UserRouter;
