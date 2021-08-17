import express from "express";
import { Connection } from "typeorm";

import { Router } from "Routes";
import UserRepository from "Repository/UserRepository";

import CreateSession from "./CreateSession";
import EmailConfirmation from "./EmailConfirmation";
import AskReset from "./AskReset";
import ResetPassword from "./ResetPassword";

type UserDeps = {
  conn: Connection;
  UserRepo?: UserRepository;
};

const UserRouter: Router<UserDeps> = (deps, options) => {
  const { conn, UserRepo = conn.getCustomRepository(UserRepository) } = deps;

  return express
    .Router(options)
    .get("/ask-reset", AskReset({ UserRepo }))
    .post("/reset-password", ResetPassword({ UserRepo }))
    .post("/", CreateSession({ UserRepo }))
    .post(
      "/auth/account-verification/:userId",
      EmailConfirmation({ UserRepo })
    );
}

export default UserRouter;
