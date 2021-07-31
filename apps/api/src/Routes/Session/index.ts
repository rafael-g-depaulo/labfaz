import express from "express";
import { Connection } from "typeorm";

import { Router } from "Routes";
import UserRepository from "Repository/UserRepository";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 040d905 (✨ Add: Reset Password with token)
import CreateSession from "./CreateSession";
import EmailConfirmation from "./EmailConfirmation";
import AskReset from "./AskReset";
import ResetPassword from "./ResetPassword";
<<<<<<< HEAD
=======
import CreateSession from "./CreateSession"
import EmailConfirmation from "./EmailConfirmation"
>>>>>>> 4e66f8a (✨ Add email confimation logic)
=======
>>>>>>> 040d905 (✨ Add: Reset Password with token)

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 040d905 (✨ Add: Reset Password with token)
    .post(
      "/auth/account-verification/:userId",
      EmailConfirmation({ UserRepo })
    );
};
<<<<<<< HEAD
=======
    .post("/auth/account-verification/:userId/:userToken", EmailConfirmation({ UserRepo }))
=======
    .post("/auth/account-verification/:userId", EmailConfirmation({ UserRepo }))
>>>>>>> 2b5b086 (✨ Feature: Mailer and changes in the backend done)
  }
>>>>>>> 4e66f8a (✨ Add email confimation logic)
=======
>>>>>>> 040d905 (✨ Add: Reset Password with token)

export default UserRouter;
