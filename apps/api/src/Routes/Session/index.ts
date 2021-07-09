import express from "express";
import { Connection } from "typeorm";

import { Router } from "Routes";
import UserRepository from "Repository/UserRepository";

<<<<<<< HEAD
import CreateSession from "./CreateSession";
import EmailConfirmation from "./EmailConfirmation";
import AskReset from "./AskReset";
import ResetPassword from "./ResetPassword";
=======
import CreateSession from "./CreateSession"
import EmailConfirmation from "./EmailConfirmation"
>>>>>>> 4e66f8a (✨ Add email confimation logic)

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
<<<<<<< HEAD
    .post(
      "/auth/account-verification/:userId",
      EmailConfirmation({ UserRepo })
    );
};
=======
    .post("/auth/account-verification/:userId/:userToken", EmailConfirmation({ UserRepo }))
  }
>>>>>>> 4e66f8a (✨ Add email confimation logic)

export default UserRouter;
