import express from "express";
import { Connection } from "typeorm";

import { Router } from "Routes";
import UserRepository from "Repository/UserRepository";
import ensureAuthenticated from "Middlewares/ensureAuthenticated";

<<<<<<< HEAD
<<<<<<< HEAD
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import GetAllUser from "./GetAllUser";
import ShowUser from "./ShowUser";
=======
import CreateUser from "./CreateUser"
import UpdateUser from "./UpdateUser"
<<<<<<< HEAD
<<<<<<< HEAD
import { LogInUser } from "./logInUser"
>>>>>>> 8f032a4 (✨ Create login user logi with email sender)
=======
>>>>>>> a7a7f88 (🔥 ♻️ Remove unecessary login and update session)
=======
import GetAllUser from "./GetAllUser";
>>>>>>> ce8e28f (🐛 fix: removed bug from update user)
=======
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import GetAllUser from "./GetAllUser";
import ShowUser from "./ShowUser";
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)

type UserDeps = {
  conn: Connection;
  UserRepo?: UserRepository;
};

const UserRouter: Router<UserDeps> = (deps, options) => {
  const { conn, UserRepo = conn.getCustomRepository(UserRepository) } = deps;

<<<<<<< HEAD
<<<<<<< HEAD
  return express
    .Router(options)
    .get("/", GetAllUser({ UserRepo }))
    .get("/:id", ensureAuthenticated, ShowUser({ UserRepo }))
=======
  return express.Router(options)
    .get("/", GetAllUser({ UserRepo }))
>>>>>>> ce8e28f (🐛 fix: removed bug from update user)
    .post("/", CreateUser({ UserRepo }))
<<<<<<< HEAD
    .put("/", ensureAuthenticated, UpdateUser({ UserRepo }));
};
=======
    .put("/", ensureAuthenticated, UpdateUser({ UserRepo }))
}
>>>>>>> 8f032a4 (✨ Create login user logi with email sender)
=======
  return express
    .Router(options)
    .get("/", GetAllUser({ UserRepo }))
    .get("/:id", ShowUser({ UserRepo }))
    .post("/", CreateUser({ UserRepo }))
    .put("/", ensureAuthenticated, UpdateUser({ UserRepo }));
};
>>>>>>> 1d7cec1 (✨ Add: Show of User in the API)

export default UserRouter;
