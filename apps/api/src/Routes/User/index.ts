import express from "express";
import { Connection } from "typeorm";

import { Router } from "Routes";
import UserRepository from "Repository/UserRepository";
import ensureAuthenticated from "Middlewares/ensureAuthenticated";

<<<<<<< HEAD
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import GetAllUser from "./GetAllUser";
import ShowUser from "./ShowUser";
=======
import CreateUser from "./CreateUser"
import UpdateUser from "./UpdateUser"
<<<<<<< HEAD
import { LogInUser } from "./logInUser"
>>>>>>> 8f032a4 (✨ Create login user logi with email sender)
=======
>>>>>>> a7a7f88 (🔥 ♻️ Remove unecessary login and update session)

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
<<<<<<< HEAD
    .put("/", ensureAuthenticated, UpdateUser({ UserRepo }));
};
=======
    .put("/", ensureAuthenticated, UpdateUser({ UserRepo }))
}
>>>>>>> 8f032a4 (✨ Create login user logi with email sender)

export default UserRouter;
