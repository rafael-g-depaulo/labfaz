import { MailProvider, Addres } from "@labfaz/mail";
import { getApiUrl } from "@labfaz/server-conn-info";

import UserRepository from "Repository/UserRepository";
import { UploadFiles } from "Utils/awsConfig";

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
import { removeCircularity } from "Utils/stringifyCircular";

interface CreateUserDeps {
  UserRepo: UserRepository;
}

export const sendConfirmationEmail = (user: User) => {
  const mailer = new MailProvider();
  const from: Addres = {
    name: "LabFaz",
    email: "noreply@labfaz.com.br",
  };

  const link = `${getApiUrl()}/sessions/auth/account-verification/${user.id}`
  const userName = user.artist.displayName
  const text = `Olá ${userName}, você pediu um reset de senha. Para criar uma senha nova, vá em ${link}.`
  const html = `
    <div>
      <h1> Olá ${userName}, Bem Vindo ao Labfaz </h1>
      <a href='${link}'> Confirmar Email </a>
    </div>
  `

  mailer.sendEmail({
    to: {
      name: userName,
      email: user.email,
    },
    from: from,
    subject: "Confirmação de Email - Labfaz",
    html,
    text,
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
  try {
    const curriculum = req.parsedFiles?.curriculum ?? [];
    const profilePicture = req.parsedFiles?.profilePicture ?? [];
    const files = await UploadFiles([...curriculum, ...profilePicture]);

    const artistCurriculum = files.find(
      (file) => file.fieldname === "curriculum"
    )!;
    const artistProfilePicture = files.find(
      (file) => file.fieldname === "profilePicture"
    )!;

    return UserRepo.createUser(
      email,
      password,
      artist,
      artistCurriculum,
      artistProfilePicture
    )
      .then((user) => {
        sendConfirmationEmail(user);
        return user;
      })
      .then((user) => {
        // remove password and send user back
        let { password: _, ...newUser } = user;
        return createdSuccessfully(res, removeCircularity(newUser));
      })
      .catch((err) => databaseError(res, "Error trying to create user.", err));
  } catch {
    return badRequestError(
      res,
      "Error trying to create curriculum or profilePicture"
    );
  }
};

export default CreateUser;
