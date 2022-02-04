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

const SessionRouter: Router<UserDeps> = (deps, options) => {
  const { conn, UserRepo = conn.getCustomRepository(UserRepository) } = deps;

  return express
    .Router(options)
    // i'm pretty sure the frontend is using get when it should be using post, but i don't have
    // the time to check and fix it correctly, so this bad code duplication goes here instead
    .post("/ask-reset", AskReset({ UserRepo }))
    .get("/ask-reset", AskReset({ UserRepo }))
    .post("/reset-password", ResetPassword({ UserRepo }))
    .post("/create", CreateSession({ UserRepo }))
    .post(
      "/auth/account-verification/:userId",
      EmailConfirmation({ UserRepo })
    );
}

export default SessionRouter;
