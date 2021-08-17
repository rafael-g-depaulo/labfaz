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
    .post("/", ParseUser, CreateUser({ UserRepo }))
    .put("/", ensureAuthenticated, UpdateUser({ UserRepo }));
}

export default UserRouter
