import { MailProvider, Addres } from "@labfaz/mail";
import { getApiUrl } from "@labfaz/server-conn-info";

import UserRepository from "Repository/UserRepository";
import { UploadFiles } from "Utils/awsConfig"

import {
  createdSuccessfully,
  badRequestError,
  databaseError,
} from "Utils/endpointReturns";
import { RouteHandler } from "Utils/routeHandler";
import { Req } from "Utils/request";

import { ParsedUser } from "./ParseUser";
import { ParsedFiles } from "Middlewares/parseFiles";
import User from "Entities/User";

interface CreateUserDeps {
  UserRepo: UserRepository;
}

export const sendConfirmationEmail = (user: User) => {
  const mailer = new MailProvider();
  const from: Addres = {
    name: "LabFaz",
    email: "noreply@labfaz.com.br",
  };

  mailer.sendEmail({
    to: {
      name: user.artist.name,
      email: user.email,
    },
    from: from,
    subject: "Confirmação de Email - Labfaz",
    html: `
      <div>
        <h1> Olá ${user.artist.name}, Bem Vindo ao Labfaz </h1>
        <a href='${getApiUrl()}/sessions/auth/account-verification/${
      user.id
    }'> Confirmar Email </a>
      </div>
    `,
  });
};

export const CreateUser: (
  deps: CreateUserDeps
) => RouteHandler<
  Req<{}, ParsedUser & ParsedFiles<"profilePicture" | "curriculum">>
> = ({ UserRepo }: CreateUserDeps) => async (req, res) => {
  const { email, password, artist } = req.user_info! ?? {};

  const checkUserExists = await UserRepo.findByEmail(email);
  if (!!checkUserExists)
    return badRequestError(res, "Email address already exists.");
  try{
    const curriculum = req.parsedFiles?.curriculum ?? [];
    const profilePicture = req.parsedFiles?.profilePicture ?? [];

    const files = await UploadFiles([...curriculum, ...profilePicture ]);

    const artistCurriculum = files.find((file) => file.fieldname === "curriculum");
    const artistProfilePicture = files.find((file) => file.fieldname === "profilePicture")
      
  
  // TODO: Fix user creation
  // ...and user creation should happen inside userRepo.createUser, not here
  // ...and we should change the function's type to include "artist"


  return (
    UserRepo.createUser(email, password, artist, artistCurriculum, artistProfilePicture)
      // .then(user => { sendConfirmationEmail(user); return user })
      .then((user) => {
        // remove password and id and send user back
        //? not removing id here for testing
        let { password: _, ...newUser } = user;
        return createdSuccessfully(res, newUser);
      })
      .catch(() => databaseError(res, "Error trying to create user."))
  );
  }catch(e){
    return badRequestError(res,"Error trying to create curriculum or profilePicture")
  }
};

export default CreateUser;
