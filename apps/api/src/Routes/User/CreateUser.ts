import { DeepPartial } from "typeorm"
import { RequestHandler } from "Routes"

import { MailProvider, Addres } from "@labfaz/mail/src"

import User from "Entities/User"
import UserRepository from "Repository/UserRepository"

interface CreateUserInterface {
  UserRepo: UserRepository,
}

interface IUser {
  name: string
  email: string
  password: string
}

const mailer =  new MailProvider()
const from: Addres = {
  name: "Zipudhe Tech company",
  email: "businessramalho@gmail.com"
}


export const CreateUser: (deps: CreateUserInterface) => RequestHandler<DeepPartial<User>> = ({
  UserRepo,
}: CreateUserInterface) => async (req, res) => {

  const {
    name,
    email,
    password
  } = req.body as IUser


  if (!name || !email || !password) return res.status(400).json({ error: "Incomplete request body" })

  if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') return res.status(400).json({ error: "Invalid request body" })

  const checkUserExists = await UserRepo.findByEmail(email)

  if (checkUserExists) {

    return res.status(401).json({ error: "Email address already exists." })
  }

  const hashedPassword = await UserRepo.generateHash(password)

  const user = UserRepo.create({ name, email, password: hashedPassword })

  await UserRepo.save(user)

  mailer.sendEmail({
    to:{
      name: name,
      email: email
    },
    from: from,
    subject: "Email confirmation",
    html: `
      <div>
        <h1> Hello ${name}, welcome to labfaz </h1>
        <a src='http://localhost:5430/auth/account-verification/${user.id}/somesecretcode'> Confirm Email </a>
      </div>
    `
  })

  return res.status(201).json({ user })
}

export default CreateUser
